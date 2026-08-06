# El Double Diamond como instrumento de evaluación de clientes

**Aplicado a:** un servicio de instalación de un espacio Notion propio en el que se asegura que el cliente implemente GTD (Getting Things Done, David Allen) y PARA (Projects, Areas, Resources, Archives, Tiago Forte).

**Fecha de investigación:** agosto 2026
**Tipo de documento:** investigación aplicada + marco operativo

---

## 0. Resumen ejecutivo

El Double Diamond (Discover, Define, Develop, Deliver) fue creado por el British Design Council en 2005 para diseñar productos y servicios. Este documento lo **reutiliza como instrumento de evaluación y calificación de clientes**, no como proceso de diseño de producto.

El reencuadre central es este:

> **El primer diamante no sirve para diseñar el espacio Notion. Sirve para decidir si el cliente debe recibirlo, y qué problema real resolvería.**
> **El segundo diamante no entrega un espacio Notion. Entrega adopción medida.**

La razón por la que este reencuadre importa está en la evidencia: el riesgo dominante de este servicio **no es construir mal el workspace, es que el cliente lo abandone**. Todas las fuentes revisadas convergen en lo mismo: la implementación es la mitad fácil; la adherencia es donde el proyecto muere.

Tres hallazgos ordenan todo el marco:

1. **El abandono es la norma, no la excepción.** Tandem Coaching reporta que el 77 % de los ejecutivos abandona GTD dentro de los 3 meses. (Ver §11 sobre cómo tratar esta cifra.)
2. **El punto de falla es la revisión, no la captura.** Quienes abandonan GTD no fallan capturando ni organizando: dejan de revisar. La revisión semanal es descrita en las comunidades de práctica como "la membresía de gimnasio de los sistemas de productividad": todos coinciden en que es esencial y todos la abandonan silenciosamente.
3. **La adopción de Notion es un problema de personas, no de software.** El patrón de fracaso documentado: un workspace en blanco, unas pocas páginas entusiastas, sin arquitectura, y tres meses después un laberinto en el que nadie confía.

De ahí se deriva el principio de diseño que gobierna todo el servicio:

> **Un sistema diseñado para el usuario ideal es abandonado por el usuario real.** El entregable correcto es el sistema *más simple* que resuelve el problema definido, no el más completo que la herramienta permite.

---

## 1. El problema con el enfoque habitual del servicio

El patrón de mercado estándar es: llamada de descubrimiento gratuita de 90 minutos → propuesta de alcance fijo → construcción de 2 a 4 semanas → entrenamiento → entrega. Los precios de referencia observados en el mercado 2026 van de USD 75–250/hora, USD 999–10.000 por proyecto, con paquetes "hecho para ti" desde USD 2.000–3.500, y de USD 7.500–25.000 para implementaciones de equipo complejas.

Ese flujo tiene tres defectos estructurales para este servicio en particular:

| Defecto | Consecuencia |
|---|---|
| La llamada de descubrimiento es un **acto de venta**, no de diagnóstico | Se descubre lo que justifica la venta, no lo que el cliente necesita. No hay incentivo para decir "no" |
| Se define el alcance **antes** de entender el problema | Se termina instalando GTD *y* PARA por defecto, cuando el dolor del cliente puede estar en una sola de las dos capas |
| El criterio de éxito es la **entrega**, no la adopción | El proyecto se declara exitoso el día que se entrega el workspace, es decir, antes del momento en que históricamente fracasa |

El Double Diamond corrige los tres porque introduce **divergencia obligatoria antes de cada convergencia** y, sobre todo, porque coloca una **decisión explícita en la cintura de cada diamante**.

---

## 2. El reencuadre: dos diamantes, dos decisiones

El Double Diamond estructura el trabajo en dos ciclos de expandir–contraer: el primero sobre el problema, el segundo sobre la solución. Aplicado a la evaluación de clientes:

```
        DIAMANTE 1: ¿DEBEMOS SERVIR A ESTE CLIENTE?          DIAMANTE 2: ¿QUÉ SOBREVIVE?
        ────────────────────────────────────────             ──────────────────────────

             ◇                        ◇                            ◇              ◇
        DISCOVER  ──────────►    DEFINE                        DEVELOP  ─────► DELIVER
      (divergente)            (convergente)                  (divergente)   (convergente)

     Evidencia sobre           PUERTA 1                      3 arquitecturas    PUERTA 2
     cómo trabaja hoy      GO / REENCUADRE / NO-GO           candidatas      ADOPTADO / NO
                          + 1 enunciado de problema         + prototipos    (medido vs. línea base)
```

