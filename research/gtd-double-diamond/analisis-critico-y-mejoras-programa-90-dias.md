# Análisis crítico del Programa de 90 Días y correcciones propuestas
## Revisión rigurosa del blueprint operativo, con las piezas que faltaban

**Fecha:** 1 de agosto de 2026
**Objeto:** someter el diseño del servicio a prueba de estrés, identificar dónde se rompe —comercial, operativa y metodológicamente— y desarrollar las correcciones. Este documento **no reemplaza** el blueprint: lo audita y le agrega las piezas ausentes.

### Marcas de lectura
- **[HECHO]** = verificable.
- **[DISEÑO]** = decisión de arquitectura (propuesta de corrección).
- **[ESTIM]** = estimación paramétrica a calibrar con los primeros clientes reales; **no es un dato**.
- **[HIPÓTESIS]** = supuesto a validar en campo.

### Método del análisis
Se auditó el diseño buscando cuatro clases de falla: **(1) contradicciones internas** entre promesa, precio y modelo de ingreso; **(2) huecos operativos** que consumen dinero o reputación cuando aparecen; **(3) debilidades metodológicas de medición** que invalidarían la prueba social; **(4) supuestos no examinados** sobre capacidad, dependencias y confidencialidad.

**Veredicto general:** la arquitectura metodológica es sólida y el posicionamiento es correcto. **Los problemas graves no están en el método: están en el modelo comercial y en la operación.** Hay una contradicción central en la promesa, no hay aritmética de capacidad —por lo tanto no hay piso de precio—, y no existe definición de fracaso. Los tres son arreglables sin tocar la metodología.

---

## 1. Lo que está sólido (calibración del análisis)

Para que la crítica sea útil, conviene fijar qué **no** hay que tocar [DISEÑO]:

- **El Double Diamond como arco de entrega** (no como materia que se enseña). Resuelve a la vez estandarización, entregables intermedios y framework propietario. Es la mejor decisión del diseño.
- **El seguimiento como producto y el método como sustrato.** Está alineado con la única evidencia disponible (la rendición de cuentas tiene respaldo; "GTD funciona" no).
- **Los anti-patrones convertidos en restricciones estructurales** en vez de buenas intenciones.
- **PARA como arquitectura visible y GTD adentro** (cuatro secciones + bandeja): minimiza superficie percibida.
- **La separación explícita entre probado e hipótesis.** Protege de la sobreventa.

Todo lo demás está bajo examen.

---

## 2. Hallazgos CRÍTICOS

### C1 — Contradicción central: "dejá de necesitarme" vs. contrato de retención

**La falla.** El blueprint sostiene dos cosas incompatibles. La promesa dice: *"el objetivo declarado es que dejes de necesitarme"*. El modelo comercial dice: *"proyecto fijo de activación seguido de un contrato de retención mensual"*. Un cliente atento hace la pregunta obvia: **si tu objetivo es que no te necesite, ¿por qué me vendés una suscripción indefinida?** Sin respuesta, la promesa suena a gancho y la retención a captura.

Hay una segunda contradicción encima: *"pagás mes a mes, cortás cuando quieras"* choca con *"proyecto fijo de activación con alcance congelado y firmas de fase"*. Un proyecto de alcance fijo no es compatible con cancelación libre a mitad de camino, salvo que se defina qué pasa con lo construido y lo cobrado. El blueprint nunca lo define.

**Por qué importa.** Es el punto donde un prospecto inteligente —justo el que querés— detecta incoherencia y desconfía. Y es donde, sin política, se pierde dinero: cliente que corta en el mes 2 con el sistema ya construido.

**Corrección [DISEÑO]. Separar dos cosas que hoy están fundidas: el hábito gradúa; el sistema sigue vivo.**

- **El acompañamiento SÍ termina.** Tiene fin declarado y no se renueva. Eso es lo que gradúa.
- **La retención NO vende sostener el hábito** —venderlo sería admitir que el programa no cumplió—. Vende **infraestructura**: gobernanza del workspace, auditorías, nuevas automatizaciones, evolución del sistema ante cambios del negocio del cliente.
- **La retención es opt-in explícito posterior a la graduación**, nunca continuación automática. Se ofrece *después* del acta, no dentro del contrato inicial.

