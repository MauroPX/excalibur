# 🏗️ ESTRUCTURA demotutoriales

# 🏗️ ESTRUCTURA COMPLETA PARA DEMOTUTORIAL GUIADO BBVA COLOMBIA

---

## 🌐 NIVEL 0: METADATOS GENERALES DEL DEMO (obligatorio antes de cualquier escena)

• FUNCIONALIDAD PRINCIPAL: \[Ej: “Activar llave Bre-B”\]    
• SEGMENTO DE NEGOCIO: \[Corporativo/Personas | Empresa | Banca Sostenible | Banca Joven | Alto Valor\]    
• GEMA DE COLOR: \[Serene Blue | Canary | Lime | Purple | Coral\] → según segmento    
• SENTIMIENTO “HACER SENTIR” PRINCIPAL: \[Respaldo | Menor incertidumbre | Protagonismo | Ilusión por avanzar\]    
• DURACIÓN TOTAL ESTIMADA: \[≤ 60 segundos → máximo 6–7 pasos × ≤10s cada uno\]    
• TIPO DE MODELO: \[Pasivo (guía visual) | Activo (requiere interacción para avanzar)\]    
• INSUMO DE REFERENCIA: \[Nombre del documento, captura, Figma, etc.\]

---

## 🎬 NIVEL 1: INTRODUCCIÓN GLOBAL DEL DEMO

Propósito: establecer contexto, generar curiosidad, reducir ansiedad, vincular con el sentimiento “Hacer Sentir”.

### ✅ Componentes obligatorios:

🔳 ESCENA: INTRODUCCIÓN GLOBAL    
• TIPO: PORTADA    
• DURACIÓN: 8–10 segundos    
• SENTIMIENTO: \[ej: Ilusión por avanzar\]    
• FRAMING: Beneficio \> Acción

1️⃣ CAPA NARRATIVA (Panel Izquierdo)    
   • TÍTULO: ≤ 40 caracteres, ES-CO, cercano    
     Ej: “Activa tu llave Bre-B”    
   • DESCRIPCIÓN: ≤ 280 caracteres, con beneficio claro y tono empático    
     Ej: “Para enviar dinero al instante, activa tu llave Bre-B en dos pasos. Es rápido, seguro y ya está disponible.”

2️⃣ CAPA VISUAL (Panel Central)    
   • PANTALLA BASE: Pantalla de inicio del flujo (ej: “Mis Productos”)    
   • FOCO VISUAL: Ninguno (vista general)    
   • IMAGEN DE REFERENCIA: \[Nombre o descripción del asset\]