**Puerta 1 (fin de Define): decisión de calificación.** Es una decisión comercial y ética. Tres salidas posibles: `GO`, `REENCUADRE` (vender un alcance distinto y menor), `NO-GO` (no vender el workspace).

**Puerta 2 (fin de Deliver): decisión de cierre.** No es "¿entregamos?" sino "¿el cliente lo está usando, medido contra la línea base?". Si no, el proyecto no está terminado.

El error más común al aplicar Double Diamond es tratarlo como una cascada lineal. No lo es: cada puerta puede devolver el trabajo al diamante anterior. Un `REENCUADRE` en la Puerta 1 devuelve a Discover con una pregunta nueva.

---

## 3. Diamante 1 · DISCOVER — divergencia sobre el problema

**Pregunta que gobierna la fase:** *¿Cómo trabaja realmente esta persona hoy, y dónde se pierden sus compromisos y su información?*

**Duración recomendada:** 1–2 semanas de calendario (no de trabajo). El tiempo de calendario importa porque parte de la evidencia es longitudinal.

**Regla de oro:** en Discover no se propone nada, no se menciona Notion, no se menciona GTD ni PARA. Nombrar la solución contamina la evidencia.

### 3.1 Los cuatro instrumentos

**(a) Cuestionario de admisión asíncrono** — enviado antes de cualquier llamada. Su función es liberar la sesión en vivo para profundizar en vez de recolectar datos básicos.

**(b) Sesión de descubrimiento (90 min)** — alineada con la norma de mercado, pero con guion de diagnóstico, no de venta.

**(c) Observación contextual ("sombra digital", 45–60 min)** — el instrumento de mayor valor y el que casi nadie usa. Se observa al cliente trabajar sin intervenir: dónde anota, cuántas apps abre, cómo busca un documento. **Lo que la gente reporta sobre su forma de trabajar y lo que hace difieren sistemáticamente.** Esta sesión es la que detecta el auto-diagnóstico equivocado.

**(d) Medición de línea base (mínimo 2 semanas, ideal 4)** — el paso más omitido y el más crítico para poder demostrar retorno después. Sin línea base no hay Puerta 2 posible: no se puede afirmar mejora contra nada.

### 3.2 Métricas de línea base a capturar

Deben ser específicas de tareas o procesos concretos, no "productividad" en general.

| Métrica | Cómo se captura | Por qué importa |
|---|---|---|
| **N.º de lugares donde puede vivir un compromiso** | Inventario directo (apps, cuadernos, correo, WhatsApp, notas de voz) | Predice la tasa de pérdida. La consolidación a 3–5 herramientas es el objetivo típico |
| **Tiempo mediano de recuperación** | Pedir 5 documentos concretos, cronometrar | Mide el dolor de la capa de información (PARA) |
| **Compromisos perdidos por semana** | Auto-reporte + verificación en correo/chat | Mide el dolor de la capa de acción (GTD) |
| **Volumen de entradas diarias** | Conteo durante 3 días | Determina si GTD estándar es viable o si se rompe por volumen |
| **Reuniones sin acciones registradas (%)** | Muestra de 10 reuniones | Detecta la fuga más frecuente en roles de gestión |
| **Frecuencia de revisión actual** | Observación, no promesa | **Predictor principal de éxito** |
| **Tiempo de ciclo de un proceso recurrente** | Un proceso representativo, medido de punta a punta | Única métrica que traduce a dinero |

Si es posible, medir también a una persona comparable que **no** recibirá el servicio. Un grupo de control permite separar el efecto de la instalación de la mejora general o estacional.

### 3.3 Guion de la sesión de descubrimiento

**Bloque A — Narrativa del fracaso (20 min).** No preguntar qué necesita; preguntar qué ya falló.
- "Cuénteme la última vez que algo importante se le cayó. ¿Dónde estaba anotado?"
- "¿Qué sistemas de organización ha intentado antes? ¿Cuánto duró cada uno? ¿Qué pasó el día que lo dejó?"
- "¿Qué había en su calendario la semana en que abandonó el último sistema?"

La tercera pregunta es la más informativa: revela si el abandono se produce bajo carga. La evidencia indica que el sistema se abandona precisamente cuando la vida se pone ocupada, es decir, justo cuando más se necesita.

**Bloque B — Localización del dolor (25 min).** Distinguir capa de acción vs. capa de información (§8).
- "¿Su problema es que *olvida* cosas, o que *no encuentra* cosas?"
- "¿Cuando se siente abrumado, es porque hay demasiado que hacer o porque no sabe qué hacer primero?"
- "¿Sus compromisos son suyos o dependen de otras personas?"

**Bloque C — Contexto operativo (20 min).** Individual vs. equipo, volumen, delegación, herramientas obligatorias por la organización.

