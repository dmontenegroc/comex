/**
 * HarvardGrowthLabBoliviaHero.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Visualización editorial premium: Bolivia como territorio económico-financiero
 * Harvard Growth Lab — Análisis desde el Territorio
 *
 * Estructura de capas (back → front):
 *   1. Retícula financiera (GridFloor)
 *   2. Silueta/superficie de Bolivia (BoliviaTerritory)
 *   3. Heatmap económico zonal (ZoneHeatmap)
 *   4. Barras macro verticales (MacroBars)
 *   5. Cinco pilares — nodos luminosos (PillarNodes)
 *   6. Rutas Bezier de reforma (ReformRoutes)
 *   7. Partículas de capital/energía (CapitalParticles)
 *   8. Anillo de tensión política (TensionRing)
 *   9. Spread de riesgo país — curva background (RiskSpread)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useMemo, useEffect, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// ─── Paleta de color ──────────────────────────────────────────────────────────
const C = {
  bg:        '#050810',
  petroleum: '#0a2535',
  graphite:  '#0d1520',
  cyan:      '#3ab0c8',
  cyanDim:   '#1a5568',
  gold:      '#c8943a',
  goldDim:   '#6b4a1a',
  green:     '#2a8a5a',
  greenDim:  '#0f3a22',
  orange:    '#c8603a',
  white:     '#d8eaf0',
  dim:       '#1e3040',
}

// ─── Cinco pilares del informe ────────────────────────────────────────────────
const PILLARS = [
  { id: 0, label: 'Reservas',     color: '#3ab0c8', pos: [-2.8,  0.3,  0.8], size: 0.13 },
  { id: 1, label: 'Productividad',color: '#2a8a5a', pos: [ 0.0,  0.4,  1.6], size: 0.15 },
  { id: 2, label: 'Energía',      color: '#c8943a', pos: [ 2.4,  0.3,  0.4], size: 0.12 },
  { id: 3, label: 'Comercio',     color: '#c8603a', pos: [ 1.8,  0.2, -1.8], size: 0.11 },
  { id: 4, label: 'Institucional',color: '#7a68b8', pos: [-2.2,  0.2, -1.4], size: 0.11 },
]

// ─── Conexiones entre pilares (par de índices) ────────────────────────────────
const CONNECTIONS = [
  [0, 1], [1, 2], [1, 3], [0, 4], [2, 3], [3, 4],
]

// ─── Indicadores macro para overlay HTML ─────────────────────────────────────
const MACRO = [
  { label: 'Riesgo País', value: '+1 842 pb', cls: 'red'    },
  { label: 'RIN / PIB',   value: '8.4 %',     cls: 'yellow' },
  { label: 'Def. Fiscal', value: '−9.1 %',    cls: 'red'    },
  { label: 'T/C Paral.',  value: '8.9 Bs/$',  cls: 'yellow' },
  { label: 'Crecim.',     value: '+1.8 %',    cls: 'green'  },
]

// ─── Ticker data ──────────────────────────────────────────────────────────────
const TICKER = [
  { label: 'Litio',        val: '+2.4%',  cls: 'up'   },
  { label: 'Gas Nat.',     val: '−18.7%', cls: 'down' },
  { label: 'Zinc',         val: '+0.8%',  cls: 'up'   },
  { label: 'Hidrocarb.',   val: '−31.2%', cls: 'down' },
  { label: 'IDE',          val: '0.6%',   cls: 'flat' },
  { label: 'Exportac.',    val: '−4.1%',  cls: 'down' },
  { label: 'Soya',         val: '+3.2%',  cls: 'up'   },
  { label: 'Reservas BCP', val: '1.7 B$', cls: 'down' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  SILUETA DE BOLIVIA — polígono procedural inspirado en la forma territorial
//  Coordenadas normalizadas al rango ~[-3, 3] en XZ, Y = superficie
// ─────────────────────────────────────────────────────────────────────────────
const BOLIVIA_OUTLINE = [
  // Norte — limite con Brasil (borde superior plano)
  [-2.8,  1.8], [-1.8,  2.1], [-0.6,  2.3], [ 0.6,  2.3],
  [ 1.6,  2.1], [ 2.4,  1.6],
  // Este — limite con Brasil/Paraguay (recorte diagonal)
  [ 3.0,  0.8], [ 3.1, -0.2], [ 2.8, -1.2],
  // Sur — limite con Argentina/Chile
  [ 2.0, -2.2], [ 0.8, -2.6], [-0.4, -2.7],
  // Suroeste — Bolivia sin salida al mar (muesca característica)
  [-1.6, -2.4], [-2.6, -1.6],
  // Oeste — Altiplano, limite con Perú/Chile
  [-3.2, -0.4], [-3.1,  0.6], [-3.0,  1.2], [-2.8,  1.8],
]

// ─────────────────────────────────────────────────────────────────────────────
//  Genera una BufferGeometry de superficie de Bolivia
//  triangulada con fan desde centroide + desplazamiento de terreno suave
// ─────────────────────────────────────────────────────────────────────────────
function buildBoliviaGeometry(pts, elevScale = 0.18) {
  const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length
  const cz = pts.reduce((s, p) => s + p[1], 0) / pts.length

  const positions = []
  const normals   = []
  const uvs       = []

  const n = pts.length
  for (let i = 0; i < n; i++) {
    const [ax, az] = pts[i]
    const [bx, bz] = pts[(i + 1) % n]

    // elevación procedural basada en distancia al centro + ruido suave
    const noiseA = Math.sin(ax * 1.3) * Math.cos(az * 0.9) * elevScale
    const noiseB = Math.sin(bx * 1.3) * Math.cos(bz * 0.9) * elevScale
    const noiseC = Math.sin(cx * 1.3) * Math.cos(cz * 0.9) * elevScale * 0.3

    positions.push(cx, noiseC, cz, ax, noiseA, az, bx, noiseB, bz)
    normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0)
    uvs.push(
      (cx + 4) / 8, (cz + 4) / 8,
      (ax + 4) / 8, (az + 4) / 8,
      (bx + 4) / 8, (bz + 4) / 8,
    )
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals, 3))
  geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs, 2))
  geo.computeVertexNormals()
  return geo
}

// ─────────────────────────────────────────────────────────────────────────────
//  Genera puntos de malla sobre la silueta para el efecto dot-map
// ─────────────────────────────────────────────────────────────────────────────
function pointInPolygon(px, pz, poly) {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i]
    const [xj, zj] = poly[j]
    const intersect =
      zi > pz !== zj > pz &&
      px < ((xj - xi) * (pz - zi)) / (zj - zi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

function buildDotGrid(poly, step = 0.32) {
  const pts = []
  for (let x = -3.4; x <= 3.4; x += step) {
    for (let z = -2.9; z <= 2.5; z += step) {
      if (pointInPolygon(x, z, poly)) {
        pts.push(x, 0.01, z)
      }
    }
  }
  return new Float32Array(pts)
}

// ─────────────────────────────────────────────────────────────────────────────
//  RETÍCULA FINANCIERA — suelo analítico
// ─────────────────────────────────────────────────────────────────────────────
function GridFloor() {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const verts = []
    const size = 10, step = 0.5
    for (let i = -size; i <= size; i += step) {
      verts.push(-size, -0.05, i,  size, -0.05, i)
      verts.push(i, -0.05, -size,  i, -0.05,  size)
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    return g
  }, [])

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color="#0d2030" transparent opacity={0.45} />
    </lineSegments>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  SILUETA DE BOLIVIA — borde + superficie
// ─────────────────────────────────────────────────────────────────────────────
function BoliviaTerritory() {
  const surfGeo  = useMemo(() => buildBoliviaGeometry(BOLIVIA_OUTLINE), [])
  const dotPts   = useMemo(() => buildDotGrid(BOLIVIA_OUTLINE, 0.3), [])
  const dotGeo   = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(dotPts, 3))
    return g
  }, [dotPts])

  // Borde de la silueta
  const borderGeo = useMemo(() => {
    const pts3d = BOLIVIA_OUTLINE.map(([x, z]) => new THREE.Vector3(x, 0.05, z))
    pts3d.push(pts3d[0]) // cerrar
    return new THREE.BufferGeometry().setFromPoints(pts3d)
  }, [])

  return (
    <group>
      {/* Superficie semitransparente */}
      <mesh geometry={surfGeo} rotation={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0a1e2d"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      {/* Borde luminoso */}
      <line geometry={borderGeo}>
        <lineBasicMaterial color="#1a6080" transparent opacity={0.9} linewidth={1} />
      </line>

      {/* Malla de puntos — dot map analítico */}
      <points geometry={dotGeo}>
        <pointsMaterial
          color="#1e5a70"
          size={0.028}
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  HEATMAP ZONAL — discos de color sobre regiones económicas
// ─────────────────────────────────────────────────────────────────────────────
const ZONES = [
  // [x, z, radio, color, opacidad] — Altiplano, eje central, oriente, sur
  [ -2.5, 0.6,  1.1, '#1a4060', 0.45 ],  // Altiplano (petróleo / litio)
  [  0.0, 0.6,  0.9, '#0a3020', 0.40 ],  // Eje central (productividad)
  [  2.0, 0.0,  1.2, '#2a1a08', 0.35 ],  // Oriente (agroindustria/gas)
  [  0.5,-1.8,  0.8, '#301008', 0.30 ],  // Sur (hidrocarburos)
]

function ZoneHeatmap() {
  return (
    <group position={[0, 0.02, 0]}>
      {ZONES.map(([x, z, r, col, op], i) => (
        <mesh key={i} position={[x, 0, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[r, 48]} />
          <meshBasicMaterial color={col} transparent opacity={op} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  BARRAS MACRO — indicadores verticales tipo Bloomberg alrededor del mapa
// ─────────────────────────────────────────────────────────────────────────────
const BAR_DATA = [
  // [x, z, altura, color] — representan indicadores macro
  [ -3.8,  1.4, 0.9, '#c85a3a' ],  // déficit
  [ -3.8,  0.6, 0.4, '#c85a3a' ],
  [ -3.8, -0.2, 1.2, '#c8943a' ],  // tipo de cambio
  [ -3.8, -1.0, 0.6, '#c8943a' ],
  [  3.8,  1.4, 1.4, '#3ab0c8' ],  // exportaciones
  [  3.8,  0.6, 0.7, '#3ab0c8' ],
  [  3.8, -0.2, 1.0, '#2a8a5a' ],  // productividad
  [  3.8, -1.0, 0.3, '#2a8a5a' ],
  [ -1.0,  3.0, 0.8, '#7a68b8' ],  // institucional
  [  0.5,  3.0, 1.1, '#3ab0c8' ],
  [  2.0,  3.0, 0.5, '#c8943a' ],
]

function MacroBars() {
  const meshes = useMemo(() =>
    BAR_DATA.map(([x, z, h, col], i) => ({ x, z, h, col, i }))
  , [])

  return (
    <group>
      {meshes.map(({ x, z, h, col, i }) => (
        <mesh key={i} position={[x, h / 2, z]}>
          <boxGeometry args={[0.06, h, 0.06]} />
          <meshStandardMaterial
            color={col}
            emissive={col}
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}
    </group>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  NODOS DE PILAR — esferas luminosas con pulso
// ─────────────────────────────────────────────────────────────────────────────
function PillarNode({ pillar }) {
  const meshRef  = useRef()
  const haloRef  = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // Pulso de escala
    const pulse = 1 + Math.sin(t * 1.8 + pillar.id * 1.2) * 0.12
    if (meshRef.current)  meshRef.current.scale.setScalar(pulse)
    // Halo expand
    const halo = 1 + Math.sin(t * 1.2 + pillar.id * 0.9) * 0.22
    if (haloRef.current) haloRef.current.scale.setScalar(halo)
  })

  const color = useMemo(() => new THREE.Color(pillar.color), [pillar.color])
  const haloGeo = useMemo(() => new THREE.RingGeometry(pillar.size * 1.6, pillar.size * 2.0, 32), [pillar.size])
  const sphereGeo = useMemo(() => new THREE.SphereGeometry(pillar.size, 20, 20), [pillar.size])

  return (
    <group position={pillar.pos}>
      {/* Núcleo */}
      <mesh ref={meshRef} geometry={sphereGeo}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      {/* Halo orbital */}
      <mesh ref={haloRef} geometry={haloGeo} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color={color} transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
      {/* Punto de luz */}
      <pointLight color={pillar.color} intensity={0.6} distance={2.5} decay={2} />
    </group>
  )
}

function PillarNodes() {
  return (
    <>
      {PILLARS.map(p => <PillarNode key={p.id} pillar={p} />)}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  RUTAS DE REFORMA — curvas Bezier cuadráticas con tensión política
//  Algunas rutas se deforman periódicamente simulando fricción institucional
// ─────────────────────────────────────────────────────────────────────────────
function ReformRoute({ conn, time }) {
  const [ai, bi] = conn
  const a = PILLARS[ai]
  const b = PILLARS[bi]
  const lineRef = useRef()

  // Color basado en el nodo de mayor "tensión" (índice 3 = comercio, 4 = inst.)
  const isTense = ai === 3 || bi === 3 || ai === 4 || bi === 4

  const color = useMemo(
    () => new THREE.Color(isTense ? C.orange : C.cyan),
    [isTense]
  )

  const buildCurve = useCallback((t) => {
    const pA = new THREE.Vector3(...a.pos)
    const pB = new THREE.Vector3(...b.pos)
    // Punto de control central con deformación de tensión
    const mx = (pA.x + pB.x) / 2
    const mz = (pA.z + pB.z) / 2
    const tensionOffset = isTense
      ? Math.sin(t * 0.7) * 0.5
      : Math.sin(t * 0.3) * 0.12
    const ctrl = new THREE.Vector3(mx + tensionOffset, 0.5, mz + tensionOffset * 0.6)
    const curve = new THREE.QuadraticBezierCurve3(pA, ctrl, pB)
    return curve.getPoints(40)
  }, [a, b, isTense])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!lineRef.current) return
    const pts = buildCurve(t)
    lineRef.current.geometry.setFromPoints(pts)
  })

  const initGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setFromPoints(buildCurve(0))
    return g
  }, [buildCurve])

  return (
    <line ref={lineRef} geometry={initGeo}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={isTense ? 0.35 : 0.5}
      />
    </line>
  )
}

function ReformRoutes() {
  return (
    <>
      {CONNECTIONS.map((conn, i) => (
        <ReformRoute key={i} conn={conn} />
      ))}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  PARTÍCULAS DE CAPITAL — viajan por las rutas de reforma
// ─────────────────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 80

function buildParticleSystem() {
  // Cada partícula tiene: ruta asignada, progreso [0,1], velocidad
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    route:    i % CONNECTIONS.length,
    progress: Math.random(),
    speed:    0.04 + Math.random() * 0.06,
  }))
}

function CapitalParticles() {
  const pointsRef = useRef()
  const particles = useMemo(buildParticleSystem, [])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    return g
  }, [])

  const colors = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3)
    particles.forEach(({ route }, i) => {
      const [ai] = CONNECTIONS[route]
      const col = new THREE.Color(PILLARS[ai].color)
      arr[i * 3]     = col.r
      arr[i * 3 + 1] = col.g
      arr[i * 3 + 2] = col.b
    })
    geo.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3))
    return arr
  }, [geo, particles])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const pos = geo.attributes.position.array

    particles.forEach((p, i) => {
      p.progress += p.speed * 0.016
      if (p.progress > 1) p.progress = 0

      const [ai, bi] = CONNECTIONS[p.route]
      const pA = new THREE.Vector3(...PILLARS[ai].pos)
      const pB = new THREE.Vector3(...PILLARS[bi].pos)
      const isTense = ai === 3 || bi === 3 || ai === 4 || bi === 4
      const toff = isTense ? Math.sin(t * 0.7) * 0.5 : Math.sin(t * 0.3) * 0.12
      const ctrl = new THREE.Vector3(
        (pA.x + pB.x) / 2 + toff,
        0.5,
        (pA.z + pB.z) / 2 + toff * 0.6
      )
      const curve = new THREE.QuadraticBezierCurve3(pA, ctrl, pB)
      const pt = curve.getPoint(p.progress)
      pos[i * 3]     = pt.x
      pos[i * 3 + 1] = pt.y
      pos[i * 3 + 2] = pt.z
    })

    geo.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef} geometry={geo}>
      <pointsMaterial
        vertexColors
        size={0.045}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  ANILLO DE TENSIÓN POLÍTICA — ondas de interferencia institucional
