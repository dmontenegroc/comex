# Cómo diagnostican las firmas de consultoría operativa a un cliente nuevo

Investigación sobre la **fase de diagnóstico/relevamiento** (no venta, no construcción). Fecha: 2026-08-05.
Fuentes: sitios y playbooks públicos de firmas, agencias de ops/RevOps, partners de Notion/ClickUp, vendors de process mining y practitioners con metodología publicada.

> **Nota de método.** El motor social de `/last30days` (Reddit, X, YouTube, HN) devolvió cero: la política de red del entorno rechaza esos hosts (403 en el gateway). Todo lo de abajo viene de búsqueda y fuentes web públicas. Lo marcado como *(inferido)* es síntesis mía, no cita.

---

## 1. Resumen ejecutivo — los 7 patrones comunes

1. **El relevamiento se arma con cuatro fuentes de datos, no una.** Entrevistas estructuradas con quien ejecuta el proceso + observación (shadowing o video walkthrough) + revisión documental (SOPs, runbooks, material de training) + minería de event logs. Es el estándar explícito de [BA Copilot](https://ba-copilot.com/process-discovery) y coincide con el método que [Deloitte declara](https://www.mnsure.org/assets/bd-2014-07-16-Deloitte-deliverable2_tcm34-183192.pdf) en entregables públicos: "interview stakeholders, review documents and processes, and identify gaps".

2. **El diagnóstico está time-boxed y es corto.** "The discovery phase alone should take at least one week. There is no six-month discovery phase" ([BA Copilot](https://ba-copilot.com/process-discovery)). Los rangos reales: discovery sprint de 1–3 semanas ([72Technologies](https://www.72technologies.com/blog/pricing-discovery-sprints-agency-deals)), tech stack audit de 2–4 semanas ([Scottship](https://scottshipsolutions.com/tech-audit/)), assessment de MSP concentrado en el mes 1 ([Manage-Point](https://manage-point.com/the-ultimate-guide-to-managed-it-services-for-business-growth-in-2026/)).

3. **Cobrar el diagnóstico es la norma en el segmento serio; acreditarlo contra el proyecto es el mecanismo estándar para bajar la fricción.** [RevivalOps](https://revivalops.com/) cobra €497 por su Audit y lo acredita **en su totalidad** al Pilot si arranca dentro de 14 días (crédito en cuenta, no cash). [HiresLink](https://www.hireslink.com/hire/ai-workflow-automation-consultant) cobra $200 por una Discovery Session que mapea workflows y acredita al primer mes. Benchmark de precio: **10–20% del fee esperado del proyecto** para un discovery estructurado ([Boutique Consulting Club](https://www.boutiqueconsultingclub.com/essays/paid-discovery)), o **3–8% del costo proyectado del build**, a precio cerrado ([72Technologies](https://www.72technologies.com/blog/billable-discovery-sprint-for-agencies)). El argumento repetido: "free discovery is often the most expensive line item in your eventual build budget, because agencies that didn't charge for it didn't do it thoroughly".

4. **El entregable es un "decision pack", no un mapa.** "The deliverable is the decision pack — not a Figma file, not a Jira backlog, not vibes. Something a CFO can read in 30 minutes and approve" ([72Technologies](https://www.72technologies.com/blog/pricing-discovery-sprints-agency-deals)). En las grandes: situation assessment report + análisis + recomendación + roadmap de implementación + business case + resumen ejecutivo ([rework](https://resources.rework.com/libraries/professional-services-growth/strategy-consulting-process)).

5. **Los datos que buscan son siempre los mismos cinco:** handoffs (dónde se pierde contexto), excepciones y variantes del proceso, derechos de decisión (quién aprueba qué), inventario real de herramientas, y métricas de línea base. Los swimlanes se usan justamente porque "expose handoff gaps and capture the decision points and exception paths where defects occur" ([GoLeanSixSigma](https://goleansixsigma.com/6-process-maps-know-choose-right-one/)). Los hallazgos recurrentes de una auditoría de stack: herramientas duplicadas, datos en sistemas desconectados, permisos nunca actualizados tras salidas de personal, backups nunca testeados ([Scottship](https://scottshipsolutions.com/tech-audit/)).

6. **La decisión de qué merece un sistema se toma con ECRS/ESOAR: automatizar va último, a propósito.** ECRS(A) = Eliminate, Combine, Rearrange, Simplify, **Automate** — "automation comes last because we want to avoid at all cost the automating of unnecessary, disjointed, badly arranged and complex business processes" ([Gemba Academy](https://blog.gembaacademy.com/2020/08/10/better-business-processes-through-ecrsa/)). Capgemini vende la misma lógica como [ESOAR](https://www.capgemini.com/solutions/esoar/) (Eliminate, Standardize, Optimize, Automate, Robotize). El filtro operativo para automatizar: tarea repetitiva, basada en reglas y fácil de definir, puntuada por recurrencia, riesgo y facilidad de setup ([JumpCloud](https://jumpcloud.com/blog/how-to-grade-your-it-backlog-and-pick-what-to-automate-first)).

7. **Hay una división ideológica real: evidencia (process mining) vs. testimonio (workshops).** Celonis ataca el método clásico de frente: "process mining is faster and cheaper than manual process mapping because it creates models from mined data not workshops, documents and user interviews", y las entrevistas dan "only fragmentary, subjective impressions" ([Celonis](https://www.celonis.com/blog/how-process-mining-modernizes-process-discovery)). [Skan AI](https://www.skan.ai/blogs/process-discovery-and-consulting-the-synergy-of-evidence-and-expertise-skan) modera: evidencia + expertise. En la práctica el corte es el volumen de datos: si hay ERP/CRM con event log, se mina; si no, se entrevista y se observa.

8. **El diagnóstico ya incluye evaluación de gente, no solo de proceso.** Change readiness assessment, stakeholder map y change impact assessment se corren *antes* de diseñar ([ChangeToolkit](https://www.changetoolkit.app/resources/change-readiness-assessment-guide), Prosci/ADKAR). [ZenPilot](https://www.zenpilot.com/how-we-help) audita explícitamente "team habits" junto con handoffs y metodología de PM.

---

## 2. Tabla comparativa de métodos

| Método | Herramientas | Canales | Entregable | Cuándo se usa |
|---|---|---|---|---|
| **Entrevistas por rol** (3–5 por proceso) | Guion por rol; notetaker IA (Granola, Fireflies, Fathom, Otter) con plantilla de discovery que estructura pain points / stakeholders / next steps | 1:1 remoto o presencial, 45–60 min | Notas estructuradas + lista de dolores por rol | Siempre. Es la base de todo diagnóstico |
| **Job shadowing / observación** | Grabación de pantalla, [Scribe](https://scribe.com/library/process-mining-tools) o [Tango](https://www.tango.ai/blog/scribe-alternatives) (auto-generan SOP paso a paso desde la pantalla) | Observación en el puesto o video walkthrough | SOP as-is a nivel tarea, con clics y sistemas reales | Cuando lo que dicen y lo que hacen difieren; procesos con "shadow IT" |
| **Workshop de mapeo (SIPOC → swimlane → VSM)** | Miro (votación, timers, clustering de stickies) para facilitar; Lucidchart / BPMN para formalizar | Taller de 2–4 h, remoto o presencial, cross-funcional | Mapa as-is con handoffs, puntos de decisión y excepciones; VSM cuantifica espera y desperdicio | Procesos cross-área donde nadie ve el extremo a extremo |
| **Revisión documental y de sistemas** | Cuestionario previo, inventario de herramientas, revisión de accesos/permisos, export de datos | Asíncrono + sesión técnica | Tech stack audit: duplicaciones, datos desconectados, permisos obsoletos, backups sin probar | Siempre que haya >5 herramientas o integraciones |
| **Process / task mining** | [Celonis](https://www.celonis.com/blog/automated-process-discovery), [Apromore](https://documentation.apromore.org/discovery/discovermodel.html) (BPMN desde event log), UiPath, [Skan](https://www.skan.ai/blogs/pros-and-cons-of-task-mining) (visión computacional sobre el front-end) | Acceso a datos/logs; sin sesiones con gente | Modelo real con variantes, frecuencias y cycle time; primeros insights en días | Volumen alto y sistema transaccional que loguea. No aplica a PyMEs sin ERP |
| **Time study / baseline** | Plantilla con actividad, inicio/fin, tiempo transcurrido, N observaciones, promedio y responsable ([Smartsheet](https://www.smartsheet.com/content/value-stream-templates-how-to), [monday](https://monday.com/blog/task-management/time-study-template/)) | Observación repetida o self-report | Línea base numérica para justificar el proyecto y medir después | Cuando hay que defender ROI ante un CFO |
| **Readiness / madurez** | Scorecard de madurez; ADKAR; matriz People-Process-Data-Technology ([Accenture](https://www.accenture.com/us-en/services/infrastructure-capital-projects)) | Encuesta + entrevistas a sponsors | Maturity scorecard + mapa de stakeholders + riesgos de adopción | Antes de comprometer un rollout; obligatorio en transformación |

---

## 3. Plantilla de diagnóstico replicable (aplicable mañana)

**Formato:** 10 días hábiles, precio cerrado = 10–20% del proyecto estimado, acreditable si contratan dentro de 14 días.

- **Día 0 — Pre-work asíncrono.** Cuestionario previo (procesos candidatos, volumen mensual, herramientas, quién aprueba qué, qué se rompe seguido) + pedido de accesos de lectura y export de datos. Sin esto, la semana 1 se desperdicia.
- **Día 1 — Kickoff + scoping.** SIPOC del proceso elegido: proveedor, input, pasos macro, output, cliente. Definir criterio de éxito en números. Mapa de stakeholders.
- **Días 2–3 — Entrevistas por rol.** 3–5 entrevistas de 45 min, una por rol del flujo, grabadas y transcritas. Preguntas fijas: ¿qué recibís y de quién? ¿qué hacés con eso? ¿a quién se lo pasás? ¿qué te falta siempre cuando te llega? ¿cuál es la excepción que te rompe el día? ¿qué hacés cuando el sistema no te deja?
- **Día 4 — Shadowing.** 2 h de observación por puesto crítico, con grabación de pantalla → SOP as-is automático (Scribe/Tango). Acá aparece la diferencia entre proceso declarado y proceso real.
- **Día 5 — Auditoría de sistemas y datos.** Inventario de herramientas + costos, integraciones, permisos, dónde vive cada dato, qué se re-tipea a mano. Cazar duplicados y handoffs manuales entre sistemas.
- **Día 6 — Workshop de mapeo (2–4 h en Miro).** Swimlane as-is con todos los roles en la sala. Marcar con color: handoff que pierde contexto, punto de decisión sin dueño, excepción, re-trabajo, espera. Votación en vivo para priorizar dolores.
- **Día 7 — Cuantificación.** Baseline: volumen mensual, tiempo de ciclo, touch time, % de excepciones, % de re-trabajo, costo por transacción. Aunque sea estimado por consenso, número escrito.
- **Día 8 — Triage ECRS.** Pasar cada paso por: ¿se elimina? ¿se combina? ¿se reordena? ¿se simplifica? ¿se estandariza? Recién lo que sobrevive entra a la pregunta de automatizar, y solo si es repetitivo + basado en reglas + con inputs definidos + con manejo de excepciones pre-planificado. Lo de bajo volumen y alta variabilidad queda manual, explícitamente.
- **Día 9 — Priorización.** Matriz impacto/esfuerzo + criterio de recurrencia y riesgo. Salida: 3 iniciativas para los primeros 90 días, no 15.
- **Día 10 — Entrega del decision pack.** Estructura: (1) resumen ejecutivo de 1 página, (2) mapa as-is, (3) top 5 hallazgos con evidencia y costo estimado, (4) baseline numérica, (5) recomendación con alcance y las 3 iniciativas de 90 días, (6) qué queda fuera y por qué, (7) riesgos de adopción y quién los tiene que absorber. Presentación en vivo de 60 min, no envío por mail.

---

## 4. Qué haría distinto un operador chico con IA

El operador independiente no puede competir con el process mining de Celonis (necesita event logs y licencia), pero puede colapsar el costo del relevamiento cualitativo, que es donde las firmas grandes cobran caro:

- **Transcribir todo y sintetizar automáticamente.** Notetaker con plantilla de discovery en cada entrevista; la salida ya viene estructurada en dolores, dinámicas de stakeholders y next steps. Preferir herramientas sin bot visible en la llamada: cuando el participante ve entrar un "Notetaker", la conversación se vuelve más cuidada y se pierden justo las observaciones candidas ([Granola](https://www.granola.ai/blog/how-consultants-document-client-meetings-with-ai-without-losing-focus)).
- **Transcripción → mapa de proceso sin dibujar.** Ya existe el camino concreto: el conector MCP de [BA Copilot](https://ba-copilot.com/mcp) toma un transcript de workshop, un SOP o un doc y devuelve **BPMN 2.0 XML editable** con pools, swimlanes, gateways y anotaciones, desde Claude. Pedirle a un LLM "un diagrama" a secas devuelve prosa o Mermaid, no BPMN válido — la diferencia importa si el entregable tiene que ser editable por el cliente.
- **Cruzar las 5 entrevistas contra sí mismas.** Cargar los 5 transcripts juntos y pedir contradicciones: dónde el rol A describe el handoff distinto del rol B. Esa lista de discrepancias *es* el hallazgo — es la versión barata de lo que el process mining detecta como variantes.
- **SOP as-is gratis desde la observación.** Grabación de pantalla + Scribe/Tango produce el paso a paso documentado sin trabajo de redacción; sirve de anexo del diagnóstico y, si el proyecto sigue, ya es material de training.
- **Vender el diagnóstico como producto con precio fijo y crédito.** Un audit de precio cerrado y acreditable (el modelo RevivalOps/HiresLink) es la palanca comercial más replicable para un operador chico: convierte el diagnóstico en una oferta de entrada rentable en vez de trabajo gratis de preventa.
- *(Inferido)* El diferencial defendible no es la IA — es el criterio de descarte. La IA baja a horas el costo de producir el mapa, así que el mapa deja de ser el producto. Lo que se cobra es el Día 8: decidir qué se elimina, qué se estandariza, qué se automatiza y qué se deja manual a propósito.

---

## Verificado vs. inferido

- **Verificado (cita directa):** los 4 canales de relevamiento; duraciones (1 semana mínima, 1–3 semanas sprint, 2–4 semanas stack audit, 10 semanas ZenPilot); precios y acreditación (€497 RevivalOps, $200 HiresLink, 10–20% del fee, 3–8% del build); ECRS/ESOAR con automatización al final; estructura de entregables de estrategia; postura de Celonis sobre entrevistas; hallazgos típicos de auditoría de stack; capacidad transcript→BPMN de BA Copilot.
- **Inferido:** el guion de entrevista del Día 2–3, la secuencia exacta de 10 días y la asignación de herramienta por método en la tabla son mi síntesis de los patrones anteriores, no un playbook publicado por una firma.
- **No cubierto:** faltan datos de conversación de practitioners en Reddit/X/YouTube por el bloqueo de red del entorno; si esto se corre desde una máquina con acceso, r/consulting, r/businessanalysis y r/RevOps son las comunidades donde se discute el precio real del discovery.