**Bloque D — Prueba conductual (25 min).** El componente decisivo, ver §4.3.

### 3.4 Recolección de contra-evidencia

Discover debe buscar activamente razones para **no** vender. Señales de alarma a registrar explícitamente:

- El cliente pide una herramienta cuando describe un problema de decisión o de carga de trabajo. *Ningún workspace resuelve tener más compromisos de los que caben en la semana.*
- El cliente ya tiene 3+ sistemas abandonados y atribuye el fracaso a la herramienta en los 3 casos.
- El interés está en la estética del workspace, no en el resultado.
- No puede nombrar una consecuencia concreta de su desorganización.
- Quiere el sistema para otra persona que no participó en el descubrimiento.
- Espera que el sistema funcione sin dedicarle tiempo semanal.

---

## 4. Diamante 1 · DEFINE — convergencia y Puerta 1

**Pregunta que gobierna la fase:** *¿Cuál es el único problema que vamos a resolver, y este cliente está en condiciones de sostener la solución?*

Define es donde el Double Diamond se convierte en un instrumento de **calificación**. Produce dos salidas: un enunciado de problema y una decisión.

### 4.1 Índice de Preparación del Cliente (IPC)

Cinco ejes, 0–4 puntos cada uno, 20 puntos totales. Cada eje está anclado en un modo de falla documentado.

---

**Eje 1 — Localización del dolor** *(¿el problema es articulable y está en una capa identificable?)*

| Pts | Criterio |
|---|---|
| 4 | Nombra un dolor concreto, con consecuencia medible, en una capa clara (acción o información) |
| 3 | Nombra un dolor concreto pero abarca ambas capas |
| 2 | Describe malestar general con algún ejemplo concreto |
| 1 | Describe malestar general, sin ejemplos |
| 0 | No puede nombrar una consecuencia de no resolverlo |

---

**Eje 2 — Capacidad de revisión** *(el predictor principal)*

| Pts | Criterio |
|---|---|
| 4 | Ya sostiene alguna rutina de revisión periódica, aunque sea informal |
| 3 | Completó la prueba conductual (§4.3) y agendó la siguiente sin que se lo recordaran |
| 2 | Completó la prueba conductual con un recordatorio |
| 1 | Prometió hacerla, no la hizo |
| 0 | Rechaza comprometerse a un ritual recurrente |

> El coste de la revisión es inmediato (una hora sin ejecutar) y el beneficio es diferido (una semana con menos ruido cognitivo). Ese desbalance es la causa mecánica del abandono. Un cliente con 0–1 en este eje **no puede sostener GTD**, y venderle GTD es venderle un fracaso a plazo.

---

**Eje 3 — Volumen de entradas** *(¿GTD estándar es viable?)*

| Pts | Criterio |
|---|---|
| 4 | Volumen moderado; una revisión semanal alcanza |
| 3 | Volumen alto pero con capacidad de delegar |
| 2 | Volumen alto, sin delegación → requiere capa de agentes o triaje diario |
| 1 | Volumen de escala ejecutiva; GTD puro se rompe |
| 0 | El volumen es el problema real; ningún sistema personal lo resuelve |

> Tandem Coaching cita investigación de HBR según la cual un ejecutivo promedio enfrenta 173 entradas diarias, unas 865 por semana al momento de la revisión. En ese régimen, la aritmética de la revisión semanal deja de cerrar y el sistema colapsa por diseño, no por disciplina. (Cifra no verificada de forma independiente; ver §11.)

---

**Eje 4 — Contexto operativo** *(individual vs. multijugador)*

| Pts | Criterio |
|---|---|
| 4 | Compromisos mayoritariamente propios y controlados |
| 3 | Algunas dependencias, manejables con una lista "En espera de" |
| 2 | Alta interdependencia; requiere diseño compartido |
| 1 | El cliente no controla su propio calendario |
| 0 | El problema es de coordinación de equipo disfrazado de problema personal |

> GTD es fundamentalmente un sistema de un solo jugador. No contempla que el sistema de productividad de una persona afecte a decenas o cientos más. Instalar un sistema individual sobre un problema de coordinación produce un sistema que el cliente mantiene y que nadie más honra.

---

**Eje 5 — Patrocinio y presupuesto de tiempo**

| Pts | Criterio |
|---|---|
| 4 | Compromete 2–4 h/semana durante 4 semanas, con bloques ya en calendario |
| 3 | Compromete el tiempo, sin bloquearlo aún |
| 2 | Compromete menos tiempo del necesario |
| 1 | Espera delegar la adopción a un asistente |
| 0 | Espera que funcione sin dedicación |

---

### 4.2 Interpretación del IPC