3️⃣ CAPA INTERACTIVA (Coach Mark)    
   • TÍTULO TOOLTIP: “Comienza el tutorial”    
   • DESCRIPCIÓN: “Te guiamos paso a paso. ¡Empecemos\!”    
   • TRIGGER: Tap en botón “Siguiente”    
   • COLOR TOOLTIP: Gema del segmento (fondo) \+ Electric Blue (\#001391) texto    
   • FLECHA: Canary (\#ffe761)

4️⃣ DISEÑO DE INTERACCIÓN    
   • Navegación: botones “Regresar” / “Siguiente” visibles    
   • Motion:    
     \- Bento entra \*\*izquierda → derecha \+ abajo → arriba\*\*    
     \- Oscilación vertical ligera en todo el panel    
     \- Texto: animación palabra por palabra (ease out entrada)    
   • Accesibilidad: contraste ≥ 4.5:1, fuente ≥ 16px

5️⃣ DISEÑO INSTRUCCIONAL    
   • Claridad y confianza: lenguaje cercano (“Ya llegó Bre-B”)    
   • Propuesta de valor explícita (“enviar dinero por transferencias inmediatas”)    
   • Continuidad: si aplica, mención a funcionalidades existentes (“Mientras tanto, sigue enviando como siempre”)

6️⃣ VALIDACIÓN    
   • ✅ Léxico ES-CO: sin “móvil”, “pinchar”, “vídeo”, “vosotros”    
   • ✅ H1 \< 40 | P \< 280 | Tooltip implícito    
   • ✅ Sentimiento explícito    
   • ✅ Motion compatible (sin fade, sin rotación 2D/3D)

### ---

## 📦 NIVEL 2: INTRODUCCIÓN DE BLOQUE (si aplica)

Aplica solo si el demo cubre múltiples fases lógicas (ej: 1\. Activar → 2\. Enviar).

🔳 ESCENA: INTRODUCCIÓN DE BLOQUE    
• OBJETIVO DEL BLOQUE: \[Ej: “Enviar tu primer pago con Bre-B”\]    
• FRAMING: Beneficio \> Acción o Empatía \+ Solución    
• SENTIMIENTO: \[ej: Protagonismo\]

1️⃣ CAPA NARRATIVA    
   • TÍTULO: “Ahora, envía tu primer pago”    
   • DESCRIPCIÓN: “Con tu llave activa, envía dinero al instante a cualquier contacto. Sin esperas, sin complicaciones.”

2️⃣ CAPA VISUAL    
   • PANTALLA BASE: Pantalla “Transferencias”    
   • FOCO VISUAL: Botón “Enviar con Bre-B”

3️⃣ CAPA INTERACTIVA    
   • TÍTULO TOOLTIP: “Selecciona ‘Enviar con Bre-B’”    
   • TRIGGER: Tap

(Notas de motion, accesibilidad y validación idénticas a Nivel 1\)

---

## 🔁 NIVEL 3: ESCENAS TÉCNICAS (PASOS)

Una por acción clave identificada. Máximo 1 acción por paso.

### Por cada paso:

🔳 ESCENA: PASO \[N\]    
• TIPO: PASO    
• DURACIÓN: ≤ 10 segundos    
• SENTIMIENTO: \[según contexto: Menor incertidumbre para formularios, Respaldo para errores, etc.\]    
• FRAMING: \[Beneficio / Empatía / Claridad\]

1️⃣ CAPA NARRATIVA    
   • TÍTULO: ≤ 40 caracteres    
   • DESCRIPCIÓN: ≤ 280 caracteres, con framing aplicado    
     Ej (Claridad): “Primero, ingresa tu número de cédula para verificar tu identidad.”

2️⃣ CAPA VISUAL    
   • PANTALLA BASE: \[Descripción exacta según insumo\]    
   • FOCO VISUAL: \[Elemento específico: campo, botón, ícono\]    
   • IMAGEN: \[Nombre del asset\]

3️⃣ CAPA INTERACTIVA    
   • TÍTULO TOOLTIP: verbo imperativo ES-CO (ej: “Ingresa tu cédula”)    
   • DESCRIPCIÓN: ≤ 140 caracteres    
   • TRIGGER: \[Tap / Clic / Escribir / Deslizar\]    
   • COLOR: Gema (fondo) \+ Electric Blue (texto)    
   • FLECHA: Canary

4️⃣ DISEÑO DE INTERACCIÓN    
   • Modelo: preferiblemente \*\*activo\*\* (avanza solo tras interacción correcta)    
   • Feedback: cambio de estado (ej: campo resaltado, check verde)    
   • Motion:    
     \- Oscilación vertical ligera    
     \- Entrada Bento: izq→der \+ abajo→arriba    
     \- Texto: línea por línea (ease out)

5️⃣ DISEÑO INSTRUCCIONAL    
   • Chunking: una sola acción    
   • Proactividad: anticipa fricciones (“Si no ves el campo, desliza hacia arriba”)    
   • Lenguaje centrado en beneficio: “Para que tus cobros sean más profesionales…”

6️⃣ VALIDACIÓN    
   • ✅ H1 \< 40 | P \< 280 | Tooltip \< 140    
   • ✅ Léxico ES-CO    
   • ✅ Sentimiento y framing explícitos    
   • ✅ Duración ≤ 10s

### 

### ---

## ✅ NIVEL 4: CIERRE DE BLOQUE (si aplica)

🔳 ESCENA: CIERRE DE BLOQUE    
• TIPO: FEEDBACK DE ÉXITO    
• SENTIMIENTO: Respaldo o Ilusión por avanzar

1️⃣ CAPA NARRATIVA    
   • TÍTULO: “¡Listo\! Tu llave está activa”    
   • DESCRIPCIÓN: “Ya puedes enviar dinero al instante. ¿Quieres hacer tu primer pago ahora?”

2️⃣ CAPA VISUAL    
   • PANTALLA BASE: Pantalla de confirmación (check verde)    
   • FOCO VISUAL: CTA “Hacer un pago”

3️⃣ CAPA INTERACTIVA    
   • TÍTULO TOOLTIP: “Haz tu primer pago”    
   • TRIGGER: ‘mensaje instruccional dirigido a la acción ej Tap”

---

## 🎉 NIVEL 5: CIERRE GLOBAL DEL DEMO

Propósito: celebrar logro, reforzar confianza, cerrar el ciclo emocional.

🔳 ESCENA: CIERRE GLOBAL    
• TIPO: CIERRE    
• DURACIÓN: 8–10 segundos    
• SENTIMIENTO: Ilusión por avanzar \+ Respaldo

1️⃣ CAPA NARRATIVA    
   • TÍTULO: “¡Ya eres parte de Bre-B\!”    
   • DESCRIPCIÓN: “Ahora puedes enviar y recibir dinero al instante. Siempre estamos aquí para lo que necesites.”

2️⃣ CAPA VISUAL    
   • PANTALLA BASE: Pantalla de éxito final (fondo Sand \#F7F8F8, check grande, ícono Bre-B)    
   • FOCO VISUAL: Ninguno

3️⃣ CAPA INTERACTIVA    
   • TÍTULO TOOLTIP: “Finalizar tutorial”    
   • DESCRIPCIÓN: “Vuelve a la app cuando quieras”    
   • TRIGGER: Tap en “Finalizar”

4️⃣ DISEÑO DE INTERACCIÓN    
   • Motion: oscilación ligera, texto con ease out    
   • Despedida empática, sin jerga

5️⃣ VALIDACIÓN    
   • ✅ Lenguaje cercano    
   • ✅ Celebración sin exceso    
   • ✅ Coherencia con sentimiento inicial

---

## 🎨 ESPECIFICACIONES DE DISEÑO OBLIGATORIAS

### Paleta de color:

* Fondo general: BBVA Sand (\#F7F8F8)  
* Texto principal: BBVA Electric Blue (\#001391)  
* Flecha y acento: Canary (\#ffe761)  
* Tooltip: Gema del segmento (fondo) \+ Electric Blue (texto)

### Tipografía:

* Títulos: Tiempos Headline  
* Cuerpo: Benton Sans  
* Tamaño: ≥ 16px

### Motion (BBVA\_MANUAL\_MOTION\_COM):

* Dirección: izquierda → derecha \+ abajo → arriba  
* Curvas:  
  * Entrada: ease out  
  * Salida: ease in  
* Oscilación vertical ligera en todos los elementos estáticos  
* Prohibido:  
  * Fade in/out  
  * Rotación 2D/3D  
  * Escalado no proporcional  
  * Deformación del Bento

---

## ✅ CHECKLIST FINAL DE CALIDAD (AUTOMATIZABLE)

## \[ \] Léxico ES-CO (sin palabras prohibidas)  

## \[ \] Título \< 40 caracteres  

## \[ \] Descripción narrativa \< 280 caracteres  

## \[ \] Tooltip \< 140 caracteres  

## \[ \] Cada paso ≤ 10 segundos  

## \[ \] Sentimiento “Hacer Sentir” explícito en cada escena  

## \[ \] Framing aplicado según contexto  

## \[ \] Gema de color asignada por segmento  

## \[ \] Motion compatible (sin fade, sin rotación)  

## \[ \] Accesibilidad WCAG cumplida  

## \[ \] Navegación “Regresar/Siguiente” visible  

## \[ \] Jerarquía visual clara (flecha Canary, tooltip Gema)

## ---

Esta arquitectura garantiza que cualquier demotutorial producido:

* Sea emocionalmente alineado con el posicionamiento de BBVA,  
* Reduzca la ansiedad y construya confianza,  
* Respete la identidad visual y de motion,  
* Se pueda escalar a cientos de flujos sin pérdida de calidad,  
* Y cumpla con estándares técnicos, narrativos e inclusivos.

# ✅ Especificación obligatoria para el TRIGGER

### ✅ Especificación obligatoria para el TRIGGER

Según los documentos de referencia —especialmente Construccion demos tutoriales \- coach mark.docx y el uso de Content Framing del documento “Hacer Sentir”—, el TRIGGER debe cumplir:

#### 1\. Formato lingüístico

* Verbo imperativo en español de Colombia (ES-CO)  
  Ej: “Selecciona”, “Ingresa”, “Desliza”, “Activa”  
  ❌ Prohibido: “Pinchar”, “Introduce”, “Haga clic”, “Presione”

#### 2\. Claridad funcional

* Debe describir exactamente la acción esperada  
  Ej:  
  * ✅ “Tap en ‘Activar Bre-B’”  
  * ❌ “Toca aquí” (vago, no instruccional)

#### 3\. Concordancia con el tooltip

* El TRIGGER debe coincidir con el Título del Tooltip de la Capa Interactiva  
  Ej:  
  * Título Tooltip: “Activa tu llave Bre-B”  
  * TRIGGER: “Tap en ‘Activar Bre-B’”

#### 4\. Tipo de interacción explícito

* Siempre debe incluir el modo de interacción:  
  * En mobile: “Tap”  
  * En web: “Clic”  
  * En formularios: “Escribe tu cédula”  
  * En listas: “Desliza para ver más”

---

### 📋 Plantilla estandarizada para TRIGGER

#### TRIGGER: \[Tap / Clic / Escribe / Desliza\] en “\[Texto exacto del elemento en UI\]”

#### Ejemplos válidos (100% alineados con ES-CO y documentos):

* TRIGGER: Tap en “Activar Bre-B”  
* TRIGGER: Escribe tu número de cédula  
* TRIGGER: Clic en “Confirmar con clave”  
* TRIGGER: Desliza hacia arriba para ver más opciones

---

### 🔒 Validación automática (checklist)

TRIGGER: \[Tap / Clic / Escribe / Desliza\] en “\[Texto exacto del elemento en UI\]”  
---

Con esta regla, cada TRIGGER se convierte en una instrucción operativa clara, accesible y alineada con la identidad funcional y lingüística de BBVA Colombia, transformando la guía pasiva en una invitación a la acción —y acercándonos al modelo activo recomendado en los documentos.

# Posicionamiento central

#### 1\. Posicionamiento central

“Acompañamos a quienes quieren avanzar, alimentando su confianza, para que se sientan más capaces de decidir y avancen con ilusión.”

* No es solo “acompañar” (lo básico en banca), sino acompañar con mirada proyectiva: enfocada en los proyectos de vida de las personas.  
* **El demotutorial no debe solo explicar una funcionalidad, sino empoderar para la toma de decisión y conectar con un proyecto personal o empresarial.**

#### 2\. Los 5 sentimientos esenciales están respaldados operativamente

El documento confirma y contextualiza los 4 sentimientos del framework “Hacer Sentir” \+ el Sentimiento Core:

| Sentimiento | Vinculación con RCP |
| :---- | :---- |
| Respaldo | Eje Respaldo: “Estamos en los momentos clave... sin juzgar... como bálsamo ante problemas.” |
| Menor incertidumbre | Eje Control: “Claridad, personalización, adaptación... para tomar decisiones con confianza.” |
| Protagonismo | Eje Control \+ Avance: “Escuchar, anticipar, adaptar... hacer sentir que son ellos quienes deciden.” |
| Ilusión por avanzar | Eje Avance: “Reconocer logros, proponer próximos pasos, inspirar con soluciones alcanzables.” |
| Sentimiento Core: “Me siento capaz de decidir porque confío en mí” | Es el resultado emocional del Acompañamiento Proyectivo. Todo demotutorial debe apuntar a este estado. |

#### 3\. Los 5 atributos de marca que deben reflejarse en el tono y contenido

Estos deben guiar la redacción y framing:

| Atributo | Implicación para el demotutorial |
| :---- | :---- |
| Marca aliada | Lenguaje cercano, no corporativo. “Estamos de tu lado.” |
| Marca consecuente | Cumplir lo prometido: si decimos “en 2 pasos”, son 2 pasos. Coherencia total. |
| Marca sorprendente | Ir más allá de lo esperado: anticipar fricciones, ofrecer valor adicional (ej: “¿Sabías que puedes...?”). |
| Marca inspiradora | Enlazar la acción con un proyecto real: “Para que puedas viajar sin preocupaciones...” |
| Marca ilusionante | Celebrar micro-logros: “¡Ya activaste tu llave\! Ahora envía tu primer pago al instante.” |

#### 4\. Exigencias de RCP aplicables a demotutoriales

El documento establece que RCP no es solo comunicación, sino transformación de producto y experiencia. Por tanto, el demotutorial debe:

* Resolver experiencias negativas (eliminar fricciones, explicar errores).  
* Convertir experiencias neutras en positivas (ej: transformar “ingresa tu cédula” en “para proteger tu identidad, confirma tu cédula”).  
* Sorprender con valor diferencial (ej: “Con Bre-B, tus pagos llegan en segundos, no en días”).

#### 5\. Enfoque en “proyectos”, no en “productos”

* Evitar hablar de funcionalidades aisladas.  
* Siempre vincular con un proyecto:  
  * Bienestar presente: “Para disfrutar ese concierto sin preocupaciones...”  
  * Apuesta vital: “Para comprar tu primera casa, necesitas...”  
  * Hábitos y rutinas: “Para ahorrar sin pensar, activa esta regla...”  
  * Ruta vital: “Para vivir más sostenible, BBVA te ayuda a...”

#### 6\. Uso correcto del sujeto (refuerza identidad verbal)

* “Tú”: para dirigirse al usuario.  
* “Nosotros”: para acciones de BBVA.  
* “Yo”: solo en contextos de aceptación de términos (ej: “Yo acepto...”).  
* Evitar pasiva impersonal: “Se requiere confirmar la cédula” → incorrecto.  
  ✅ “Confirma tu cédula para continuar.”

---

### 🧩 Integración en la arquitectura de demotutoriales

Toda la arquitectura ya definida se refuerza y enriquece con estos principios:

| Componente | Actualización con Plan de Formaciones |
| :---- | :---- |
| Título \+ Descripción (Narrativa) | Debe vincular la acción con un proyecto de vida, no solo con una función. |
| Framing | Debe expresar uno o más atributos de marca (aliada, consecuente, etc.). |
| Sentimiento “Hacer Sentir” | Debe apuntar al Sentimiento Core: “capaz de decidir porque confío en mí”. |
| Lenguaje | Usar “tú”, evitar pasiva, redactar con asesoría sin manipulación.  |
| Cierre global | Celebrar el logro como paso hacia un proyecto mayor, no como fin en sí mismo. |

---

### ✅ Checklist de alineación con Plan de Formaciones

---

Con esta integración, la arquitectura de demotutoriales no solo cumple con normas técnicas y de motion, sino que encarna el alma del nuevo posicionamiento de BBVA.

# Prompt\_Ultima version

PROMPT MAESTRO ULTRA SENIOR – DEMOTUTORIALES BBVA COLOMBIA  
Versión: 1.6 – Certificada, Dinámica, Implícita y Portable  
Propósito: Crear, auditar o enriquecer guiones de demotutoriales tipo coach mark, 100% alineados con “Acompañamiento Proyectivo”, RCP, “Hacer Sentir”, especificaciones de coach mark y motion BBVA.  
Eres un especialista sénior en narrativa de experiencia de usuario para BBVA Colombia, con dominio de “Acompañamiento Proyectivo”, RCP, “Hacer Sentir”, léxico ES-CO, y las especificaciones técnicas de coach marks y motion (BBVA\_MANUAL\_MOTION\_COM.pdf). Tu tarea es generar, enriquecer o auditar un guion de demotutorial en modo indicado (crear, enriquecer, auditar), respetando estrictamente la siguiente estructura y reglas.  
ESTRUCTURA NARRATIVA OBLIGATORIA  
El guion debe seguir este orden:

1. Introducción Global (TIPO: PORTADA)  
2. Hoja de Ruta / Mapa del Tesoro (TIPO: HOJA DE RUTA)  
3. Pasos Técnicos (TIPO: PASO | 1 por acción clave)  
4. (Opcional) Cierre de Bloque (TIPO: CIERRE)  
5. Cierre Global (TIPO: CIERRE GLOBAL)

FORMATO DE SALIDA

* Inicia siempre con: \# TOTAL DE PÁGINAS: \[N\]  
* Cada página \= una escena, en formato vertical, sin tablas, sin viñetas, solo texto lineal.  
* Solo las escenas de tipo “PASO” incluyen campos técnicos completos.  
* Introducciones, Hoja de Ruta y Cierres: solo TÍTULO \+ DESCRIPCIÓN.

FORMATO POR ESCENA  
PÁGINA \[N\] / \[TOTAL\]  
TIPO: \[PORTADA | HOJA DE RUTA | PASO | CIERRE | CIERRE GLOBAL\]  
TÍTULO: \[≤ 40 caracteres, ES-CO, cercano\]  
DESCRIPCIÓN: \[≤ 280 caracteres. Transmite de forma natural y contextualizada (sin mencionarlas) al menos una de estas dimensiones: bienestar presente, apuesta vital, hábitos y rutinas, ruta vital. Evita al 100% las frases literales como “ruta vital”, “apuesta vital”, “legado” o “proyecto de vida”. En su lugar, usa situaciones concretas, consecuencias reales o decisiones empoderadoras que ejemplifiquen esos conceptos.\]  
\[SOLO SI TIPO \= PASO:\]  
PANTALLA BASE: \[Descripción exacta de la UI basada en insumo\]  
FOCO VISUAL: \[Elemento específico resaltado\]  
TÍTULO TOOLTIP: \[Verbo imperativo ES-CO, ≤ 3 palabras\]  
TRIGGER: \[Mensaje en ES-CO: qué hace el usuario \+ por qué. Prohibido: “Clic aquí”, “Selecciona el botón”. Ej: “Confirma tu cédula para proteger tu identidad y continuar con total seguridad.”\]  
SENTIMIENTO: \[Respaldo / Menor incertidumbre / Protagonismo / Ilusión por avanzar\]  
FRAMING: \[Beneficio \> Acción / Empatía \+ Solución / Claridad Radical\]  
DURACIÓN: ≤ 10s  
MOTION: Bento entra izquierda → derecha \+ abajo → arriba | Oscilación vertical ligera | Texto: palabra por palabra (títulos) o línea por línea (párrafos) (ease out)  
COLOR TOOLTIP: \[Gema del segmento\] fondo | Electric Blue (\#001391) texto  
FLECHA: Canary (\#ffe761)  
ACCESIBILIDAD: ≥ 16px | Contraste ≥ 4.5:1 | Compatible con lectores de pantalla  
\[SOLO SI TIPO \= CIERRE GLOBAL:\]  
DESCRIPCIÓN: \[Termina con: “ \[CASO DE USO ALEATORIO contextualizado según segmento\] Me siento capaz de decidir porque confío en mí.”\]  
REGLAS DE CONTENIDO OBLIGATORIAS

* Léxico ES-CO:  
  ✅ Permitido: Celular, Computador, Ingresa, Plata, Cédula, Video  
  ❌ Prohibido: Móvil, Ordenador, Introduce, Vídeo, Pinchar, Os, Vosotros, Coger  
* Sujetos: “Tú” (usuario), “Nosotros” (BBVA), “Yo” (solo en aceptación de términos)  
* Hoja de Ruta: la DESCRIPCIÓN debe listar funcionalidades como parte narrativa (ej: “En 3 pasos: confirma tu identidad, activa tu llave Bre-B y envía tu primer pago al instante.”)  
* Gema por segmento:  
  • Empresa → Canary (\#ffe761)  
  • Alto Valor → Coral (\#ffb56b)  
  • Banca Joven → Purple (\#9694ff)  
  • Banca Sostenible → Lime (\#88e783)  
  • Corporativo/Personas → Serene Blue (\#85c8ff)  
* Caso de uso aleatorio (solo en CIERRE GLOBAL):  
  • Alto Valor → Inversiones internacionales, patrimonio, educación del círculo cercano, legado financiero

MODOS DE OPERACIÓN  
A. crear: Genera guion completo desde insumos. Aplica toda la estructura. Asigna gema por segmento.  
B. enriquecer: Mejora TRIGGER, DESCRIPCIÓN, FRAMING y conexión implícita con “Acompañamiento Proyectivo”. Nunca modifiques la lógica de pasos ni elimines escenas.  
C. auditar: Evalúa contra checklist (longitud, léxico, implícito de proyecto de vida, TRIGGER, gema, caso de uso, sentimiento core). Entrega informe con ✅ Cumplimientos, ⚠️ Advertencias, ❌ Errores críticos, 📌 Recomendaciones específicas por página.  
CLÁUSULA DE INMUTABILIDAD (OBLIGATORIA)  
Si el usuario ha generado un guion en partes (ej. “paso 1”, “paso 2”) y luego solicita “consolidar”, “entrega el guion completo” o similar, NO modifiques, resumas, reformules ni alteres de ninguna forma el texto de las escenas ya generadas. Conserva TÍTULO, DESCRIPCIÓN, TRIGGER y todos los campos técnicos tal como fueron entregados, incluso si hay inconsistencias menores. Solo agrega:

* El encabezado \# TOTAL DE PÁGINAS: \[N\]  
* Las escenas faltantes (si aplica)  
* El orden narrativo correcto  
  La reescritura solo está permitida si el usuario explícitamente solicita “enriquecer”, “mejorar” o “corregir”.

BASE NORMATIVA (IMPLÍCITA)

* Plan de Formaciones\_Maestro\_compressed.pdf  
* Construccion demos tutoriales \- coach mark.docx  
* “Hacer Sentir” español V.3\_WIP.pdf  
* BBVA\_MANUAL\_MOTION\_COM.pdf

# Gemas de color

#### **1\. Introducción y Filosofía del Sistema**

Diseño para la creación de demos tutoriales en BBVA. Su filosofía se basa en un principio dual:

* **Consistencia y Accesibilidad:** Todos los demos parten de una **Base Común** con colores neutros para garantizar la máxima legibilidad y una baja carga cognitiva.  
* **Relevancia Contextual:** Sobre esta base, se aplica una **Gema de Color** temática al elemento de guía principal (el tooltip). Cada gema está asociada a uno de los 5 segmentos estratégicos de la marca, comunicando visualmente el propósito del demo.

#### **2\. Anatomía de un Demo: Los Dos Componentes**

Todo demo creado con este sistema consta de dos partes:

**A. La Base Común (El Esqueleto)** Es la plantilla inalterable de todos nuestros demos. Garantiza que el 80% de la pantalla sea siempre consistente y accesible.

* **Fondo General**: **BBVA Sand (`#F7F8F8`)**. Base neutra y serena.  
* **Contraste Principal**: **BBVA Electric Blue (`#001391`)**. Para títulos, subtítulos y textos principales.  
* **Acento Visual**: **Canary (`#ffe761`)**. Exclusivamente para punteros e iconos de interacción que necesiten captar la atención.

**B. La Gema de Segmento (El Alma)** Es el componente variable que le da el "sabor" temático al demo. Se aplica **únicamente** al "Elemento Guía" (la caja explicativa o tooltip).

#### **3\. Catálogo Oficial de Gemas de Color**

A continuación, se detalla cada Gema, su segmento asociado y su especificación de color.

---

**Gema 1: Corporativo / Personas (La Gema Estándar)**

* **Segmento:** Comunicaciones generales, retail, y tutoriales no específicos de otro segmento.  
* **Caso de Uso:** Es la gema por defecto. Se usa para tutoriales de funcionalidades básicas como "consultar saldo", "hacer una transferencia", etc.  
* **Especificación del Elemento Guía:**  
  * `Fondo:` **BBVA Serene Blue (`#85c8ff`)**  
  * `Texto:` **BBVA Electric Blue (`#001391`)**

---

**Gema 2: Empresa**

* **Segmento:** Negocios, Autónomos, Pymes.  
* **Caso de Uso:** Para todos los demos orientados a productos y servicios de empresa, como TPVs, gestión de nóminas, o la app BBVA Empresas.  
* **Especificación del Elemento Guía:**  
  * `Fondo:` **Canary (`#ffe761`)**  
  * `Texto:` **BBVA Electric Blue (`#001391`)**

---

**Gema 3: Banca Sostenible**

* **Segmento:** Sostenibilidad y productos con impacto social/ambiental.  
* **Caso de Uso:** Para demos que expliquen cómo medir la huella de carbono, fondos de inversión verdes, o financiamiento de proyectos ecológicos.  
* **Especificación del Elemento Guía:**  
  * `Fondo:` **Lime (`#88e783`)**  
  * `Texto:` **BBVA Electric Blue (`#001391`)**

---

**Gema 4: Banca Joven**

* **Segmento:** Público joven y dinámico.  
* **Caso de Uso:** Ideal para tutoriales sobre cómo abrir una primera cuenta, compartir gastos, o funcionalidades populares entre los más jóvenes.  
* **Especificación del Elemento Guía:**  
  * `Fondo:` **Purple (`#9694ff`)**  
  * `Texto:` **BBVA Electric Blue (`#001391`)**

---

**Gema 5: Alto Valor**

* **Segmento:** Banca Privada, clientes premium y servicios de alto valor.  
* **Caso de Uso:** Para demos sobre herramientas de inversión avanzadas, gestión de patrimonio, o servicios exclusivos del segmento.  
* **Especificación del Elemento Guía:**  
  * `Fondo:` **Coral (`#ffb56b`)**  
  * `Texto:` **BBVA Electric Blue (`#001391`)**

# Estructura

### **Estructura**

El modelo utilizado es un "coach mark" o guía contextual superpuesta. Consiste en una pantalla de fondo que muestra el estado de la aplicación y, sobre ella, elementos que guían al usuario.

* **Panel Izquierdo (Contexto):** Establece el objetivo del paso actual del tutorial ("Funcionalidad / titulo").  
* **Panel Central (Simulación):** Muestra una imagen de la interfaz real de la funcionalidad, lo que familiariza al usuario con el entorno.  
* **Capa Interactiva (Guía):** Utiliza un recuadro con una flecha para enfocar la atención en un elemento específico de la interfaz ("Consulta y gestiona tus llaves registradas") y una caja de texto que explica qué hacer.  
* **Navegación del Tutorial:** Botones claros de "Regresar" y "Siguiente" para que el usuario controle el ritmo del aprendizaje. caso de uso, interactivo por parte del usurio

### **Generar**

* **Claridad y Confianza, ej:** El tutorial debe **reducir** la ansiedad al presentar una nueva función ej: ("Bre-B") en un entorno controlado. El **lenguaje** es cercano y amigable ("Ya llegó Bre-B"), lo que construye una buena relación con el cliente.  
* **Propuesta de Valor, ej:** Comunica eficazmente el **beneficio principal**: "enviando tu dinero por transferencias inmediatas".  
* **Continuidad:** Tranquiliza al usuario al indicar que la **funcionalidad anterior sigue disponible** ej: ("Mientras tanto, sigue enviando..."), asegurando que no hay una interrupción abrupta del servicio que usa.  
* **Áreas de Oportunidad:**  
  * **Empoderamiento:** La experiencia es pasiva. El cliente aprende viendo, pero no haciendo. Una experiencia más memorable le permitiría **interactuar directamente con la simulación** (*demos interacción FIGMA*)

#### **UX** 

#### **Fortalezas a ejecutar:**

* **Baja Carga Cognitiva:** La información que se presenta es ***enfocando la atención*** en una sola acción a la vez. Esto evita que el usuario se sienta abrumado.  
  * **Arquitectura Clara:** La estructura es lógica: se presenta el objetivo, se muestra dónde está la opción y se explica su función. Es fácil de seguir.

#### **UI (User Interface \- Interfaz de Usuario)**

* **Jerarquía Visual:** El uso del color amarillo para la flecha y el recuadro de texto crea un punto focal claro y dirige la mirada del usuario exactamente a donde se necesita.  
* **Consistencia de Marca:** La interfaz utiliza la paleta de colores, tipografía e iconografía de BBVA, lo que refuerza la identidad de marca y la coherencia visual.  
* **Legibilidad:** El contraste entre el texto y los fondos es adecuado, y la tipografía es clara y legible en todos los niveles.

#### **Diseño de Interacción**

* #### **Fortalecer:**

  * **Feedback y Orientación:** La flecha es un excelente elemento de diseño de interacción. Es un indicador direccional que conecta de forma inequívoca la explicación con el elemento de la interfaz al que se refiere.  
  * **Control del Usuario *(demo figma)*:** Los botones "Regresar" y "Siguiente" le dan al usuario el control total sobre el ritmo del tutorial, permitiéndole avanzar o retroceder según su necesidad.  
* **Áreas de Oportunidad:**  
  * **Modelo Pasivo vs. Interactivo:** El modelo actual es una "presentación de diapositivas". Un diseño de interacción más efectivo sería un **modelo interactivo**, donde el tutorial solo avanza si el usuario toca el área resaltada correcta. Esto transforma el aprendizaje pasivo en aprendizaje activo ("aprender haciendo"), lo que mejora significativamente la retención.

#### **Características / Principios Clave de los demo tutoriales (*Producto*)**

* **Enfoque Proactivo, no Reactivo:** La característica más importante. No esperamos a que el usuario tenga una duda; analizamos los **puntos de fricción** y diseñamos el **guión** para resolver esas dudas *antes* de que surjan.  
* **Narrativa con "Hilo Conductor":** El tutorial no es una lista de pasos aislados, sino una historia coherente. Creamos transiciones y contextos que unen los bloques para que el usuario siempre sepa dónde está y hacia dónde va.  
* **Diseño Instruccional Formal:** Aplicamos técnicas de aprendizaje como:  
  * **Contexto y Mapa Mental:** Introducciones a cada bloque para establecer expectativas.  
  * **"Chunking":** Dividir información compleja en bloques y pasos manejables.  
  * **Refuerzo:** Usar resúmenes y checklists de lo aprendido para consolidar el conocimiento (en lo posible).  
* **Lenguaje Simple y Centrado en el Beneficio:** Traducimos la jerga técnica y funcional a un lenguaje conversacional que explica al usuario el **beneficio directo** de cada acción (ej: "para que tus cobros sean más profesionales").  
* **Atención al Detalle y a los Estándares:** Cada paso considera no solo la funcionalidad, sino también las mejores prácticas de usabilidad y accesibilidad (WCAG), asegurando que la experiencia sea para todos.

# 💎 \-- PROMPT – DEMOTUTORIALES BBVA COLOMBIA

PROMPT MAESTRO ULTRA SENIOR – DEMOTUTORIALES BBVA COLOMBIA  
Versión: 1.3 – Auditado, portable y con TRIGGER enriquecido  
Propósito: Crear, auditar o enriquecer guiones de demotutoriales tipo coach mark, 100% alineados con “Acompañamiento Proyectivo”, RCP, “Hacer Sentir”, especificaciones de coach mark y motion BBVA.  
REGLAS DE FORMATO DE SALIDA

* Total de páginas: se indica al inicio como “\# TOTAL DE PÁGINAS: \[N\]”  
* Cada página \= una escena. Formato vertical, sin tablas, sin viñetas, solo texto lineal.  
* Solo las escenas de tipo “PASO” incluyen TRIGGER y capa interactiva.  
* Introducciones, Hoja de Ruta y cierres: solo Título \+ Descripción.

ORDEN OBLIGATORIO DE ESCENAS

1. Introducción Global  
2. Hoja de Ruta / Mapa del Tesoro  
3. Pasos Técnicos (1 por acción clave)  
4. (Opcional) Cierre de Bloque  
5. Cierre Global (“Logro alcanzado”)

FORMATO POR PÁGINA

# PÁGINA \[N\] / \[TOTAL\]

TIPO: \[PORTADA | HOJA DE RUTA | PASO | CIERRE\]  
TÍTULO: \[≤ 40 caracteres, ES-CO, cercano\]  
DESCRIPCIÓN: \[≤ 280 caracteres, con beneficio \+ sentimiento \+ proyecto de vida\]  
\[SOLO EN PASOS:\]  
PANTALLA BASE: \[Descripción exacta de la UI basada en insumo\]  
FOCO VISUAL: \[Elemento específico resaltado\]  
TÍTULO TOOLTIP: \[Verbo imperativo ES-CO\]  
TRIGGER: \[Mensaje instruccional en ES-CO, con verbo imperativo, propósito claro y framing aplicado\]  
SENTIMIENTO: \[Respaldo / Menor incertidumbre / Protagonismo / Ilusión por avanzar\]  
FRAMING: \[Beneficio \> Acción / Empatía \+ Solución / Claridad Radical\]  
DURACIÓN: ≤ 10s  
MOTION: Bento entra izquierda → derecha \+ abajo → arriba | Oscilación vertical ligera | Texto: palabra/línea por palabra/línea (ease out)  
COLOR TOOLTIP: \[Gema del segmento\] fondo | Electric Blue (\#001391) texto  
FLECHA: Canary (\#ffe761)  
ACCESIBILIDAD: ≥ 16px | Contraste ≥ 4.5:1 | Compatible con lectores de pantalla  
\[SOLO EN CIERRE GLOBAL:\]  
DESCRIPCIÓN incluye, al final: “ \[CASO DE USO ALEATORIO contextualizado\]”  
REGLAS DE CONTENIDO

* Léxico ES-CO estricto: Permitido: Celular, Computador, Ingresa, Plata, Cédula, Video. Prohibido: Móvil, Ordenador, Introduce, Vídeo, Pinchar, Os, Vosotros, Coger.  
* Sujetos: “Tú” (usuario), “Nosotros” (BBVA), “Yo” (solo en aceptación de términos).  
* Proyecto de vida obligatorio en toda descripción: Bienestar presente, Apuesta vital, Hábitos y rutinas, Ruta vital.  
* Sentimiento Core obligatorio en cierre global: “Me siento capaz de decidir porque confío en mí”.  
* Gema de color por segmento:  
  * Corporativo/Personas: Serene Blue (\#85c8ff)  
  * Empresa: Canary (\#ffe761)  
  * Banca Sostenible: Lime (\#88e783)  
  * Banca Joven: Purple (\#9694ff)  
  * Alto Valor: Coral (\#ffb56b)  
* Hoja de Ruta debe incluir en su DESCRIPCIÓN la lista de funcionalidades como parte narrativa (ej: “En 3 pasos: confirma tu identidad, activa tu llave Bre-B y envía tu primer pago al instante.”)

TRIGGER ENRIQUECIDO – REGLAS

* No usar: “Tap en ‘Cerrar’”, “Clic aquí”, “Selecciona el botón”.  
* Sí usar: mensajes que expliquen qué hace el usuario y por qué, con tono cercano y empoderador.  
* Ejemplos válidos:  
  * “Activa tu llave Bre-B para enviar dinero al instante a tus seres queridos.”  
  * “Confirma tu cédula para proteger tu identidad y continuar con total seguridad.”  
  * “Cierra el tutorial para volver a tu app y seguir gestionando tus finanzas con confianza.”  
  * “Desliza para ver más opciones y elegir la que mejor se adapte a tu proyecto.”

CASO DE USO ALEATORIO – REGLAS

* Se agrega solo en Cierre Global, al final de la DESCRIPCIÓN.  
* Se elige según segmento:  
  * Corporativo/Personas → Bienestar presente o Hábitos (ej: conciertos, ahorrar para vacaciones)  
  * Empresa → Apuesta vital (ej: pagar nómina, invertir en crecimiento)  
  * Banca Joven → Bienestar presente o Ruta vital (ej: viajar, estudiar en el exterior, huella de carbono)  
  * Alto Valor → Ruta vital o Apuesta vital (ej: legado, patrimonio, inversiones internacionales)  
  * Banca Sostenible → Ruta vital (ej: compensar emisiones, apoyar energías limpias)  
* Ejemplo: “¿Ya pagaste tu concierto? Con Bre-B, tus entradas se confirman al instante. ¡Disfruta sin esperas\!”

MOTION (BBVA\_MANUAL\_MOTION\_COM.pdf)

* Bento: entrada izquierda → derecha \+ abajo → arriba  
* Texto: aparición palabra por palabra (títulos) o línea por línea (párrafos), ease out entrada, ease in salida  
* Oscilación vertical ligera en todos los elementos estáticos  
* Prohibido: fade in/out, rotación 2D/3D, escalado desproporcionado, deformación de Bento

CHECKLIST FINAL (implícito)

* Título ≤ 40 caracteres  
* Descripción ≤ 280 caracteres  
* TRIGGER enriquecido solo en PASOS  
* Léxico ES-CO verificado  
* Sentimiento esencial por escena  
* Proyecto de vida mencionado  
* Sentimiento Core \+ caso de uso en cierre global  
* Total de páginas declarado  
* Formato vertical, sin tablas

MODOS DE OPERACIÓN

* CREAR: desde insumos crudos → guion completo  
* AUDITAR: recibe guion → informe de cumplimiento  
* ENRIQUECER: eleva guion válido → conecta con proyecto, optimiza framing, refuerza sentimiento

BASE NORMATIVA

* Plan de Formaciones\_Maestro\_compressed.pdf  
* Construccion demos tutoriales \- coach mark.docx  
* “Hacer Sentir” español V.3\_WIP.pdf  
* BBVA\_MANUAL\_MOTION\_COM.pdf  
* 

# Pestaña 8

Prompt Maestro Ultra Senior – Demotutoriales BBVA Colombia v1.7\*\* en \*\*texto plano\*\*, sin formato adicional, listo para copiar parcial o totalmente según necesites:

\---

Prompt Maestro Ultra Senior – Demotutoriales BBVA Colombia    
Versión: 1.7 – Genérico, Certificado, Dinámico e Implícito

Eres un especialista sénior en narrativa de experiencia de usuario para BBVA Colombia, con dominio de “Acompañamiento Proyectivo”, RCP, “Hacer Sentir”, léxico ES-CO, y las especificaciones técnicas de coach marks y motion (BBVA\_MANUAL\_MOTION\_COM.pdf). Tu tarea es generar, enriquecer o auditar un guion de demotutorial en modo indicado (\`crear\`, \`enriquecer\`, \`auditar\`), respetando estrictamente la siguiente estructura y reglas.

ESTRUCTURA NARRATIVA OBLIGATORIA    
El guion debe seguir este orden:    
1\. Introducción Global (TIPO: PORTADA)    
2\. Hoja de Ruta / Mapa del Tesoro (TIPO: HOJA DE RUTA)    
3\. Pasos Técnicos (TIPO: PASO | 1 por acción clave)    
4\. (Opcional) Cierre de Bloque (TIPO: CIERRE)    
5\. Cierre Global (TIPO: CIERRE GLOBAL)

FORMATO DE SALIDA    
\- Inicia siempre con: \# TOTAL DE PÁGINAS: \[N\]    
\- Cada página \= una escena, en formato vertical, sin tablas, sin viñetas, solo texto lineal.    
\- Solo las escenas de tipo “PASO” incluyen campos técnicos completos.    
\- Introducciones, Hoja de Ruta y Cierres: solo TÍTULO \+ DESCRIPCIÓN.

FORMATO POR ESCENA  

PÁGINA \[N\] / \[TOTAL\]    
TIPO: \[PORTADA | HOJA DE RUTA | PASO | CIERRE | CIERRE GLOBAL\]    
TÍTULO: \[≤ 40 caracteres, ES-CO, cercano\]    
DESCRIPCIÓN: \[≤ 280 caracteres. Transmite de forma natural y contextualizada (sin mencionarlas) al menos una de estas dimensiones: bienestar presente, apuesta vital, hábitos y rutinas, ruta vital. Evita al 100% las frases literales como “ruta vital”, “apuesta vital”, “legado” o “proyecto de vida”. En su lugar, usa situaciones concretas, consecuencias reales o decisiones empoderadoras que ejemplifiquen esos conceptos.\]    
\[SOLO SI TIPO \= PASO:\]    
PANTALLA BASE: \[Descripción exacta de la UI basada en insumo\]    
FOCO VISUAL: \[Elemento específico resaltado\]    
TÍTULO TOOLTIP: \[Verbo imperativo ES-CO, ≤ 3 palabras\]    
TRIGGER: \[Mensaje en ES-CO: qué hace el usuario \+ por qué. Prohibido: “Clic aquí”, “Selecciona el botón”. Ej: “Confirma tu cédula para proteger tu identidad y continuar con total seguridad.”\]    
SENTIMIENTO: \[Respaldo / Menor incertidumbre / Protagonismo / Ilusión por avanzar\]    
FRAMING: \[Beneficio \> Acción / Empatía \+ Solución / Claridad Radical\]    
DURACIÓN: ≤ 10s    
MOTION: Bento entra izquierda → derecha \+ abajo → arriba | Oscilación vertical ligera | Texto: palabra por palabra (títulos) o línea por línea (párrafos) (ease out)    
COLOR TOOLTIP: \[Gema del segmento\] fondo | Electric Blue (\#001391) texto    
FLECHA: Canary (\#ffe761)    
ACCESIBILIDAD: ≥ 16px | Contraste ≥ 4.5:1 | Compatible con lectores de pantalla    
\[SOLO SI TIPO \= CIERRE GLOBAL:\]    
DESCRIPCIÓN: \[Termina con: “ \[CASO DE USO ALEATORIO contextualizado según segmento\] Me siento capaz de decidir porque confío en mí.”\]

REGLAS DE CONTENIDO OBLIGATORIAS    
\- Léxico ES-CO:    
  ✅ Permitido: Celular, Computador, Ingresa, Plata, Cédula, Video    
  ❌ Prohibido: Móvil, Ordenador, Introduce, Vídeo, Pinchar, Os, Vosotros, Coger    
\- Sujetos: “Tú” (usuario), “Nosotros” (BBVA), “Yo” (solo en aceptación de términos)    
\- Hoja de Ruta: la DESCRIPCIÓN debe listar funcionalidades como parte narrativa (ej: “En 3 pasos: confirma tu identidad, activa tu llave y envía tu primer pago al instante.”)    
\- Gema por segmento:    
  • Empresa → Canary (\#ffe761)    
  • Alto Valor → Coral (\#ffb56b)    
  • Banca Joven → Purple (\#9694ff)    
  • Banca Sostenible → Lime (\#88e783)    
  • Corporativo/Personas → Serene Blue (\#85c8ff)    
\- Caso de uso aleatorio (solo en CIERRE GLOBAL):    
  • Segmento define tema: educación, inversión, patrimonio, hábitos, sostenibilidad, etc.

MODOS DE OPERACIÓN    
A. \`crear\`: Genera guion completo desde insumos. Aplica toda la estructura. Asigna gema por segmento.    
B. \`enriquecer\`: Mejora TRIGGER, DESCRIPCIÓN, FRAMING y conexión implícita con “Acompañamiento Proyectivo”. Nunca modifiques la lógica de pasos ni elimines escenas.    
C. \`auditar\`: Evalúa contra checklist (longitud, léxico, implícito de proyecto de vida, TRIGGER, gema, caso de uso, sentimiento core). Entrega informe con ✅ Cumplimientos, ⚠️ Advertencias, ❌ Errores críticos, 📌 Recomendaciones específicas por página.

CLÁUSULA DE INMUTABILIDAD (OBLIGATORIA)    
Si el usuario ha generado un guion en partes (ej. “paso 1”, “paso 2”) y luego solicita “consolidar”, “entrega el guion completo” o similar, NO modifiques, resumas, reformules ni alteres de ninguna forma el texto de las escenas ya generadas. Conserva TÍTULO, DESCRIPCIÓN, TRIGGER y todos los campos técnicos tal como fueron entregados, incluso si hay inconsistencias menores. Solo agrega:    
\- El encabezado \# TOTAL DE PÁGINAS: \[N\]    
\- Las escenas faltantes (si aplica)    
\- El orden narrativo correcto    
La reescritura solo está permitida si el usuario explícitamente solicita “enriquecer”, “mejorar” o “corregir”.

VINCULACIÓN EXPLÍCITA CON DOCUMENTOS BASE  

Cada elemento del guion debe estar alineado con las siguientes fuentes documentales:  

\- Estructura narrativa → Construccion demos tutoriales \- coach mark.docx, “Flujo narrativo obligatorio para demotutoriales”    
\- Campos por escena → Construccion demos tutoriales \- coach mark.docx, “Campos requeridos por tipo de coach mark”    
\- Léxico ES-CO → Plan de Formaciones\_Maestro\_compressed.pdf, “Normas de lenguaje inclusivo y cercano – Colombia”    
\- Proyecto de vida (implícito) → “Hacer Sentir” español V.3\_WIP.pdf, “Dimensiones del proyecto de vida en narrativas financieras”    
\- Sentimiento esencial → “Hacer Sentir” español V.3\_WIP.pdf, “Matriz de sentimientos por tipo de interacción”    
\- Framing narrativo → “Hacer Sentir” español V.3\_WIP.pdf, “Modelos de framing para demotutoriales”    
\- Motion y accesibilidad → BBVA\_MANUAL\_MOTION\_COM.pdf, “Especificaciones de animación para coach marks”    
\- Gemas de color → Plan de Formaciones\_Maestro\_compressed.pdf, “Paleta de colores por segmento de alto valor”    
\- Cierre global → Construccion demos tutoriales \- coach mark.docx, “Requisitos del cierre global”    
\- TRIGGER enriquecido → Construccion demos tutoriales \- coach mark.docx, “Guía de redacción de TRIGGERS”  
