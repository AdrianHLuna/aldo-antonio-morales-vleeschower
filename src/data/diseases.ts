import type { MedicalCondition } from "@/types/schema";

// Las 15 enfermedades vienen del listado real entregado por el doctor
// (2026-10-15) — sin recortar, dentro del rango 10-15 de AGENTS.md §3.
export const diseases: MedicalCondition[] = [
  {
    id: "d-diabetes-mellitus",
    slug: "diabetes-mellitus",
    name: "Diabetes Mellitus",
    description:
      "La diabetes mellitus es una enfermedad crónica en la que el cuerpo no produce suficiente insulina o no la utiliza correctamente, elevando el azúcar en la sangre de forma sostenida. Un control adecuado previene complicaciones graves a nivel renal, cardiovascular, ocular y nervioso.",
    symptoms: ["Sed excesiva y boca seca", "Necesidad frecuente de orinar", "Cansancio inexplicable", "Visión borrosa"],
    causes: ["Resistencia del cuerpo a la insulina (tipo 2, la más frecuente en adultos)", "Producción insuficiente de insulina por el páncreas"],
    riskFactors: ["Sobrepeso u obesidad", "Antecedente familiar de diabetes", "Sedentarismo", "Edad mayor a 45 años", "Hipertensión arterial asociada"],
    complications: ["Daño renal progresivo", "Enfermedad cardiovascular", "Daño a nervios periféricos (neuropatía)", "Daño a la retina"],
    treatments: ["Control individualizado de la glucosa según la edad y otras enfermedades del paciente", "Ajustes en alimentación y actividad física", "Seguimiento periódico de órganos en riesgo (riñón, corazón, ojos, pies)"],
    faqs: [
      {
        question: "¿La diabetes se cura?",
        answer:
          "No se cura, pero se controla. Con un manejo adecuado del azúcar en sangre, la alimentación y la actividad física, la mayoría de los pacientes llevan una vida normal y evitan complicaciones graves.",
      },
      {
        question: "¿Por qué el control de la diabetes es distinto en el adulto mayor?",
        answer:
          "Porque un control demasiado estricto puede provocar episodios de baja glucosa (hipoglucemia) peligrosos en personas mayores. Las metas se individualizan según la edad, otras enfermedades y el riesgo de caídas.",
      },
      {
        question: "¿Cada cuánto debo revisarme si tengo diabetes?",
        answer:
          "Se recomienda seguimiento periódico, generalmente cada 3 a 6 meses según el control alcanzado, además de revisiones anuales de riñón, ojos y pies para detectar complicaciones a tiempo.",
      },
    ],
    relatedServices: ["s-control-diabetes-mellitus"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/diabetes-mellitus.jpg",
    seo: {
      title: "Diabetes Mellitus en Tuxtla Gutiérrez | Dr. Aldo Morales",
      description: "Control de diabetes mellitus con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["diabetes mellitus", "internista Tuxtla Gutiérrez", "control de glucosa"],
    },
  },
  {
    id: "d-hipertension-arterial",
    slug: "hipertension-arterial",
    name: "Hipertensión arterial",
    description:
      "La hipertensión arterial es la elevación sostenida de la presión con la que la sangre circula por las arterias. Suele no dar síntomas durante años, pero es uno de los principales factores de riesgo de infarto, insuficiencia cardiaca y daño renal si no se controla.",
    symptoms: ["Generalmente no causa síntomas", "Dolor de cabeza en elevaciones importantes", "Mareo ocasional"],
    causes: ["Rigidez progresiva de las arterias asociada a la edad", "Factores genéticos", "Dieta alta en sodio", "Obesidad"],
    riskFactors: ["Edad avanzada", "Obesidad", "Sedentarismo", "Dieta alta en sal", "Antecedente familiar de hipertensión"],
    complications: ["Infarto agudo de miocardio", "Insuficiencia cardiaca", "Daño renal progresivo", "Enfermedad cerebrovascular"],
    treatments: ["Metas de presión individualizadas según edad y riesgo de caídas", "Ajustes de alimentación (reducción de sodio)", "Seguimiento periódico de presión y función renal"],
    faqs: [
      {
        question: "¿Por qué le dicen 'el asesino silencioso'?",
        answer:
          "Porque suele no dar ningún síntoma durante años mientras daña silenciosamente el corazón, los riñones y las arterias, por lo que la única forma de detectarla a tiempo es midiendo la presión regularmente.",
      },
      {
        question: "¿Debo tomar el medicamento de por vida?",
        answer:
          "En la mayoría de los casos sí, ya que la hipertensión es una condición crónica. Suspenderlo sin supervisión médica permite que la presión vuelva a elevarse y retome el riesgo de complicaciones.",
      },
      {
        question: "¿Es diferente tratar la hipertensión en el adulto mayor?",
        answer:
          "Sí. Se busca un equilibrio entre controlar la presión y evitar mareos o caídas por un descenso demasiado brusco, algo que un internista con enfoque geriátrico evalúa de forma integral.",
      },
    ],
    relatedServices: ["s-control-hipertension-arterial"],
    relatedSymptoms: ["sy-dolor-cabeza"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/hipertension-arterial.jpg",
    seo: {
      title: "Hipertensión Arterial en Tuxtla Gutiérrez | Dr. Aldo Morales",
      description: "Control de hipertensión arterial con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["hipertensión arterial", "presión alta", "internista Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-infecciones",
    slug: "infecciones-frecuentes-en-el-adulto",
    name: "Infecciones",
    description:
      "Las infecciones más frecuentes en la consulta de medicina interna —urinarias, respiratorias y de piel, entre otras— requieren un diagnóstico oportuno, especialmente en el adulto mayor, donde pueden presentarse de forma atípica (sin fiebre evidente) y evolucionar con mayor rapidez.",
    symptoms: ["Fiebre o febrícula", "Malestar general", "Síntomas específicos según el sitio de la infección (tos, ardor urinario, etc.)"],
    causes: ["Bacterias, virus u hongos según el tipo de infección", "Defensas disminuidas por edad o enfermedades crónicas"],
    riskFactors: ["Edad avanzada", "Diabetes no controlada", "Hospitalización reciente", "Uso de sonda urinaria"],
    complications: ["Progresión a infección generalizada (sepsis) si no se trata a tiempo", "Descompensación de otras enfermedades crónicas"],
    treatments: ["Identificación del sitio y tipo de infección", "Tratamiento dirigido según el agente causante", "Vigilancia estrecha en pacientes con enfermedades crónicas asociadas"],
    faqs: [
      {
        question: "¿Por qué las infecciones son más peligrosas en el adulto mayor?",
        answer:
          "Porque pueden presentarse sin fiebre evidente —a veces solo como confusión o debilidad repentina— lo que retrasa el diagnóstico, y el cuerpo tiene menos reserva para enfrentar la infección.",
      },
      {
        question: "¿Toda infección requiere tratamiento específico dirigido?",
        answer:
          "Sí. Identificar el tipo y sitio exacto de la infección permite un tratamiento certero, evitando tanto el subtratamiento como el uso innecesario de medicamentos que no corresponden al problema real.",
      },
      {
        question: "¿Cuándo una infección es urgente?",
        answer:
          "Cuando se acompaña de confusión repentina, dificultad para respirar, presión arterial baja o fiebre muy alta que no cede — en esos casos se debe acudir de inmediato a un servicio de urgencias.",
      },
    ],
    relatedServices: ["s-manejo-infecciones"],
    relatedSymptoms: ["sy-fiebre", "sy-dolor-abdominal"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/infecciones-frecuentes-en-el-adulto.jpg",
    seo: {
      title: "Infecciones en el Adulto Mayor | Dr. Aldo Morales",
      description: "Diagnóstico y manejo de infecciones con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["infecciones adulto mayor", "internista Tuxtla Gutiérrez", "medicina interna Chiapas"],
    },
  },
  {
    id: "d-dolor-cronico",
    slug: "dolor-cronico",
    name: "Dolor crónico",
    description:
      "El dolor crónico es aquel que persiste más allá de tres meses, con frecuencia relacionado con enfermedades articulares, neuropáticas o de otro origen. En el adulto mayor suele subestimarse o atribuirse erróneamente a 'la edad', cuando en realidad tiene causas identificables y manejo efectivo.",
    symptoms: ["Dolor persistente que no mejora con el paso de los días", "Dolor que limita actividades cotidianas", "Alteraciones del sueño asociadas al dolor"],
    causes: ["Enfermedades articulares degenerativas", "Daño a nervios periféricos (neuropatía)", "Secuelas de lesiones o cirugías previas"],
    riskFactors: ["Edad avanzada", "Enfermedades articulares previas", "Diabetes (neuropatía asociada)", "Inmovilidad prolongada"],
    complications: ["Deterioro de la calidad de vida", "Aislamiento social por limitación física", "Insomnio asociado"],
    treatments: ["Identificación de la causa específica del dolor", "Manejo escalonado según intensidad y origen", "Combinación con medidas no farmacológicas (fisioterapia, actividad dirigida)"],
    faqs: [
      {
        question: "¿El dolor crónico es 'normal' con la edad?",
        answer:
          "No debe asumirse como normal ni algo que simplemente hay que tolerar. Siempre tiene una causa identificable y, en la mayoría de los casos, puede manejarse para mejorar significativamente la calidad de vida.",
      },
      {
        question: "¿Siempre se necesitan medicamentos fuertes?",
        answer:
          "No. El manejo del dolor crónico se escalona según su intensidad y causa, combinando con frecuencia medidas no farmacológicas, y se ajusta cuidadosamente en el adulto mayor para minimizar efectos secundarios.",
      },
      {
        question: "¿El dolor crónico afecta otras áreas de la salud?",
        answer:
          "Sí, con frecuencia altera el sueño, el ánimo y la movilidad, por lo que su manejo adecuado mejora la calidad de vida de forma integral, no solo el dolor en sí.",
      },
    ],
    relatedServices: ["s-manejo-dolor-cronico"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/dolor-cronico.jpg",
    seo: {
      title: "Dolor Crónico en el Adulto Mayor | Dr. Aldo Morales",
      description: "Manejo de dolor crónico con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["dolor crónico", "internista Tuxtla Gutiérrez", "manejo del dolor"],
    },
  },
  {
    id: "d-depresion",
    slug: "depresion",
    name: "Depresión",
    description:
      "La depresión en el adulto mayor suele manifestarse distinto que en otras edades —más como apatía, aislamiento o quejas físicas que como tristeza evidente— por lo que frecuentemente pasa desapercibida. Es una condición tratable, no una consecuencia inevitable de envejecer.",
    symptoms: ["Pérdida de interés en actividades que antes se disfrutaban", "Aislamiento social progresivo", "Cambios en el apetito o el sueño", "Irritabilidad"],
    causes: ["Cambios químicos cerebrales asociados a la edad", "Pérdidas significativas (pareja, salud, independencia)", "Enfermedades crónicas o dolor no controlado"],
    riskFactors: ["Viudez o pérdida reciente de seres queridos", "Enfermedades crónicas múltiples", "Aislamiento o soledad"],
    complications: ["Deterioro cognitivo asociado si no se trata", "Pérdida de apetito y de peso", "Empeoramiento de enfermedades crónicas coexistentes"],
    treatments: ["Evaluación estructurada del estado de ánimo", "Manejo conjunto con las enfermedades físicas asociadas", "Reactivación social y acompañamiento familiar"],
    faqs: [
      {
        question: "¿Cómo se nota la depresión si la persona no dice sentirse triste?",
        answer:
          "A menudo se expresa como pérdida de interés en actividades, aislamiento, irritabilidad, cambios de apetito o sueño, o quejas físicas repetidas sin causa médica clara.",
      },
      {
        question: "¿Depresión y demencia se pueden confundir?",
        answer:
          "Sí, ambas pueden presentar apatía, lentitud o quejas de memoria, por lo que requieren una valoración que las distinga, ya que el manejo es diferente y a veces coexisten.",
      },
      {
        question: "¿Es tratable la depresión en la vejez?",
        answer:
          "Sí, con buen pronóstico cuando se detecta y maneja oportunamente, combinando manejo médico con acompañamiento familiar y reactivación social.",
      },
    ],
    relatedServices: ["s-manejo-trastornos-sueno-animo"],
    relatedSymptoms: ["sy-irritabilidad", "sy-perdida-apetito-sintoma", "sy-insomnio-sintoma"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/depresion.jpg",
    seo: {
      title: "Depresión en el Adulto Mayor | Dr. Aldo Morales",
      description: "Evaluación y manejo de depresión con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["depresión adulto mayor", "internista Tuxtla Gutiérrez", "salud mental en la vejez"],
    },
  },
  {
    id: "d-demencia",
    slug: "demencia",
    name: "Demencia",
    colloquialNames: ["Pérdida de memoria", "Demencia senil"],
    description:
      "La demencia es un deterioro progresivo de la memoria, el lenguaje o el juicio lo suficientemente importante como para interferir con la independencia del paciente. El Alzheimer y la demencia vascular son las causas más frecuentes, y un diagnóstico temprano permite planear el acompañamiento con tiempo.",
    symptoms: ["Olvidos frecuentes de información reciente", "Desorientación en lugares conocidos", "Dificultad para encontrar palabras", "Cambios de comportamiento o irritabilidad"],
    causes: ["Enfermedad de Alzheimer", "Demencia vascular (daño acumulado por pequeños infartos cerebrales)", "Combinación de ambos mecanismos"],
    riskFactors: ["Edad avanzada", "Hipertensión y diabetes no controladas", "Antecedente familiar de demencia", "Aislamiento social"],
    complications: ["Pérdida progresiva de independencia", "Mayor riesgo de caídas y accidentes", "Síndrome del cuidador quemado en la familia"],
    treatments: ["Estimulación cognitiva estructurada", "Manejo de factores de riesgo vascular asociados", "Acompañamiento y entrenamiento a la familia cuidadora"],
    faqs: [
      {
        question: "¿El olvido normal de la edad es lo mismo que demencia?",
        answer:
          "No. Olvidar un nombre y recordarlo después es normal. Olvidar eventos recientes por completo, perderse en lugares conocidos o repetir las mismas preguntas son señales que ameritan valoración.",
      },
      {
        question: "¿La demencia se puede prevenir?",
        answer:
          "No existe una forma garantizada de prevenirla, pero controlar la presión arterial, la diabetes, y mantenerse activo física y socialmente reducen el riesgo de forma comprobada.",
      },
      {
        question: "¿Qué tan pronto se debe buscar ayuda ante los primeros olvidos?",
        answer:
          "Lo antes posible. Un diagnóstico temprano permite descartar causas reversibles y planear el acompañamiento familiar con tiempo, además de iniciar estrategias que ralentizan el deterioro.",
      },
    ],
    relatedServices: ["s-evaluacion-memoria-demencia"],
    relatedSymptoms: ["sy-perdida-memoria", "sy-irritabilidad"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/demencia.jpg",
    seo: {
      title: "Demencia en el Adulto Mayor | Dr. Aldo Morales",
      description: "Evaluación y acompañamiento en demencia con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["demencia", "pérdida de memoria", "internista Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-insomnio",
    slug: "insomnio-cronico",
    name: "Insomnio crónico",
    description:
      "El insomnio crónico es la dificultad persistente para conciliar o mantener el sueño, varias noches por semana durante más de tres meses. En el adulto mayor suele relacionarse con dolor, enfermedades crónicas, depresión o apnea del sueño no diagnosticada, y afecta directamente la memoria y el ánimo.",
    symptoms: ["Dificultad para conciliar el sueño", "Despertares frecuentes durante la noche", "Somnolencia diurna", "Dificultad para concentrarse al día siguiente"],
    causes: ["Depresión o ansiedad", "Dolor crónico no controlado", "Apnea del sueño no diagnosticada", "Efecto de ciertos medicamentos"],
    riskFactors: ["Enfermedades crónicas múltiples", "Dolor no controlado", "Depresión", "Sedentarismo"],
    complications: ["Empeoramiento de la memoria y el ánimo", "Mayor riesgo de caídas por somnolencia diurna", "Agravamiento de otras enfermedades crónicas"],
    treatments: ["Identificación y tratamiento de la causa de fondo", "Medidas de higiene del sueño", "Revisión de medicamentos que puedan estar interfiriendo"],
    faqs: [
      {
        question: "¿Es normal dormir menos con la edad?",
        answer:
          "Cierta disminución en la profundidad del sueño puede ocurrir, pero un insomnio marcado y sostenido no debe asumirse como normal sin buscar su causa.",
      },
      {
        question: "¿Los somníferos son la primera opción?",
        answer:
          "No. Se busca primero identificar y tratar la causa de fondo, ya que los medicamentos para dormir conllevan riesgos de caídas y confusión en el adulto mayor.",
      },
      {
        question: "¿El insomnio crónico afecta la memoria?",
        answer:
          "Sí, dormir mal de forma sostenida afecta la consolidación de la memoria y el estado de ánimo, por lo que tratarlo también beneficia la función cognitiva.",
      },
    ],
    relatedServices: ["s-manejo-trastornos-sueno-animo"],
    relatedSymptoms: ["sy-insomnio-sintoma"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/insomnio-cronico.jpg",
    seo: {
      title: "Insomnio Crónico en el Adulto Mayor | Dr. Aldo Morales",
      description: "Evaluación y manejo de insomnio crónico con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["insomnio crónico", "trastornos del sueño", "internista Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-infarto",
    slug: "infarto-agudo-de-miocardio",
    name: "Infarto agudo de miocardio",
    colloquialNames: ["Ataque al corazón", "Infarto"],
    description:
      "El infarto agudo de miocardio ocurre cuando se bloquea el flujo de sangre a una parte del corazón, dañando el tejido cardiaco. Es una urgencia médica donde cada minuto cuenta: el tratamiento oportuno reduce significativamente el daño al corazón y el riesgo de complicaciones graves.",
    symptoms: ["Dolor u opresión en el pecho", "Falta de aire", "Sudoración fría", "Dolor que se irradia al brazo, cuello o mandíbula"],
    causes: ["Obstrucción de una arteria coronaria, generalmente por acumulación de placa (aterosclerosis)"],
    riskFactors: ["Hipertensión arterial no controlada", "Diabetes mellitus", "Tabaquismo", "Colesterol elevado", "Antecedente familiar de enfermedad cardiaca"],
    complications: ["Insuficiencia cardiaca posterior", "Arritmias", "Riesgo de un segundo evento si no se controlan los factores de riesgo"],
    treatments: ["Atención de urgencia inmediata (no se trata de forma ambulatoria)", "Control estricto de los factores de riesgo tras el evento", "Seguimiento cardiovascular a largo plazo"],
    faqs: [
      {
        question: "¿Qué debo hacer si sospecho que alguien está teniendo un infarto?",
        answer:
          "Llamar a emergencias o trasladarlo de inmediato al servicio de urgencias más cercano. No se debe esperar a ver si el dolor pasa ni manejarlo en casa — cada minuto de retraso aumenta el daño al corazón.",
      },
      {
        question: "¿Cómo se previene un infarto?",
        answer:
          "Controlando la presión arterial, la diabetes y el colesterol, evitando el tabaco, y llevando seguimiento médico regular si existen factores de riesgo cardiovascular.",
      },
      {
        question: "¿Todos los infartos duelen de la misma forma?",
        answer:
          "No. Algunas personas, especialmente con diabetes o en edad avanzada, pueden tener síntomas menos típicos (como solo falta de aire o fatiga intensa), lo que no lo hace menos grave.",
      },
    ],
    relatedServices: ["s-evaluacion-cardiovascular"],
    relatedSymptoms: ["sy-dolor-pecho", "sy-falta-aire"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/infarto-agudo-de-miocardio.jpg",
    seo: {
      title: "Infarto Agudo de Miocardio | Dr. Aldo Morales",
      description: "Prevención y seguimiento cardiovascular con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["infarto", "infarto agudo de miocardio", "internista Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-insuficiencia-renal",
    slug: "insuficiencia-renal",
    name: "Insuficiencia renal",
    description:
      "La insuficiencia renal es la pérdida progresiva de la capacidad de los riñones para filtrar la sangre adecuadamente. En su forma crónica avanza lentamente y con frecuencia sin síntomas hasta etapas avanzadas, por lo que la detección oportuna mediante análisis de sangre es clave para frenar su progresión.",
    symptoms: ["Hinchazón en piernas o pies", "Cansancio inusual", "Náuseas en etapas avanzadas", "Cambios en la frecuencia urinaria"],
    causes: ["Diabetes mellitus no controlada", "Hipertensión arterial no controlada", "Envejecimiento natural de la función renal"],
    riskFactors: ["Diabetes", "Hipertensión", "Edad avanzada", "Uso prolongado de ciertos medicamentos"],
    complications: ["Necesidad de diálisis en etapas avanzadas", "Anemia asociada", "Alteraciones del equilibrio mineral del cuerpo"],
    treatments: ["Control estricto de diabetes e hipertensión como causas principales", "Ajuste de medicamentos según la función renal", "Seguimiento periódico con análisis de sangre y orina"],
    faqs: [
      {
        question: "¿La insuficiencia renal siempre lleva a diálisis?",
        answer:
          "No siempre. Detectada y manejada a tiempo, su progresión puede frenarse significativamente controlando sus causas principales, como la diabetes y la hipertensión.",
      },
      {
        question: "¿Cómo se detecta antes de tener síntomas?",
        answer:
          "Mediante análisis de sangre y orina de rutina, especialmente en personas con diabetes, hipertensión o edad avanzada, que son quienes más se benefician del tamizaje periódico.",
      },
      {
        question: "¿Debo cambiar mi dieta si tengo insuficiencia renal?",
        answer:
          "En muchos casos sí, con ajustes específicos de proteína, sodio y potasio según la etapa de la enfermedad, siempre orientados de forma individualizada por el médico.",
      },
    ],
    relatedServices: ["s-manejo-insuficiencia-renal"],
    relatedSymptoms: ["sy-nauseas-vomitos"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/insuficiencia-renal.jpg",
    seo: {
      title: "Insuficiencia Renal en el Adulto Mayor | Dr. Aldo Morales",
      description: "Manejo de insuficiencia renal con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["insuficiencia renal", "internista Tuxtla Gutiérrez", "diabetes e hipertensión"],
    },
  },
  {
    id: "d-insuficiencia-cardiaca",
    slug: "insuficiencia-cardiaca",
    name: "Insuficiencia cardiaca",
    description:
      "La insuficiencia cardiaca ocurre cuando el corazón no bombea sangre con la eficiencia necesaria para cubrir las demandas del cuerpo. Es una causa frecuente de hospitalización en el adulto mayor, pero con un manejo adecuado se logra controlar los síntomas y reducir las reinternaciones.",
    symptoms: ["Falta de aire con el esfuerzo o al acostarse", "Hinchazón en piernas y pies", "Cansancio inusual", "Aumento rápido de peso por retención de líquidos"],
    causes: ["Daño previo por un infarto", "Hipertensión arterial no controlada a largo plazo", "Enfermedad de las válvulas del corazón"],
    riskFactors: ["Infarto previo", "Hipertensión no controlada", "Diabetes", "Edad avanzada"],
    complications: ["Hospitalizaciones recurrentes por descompensación", "Arritmias", "Deterioro progresivo de la capacidad física"],
    treatments: ["Control del peso y los líquidos corporales", "Manejo médico ajustado a la función del corazón", "Seguimiento estrecho para detectar descompensaciones a tiempo"],
    faqs: [
      {
        question: "¿Insuficiencia cardiaca significa que el corazón va a dejar de funcionar?",
        answer:
          "No. Significa que el corazón bombea con menor eficiencia de la necesaria, pero con tratamiento adecuado muchos pacientes mantienen una buena calidad de vida por años.",
      },
      {
        question: "¿Qué señales indican que me estoy descompensando?",
        answer:
          "Aumento rápido de peso en pocos días, hinchazón creciente en piernas, o falta de aire que empeora al acostarse son señales de alerta que ameritan contactar al médico de inmediato.",
      },
      {
        question: "¿Se puede llevar una vida normal con insuficiencia cardiaca?",
        answer:
          "Muchos pacientes mantienen una buena calidad de vida por años con el tratamiento adecuado, control del peso y seguimiento médico regular que detecte a tiempo cualquier descompensación.",
      },
    ],
    relatedServices: ["s-evaluacion-cardiovascular"],
    relatedSymptoms: ["sy-falta-aire"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/insuficiencia-cardiaca.jpg",
    seo: {
      title: "Insuficiencia Cardiaca en el Adulto Mayor | Dr. Aldo Morales",
      description: "Manejo de insuficiencia cardiaca con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["insuficiencia cardiaca", "internista Tuxtla Gutiérrez", "falta de aire adulto mayor"],
    },
  },
  {
    id: "d-estrenimiento",
    slug: "estrenimiento-cronico",
    name: "Estreñimiento crónico",
    description:
      "El estreñimiento crónico —evacuaciones poco frecuentes, duras o con esfuerzo, sostenidas por semanas o meses— es muy frecuente en el adulto mayor y tiene causas identificables: desde la dieta y la hidratación hasta el efecto de ciertos medicamentos o enfermedades asociadas.",
    symptoms: ["Evacuaciones poco frecuentes", "Esfuerzo excesivo al evacuar", "Sensación de evacuación incompleta", "Distensión abdominal"],
    causes: ["Dieta baja en fibra o hidratación insuficiente", "Efecto secundario de medicamentos", "Sedentarismo", "Enfermedades que afectan la motilidad intestinal"],
    riskFactors: ["Sedentarismo", "Dieta baja en fibra", "Polifarmacia", "Edad avanzada"],
    complications: ["Impactación fecal en casos severos", "Hemorroides o fisuras por el esfuerzo repetido", "Disminución del apetito por distensión"],
    treatments: ["Ajustes de dieta e hidratación", "Revisión de medicamentos que puedan estar contribuyendo", "Manejo escalonado según la causa identificada"],
    faqs: [
      {
        question: "¿El estreñimiento siempre es por la dieta?",
        answer:
          "Es una causa frecuente, pero no la única. Ciertos medicamentos, el sedentarismo y algunas enfermedades también lo provocan, por lo que conviene identificar la causa específica de cada caso.",
      },
      {
        question: "¿Cuándo el estreñimiento es motivo de preocupación mayor?",
        answer:
          "Cuando aparece de forma repentina en alguien que antes evacuaba con normalidad, se acompaña de sangrado, o de pérdida de peso no intencional — en esos casos se debe evaluar con mayor prontitud.",
      },
      {
        question: "¿Qué cambios de dieta ayudan con el estreñimiento?",
        answer:
          "Aumentar el consumo de fibra y líquidos, junto con actividad física regular, ayuda en muchos casos, aunque siempre conviene identificar si hay una causa adicional que tratar.",
      },
    ],
    relatedServices: ["s-evaluacion-nutricional-digestiva"],
    relatedSymptoms: ["sy-estrenimiento-sintoma", "sy-dolor-abdominal"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/estrenimiento-cronico.jpg",
    seo: {
      title: "Estreñimiento Crónico en el Adulto Mayor | Dr. Aldo Morales",
      description: "Manejo de estreñimiento crónico con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["estreñimiento crónico", "internista Tuxtla Gutiérrez", "salud digestiva adulto mayor"],
    },
  },
  {
    id: "d-perdida-apetito",
    slug: "perdida-de-apetito",
    name: "Pérdida de apetito",
    description:
      "La pérdida de apetito sostenida en el adulto mayor nunca debe asumirse como algo normal: puede llevar a desnutrición y pérdida de masa muscular, y suele tener una causa identificable —médica, emocional o relacionada con medicamentos— que conviene evaluar oportunamente.",
    symptoms: ["Disminución notoria de la cantidad de comida ingerida", "Pérdida de peso asociada", "Desinterés en comidas que antes disfrutaba"],
    causes: ["Depresión", "Efecto secundario de medicamentos", "Enfermedades crónicas no controladas", "Problemas dentales o de deglución"],
    riskFactors: ["Depresión", "Polifarmacia", "Aislamiento social", "Enfermedades crónicas múltiples"],
    complications: ["Desnutrición", "Pérdida de masa muscular y fragilidad", "Debilitamiento del sistema inmune"],
    treatments: ["Identificación de la causa de fondo", "Ajustes dietéticos y, si aplica, suplementación", "Revisión de medicamentos que puedan estar afectando el apetito"],
    faqs: [
      {
        question: "¿Cuándo la pérdida de apetito es motivo de consulta?",
        answer:
          "Cuando es sostenida por más de unas semanas o se acompaña de pérdida de peso notoria — no debe esperarse a que la persona esté claramente desnutrida para buscar evaluación.",
      },
      {
        question: "¿Los suplementos nutricionales son la solución directa?",
        answer:
          "Pueden ayudar como parte del manejo, pero primero se busca identificar y tratar la causa de fondo de la pérdida de apetito, no solo compensarla nutricionalmente.",
      },
      {
        question: "¿La pérdida de apetito puede ser señal de depresión?",
        answer:
          "Sí, es una de las señales frecuentes de depresión en el adulto mayor, por lo que la evaluación del apetito suele incluir también una revisión del estado de ánimo.",
      },
    ],
    relatedServices: ["s-evaluacion-nutricional-digestiva"],
    relatedSymptoms: ["sy-perdida-apetito-sintoma"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/perdida-de-apetito.jpg",
    seo: {
      title: "Pérdida de Apetito en el Adulto Mayor | Dr. Aldo Morales",
      description: "Evaluación de pérdida de apetito con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["pérdida de apetito", "desnutrición adulto mayor", "internista Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-caidas",
    slug: "caidas-en-el-adulto-mayor",
    name: "Caídas en el adulto mayor",
    description:
      "Las caídas en el adulto mayor rara vez son un simple accidente: suelen tener causas identificables (debilidad muscular, problemas de equilibrio, visión, medicamentos o riesgos del hogar) que se pueden evaluar y corregir para reducir el riesgo de una próxima caída, muchas veces más grave.",
    symptoms: ["Una o más caídas en los últimos seis meses", "Pasos más cortos o inseguros al caminar", "Miedo a caminar o salir de casa por temor a caer"],
    causes: ["Debilidad muscular", "Problemas de equilibrio", "Medicamentos que causan mareo o somnolencia", "Riesgos ambientales en el hogar"],
    riskFactors: ["Caída previa", "Fragilidad", "Deterioro visual no corregido", "Polifarmacia"],
    complications: ["Fracturas, especialmente de cadera", "Miedo a caminar que lleva a mayor inactividad", "Pérdida de confianza e independencia"],
    treatments: ["Evaluación de la marcha y el equilibrio", "Ejercicio dirigido de fuerza y balance", "Revisión del hogar para reducir riesgos de caída"],
    faqs: [
      {
        question: "¿Toda caída en el adulto mayor debe evaluarse?",
        answer:
          "Sí. Incluso sin lesión aparente, una caída suele ser señal de un riesgo subyacente que conviene identificar antes de que ocurra una caída más grave.",
      },
      {
        question: "¿Qué se revisa en una evaluación de caídas?",
        answer:
          "La fuerza muscular, el equilibrio, la marcha, la visión y los medicamentos que toma el paciente, para intervenir sobre los factores modificables encontrados.",
      },
      {
        question: "¿El miedo a volver a caminar también se atiende?",
        answer:
          "Sí. El temor tras una caída previa se aborda junto con el entrenamiento físico, ya que por sí solo puede llevar a mayor inactividad y, paradójicamente, a más riesgo de caer.",
      },
    ],
    relatedServices: ["s-evaluacion-caidas-equilibrio"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/caidas-en-el-adulto-mayor.jpg",
    seo: {
      title: "Caídas en el Adulto Mayor | Dr. Aldo Morales",
      description: "Evaluación de riesgo de caídas con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["caídas adulto mayor", "internista Tuxtla Gutiérrez", "riesgo de fracturas"],
    },
  },
  {
    id: "d-ulceras",
    slug: "ulceras-por-presion",
    name: "Úlceras por presión",
    colloquialNames: ["Escaras", "Llagas"],
    description:
      "Las úlceras por presión son lesiones en la piel y el tejido subyacente causadas por presión sostenida sobre una misma zona, frecuentes en personas con movilidad muy reducida. Se previenen con cambios de posición regulares y se tratan de forma más efectiva mientras más temprano se detectan.",
    symptoms: ["Enrojecimiento persistente que no desaparece al aliviar la presión", "Piel dañada o abierta en zonas de apoyo (talones, cadera, espalda baja)", "Dolor localizado en la zona afectada"],
    causes: ["Presión sostenida sobre una zona del cuerpo sin cambios de posición", "Fricción o humedad prolongada en la piel", "Mala circulación local"],
    riskFactors: ["Movilidad muy reducida o encamamiento", "Desnutrición", "Piel frágil por la edad", "Incontinencia sin cuidado adecuado de la piel"],
    complications: ["Infección local de la herida", "Progresión a tejido más profundo si no se trata a tiempo", "Infección generalizada en casos avanzados"],
    treatments: ["Alivio de la presión mediante cambios de posición programados", "Curación especializada según la etapa de la úlcera", "Optimización nutricional para favorecer la cicatrización"],
    faqs: [
      {
        question: "¿Las úlceras por presión se pueden prevenir?",
        answer:
          "Sí, en gran medida. Cambios de posición regulares, buena nutrición y cuidado de la piel en personas con movilidad reducida reducen significativamente el riesgo de que aparezcan.",
      },
      {
        question: "¿Qué tan rápido se debe actuar ante un enrojecimiento persistente?",
        answer:
          "De inmediato. Un enrojecimiento que no desaparece al aliviar la presión es la primera etapa de una úlcera, y actuar en ese momento evita que progrese a una lesión abierta.",
      },
      {
        question: "¿Quién tiene mayor riesgo de desarrollar úlceras por presión?",
        answer:
          "Personas con movilidad muy reducida o encamadas, con desnutrición o piel frágil por la edad — en esos casos conviene establecer un plan preventivo desde el inicio.",
      },
    ],
    relatedServices: ["s-manejo-heridas-ulceras"],
    relatedSymptoms: ["sy-ulceras-sintoma", "sy-alteraciones-piel"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/ulceras-por-presion.jpg",
    seo: {
      title: "Úlceras por Presión en el Adulto Mayor | Dr. Aldo Morales",
      description: "Prevención y manejo de úlceras por presión con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez.",
      keywords: ["úlceras por presión", "escaras", "internista Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-alergias",
    slug: "alergias",
    name: "Alergias",
    description:
      "Las alergias son reacciones exageradas del sistema inmune ante sustancias que normalmente no representan un peligro —alimentos, medicamentos, polen u otros alérgenos— y pueden manifestarse desde síntomas leves en la piel hasta reacciones graves que requieren atención urgente.",
    symptoms: ["Erupciones o enrojecimiento en la piel", "Comezón", "Estornudos o congestión nasal", "Hinchazón localizada"],
    causes: ["Exposición a un alérgeno específico (alimento, medicamento, polen, picadura, entre otros)"],
    riskFactors: ["Antecedente personal o familiar de alergias", "Exposición repetida a un alérgeno conocido"],
    complications: ["Reacción alérgica grave (anafilaxia) en casos severos, que compromete la respiración"],
    treatments: ["Identificación y evitación del alérgeno específico", "Manejo de síntomas según su intensidad", "Plan de acción claro para reacciones futuras"],
    faqs: [
      {
        question: "¿Se puede desarrollar una alergia nueva en la edad adulta?",
        answer:
          "Sí. Las alergias pueden aparecer a cualquier edad, incluso a sustancias o alimentos que antes se toleraban sin problema, por lo que una reacción nueva siempre amerita evaluación.",
      },
      {
        question: "¿Cuándo una reacción alérgica es una urgencia?",
        answer:
          "Cuando se acompaña de dificultad para respirar, hinchazón en cara o garganta, o mareo intenso — en esos casos se debe acudir de inmediato a un servicio de urgencias.",
      },
      {
        question: "¿Cómo se identifica el alérgeno causante?",
        answer:
          "A través de la historia clínica detallada de lo ocurrido antes de la reacción y, en algunos casos, pruebas específicas de alergia según lo que se sospeche.",
      },
    ],
    relatedServices: ["s-manejo-alergias"],
    relatedSymptoms: ["sy-alteraciones-piel"],
    lastReviewed: "2026-10-15",
    image: "/enfermedades/alergias.jpg",
    seo: {
      title: "Alergias en el Adulto Mayor | Dr. Aldo Morales",
      description: "Diagnóstico y manejo de alergias con el Dr. Aldo Morales Vleeschower, internista geriatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["alergias", "internista Tuxtla Gutiérrez", "reacciones alérgicas adulto mayor"],
    },
  },
];