| Puntaje | Decisión | Alcance recomendado |
|---|---|---|
| **15–20** | **GO** | Instalación completa: capa GTD + capa PARA, despliegue por etapas |
| **9–14** | **REENCUADRE** | Instalación de **una sola capa**. Si el dolor es de acción: GTD mínimo sin PARA. Si es de información: PARA sin GTD. Reevaluar a los 60 días |
| **≤ 8** | **NO-GO** para el workspace | Vender el diagnóstico como entregable, o una asesoría de hábitos/carga de trabajo. No instalar |

**Regla dominante (anula el puntaje total):** un `0` en el Eje 2 (capacidad de revisión) o en el Eje 5 (presupuesto de tiempo) fuerza `NO-GO` sin importar el resto. Son condiciones necesarias, no factores ponderables.

> Un `NO-GO` es un resultado exitoso del Diamante 1, no un fracaso comercial. Es la única salida que protege el margen (proyectos de adopción fallida consumen soporte indefinidamente) y la reputación (el cliente atribuirá el abandono al servicio).

### 4.3 La prueba conductual

El componente que separa este marco de un cuestionario de calificación convencional.

Antes de la Puerta 1, se le pide al cliente que ejecute **una revisión de 20 minutos** con las herramientas que ya tiene, sin nada instalado: listar compromisos abiertos, marcar los que ya no aplican, elegir las tres próximas acciones de la semana. Se agenda para una fecha concreta y no se le recuerda.

El Eje 2 se puntúa con **lo que hizo**, no con lo que prometió. Esto es medición de comportamiento, no de intención declarada, y es el único predictor confiable disponible antes de vender.

### 4.4 Artefactos de salida de Define

1. **Un solo enunciado de problema.** Uno, no tres. Formato: *"¿Cómo podríamos ayudar a [cliente] a [resultado concreto] dado que [restricción real observada]?"*
   - Ejemplo: *"¿Cómo podríamos lograr que Ana no vuelva a perder compromisos con clientes, dado que trabaja desde el móvil el 60 % del tiempo y no sostendrá una revisión de más de 20 minutos?"*
2. **No-objetivos explícitos.** Lo que este proyecto *no* va a resolver. Es el mecanismo antisobreingeniería.
3. **Criterios de éxito con número y fecha**, referidos a la línea base, a 30/60/90 días.
4. **Especificación del sistema mínimo viable.**
5. **La decisión de la Puerta 1, firmada.**

**Principio rector de Define:** *la definición del problema debe ser lo bastante pequeña como para que un sistema simple lo resuelva.* Si la definición exige un sistema complejo, la definición está mal hecha, no el sistema.

---

## 5. Diamante 2 · DEVELOP — divergencia sobre la solución

**Pregunta que gobierna la fase:** *¿Cuál es la arquitectura más simple que satisface el enunciado de problema y que este cliente concreto sostendrá?*

### 5.1 Tres opciones obligatorias, no una

Nunca se presenta una sola arquitectura. Se desarrollan tres a distinto nivel de complejidad y se elige con el cliente:

| Opción | Contenido | Indicada cuando |
|---|---|---|
| **Mínima** | Una base de datos de acciones + una vista de bandeja de entrada + una revisión semanal. Sin PARA | IPC 9–14 con dolor de acción; clientes con historial de abandono |
| **Estándar** | GTD completo (Bandeja, Próximas acciones por contexto, Proyectos, En espera de, Algún día) + PARA como capa de referencia | IPC 15–20, contexto individual |
| **Avanzada** | Estándar + agentes de Notion para captura y triaje + integraciones + vistas compartidas | IPC 15–20 con volumen alto o interdependencia |

Presentar tres opciones convierte la conversación de "¿lo compra?" a "¿cuál?", y —más importante— hace visible el coste de mantenimiento de cada nivel antes de comprometerse.

### 5.2 Prototipar antes de construir

**Nunca se abre Notion primero.** Secuencia:

1. **Esquema en papel / pizarra.** Bases de datos, propiedades y relaciones dibujadas. Se valida con el cliente en 30 minutos. Un error de modelo detectado aquí cuesta minutos; detectado en Notion cuesta días.
2. **Semana "mago de Oz".** El cliente opera el flujo **manualmente** en un Notion desnudo (una tabla, tres propiedades) durante 5 días hábiles. El objetivo no es probar el software: es probar si el humano sostiene el ritual.
3. **Prueba con datos reales.** Nunca con datos de ejemplo. Los proyectos reales de un cliente revelan casos que los datos ficticios ocultan: proyectos sin próxima acción, áreas que se solapan, compromisos que no son ni proyecto ni tarea.