Guion de reconciliación para la primera conversación:
> "El acompañamiento termina el día 90 y no se renueva: si al mes 4 seguís necesitando que te persiga, fallé. Lo que sí puede seguir es el mantenimiento del sistema —igual que tenés contador aunque sepas sumar—. Eso es opcional, se decide después de que graduaste, y muchos no lo necesitan."

**Corrección al esquema de cobro [DISEÑO]:** separar los dos ejes que el blueprint confunde —**alcance** e **ingreso**—:
- **Diagnóstico (Discover):** producto independiente, pagado por adelantado. Tiene valor propio aunque el cliente no siga.
- **Programa (Define+Develop+Deliver):** cobro en **3 cuotas mensuales**. Cancelable: el cliente se queda con lo entregado hasta ese punto y deja de pagar lo que sigue.
- **El alcance congelado protege qué construís, no cuánto cobrás.** Son ejes distintos: la firma de Define fija el sistema a entregar; la cuota mensual fija el riesgo del cliente.

Esto cumple "pagás mes a mes, cortás cuando quieras" **sin** exponer al consultor a construir gratis: la construcción pesada (semanas 2–3) cae dentro de la cuota 1, ya cobrada.

---

### C2 — No hay aritmética de capacidad, por lo tanto no hay piso de precio

**La falla.** El blueprint habla de "volumen repetible" y de add-ons sin haber calculado nunca cuántas horas consume un cliente ni cuántos clientes caben en la semana. **Sin eso no existe un precio mínimo viable**, y el riesgo real es vender un programa que, al escalar, deja al consultor trabajando por debajo de su costo de oportunidad.

**Corrección [DISEÑO] — modelo de capacidad explícito.**

Carga estimada por cliente en 90 días [ESTIM — calibrar con los 3 primeros]:

| Fase | Actividad | Horas |
|---|---|---|
| Discover | Diagnóstico, línea base, mapa de frentes | 3–5 |
| Define | Diseño del sistema + especificación | 2–4 |
| Develop | Construcción, carga con compromisos reales, canal de captura | 10–14 |
| Deliver | 13 sesiones × 30 min + preparación y minuta (~30 min c/u) | ~13 |
| Transversal | Asincrónico (~30 min/semana) | ~6 |
| **Total** | | **~34–42 h** |

**El hallazgo operativo que esto revela [DISEÑO]:** la carga **no es plana**. Las semanas 0–3 concentran ~20 h de un solo cliente; las semanas 4–13 consumen ~2 h/semana. Es decir:

> **El cuello de botella no es sostener clientes: es arrancarlos.** Se pueden sostener muchos clientes en régimen, pero solo se pueden **iniciar dos o tres por mes** sin degradar la calidad del arranque —que es justamente donde se juega la adopción—.

**Consecuencias de política [DISEÑO]:**
1. **Escalonar arranques.** Nunca vender un lote de clientes con inicio simultáneo. Calendario de cohortes con arranques desfasados.
2. **El piso de precio se calcula así:** `precio mínimo = (horas totales del programa × tarifa objetivo por hora) ÷ (1 − % de tiempo no facturable)`. El tiempo no facturable (venta, calificación, administración, contenido) es típicamente alto en consultoría individual y hay que incluirlo o el precio queda corto.
3. **Los add-ons son la palanca de margen**, porque no cargan el cuello de botella del arranque.
4. **Métrica interna a vigilar:** horas reales por cliente vs. estimadas. Si supera ~45 h, el diseño está mal parametrizado o el filtro de calificación está dejando pasar clientes equivocados.

---

### C3 — No existe definición de fracaso ni política de extensión

**La falla.** El blueprint dice que el programa es "extensible hasta 3 meses o más dependiendo de la evaluación", pero **no define qué gatilla la extensión, quién la paga, ni qué significa no graduar**. Este es el hueco por donde se desangran los servicios de acompañamiento: clientes que se extienden indefinidamente sin pagar, por culpa difusa.

Además, la "graduación" carece de umbral numérico: *"racha de revisiones sostenidas y mejora contra línea base"* no es un criterio, es una opinión.

**Corrección [DISEÑO] — umbral de graduación y árbol de decisión al día 90.**

**Criterio de graduación (binario, declarado desde el día 0):**
> Gradúa quien cumpla **ambas** condiciones: (a) **8 de las últimas 10 revisiones semanales completadas** de forma autónoma (sin que el consultor la conduzca), y (b) **mejora medible en al menos 2** de las métricas duras contra línea base.