// ─────────────────────────────────────────────────────────────────────────────
function TensionRing() {
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  const geo1 = useMemo(() => new THREE.RingGeometry(1.4, 1.46, 64), [])
  const geo2 = useMemo(() => new THREE.RingGeometry(2.0, 2.04, 64), [])
  const geo3 = useMemo(() => new THREE.RingGeometry(2.7, 2.73, 64), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // Ondas de tensión: escala pulsante y opacidad variable
    const s1 = 1 + Math.sin(t * 0.6) * 0.04
    const s2 = 1 + Math.sin(t * 0.6 + 1.0) * 0.04
    const s3 = 1 + Math.sin(t * 0.6 + 2.0) * 0.04
    if (ring1.current) { ring1.current.scale.setScalar(s1); ring1.current.material.opacity = 0.2 + Math.sin(t * 0.8) * 0.08 }
    if (ring2.current) { ring2.current.scale.setScalar(s2); ring2.current.material.opacity = 0.14 + Math.sin(t * 0.8 + 1.0) * 0.06 }
    if (ring3.current) { ring3.current.scale.setScalar(s3); ring3.current.material.opacity = 0.08 + Math.sin(t * 0.8 + 2.0) * 0.04 }
  })

  const mat1 = useMemo(() => new THREE.MeshBasicMaterial({ color: '#c8603a', transparent: true, opacity: 0.2, side: THREE.DoubleSide }), [])
  const mat2 = useMemo(() => new THREE.MeshBasicMaterial({ color: '#c8943a', transparent: true, opacity: 0.14, side: THREE.DoubleSide }), [])
  const mat3 = useMemo(() => new THREE.MeshBasicMaterial({ color: '#3ab0c8', transparent: true, opacity: 0.08, side: THREE.DoubleSide }), [])

  return (
    <group position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh ref={ring1} geometry={geo1} material={mat1} />
      <mesh ref={ring2} geometry={geo2} material={mat2} />
      <mesh ref={ring3} geometry={geo3} material={mat3} />
    </group>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  SPREAD DE RIESGO — curva de fondo que fluctúa como un chart financiero
// ─────────────────────────────────────────────────────────────────────────────
function RiskSpread() {
  const lineRef = useRef()

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pts = new Float32Array(80 * 3)
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    return g
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const pos = geo.attributes.position.array
    for (let i = 0; i < 80; i++) {
      const x = -4 + (i / 79) * 8
      // Microfluctuación tipo mercado: suma de frecuencias
      const y =
        -3.2 +
        Math.sin(x * 0.8 + t * 0.4) * 0.18 +
        Math.sin(x * 2.1 + t * 0.7) * 0.08 +
        Math.sin(x * 4.3 + t * 1.1) * 0.03
      pos[i * 3]     = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = -4.5
    }
    geo.attributes.position.needsUpdate = true
  })

  return (
    <line ref={lineRef} geometry={geo}>
      <lineBasicMaterial color="#c85a3a" transparent opacity={0.3} />
    </line>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  CÁMARA — auto-rotación lenta y elegante
// ─────────────────────────────────────────────────────────────────────────────
function CameraRig() {
  const { camera } = useThree()
  const angle = useRef(0)

  useFrame((_, delta) => {
    angle.current += delta * 0.04  // velocidad muy lenta
    const r = 9.5
    camera.position.x = Math.sin(angle.current) * r
    camera.position.z = Math.cos(angle.current) * r
    camera.position.y = 4.5 + Math.sin(angle.current * 0.3) * 0.5
    camera.lookAt(0, 0.2, 0)
  })

  return null
}

// ─────────────────────────────────────────────────────────────────────────────
//  LUCES DE ESCENA
// ─────────────────────────────────────────────────────────────────────────────
function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.08} />
      <directionalLight position={[4, 8, 2]} intensity={0.3} color="#3ab0c8" />
      <directionalLight position={[-4, 6, -2]} intensity={0.2} color="#c8943a" />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  OVERLAY HTML — etiquetas, indicadores macro, ticker