Si el cliente no sostiene la semana "mago de Oz", **se vuelve a la Puerta 1**. No se construye. Esta es la salvaguarda más valiosa del marco: descubre el abandono cuando cuesta una semana, no cuando cuesta el proyecto completo.

### 5.3 Antipatrones a evitar en Develop

Extraídos directamente de los modos de falla documentados:

| Antipatrón | Descripción | Corrección |
|---|---|---|
| **Sobreingeniería temprana** | Construir para el usuario ideal que hace revisión todos los domingos y cierra el 100 % de sus tareas | Construir para el usuario que a veces pasa dos semanas sin abrir Notion |
| **Reskin de plantilla** | Entregar una plantilla comercial con el logo del cliente | Arquitectura derivada del enunciado de problema |
| **Bases de datos por concepto** | Una base por cada sustantivo de GTD y PARA | Pocas bases, muchas vistas |
| **Mezclar contenido formal e informal** | Notas efímeras y documentación de proceso en el mismo espacio | Separación explícita por estado, no por ubicación |
| **Automatizar antes de que haya hábito** | Agentes e integraciones sobre un flujo que nadie usa aún | Automatizar solo lo que ya se hace a mano |

### 5.4 La capa de agentes como palanca de adherencia (contexto 2026)

Desde Notion 3.0 (septiembre 2025) y las versiones posteriores hasta 3.4, la plataforma incorpora agentes autónomos capaces de ejecutar tareas de varios pasos, actualizar o crear cientos de páginas a la vez, y operar desde móvil desde enero 2026.

Esto es relevante para este servicio por una razón precisa: **los agentes pueden absorber las etapas de GTD que producen el abandono.** GTD tiene cinco etapas —capturar, clarificar, organizar, reflexionar, ejecutar—. La fricción se concentra en *clarificar* y *organizar*: el trabajo mecánico de procesar la bandeja. Si un agente hace el triaje inicial, el humano queda con las dos etapas que solo él puede hacer —*decidir* y *revisar*—.

**Advertencia:** esto reduce la carga, no la elimina. Un cliente con `0` en el Eje 2 sigue siendo `NO-GO`. Los agentes bajan el coste de la adherencia; no sustituyen la voluntad de revisar. Además, introducirlos antes de que exista el hábito es el antipatrón §5.3.

---

## 6. Diamante 2 · DELIVER — convergencia y Puerta 2

**Pregunta que gobierna la fase:** *¿El cliente lo está usando, medido contra la línea base?*

### 6.1 Despliegue por etapas, nunca entrega completa

El patrón de fracaso documentado —workspace en blanco, entusiasmo inicial, laberinto a los tres meses— es consecuencia directa de entregar el sistema completo de una vez. La corrección es entregar por capas, cada una con una sola conducta nueva:

| Semana | Se activa | Conducta única a instalar | Criterio de avance |
|---|---|---|---|
| **1** | Solo bandeja de entrada | Capturar todo en un único lugar | ≥ 80 % de días con al menos una captura |
| **2** | Clarificar + organizar | Vaciar la bandeja | Bandeja a cero al menos 3 veces |
| **3** | Revisión semanal | Sostener el ritual | 2 revisiones completadas |
| **4** | Capa PARA (referencia) | Archivar por estado, no por carpeta | Tiempo de recuperación medido de nuevo |

**No se avanza de semana si no se cumple el criterio.** Se repite la semana. Esto contradice la lógica comercial de proyecto de alcance fijo y es exactamente por eso que funciona: convierte el cronograma en función de la adopción y no al revés.

### 6.2 Documentación y transferencia

- **SOP del sistema**, en el propio workspace: cómo capturar, cómo procesar, cómo revisar. Una página, no un manual.
- **Video de 5 minutos** del recorrido de la revisión semanal, grabado con los datos reales del cliente.
- **Regla de decisión escrita**: dónde va cada cosa. Elimina la duda que genera abandono.

### 6.3 Medición a 30 / 60 / 90 días — la Puerta 2

Se remiden **exactamente** las métricas de línea base de §3.2. Criterios de cierre sugeridos a 90 días:

| Criterio | Umbral |
|---|---|
| Revisiones completadas | ≥ 8 de 12 semanas |
| Lugares donde vive un compromiso | Reducido a ≤ 3 |
| Compromisos perdidos por semana | Reducción ≥ 50 % vs. línea base |
| Tiempo mediano de recuperación | Reducción ≥ 40 % vs. línea base |
| Uso sin recordatorio del proveedor | 4 semanas consecutivas |

**Si no se cumplen:** el proyecto no está cerrado. Se vuelve a Develop con un re-alcance sin costo adicional. Comprometer esto por escrito en la propuesta es simultáneamente el argumento comercial más fuerte del servicio y el mecanismo que obliga internamente a hacer bien el Diamante 1 —porque el coste de un `GO` mal dado lo paga el proveedor—.