**Árbol de decisión si NO gradúa —según la causa, no según el ánimo:**

| Causa diagnosticada | Responsable | Política |
|---|---|---|
| El sistema quedó mal configurado / el canal de captura falló / el diseño no correspondía a su patrón operativo | **Consultor** | **Extensión sin cargo** hasta corregir. Es garantía de trabajo, no favor |
| El cliente no ejecutó lo acordado (no capturó, faltó a sesiones, no hizo revisiones) pese a sistema funcionando | **Cliente** | **Extensión pagada** (mes adicional a tarifa de retención) o cierre |
| Cambio de circunstancias del cliente (crisis, cambio de rol, salud) | **Ninguno** | **Pausa formal** con fecha de retoma, o cierre sin penalidad |
| El cliente no estaba en condiciones de tomar el programa (debió filtrarse antes) | **Consultor (filtro)** | Cierre honesto + devolución parcial. Y **corregir el filtro** |

**Por qué esta política protege doblemente [DISEÑO]:** el cliente sabe desde el día 0 que hay un estándar y que el consultor asume su parte; y el consultor no queda rehén de una extensión indefinida por incumplimiento ajeno. Además, el registro de causas de no-graduación es el insumo más valioso para mejorar el filtro (§A5).

---

### C4 — La promesa comercial es más fuerte que la evidencia que la sostiene

**La falla.** El blueprint dice en §16 —correctamente— que la automatización de una rutina semanal compleja en 90 días es **hipótesis no probada**. Pero la promesa de §2 afirma: *"En unos 90 días te la dejo instalada y funcionando sola."* **El documento se contradice a sí mismo**: promete como hecho lo que reconoce como supuesto.

**Por qué importa [HECHO].** La evidencia disponible da una mediana de ~66 días para hábitos **simples y diarios**, con rango de 18 a 254 días. Una revisión semanal en 90 días equivale a **~12 repeticiones**, muy por debajo de las decenas de repeticiones del estudio de referencia. La afirmación "funcionando sola" no tiene sustento; puede cumplirse en muchos casos, pero no puede prometerse.

**Corrección [DISEÑO] — atar la promesa a lo verificable, no a lo aspiracional.**

Promesa reformulada:
> "Todos los métodos de productividad terminan en una revisión semanal, y casi nadie la sostiene más de un mes. En 90 días te dejo el sistema cargado con tu trabajo real y la revisión sostenida por vos mismo —el estándar es 8 de las últimas 10 semanas, medido, no a ojo—. Si no llegamos y la falla es del sistema, sigo sin cobrarte hasta que llegue. Pagás mes a mes y el acompañamiento termina: el objetivo es que al mes 4 no me necesites."

Qué cambió y por qué:
- **"Funcionando sola" → umbral medible** (8/10). Se puede verificar y se puede prometer.
- **Se agrega la garantía condicionada** (§C3), que es lo que convierte la promesa en compromiso real en vez de eslogan.
- **Se mantiene el fin declarado**, ahora coherente con la retención opcional (§C1).

Esto es más fuerte comercialmente, no más débil: un umbral verificable con garantía vence a una promesa vaga.

---

## 3. Hallazgos ALTOS

### A1 — El modo de falla real no está cubierto: el cliente no toca el sistema entre llamadas

**La falla.** El programa asume que la llamada semanal sostiene el hábito. Pero el patrón de fracaso típico en acompañamiento es otro: **el cliente no toca el sistema en toda la semana y usa la llamada para ponerse al día con el consultor mirando.** Eso produce la ilusión de progreso —hay sesión, hay minuta— mientras el hábito nunca se instala, y termina en **dependencia**: al retirar el andamiaje, no queda nada.

El blueprint no tiene mecanismo de detección ni regla de conducta para este caso. Es, con diferencia, el hueco operativo más peligroso.

**Corrección [DISEÑO] — dos piezas nuevas.**

**(a) Telemetría de adopción como alerta temprana, no como métrica de cierre.** Señales pasivas, leídas del propio Notion, sin trabajo del cliente:

| Señal | Umbral de alerta |
|---|---|
| Días desde la última captura al Inbox | > 3 días |
| Días desde el último cambio de estado en `Acciones` | > 4 días |
| Ítems en Inbox sin procesar | > 7 días de antigüedad |
| Revisión semanal no cerrada | al día 2 posterior a la fecha pactada |