// ─────────────────────────────────────────────────────────────────────────────
function HtmlOverlay() {
  // Duplicar ticker para bucle continuo
  const tickerItems = [...TICKER, ...TICKER]

  return (
    <>
      {/* Etiqueta institucional */}
      <div className="hgl-label-top">
        <span className="hgl-institution">Harvard Growth Lab · 2024</span>
        <span className="hgl-title">Bolivia — Análisis Territorial</span>
      </div>

      {/* Panel macro */}
      <div className="hgl-macro-panel">
        {MACRO.map((m, i) => (
          <div key={i} className="hgl-macro-item">
            <span className="hgl-macro-label">{m.label}</span>
            <span className={`hgl-macro-value ${m.cls}`}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Leyenda de pilares */}
      <div className="hgl-pillar-legend">
        {PILLARS.map(p => (
          <div key={p.id} className="hgl-pillar-item">
            <div className="hgl-pillar-dot" style={{ background: p.color }} />
            <span className="hgl-pillar-name">{p.label}</span>
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div className="hgl-ticker">
        <div className="hgl-ticker-track">
          {tickerItems.map((item, i) => (
            <div key={i} className="hgl-ticker-item">
              {item.label}<span className={item.cls}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENTE RAÍZ
// ─────────────────────────────────────────────────────────────────────────────
export default function HarvardGrowthLabBoliviaHero() {
  return (
    <div className="hgl-wrapper">
      <Canvas
        camera={{ position: [0, 9, 9], fov: 42, near: 0.1, far: 60 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#050810']} />
        <fog attach="fog" args={['#050810', 14, 28]} />

        <SceneLights />
        <GridFloor />
        <BoliviaTerritory />
        <ZoneHeatmap />
        <MacroBars />
        <TensionRing />
        <ReformRoutes />
        <PillarNodes />
        <CapitalParticles />
        <RiskSpread />
        <CameraRig />

        {/* OrbitControls como fallback interactivo — CameraRig toma precedencia con damping */}
        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={5}
          maxDistance={18}
          minPolarAngle={0.3}
          maxPolarAngle={Math.PI / 2.2}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      <HtmlOverlay />
    </div>
  )
}