Conviene ser explícito sobre la dificultad de medir: solo el 29 % de los ejecutivos declara poder medir con confianza el retorno de sus herramientas, aun cuando el 79 % percibe mejoras (IBM, 2026). Por eso el marco insiste en métricas de tarea concreta —tiempo de recuperación, compromisos perdidos— y no en "productividad".

### 6.4 El tercer diamante: revisión trimestral

El Double Diamond no es lineal. A los 90 días se ejecuta un mini-diamante: *¿el problema definido sigue siendo el problema?* Las prioridades cambian, y con ellas el sistema. Esta es la base natural de un contrato de mantenimiento.

---

## 7. Tabla maestra de mapeo

| Fase | Qué se evalúa | Instrumento | Artefacto | Decisión |
|---|---|---|---|---|
| **Discover** | Cómo trabaja realmente; dónde se pierden compromisos e información | Cuestionario asíncrono, sesión 90 min, sombra digital, línea base 2–4 semanas | Inventario de herramientas, métricas de línea base, registro de contra-evidencia | Ninguna (prohibido concluir) |
| **Define** | Si el cliente puede sostener el sistema; cuál es el único problema | IPC (5 ejes), prueba conductual de revisión | Enunciado de problema, no-objetivos, criterios de éxito, spec mínima | **PUERTA 1:** GO / REENCUADRE / NO-GO |
| **Develop** | Qué arquitectura sobrevive a este cliente | 3 opciones, esquema en papel, semana "mago de Oz", datos reales | Modelo de datos validado, prototipo operado a mano | Elección de opción; regreso a Puerta 1 si no sostiene el piloto |
| **Deliver** | Si hay adopción real | Despliegue por etapas, remedición 30/60/90 | Workspace, SOP, video, informe contra línea base | **PUERTA 2:** ADOPTADO / RE-ALCANCE |

---

## 8. Cómo se articulan GTD y PARA (y por qué la distinción es un instrumento de diagnóstico)

Esta sección es la base técnica del Eje 1 del IPC.

**No son sistemas competidores. Operan en capas distintas.** A diferencia de GTD, PARA no trata sobre tareas: trata sobre información. GTD es excelente procesando compromisos entrantes, pero es más un flujo de trabajo que una organización.

| | **GTD** | **PARA** |
|---|---|---|
| Objeto | Compromisos / acciones | Información / notas / material |
| Aporte único | Flujo (capturar→clarificar→organizar→reflexionar→ejecutar), contextos, "En espera de", **cadencia de revisión** | Criterio único de organización por accionabilidad, aplicable a cualquier herramienta |
| Carencia | No dice dónde vive la información de referencia | **No tiene capa de acción ni ritual de revisión** |
| Síntoma del cliente | "Se me olvidan cosas", "no sé qué hacer primero" | "No encuentro nada", "tengo la información en cinco lados" |

### 8.1 El punto de unión

La articulación natural es a través de la jerarquía de GTD:

- **Proyectos** de PARA ≈ Horizonte 1 de GTD (proyectos: resultados que requieren más de una acción)
- **Áreas** de PARA ≈ Horizonte 2 de GTD (áreas de enfoque y responsabilidad)
- **Recursos + Archivos** de PARA ≈ material de referencia de GTD

Es decir: **PARA es, en la práctica, la capa de organización y referencia de GTD, hecha independiente de la herramienta.** Lo que PARA no aporta —y GTD sí— son las listas de acción y, sobre todo, la revisión. Lo que GTD no resuelve bien —y PARA sí— es dónde poner lo que no es accionable.

De ahí la consecuencia diagnóstica: **si el dolor del cliente está solo en una capa, instalar ambas es sobreingeniería** y activa el principal modo de falla del servicio.

### 8.2 Decisión de arquitectura: Archivo como estado, no como ubicación

Una crítica recurrente y bien fundada a PARA es que, cuando las prioridades cambian —y siempre cambian—, las carpetas, notas y activos empiezan a moverse, y recuperar las cosas se vuelve confuso.

En un sistema de archivos esa crítica es difícil de esquivar. **En Notion se resuelve por diseño:** al ser una herramienta relacional, `Archivo` debe implementarse como una **propiedad de estado**, no como una base de datos ni una carpeta destino.

Arquitectura mínima recomendada:

| Base de datos | Propiedades clave |
|---|---|
| **Acciones** | Estado (Bandeja / Próxima / En espera / Algún día / Hecha), Contexto, Proyecto (relación), Fecha, Área (rollup) |
| **Proyectos** | Estado (Activo / En pausa / **Archivado**), Área (relación), Resultado deseado, Próxima acción (rollup) |
| **Áreas** | Estándar de desempeño, Proyectos (relación) |
| **Recursos** | Tipo, Área/Proyecto (relación), Estado (Vivo / **Archivado**) |