Al dispararse una alerta, **contacto asincrónico breve antes de la llamada** —no esperar a la sesión—. La intervención llega mientras la desviación es chica.

**(b) Regla de conducta en la sesión (la más importante):**
> **La llamada semanal no se usa para hacer la revisión que el cliente no hizo.** Si no la hizo, la sesión se dedica a diagnosticar por qué no la hizo y a remover ese obstáculo.

Sin esta regla, el consultor entrena dependencia y el programa fabrica su propio fracaso al día 90. Con ella, la sesión pasa de "ponerse al día" a "avanzar", que es donde está el valor.

---

### A2 — El diseño de medición es metodológicamente débil y contaminaría la prueba social

**La falla.** El blueprint mide "tiempo de recuperación de información" con *"prueba cronometrada puntual en sesión"*. Tiene cuatro problemas: (1) el cliente sabe que lo miden —efecto Hawthorne—; (2) es una sola observación, sin repetición; (3) la medición final ocurre sobre un sistema que él ayudó a construir y con el consultor presente; (4) no hay grupo de control, así que **la mejora observada no es atribuible limpiamente al sistema**.

Si los casos de estudio (§12 del blueprint) se construyen sobre mediciones así, la prueba social queda expuesta a la primera objeción técnica de un prospecto exigente.

**Corrección [DISEÑO] — protocolo de medición endurecido.**

1. **Batería fija, no prueba única.** Definir **5 búsquedas reales** en el diagnóstico (documentos, compromisos, datos que él realmente necesita). Cronometrar las mismas 5 al día 90. **El cliente no conoce de antemano cuáles serán** en la medición final.
2. **Registrar los fallos, no solo los tiempos.** "No encontrado en 3 minutos" es un dato más elocuente que un promedio y sobrevive mejor al escrutinio.
3. **Tres puntos de medición, no dos.** Línea base (semana 0) → **post-instalación (semana 3)** → graduación (día 90). Esto separa **efecto del sistema** (delta 0→3) de **efecto del hábito** (delta 3→90). Es el cambio que más credibilidad agrega: convierte una mejora global difusa en dos historias distinguibles.
4. **Complementar con telemetría pasiva** (§A1), que no depende de que el cliente sepa que lo miden.
5. **Lenguaje honesto en los casos de estudio:** "mejora observada en un diseño pre-post sin grupo de control". Un prospecto serio valora esa precisión; un prospecto que no la valora probablemente no pasa el filtro.

---

### A3 — Confidencialidad no tratada, y es bloqueante para el Segmento 2

**La falla.** El Segmento 2 son abogados, contadores y servicios documentales. Su información es de **terceros** —los clientes de su cliente— y frecuentemente está sujeta a secreto profesional. El blueprint propone (a) alojar su trabajo en Notion y (b) capturar por **WhatsApp con transcripción por IA**, sin ningún tratamiento de confidencialidad, retención de datos, ni de qué toca el consultor.

Esto no es un detalle legal menor: **es un motivo de rechazo directo por parte del segmento más rentable**, y un riesgo real si algo sale mal.

**Corrección [DISEÑO] — principio de arquitectura: el sistema gestiona compromisos y punteros, no contenido confidencial.**

1. **Los documentos se quedan donde ya están** (Drive, sistema del estudio). Notion **referencia** mediante enlaces; no aloja el expediente. Beneficio doble: elimina el riesgo y reduce drásticamente el trabajo de migración.
2. **Regla de captura:** se captura el **recordatorio**, no el dato sensible. "Preparar descargo caso Pérez" —no los hechos del caso—. Esto se entrena explícitamente en la semana 1.
3. **Acuerdo de confidencialidad firmado antes del diagnóstico**, más una **política de datos** de una página: a qué accede el consultor, por cuánto tiempo, qué pasa al terminar (revocación de accesos documentada en el acta de graduación).
4. **Transparencia sobre el canal de captura:** qué servicio procesa la transcripción y dónde. Si el cliente lo rechaza, ofrecer **captura alternativa sin IA** (nota de voz a texto local, o captura por formulario). El canal es importante, pero no puede ser innegociable para este segmento.
5. **El Segmento 3 (médico) refuerza la regla:** el blueprint ya lo acota a "flujos administrativos sin datos clínicos". Esa restricción debe ser **contractual y explícita**, no una nota.

---

### A4 — El taller de empresa contradice la tesis del propio programa

