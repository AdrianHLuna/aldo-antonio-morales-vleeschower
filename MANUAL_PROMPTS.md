# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Aldo Antonio Morales Vleeschower — Medicina Interna / Geriatría
**Ciudad:** Tuxtla Gutiérrez, Chiapas
**Especialidad:** Internista Geriatra

**Nota de discreción clínica:** este catálogo incluye temas de alta sensibilidad visual propios de la geriatría — úlceras por presión, caídas en el adulto mayor, alteraciones en la piel y demencia. Todos los prompts de estos temas están redactados para verse **clínicos, dignos y educativos, nunca gráficos ni deshumanizantes**: diagramas anatómicos esquemáticos, fotografía clínica discreta de exploración (siempre con guantes, nunca heridas abiertas en primer plano), o escenas cotidianas de acompañamiento familiar con el adulto mayor retratado con dignidad y autonomía — nunca como víctima frágil o escena de accidente. Cada prompt representa visualmente el tema real que describe.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Medicina Interna y Geriatría de alta gama.
Tono: Preciso, digno y de autoridad clínica (Medicina Interna/Geriatría), cálido y editorial — nunca clínico-frío ni condescendiente con el adulto mayor.
Estilo: Renders 3D anatómicos de alta fidelidad para enfermedades sistémicas; fotografía clínica discreta de alta gama para exploraciones y procedimientos; fotografía editorial de acompañamiento familiar y vida cotidiana digna del adulto mayor para síntomas.
Identidad visual OBLIGATORIA (paleta real de marca del doctor, extraída de su logotipo real): azul marino (#163354) como acento primario — profesionalismo y confianza médica, dorado/bronce (#B48A43) como acento secundario cálido — prestigio y empatía propia de la geriatría, gris plata (#8E8E8E) como acento neutral/estructural únicamente — fondo dominante blanco/gris muy claro, nunca oscuro ni neón.
Restricciones: Cero heridas abiertas explícitas, tejido necrótico, sangre o contenido gráfico — usar guantes de exploración, vendajes o diagramas esquemáticos en su lugar. Cero representación del adulto mayor como frágil, indefenso o en situación de accidente activo — siempre con dignidad, calma y autonomía. Cero nombres de medicamentos ni empaques farmacéuticos visibles. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. Cero palabras, texto, marcas de agua, firmas o números.
Formato: JPG horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, warm editorial lighting — soft natural light or elegant studio light, never dark/moody.
- Color Palette: Navy Blue (#163354), Gold/Bronze (#B48A43), Silver Gray (#8E8E8E), white/near-white backgrounds, natural skin tones.
- Composition: Centered, calm, editorial framing with generous negative space — elegant, never cluttered or clinical-cold.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, blueprints, user interface, text, words, letters, watermark, signature, blood, gore, open wound close-up, necrotic tissue, frail/helpless elderly depiction, accident scene, medication packaging, pill bottles, dark/carbon background.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Diabetes Mellitus (`public/enfermedades/diabetes-mellitus.jpg`)
```text
3D illustration of a pancreas with a subtle glowing insulin-molecule motif and a blood vessel showing elevated glucose particles, clean elegant medical textbook style.

Lighting: Soft warm studio lighting.
Color Palette: Navy (#163354) pancreas, Gold (#B48A43) glucose/insulin particles, white background.
Composition: Centered organ illustration, generous negative space.
```

### 2. Hipertensión arterial (`public/enfermedades/hipertension-arterial.jpg`)
```text
3D anatomical illustration of a coronary artery cross-section showing a narrowed vessel under visible internal pressure, clean medical textbook style.

Lighting: Soft warm studio lighting, highlight on the vessel wall.
Color Palette: Navy (#163354) artery, Silver (#8E8E8E) structural detail, white background.
Composition: Centered vessel cross-section, macro framing, generous negative space.
```

### 3. Infecciones (`public/enfermedades/infecciones-frecuentes-en-el-adulto.jpg`)
```text
Discreet clinical photograph of a physician examining a senior patient with a stethoscope in a warm, elegant consultation room, calm reassuring interaction.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) clinic accents, natural skin tones.
Composition: Centered two-person consultation shot, generous negative space.
```

### 4. Dolor crónico (`public/enfermedades/dolor-cronico.jpg`)
```text
Warm lifestyle photograph of a dignified senior gently pressing a hand to their lower back while seated comfortably, calm composed expression, soft natural indoor lighting, discreet and non-dramatic.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Gold (#B48A43) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 5. Depresión (`public/enfermedades/depresion.jpg`)
```text
Warm editorial photograph of a senior sitting quietly by a window with a thoughtful, calm expression, soft natural light suggesting gentle hope rather than sadness, dignified framing.

Lighting: Soft warm natural window light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent in clothing/decor.
Composition: Centered mid-shot, generous negative space.
```

### 6. Demencia (`public/enfermedades/demencia.jpg`)
```text
3D illustration of a brain silhouette with a few softly glowing neural connection points, abstract and dignified, clean educational diagram style — not clinical or alarming.

Lighting: Soft warm studio lighting, gentle glow.
Color Palette: Navy (#163354) brain silhouette, Gold (#B48A43) neural connection points, white background.
Composition: Centered brain illustration, generous negative space.
```

### 7. Insomnio crónico (`public/enfermedades/insomnio-cronico.jpg`)
```text
Warm lifestyle photograph of a senior sitting up in bed at night with a calm, awake expression, soft warm lamp lighting, dignified and discreet.

Lighting: Soft warm lamp lighting.
Color Palette: Warm neutral tones, Navy (#163354) bedding accent.
Composition: Centered mid-shot, generous negative space.
```

### 8. Infarto agudo de miocardio (`public/enfermedades/infarto-agudo-de-miocardio.jpg`)
```text
3D anatomical illustration of a heart with one coronary artery shown blocked by a clot, a small highlighted area of affected heart muscle, serene educational diagram style — not alarming.

Lighting: Soft clinical studio lighting, clear highlight on the blocked vessel.
Color Palette: Navy (#163354) heart tissue, Gold (#B48A43) blocked vessel/affected zone accent, white background.
Composition: Centered heart with artery close-up inset, generous negative space.
```

### 9. Insuficiencia renal (`public/enfermedades/insuficiencia-renal.jpg`)
```text
3D anatomical illustration of a kidney cross-section with a subtle softly glowing filtration-unit motif, clean elegant medical textbook style.

Lighting: Soft warm studio lighting.
Color Palette: Navy (#163354) kidney tissue, Silver (#8E8E8E) structural detail, white background.
Composition: Centered organ illustration, generous negative space.
```

### 10. Insuficiencia cardiaca (`public/enfermedades/insuficiencia-cardiaca.jpg`)
```text
3D anatomical illustration of an enlarged, softly glowing heart with a subtle fluid-wave motif at its base suggesting reduced pumping efficiency, calm educational diagram style.

Lighting: Soft warm studio lighting, gentle gradient glow.
Color Palette: Navy (#163354) heart, Silver (#8E8E8E) fluid motif, white background.
Composition: Centered heart, three-quarter view, generous negative space.
```

### 11. Estreñimiento crónico (`public/enfermedades/estrenimiento-cronico.jpg`)
```text
3D illustration of a stylized digestive tract silhouette with a subtle gentle-motion motif, clean elegant abstract medical diagram style, discreet.

Lighting: Soft warm studio lighting.
Color Palette: Navy (#163354) silhouette, Gold (#B48A43) subtle accent, white background.
Composition: Centered abstract illustration, generous negative space.
```

### 12. Pérdida de apetito (`public/enfermedades/perdida-de-apetito.jpg`)
```text
Warm lifestyle photograph of a senior seated at a dining table with a mostly untouched plate, calm contemplative expression, soft natural indoor lighting, dignified and discreet.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Gold (#B48A43) subtle tableware accent.
Composition: Centered mid-shot, generous negative space.
```

### 13. Caídas en el adulto mayor (`public/enfermedades/caidas-en-el-adulto-mayor.jpg`)
```text
Warm editorial photograph of a senior confidently walking with a cane alongside a caregiver on a well-lit, safe indoor hallway, dignified and composed, no depiction of an actual fall.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 14. Úlceras por presión (`public/enfermedades/ulceras-por-presion.jpg`)
```text
Discreet clinical photograph of a nurse's gloved hands gently repositioning a pillow to support a seated senior patient, preventive care framing, no wound visible.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) clinic accents, white linens.
Composition: Centered mid-shot, generous negative space.
```

### 15. Alergias (`public/enfermedades/alergias.jpg`)
```text
3D illustration of a few softly glowing immune-response particles encountering a stylized allergen particle, clean elegant abstract medical diagram style.

Lighting: Soft warm studio lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) particles, white background.
Composition: Centered abstract illustration, generous negative space.
```

---

## 🩺 SECCIÓN 2: PROMPTS PARA SERVICIOS

### 1. Valoración Geriátrica Integral (VGI) (`public/servicios/valoracion-geriatrica-integral.jpg`)
```text
Discreet high-end editorial photograph of a geriatrician in extended consultation with a senior patient and a family member, warm attentive body language, elegant clinic setting.

Lighting: Soft warm editorial lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) clinic accents, natural skin tones.
Composition: Centered three-person consultation shot, generous negative space.
```

### 2. Control de Diabetes Mellitus (`public/servicios/control-de-diabetes-mellitus.jpg`)
```text
Discreet high-end clinical photograph of a physician reviewing a glucose monitor reading with a senior patient, calm reassuring interaction, elegant clinical setting.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered mid-shot, generous negative space.
```

### 3. Control de Hipertensión Arterial (`public/servicios/control-de-hipertension-arterial.jpg`)
```text
Discreet high-end clinical photograph of a blood pressure cuff being fitted on a senior patient's arm by a physician, calm confident expression, elegant clinical setting.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Silver (#8E8E8E) accents, natural skin tones.
Composition: Centered mid-shot, generous negative space.
```

### 4. Manejo de Infecciones (`public/servicios/manejo-de-infecciones.jpg`)
```text
Discreet high-end clinical photograph of a physician examining a senior patient with a stethoscope, calm professional interaction, elegant clinical setting.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered mid-shot, generous negative space.
```

### 5. Manejo de Dolor Crónico (`public/servicios/manejo-de-dolor-cronico.jpg`)
```text
Discreet high-end editorial photograph of a physician in consultation with a senior patient, both seated, calm attentive body language, elegant clinic setting.

Lighting: Soft warm editorial lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered two-person consultation shot, generous negative space.
```

### 6. Manejo de Trastornos del Sueño y del Ánimo (`public/servicios/manejo-de-trastornos-del-sueno-y-del-animo.jpg`)
```text
Discreet high-end editorial photograph of a physician in a warm, calm consultation with a senior patient, gentle reassuring expression, elegant clinic setting with soft natural light.

Lighting: Soft warm natural light.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered two-person consultation shot, generous negative space.
```

### 7. Evaluación de Memoria y Demencia (`public/servicios/evaluacion-de-memoria-y-demencia.jpg`)
```text
Discreet high-end clinical photograph of a physician administering a simple cognitive assessment with a senior patient at a desk, calm attentive interaction, elegant clinical setting.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered mid-shot, generous negative space.
```

### 8. Evaluación y Seguimiento Cardiovascular (`public/servicios/evaluacion-y-seguimiento-cardiovascular.jpg`)
```text
Discreet high-end clinical photograph of ECG electrodes being placed on a senior patient's chest by a physician, calm clinical setting.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Silver (#8E8E8E) accents, white linens, natural skin tones.
Composition: Centered mid-shot, generous negative space.
```

### 9. Manejo de Insuficiencia Renal (`public/servicios/manejo-de-insuficiencia-renal.jpg`)
```text
Discreet high-end clinical photograph of a physician reviewing lab results with a senior patient at a consultation desk, calm reassuring interaction, elegant clinical setting.

Lighting: Soft warm editorial lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered two-person consultation shot, generous negative space.    
```

### 10. Evaluación Nutricional y Digestiva (`public/servicios/evaluacion-nutricional-y-digestiva.jpg`)
```text
Discreet high-end editorial photograph of a physician reviewing a simple nutrition chart with a senior patient, warm attentive interaction, elegant clinic setting.

Lighting: Soft warm editorial lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered two-person consultation shot, generous negative space.
```

### 11. Evaluación de Riesgo de Caídas y Equilibrio (`public/servicios/evaluacion-de-riesgo-de-caidas-y-equilibrio.jpg`)
```text
Discreet high-end clinical photograph of a physician observing a senior patient's gait and balance in a clear, well-lit clinic hallway, calm supportive interaction.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Silver (#8E8E8E) accents, natural skin tones.
Composition: Centered mid-shot, generous negative space.
```

### 12. Manejo de Heridas y Úlceras por Presión (`public/servicios/manejo-de-heridas-y-ulceras-por-presion.jpg`)
```text
Discreet clinical photograph of a nurse's gloved hands preparing clean dressing supplies on a tray, preventive/curative wound-care framing, no wound visible.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, white linens.
Composition: Centered close mid-shot, generous negative space.
```

### 13. Manejo de Alergias (`public/servicios/manejo-de-alergias.jpg`)
```text
Discreet high-end clinical photograph of a physician in consultation with a senior patient, reviewing a simple symptom chart together, calm elegant clinical setting.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered two-person consultation shot, generous negative space.
```

### 14. Consulta a Domicilio para el Adulto Mayor (`public/servicios/consulta-a-domicilio-para-el-adulto-mayor.jpg`)
```text
Warm editorial photograph of a physician with a medical bag visiting a senior patient at home, warm welcoming interaction in a comfortable living room setting, soft natural light.

Lighting: Soft warm natural light.
Color Palette: Navy (#163354) and Gold (#B48A43) subtle accents, warm home interior tones.
Composition: Centered two-person shot, generous negative space.
```

---

## 💛 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Fiebre (`public/sintomas/fiebre.jpg`)
```text
Warm lifestyle photograph of a senior resting comfortably with a cool cloth on their forehead, calm composed expression, soft natural indoor lighting, dignified and discreet.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 2. Pérdida del apetito (`public/sintomas/perdida-del-apetito.jpg`)
```text
Warm lifestyle photograph of a senior seated at a dining table with a mostly untouched plate, calm contemplative expression, soft natural indoor lighting, dignified and discreet.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Gold (#B48A43) subtle tableware accent.
Composition: Centered mid-shot, generous negative space.
```

### 3. Náuseas y vómitos (`public/sintomas/nauseas-y-vomitos.jpg`)
```text
Warm lifestyle photograph of a senior seated with a hand resting gently on their stomach, calm uncomfortable but composed expression, soft natural indoor lighting, discreet and non-graphic.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 4. Dolor de cabeza (`public/sintomas/dolor-de-cabeza.jpg`)
```text
Warm lifestyle photograph of a senior gently pressing fingertips to their temple while seated, calm composed expression, soft natural indoor lighting, discreet and non-dramatic.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Gold (#B48A43) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 5. Irritabilidad (`public/sintomas/irritabilidad.jpg`)
```text
Warm editorial photograph of a senior with a subtly tense but composed expression seated by a window, soft natural light, dignified and non-caricatured.

Lighting: Soft warm natural window light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 6. Pérdida de la memoria (`public/sintomas/perdida-de-la-memoria.jpg`)
```text
Warm editorial photograph of a senior pausing thoughtfully while looking at a family photograph, calm contemplative expression, soft natural indoor lighting, dignified framing.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Gold (#B48A43) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 7. Insomnio (`public/sintomas/insomnio.jpg`)
```text
Warm lifestyle photograph of a senior sitting up in bed at night with a calm, awake expression, soft warm lamp lighting, dignified and discreet.

Lighting: Soft warm lamp lighting.
Color Palette: Warm neutral tones, Navy (#163354) bedding accent.
Composition: Centered mid-shot, generous negative space.
```

### 8. Dolor de pecho (`public/sintomas/dolor-de-pecho.jpg`)
```text
Warm lifestyle photograph of a senior pausing mid-activity with one hand resting gently on their chest, calm concerned expression, soft natural indoor lighting, discreet and non-dramatic.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 9. Falta de aire (`public/sintomas/falta-de-aire.jpg`)
```text
Warm lifestyle photograph of a senior pausing while climbing a few stairs, one hand on the railing, calm tired expression, soft natural light, discreet and non-dramatic.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Gold (#B48A43) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 10. Estreñimiento (`public/sintomas/estrenimiento.jpg`)
```text
3D illustration of a stylized digestive tract silhouette with a subtle gentle-motion motif, clean elegant abstract medical diagram style, discreet.

Lighting: Soft warm studio lighting.
Color Palette: Navy (#163354) silhouette, Gold (#B48A43) subtle accent, white background.
Composition: Centered abstract illustration, generous negative space.
```

### 11. Dolor abdominal (`public/sintomas/dolor-abdominal.jpg`)
```text
Warm lifestyle photograph of a senior seated with a hand resting gently on their abdomen, calm composed expression, soft natural indoor lighting, discreet and non-dramatic.

Lighting: Soft warm natural light.
Color Palette: Warm neutral tones, Navy (#163354) subtle accent.
Composition: Centered mid-shot, generous negative space.
```

### 12. Úlceras (`public/sintomas/ulceras.jpg`)
```text
Discreet clinical photograph of a nurse's gloved hands gently repositioning a pillow to support a seated senior patient, preventive care framing, no wound visible.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) clinic accents, white linens.
Composition: Centered mid-shot, generous negative space.
```

### 13. Alteraciones en la piel (`public/sintomas/alteraciones-en-la-piel.jpg`)
```text
Discreet clinical photograph of a physician's gloved hands gently examining a senior patient's forearm skin under good lighting, calm professional interaction, no close-up of a specific lesion.

Lighting: Soft warm clinical lighting.
Color Palette: Navy (#163354) and Gold (#B48A43) accents, natural skin tones.
Composition: Centered close mid-shot, generous negative space.
```