La **Bandeja de entrada no es una base de datos**: es una vista filtrada por `Estado = Bandeja`. Archivar no mueve nada: cambia un valor. Nada se pierde de vista, todo se recupera por relación, y la crítica estructural a PARA deja de aplicar.

---

## 9. Registro de riesgos

| Riesgo | Evidencia | Mitigación en el marco |
|---|---|---|
| **Abandono a los 3 meses** | 77 % de ejecutivos abandona GTD en ese plazo (Tandem Coaching) | Puerta 2 a 90 días; Eje 2 del IPC; despliegue por etapas |
| **Colapso de la revisión** | Es el punto de falla consistente; coste inmediato, beneficio diferido | Prueba conductual antes de vender; revisión activada en semana 3 aislada; agentes para reducir el trabajo mecánico |
| **Sobreingeniería** | Los sistemas diseñados para el usuario ideal son abandonados por el usuario real | No-objetivos explícitos; tres opciones con la Mínima como opción real; prohibición de construir antes de la semana "mago de Oz" |
| **Auto-diagnóstico erróneo del cliente** | Lo reportado y lo observado difieren | Sombra digital; línea base medida, no declarada |
| **Problema de equipo disfrazado de personal** | GTD asume un solo jugador | Eje 4 del IPC |
| **Ruptura por volumen** | ~173 entradas diarias en roles ejecutivos rompen la aritmética de la revisión semanal | Eje 3 del IPC; triaje diario o capa de agentes |
| **Imposibilidad de demostrar valor** | La línea base es el paso más omitido; solo 29 % puede medir retorno con confianza | Línea base obligatoria en Discover; métricas de tarea concreta |
| **Dependencia de plataforma** | Notion se abandona por complejidad; el modelo de precios y funciones cambia | PARA es agnóstico de herramienta; documentar el modelo conceptual aparte del workspace |

---

## 10. Empaquetado comercial derivado del marco

El marco sugiere separar la venta en dos productos, uno por diamante:

**Producto 1 — Diagnóstico (Diamante 1).** Pagado, precio bajo, entregable propio: informe de línea base, enunciado de problema, IPC con recomendación, y especificación del sistema mínimo viable. **El cliente se lo lleva aunque no contrate la instalación.**

Ventajas: (a) elimina el conflicto de interés que corrompe la llamada de descubrimiento gratuita —se puede recomendar `NO-GO` sin perder el ingreso—; (b) filtra a quien no dedicará tiempo, porque quien no paga el diagnóstico tampoco sostendrá la revisión; (c) se diferencia del estándar de mercado, donde el descubrimiento es gratuito y por lo tanto es venta.

**Producto 2 — Instalación y adopción (Diamante 2).** Precio según la opción elegida en Develop, con la garantía de la Puerta 2 (§6.3). Solo se ofrece a clientes con `GO`.

**Producto 3 — Mantenimiento (tercer diamante).** Revisión trimestral. Recurrente.

Para clientes con `REENCUADRE` o `NO-GO` existe una oferta alternativa honesta: asesoría de hábitos o de carga de trabajo, sin workspace. Vender el workspace a un `NO-GO` produce un cliente insatisfecho y consumo indefinido de soporte.

---

## 11. Límites del Double Diamond y de esta investigación

**Ser explícito con las limitaciones es parte del entregable.**

### Limitaciones del marco

1. **Sugiere linealidad que no existe.** El diagrama induce a tratarlo como cascada. Las Puertas 1 y 2 con retorno explícito son la corrección aplicada aquí, pero exige disciplina.
2. **Subpondera la gestión del cambio.** El Double Diamond nació para diseñar, no para instalar hábitos. En este servicio la adopción es el problema principal, y el marco no la cubre nativamente: por eso Deliver se cargó con despliegue por etapas y medición, que no son parte del modelo original.
3. **Asume acceso a los usuarios.** Si el comprador no es el usuario (un directivo compra para su equipo), el Diamante 1 debe ejecutarse con los usuarios reales o no vale.
4. **El coste del Diamante 1 puede exceder el ticket.** En proyectos pequeños (< USD 2.000), 1–2 semanas de descubrimiento no cierran económicamente. Para ese segmento corresponde una versión comprimida: cuestionario + sesión de 90 min + prueba conductual, sin sombra digital ni línea base de 4 semanas —aceptando explícitamente que la Puerta 2 será más débil—.

### Limitaciones de esta investigación