**La falla.** El programa se vende sobre una tesis: **la formación sin seguimiento no instala el hábito**; por eso el producto es el acompañamiento de 90 días. Pero el blueprint propone un taller de empresa donde *"cada asistente sale con su propia captura, su agenda y su revisión"* —es decir, **vende en formato grupal y puntual exactamente lo que el programa afirma que no funciona**. Si el taller funciona, el programa es innecesario; si el programa es necesario, el taller no cumple lo que promete.

Hay un segundo error, factual: el blueprint dice *"con rotación cada 90 días, el taller es la única fuente de volumen repetible"*. **Una empresa no rota talleres cada 90 días.** La repetibilidad no está fundada.

**Corrección [DISEÑO] — el taller no instala: diagnostica y activa. Es el filtro de calificación a escala.**

- **Qué entrega:** un **diagnóstico grupal** —cada asistente sale con su línea base personal, el mapa de dónde vive su información y una captura funcionando— más una primera revisión guiada en vivo. Es un **Discover colectivo**, no un mini-programa.
- **Qué NO promete:** hábito instalado. Se dice explícitamente en el taller: *"esto que hicimos hoy se cae en tres semanas si nadie te sigue; eso es lo que resuelve el programa."* Honesto y, a la vez, el mejor argumento de venta posible.
- **Su función real en el negocio:** genera **pipeline calificado** —quienes salen del taller ya tienen línea base tomada y saben en qué estado están— y produce **datos agregados** (útiles para prueba social sin exponer individuos).
- **De dónde viene la repetibilidad** [DISEÑO]: de **nuevas empresas** y de **nuevas cohortes dentro de la misma empresa** (áreas distintas, incorporaciones), no de rotación automática. Corregir la afirmación en el material comercial.

---

### A5 — El filtro de calificación no tiene umbrales, y un filtro sin umbrales no filtra

**La falla.** El filtro enumera dimensiones correctas ("capacidad económica", "claridad de flujos", "tamaño del equipo") pero **sin un solo criterio operacionalizable**. En la práctica, un filtro así se dobla frente a un prospecto simpático o a un mes flojo de ventas —que es exactamente cuando más importa que no se doble—.

**Corrección [DISEÑO] — criterios binarios, verificados antes de la propuesta.**

| Dimensión | Criterio de aceptación | Cómo se verifica |
|---|---|---|
| **Patrón operativo** | ≥5 frentes/clientes/expedientes activos simultáneos | Se enumeran en la llamada |
| **Fragmentación** | Información viviendo en ≥3 lugares distintos | Inventario declarado |
| **Dolor declarado** | Menciona espontáneamente compromisos caídos o búsqueda de información | Pregunta abierta, sin sugerir |
| **Disponibilidad** | Declara ≥2 h/semana para el programa (sesión + revisión) | Pregunta directa |
| **Capacidad económica** | Confirma rango de presupuesto **antes** de recibir propuesta | Pregunta directa de presupuesto |
| **Expectativa correcta** | Acepta el reencuadre (no busca "aprender Notion" ni "que le ordenen la empresa") | Reencuadre dicho en voz alta y confirmado |
| **(Add-on organización)** | Patrocinador ejecutivo nombrado, con cargo y compromiso de participación | Nombre y cargo confirmados por escrito |

**Regla dura [DISEÑO]:** **falla uno, no se emite propuesta.** Y registrar todo rechazo con su causa: ese registro es lo que permite ajustar los umbrales con datos en vez de con intuición.

**Falla relacionada, no considerada en el blueprint:** el diagnóstico puede revelar que **el cliente no necesita el programa**. Debe existir esa salida —informe entregado, sin venta— y debe estar en el guion. Es lo que hace que el diagnóstico sea un producto honesto y no un embudo disfrazado.

---

## 4. Hallazgos MEDIOS

### M1 — "Estandarizado e inflexible" vs. "adaptado al segmento": la contradicción se resuelve con un nivel intermedio
**Falla.** El blueprint promete a la vez entrega inflexible y adaptación por patrón operativo. Dicho así, se contradice.
**Corrección [DISEÑO]:** distinguir tres niveles. **El proceso de entrega es inflexible** (4 fases, gates, firmas, límites de revisión). **La configuración es paramétrica**: existe un catálogo cerrado de **perfiles por segmento** (Multi-cliente / Expedientes) con sus vistas y propiedades predefinidas. **Todo lo que no esté en el catálogo es add-on.** No es "a medida": es **parametrizado**. Esta distinción debe estar en el material comercial, porque es la que sostiene el margen.