**Cobertura de fuentes.** Este documento se construyó con búsqueda web. Los canales de evidencia comunitaria —Reddit, Hacker News, YouTube, la API de GitHub— estuvieron **bloqueados por la política de egreso de red del entorno de ejecución** (denegaciones 403 en el gateway) y devolvieron cero resultados. Esto significa que:

- **No se pudo capturar la voz directa de practicantes** (hilos de r/Notion, r/gtd, r/productivity) que era el objetivo del análisis de 30 días.
- La ausencia de resultados **no es evidencia de ausencia de discusión** en esas plataformas.
- El peso recae sobre fuentes editoriales y comerciales, que tienen sesgo hacia la solución que venden.

**Cifras que deben tratarse como direccionales, no como estadísticas citables:**

- El **77 % de abandono de GTD en 3 meses** proviene de Tandem Coaching, una consultora de coaching ejecutivo, sin metodología publicada. Es consistente con el patrón cualitativo observado en todas las demás fuentes, pero **no está verificado de forma independiente** y proviene de una parte interesada en vender la solución al problema que la cifra describe.
- Las **173 entradas diarias por ejecutivo** se atribuyen a HBR por esa misma fuente secundaria; no se localizó el estudio original en esta investigación.
- Los **rangos de precios** son medianas de páginas comerciales de agencias, no de una encuesta de mercado.

**Recomendación:** antes de usar estas cifras frente a un cliente, verificarlas o sustituirlas por la línea base propia. El marco no depende de ellas —depende del patrón cualitativo, que sí es consistente entre fuentes independientes—.

---

## 12. Síntesis: las seis reglas operativas

1. **El primer diamante decide si vender; el segundo decide si terminó.** Ninguna otra decisión ocurre en el medio.
2. **Discover mide, no propone.** No se nombra Notion, ni GTD, ni PARA, hasta Define.
3. **La capacidad de revisión se puntúa por conducta observada, no por promesa.** Es el predictor principal y se prueba antes de vender.
4. **Un `NO-GO` es un resultado exitoso.** El diagnóstico es el producto; la instalación es opcional.
5. **La definición del problema debe ser pequeña.** Si exige un sistema complejo, la definición está mal hecha.
6. **El entregable es la adopción medida contra la línea base, no el workspace.** Sin línea base no hay entregable posible.

---

## Anexo · Hoja de puntuación IPC

```
CLIENTE: ______________________     FECHA: ____________

Eje 1 · Localización del dolor .......................... [ ] / 4
        Capa identificada:  ( ) Acción  ( ) Información  ( ) Ambas  ( ) Ninguna

Eje 2 · Capacidad de revisión ........................... [ ] / 4   ← eliminatorio si = 0
        Prueba conductual:  ( ) Hecha sin recordatorio
                            ( ) Hecha con recordatorio
                            ( ) Prometida, no hecha
                            ( ) Rechazada

Eje 3 · Volumen de entradas ............................. [ ] / 4
        Entradas/día medidas: ______

Eje 4 · Contexto operativo .............................. [ ] / 4
        ( ) Individual   ( ) Interdependiente   ( ) Problema de equipo

Eje 5 · Patrocinio y presupuesto de tiempo .............. [ ] / 4   ← eliminatorio si = 0
        Horas/semana comprometidas: ______   Bloqueadas en calendario: ( ) Sí ( ) No

                                          TOTAL ......... [ ] / 20

DECISIÓN:  ( ) GO (15-20)   ( ) REENCUADRE (9-14)   ( ) NO-GO (≤8 o eliminatorio)

ENUNCIADO DE PROBLEMA (uno solo):
_________________________________________________________________

NO-OBJETIVOS:
_________________________________________________________________

LÍNEA BASE REGISTRADA:  ( ) Sí   ( ) No   ← sin esto no hay Puerta 2
```

---

### Fuentes consultadas

Design Council (marco Double Diamond y Framework for Innovation) · Tandem Coaching (*GTD for Executives: Why It Fails*) · Forte Labs (*The PARA Method*) · Evernote (*PARA vs GTD*, *PARA or GTD: Which Should You Choose?*) · Boris Buliga, d12frosted.io (*PARA, not GTD*) · Medium: R.H. Rizvi, Ruslans Melniks, Kay Foxley (patrones de abandono de Notion) · Talantir (*Notion Common Mistakes: Why Teams Fail to Adopt*) · Notion Releases 3.0 y TechCrunch (agentes, 2025–2026) · agencysupply.co y O8 Agency (precios y alcance de consultoría) · Maze, UXPin, Dovetail, Splunk (aplicación práctica del Double Diamond) · Worklytics y AI Assembly Lines (línea base y medición de productividad) · IBM AI ROI Research 2026.