### M2 — Dependencia total de Notion, sin plan de contingencia
**Falla.** Todo el sistema vive en una herramienta de terceros con su propio pricing y roadmap. Un cambio de precios o de producto impacta a toda la cartera; el blueprint no lo menciona.
**Corrección [DISEÑO]:** (a) **exportabilidad garantizada** —la estructura documentada en un archivo independiente de Notion, de modo que el sistema sea reconstruible—; (b) **no colocar lógica crítica** exclusivamente en automatizaciones propietarias no exportables; (c) **declarar el riesgo al cliente** al inicio (el costo de la licencia es suyo y puede variar). Convertir una dependencia oculta en un riesgo declarado también reduce el reclamo posterior.

### M3 — El ROI monetario sigue siendo riesgoso incluso con la tarifa declarada por el cliente
**Falla.** La corrección previa —"que el cliente declare su tarifa"— reduce la intrusión pero **no elimina el problema**: el número declarado puede estar inflado y, si alimenta un caso de estudio, la prueba social queda construida sobre una cifra no auditable.
**Corrección [DISEÑO], más estricta:** **las horas son la métrica pública; la conversión a dinero es cálculo privado del cliente y nunca material de marketing.** Los casos de estudio publican horas recuperadas, reducción de herramientas paralelas y aceleración de ciclos. Cero cifras monetarias. Se pierde un titular llamativo y se gana algo más valioso: cifras que resisten escrutinio.

### M4 — El co-selling con Notion está planificado sin verificar elegibilidad
**Falla.** El blueprint lo da por disponible ("mapeo con representantes regionales", "portal de partners"). **No está verificado** que el programa de partners admita a un consultor individual, ni que exista cobertura o representantes asignados para Bolivia.
**Corrección [DISEÑO]:** marcarlo **[NO VERIFICADO]** y convertirlo en una tarea de comprobación previa —requisitos de admisión, cobertura regional, obligaciones del partner— **antes** de que aparezca en cualquier plan. No construir estrategia de mediano plazo sobre un canal cuya existencia no se confirmó.

### M5 — La línea base se toma antes de la instalación, pero la comparación mezcla dos efectos
Ya corregido en **§A2.3** (tres puntos de medición). Se registra aquí porque afecta también al material comercial: permite decir *"el sistema te dio esto; el hábito te dio esto otro"*, que es más creíble que un único número global.

### M6 — Los add-ons no tienen criterio de activación, salvo RevOps
**Falla.** Solo el add-on de automatización dice "solo si la evaluación lo justifica". Los demás quedan a discreción, lo que abre la puerta a venderlos por conveniencia y no por necesidad —erosionando la confianza que el resto del diseño construye—.
**Corrección [DISEÑO]:** cada add-on necesita un **gatillo objetivo** documentado, por ejemplo: *auditoría de adopción* → se ofrece solo si la telemetría muestra caída de uso post-graduación; *organización hasta 12* → solo con patrocinador confirmado y ≥3 personas ya graduadas individualmente; *RevOps* → solo si el diagnóstico identificó ≥2 sistemas con trasvase manual frecuente. Sin gatillo cumplido, no se ofrece.

---

## 5. Piezas que faltaban por completo

Cuatro elementos ausentes en el blueprint, sin los cuales el servicio no es operable [DISEÑO]:

1. **Modelo de capacidad y piso de precio** → §C2. Sin esto no hay decisión de precio defendible.
2. **Definición de graduación y árbol de fracaso** → §C3. Sin esto no hay cierre limpio de ningún cliente.
3. **Telemetría de adopción + regla de conducta en sesión** → §A1. Sin esto el programa puede fabricar dependencia y descubrirlo el día 90.
4. **Política de confidencialidad y datos** → §A3. Sin esto, el Segmento 2 es inaccesible.

Una quinta, de gestión [DISEÑO]: **registro de causas de no-graduación y de rechazo en el filtro.** Es el único mecanismo de mejora continua del servicio, y su costo es casi nulo si se instrumenta desde el primer cliente.

---

## 6. Cambios concretos a aplicar al blueprint

| # | Sección del blueprint | Cambio |
|---|---|---|
| 1 | §2 Promesa | Reemplazar "funcionando sola" por el **umbral 8/10 medido** + garantía condicionada |
| 2 | §9 Comercial | Retención = **infraestructura**, opt-in **post-graduación**, nunca automática |
| 3 | §9 Comercial | Diagnóstico pagado aparte; programa en **3 cuotas**; alcance congelado ≠ pago congelado |
| 4 | **Nueva** | **Modelo de capacidad**: ~34–42 h/cliente; cuello de botella en el arranque; **máx. 2–3 arranques/mes**; fórmula de piso de precio |
| 5 | **Nueva** | **Criterio de graduación 8/10 + 2 métricas** y **árbol de fracaso por causa** (4 rutas) |
| 6 | §5 Cronograma | Agregar **telemetría de adopción** con umbrales y **regla: la llamada no reemplaza la revisión** |
| 7 | §8 Métricas | **Tres puntos** de medición (0 / semana 3 / día 90); batería fija de 5 búsquedas; registrar fallos |
| 8 | §8 ROI | **Horas como métrica pública**; conversión monetaria privada del cliente; fuera del marketing |
| 9 | §6/§7 Segmento 2 | **Notion referencia, no aloja**; captura de recordatorio, no de dato; NDA + política de datos; captura alternativa sin IA |
| 10 | §10 Taller | Reposicionar como **diagnóstico grupal y filtro a escala**, no instalación; corregir la afirmación de "rotación cada 90 días" |
| 11 | §11 Filtro | **Umbrales binarios** verificados antes de propuesta; falla uno → no hay propuesta; **salida "no te vendo"** |
| 12 | §13 Add-ons | **Gatillo objetivo** documentado para cada uno |
| 13 | §14 Co-selling | Marcar **[NO VERIFICADO]**; comprobar elegibilidad antes de planificar |
| 14 | §7 Notion | **Riesgo de dependencia declarado** + exportabilidad garantizada |
| 15 | §4/§7 | Explicitar: proceso **inflexible**, configuración **paramétrica** por catálogo cerrado |

---

## 7. Lo que sigue sin resolverse (y requiere campo, no análisis)

1. **La curva guiado → co-ejecutado → autónomo** es la hipótesis central y sigue sin evidencia. Los primeros clientes son quienes la prueban [HIPÓTESIS].
2. **La fracción real de casos "complejos"** en la carga de un cliente típico. Define si el Double Diamond es pilar o capacidad ocasional, y por lo tanto cuánto peso darle en el discurso comercial [HIPÓTESIS].
3. **Disposición a pagar y retención en Bolivia/LATAM.** Toda la evidencia y los precios de referencia disponibles son anglosajones o de España y **no transfieren automáticamente** [HECHO sobre el límite].
4. **Si el umbral 8/10 es el correcto.** Puede resultar demasiado exigente o demasiado laxo; se calibra con los primeros 5–10 clientes, y debe declararse como versión 1 del estándar [HIPÓTESIS].
5. **Elegibilidad real del programa de partners de Notion** [NO VERIFICADO].
6. **Costo operativo y confiabilidad del canal WhatsApp→IA→Notion** a escala de cartera: quién lo mantiene, qué pasa cuando falla, y si su costo por cliente erosiona el margen [ESTIM pendiente].

---

## 8. Síntesis del análisis

El diseño metodológico no necesita cambios: la fusión GTD + PARA + Double Diamond, con el Double Diamond como arco de entrega y el "según el caso" como regla de ruteo, es coherente y defendible.

**Los tres arreglos que más valor agregan, en orden:**

1. **Resolver la contradicción "dejá de necesitarme" vs. retención** separando graduación del hábito (termina) de mantenimiento del sistema (opcional, posterior). Sin esto, el prospecto más inteligente desconfía.
2. **Hacer la aritmética de capacidad** y descubrir que **el cuello de botella es el arranque, no el sostenimiento** —lo que cambia cómo se vende (arranques escalonados) y fija por primera vez un piso de precio defendible.
3. **Cubrir el modo de falla real** —el cliente que no toca el sistema entre llamadas— con telemetría de alerta temprana y la regla de que la sesión no reemplaza la revisión. Sin esto, el programa puede producir dependencia y enterarse recién el día 90.

Y una corrección de integridad que vale por sí sola: **calibrar la promesa a un umbral medible con garantía condicionada.** Es más honesta y, además, comercialmente más fuerte que la versión aspiracional.
