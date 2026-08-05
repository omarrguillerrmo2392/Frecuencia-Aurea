// Matriz de Textos (Extraída de tu archivo Excel)
const baseDeDatos = {
    abundancia: [
        { diagnostico: "Tu chakra raíz se encuentra desalineado, generando fugas energéticas que drenan tu capacidad de materialización. Estás operando desde una frecuencia de escasez que repele el flujo financiero que por derecho divino te corresponde, manteniéndote en modo supervivencia.", decreto: "Yo soy la fuente inagotable de riqueza y prosperidad. Mi campo energético está perfectamente alineado con la abundancia universal, sellando toda fuga y atrayendo el dinero hacia mí con facilidad, gozo y gloria aquí y ahora." },
        { diagnostico: "Cargas con creencias limitantes heredadas de tu linaje ancestral respecto al valor del sacrificio y el dinero. Esta lealtad familiar invisible actúa como un muro vibracional denso que bloquea tu acceso inmediato a la prosperidad económica en tu presente.", decreto: "Yo libero ahora todo contrato de escasez consciente o inconsciente de mi árbol genealógico. Yo soy la ruptura del patrón, abriendo mis caminos financieros para recibir ingresos inesperados y abundancia infinita en mi vida cotidiana." },
        { diagnostico: "Existe una disonancia magnética entre tu deseo mental de riqueza y la vibración emocional de miedo en tu plexo solar. Este choque energético estanca la manifestación del dinero, impidiendo que tus proyectos cristalicen rápidamente en el plano físico.", decreto: "Yo soy un imán poderoso y constante para el éxito financiero. Confío plenamente en mi poder de manifestación, anclando la seguridad en mi ser y permitiendo que la riqueza material fluya hacia mí sin resistencias." },
        { diagnostico: "Has acumulado deudas kármicas o votos de pobreza de existencias pasadas que siguen activos en tu campo cuántico. Esta huella etérica sabotea tus ingresos recurrentes, manteniéndote en un ciclo de frustración que debes cortar urgentemente para avanzar.", decreto: "Yo revoco y transmuto definitivamente cualquier voto de pobreza, carencia o sacrificio en todas mis dimensiones y tiempos. Yo soy merecedor de una vida opulenta, y mi realidad física refleja la infinita riqueza del universo hoy." },
        { diagnostico: "Tu biocampo está saturado por una vibración de estancamiento, producto de no perdonar errores o pérdidas financieras del pasado. Esta resistencia cristalizada ancla tu energía a la carencia, cerrando los portales de recepción de nuevas oportunidades lucrativas.", decreto: "Yo perdono mis decisiones pasadas y libero la culpa que ata mi economía. Yo soy la pura energía de la creación manifestando oro, oportunidades altamente rentables y crecimiento financiero exponencial de forma continua y segura." },
        { diagnostico: "El flujo de dar y recibir está severamente desequilibrado en tu chakra del corazón, bloqueando la receptividad. Al sentirte inconscientemente indigno, tu campo electromagnético rechaza la abundancia que el universo intenta depositar en tus cuentas bancarias.", decreto: "Yo soy digno, valioso y merecedor de la más alta prosperidad que el cosmos tiene para ofrecer. Mi corazón se abre de par en par para recibir con infinita gratitud cada avalancha de abundancia que llega a mis manos diariamente." },
        { diagnostico: "Presentas parásitos energéticos en tu aura causados por rodearte de entornos o personas que vibran en queja constante. Esta contaminación drena drásticamente tu vitalidad y desvía tu magnetismo natural para generar dinero rápido y fluido.", decreto: "Yo soy una fortaleza de luz infranqueable que eleva su frecuencia por encima de cualquier vibración de carencia externa. Yo atraigo circunstancias, personas y eventos que multiplican mis ingresos y expanden mi riqueza ahora mismo." },
        { diagnostico: "Tu glándula pineal está calcificada por la preocupación excesiva sobre el futuro material, desconectándote de tu intuición financiera. Sin esta guía superior, tomas decisiones desde la necesidad y el miedo, limitando tu máximo potencial creador de riqueza.", decreto: "Yo soy la inteligencia divina manifestando riqueza en cada uno de mis pasos. Mi visión interna es clara, mis decisiones son prósperas y el dinero llega a mí de múltiples fuentes de forma fluida y perfectamente sincronizada." },
        { diagnostico: "Tu biodescodificación revela un profundo conflicto de \"desvalorización\" arraigado en etapas tempranas. Este trauma, codificado directamente en tus células, actúa como un techo de cristal financiero que te impide generar y retener grandes sumas de dinero.", decreto: "Yo reprogramo mi ADN y mis células con la vibración del éxito absoluto y la abundancia ilimitada. Yo soy el arquitecto de mi fortuna, reconociendo mi inmenso valor personal y cobrando justamente por él en todo momento." },
        { diagnostico: "La geometría sagrada de tu campo toroide está fracturada por la vibración constante de \"no tener suficiente\". Esta fuga magnética desintegra las sincronías favorables, retrasando críticamente la llegada de clientes, aumentos o dinero inesperado.", decreto: "Yo restauro la perfección magnética de mi campo energético, vibrando en la más alta sintonía del éxito y la opulencia. Yo soy el dinero manifestándose libremente, creando un excedente financiero perpetuo que bendice mi vida entera." }
    ],
    amor: [
        { diagnostico: "Tu chakra del corazón tiene fisuras que actúan como fugas energéticas, drenando tu capacidad de dar y recibir amor incondicional. Estás emitiendo una frecuencia de carencia afectiva que repele parejas potenciales alineadas, manteniéndote en un ciclo de relaciones vacías que urge detener.", decreto: "Yo soy la máxima expresión del amor divino en la Tierra. Mi chakra del corazón está sano, sellado y vibrando en la más alta frecuencia magnética, atrayendo a mi vida relaciones plenas, recíprocas y profundamente enriquecedoras de forma natural." },
        { diagnostico: "Por lealtades invisibles, sostienes creencias limitantes heredadas sobre el dolor o sacrificio en la pareja. Esta biodescodificación ancestral actúa como un escudo repelente en tu campo cuántico, bloqueando la llegada de un compañero de vida para protegerte de un sufrimiento irreal.", decreto: "Yo disuelvo ahora mismo todo contrato kármico de sufrimiento amoroso en mi linaje. Yo soy libre para amar y ser amado sin condiciones, construyendo una relación de pareja basada en el respeto, el gozo absoluto y la expansión mutua." },
        { diagnostico: "Existe un estancamiento denso en tu chakra sacro que anula tu magnetismo afectivo. Al vibrar subconscientemente en la desvalorización, tu biocampo proyecta una sombra de inseguridad que sabotea cualquier intento de conexión íntima, alejando el verdadero amor de tu realidad.", decreto: "Yo reconozco mi inmenso valor y enciendo el poder magnético de mi energía creadora. Yo soy un faro de luz y atractivo irresistible, manifestando una pareja que me honra, me valora profundamente y me complementa en perfecta armonía divina." },
        { diagnostico: "Has activado votos de soledad o aislamiento de existencias pasadas que siguen latentes en tu registro akáshico. Esta firma energética restrictiva impide que la energía del amor romántico penetre tu aura, condenándote a una desconexión crónica que debes revocar ya.", decreto: "Yo revoco y destruyo cualquier voto de castidad, soledad o aislamiento de esta y todas mis vidas pasadas. Yo soy la apertura total al amor romántico, permitiendo que mi alma gemela entre a mi vida con facilidad, pasión y compromiso." },
        { diagnostico: "Tu niño interior herido emite una señal de alarma constante por miedo al abandono, saturando tu campo toroide. Esta vibración defensiva atrae únicamente dinámicas de apego ansioso y espejos kármicos que repiten tus traumas, impidiendo una conexión real y madura.", decreto: "Yo abrazo y sano a mi niño interior con amor infinito, dándole seguridad eterna. Yo soy emocionalmente pleno e independiente, atrayendo una pareja consciente, madura y dispuesta a construir un vínculo sagrado, seguro y altamente duradero." },
        { diagnostico: "El bloqueo en tu chakra garganta te impide comunicar tus verdaderos deseos, generando relaciones basadas en la complacencia. Esta disonancia vibracional te desconecta de tu poder de atracción auténtico, atrayendo personas que no resuenan con tu verdadera esencia.", decreto: "Yo expreso mi verdad con amor, claridad y total confianza en quien soy. Yo soy auténtico en cada interacción, magnetizando a mi vida una pareja que me ama por mi esencia real, en total transparencia y conexión profunda de almas." },
        { diagnostico: "Aún conservas cordones energéticos activos y parásitos astrales ligados a tus ex parejas. Esta fuga de vitalidad relacional mantiene tu espacio cuántico ocupado, bloqueando matemáticamente la entrada de un nuevo amor sano y elevando tu frecuencia de ansiedad afectiva.", decreto: "Yo corto, quemo y transmuto definitivamente todo cordón energético con mis relaciones del pasado. Yo soy un espacio limpio, renovado y vibrante, listo para recibir un amor superior, fresco y perfectamente alineado con mi evolución y paz actual." },
        { diagnostico: "Tu necesidad de control, radicada en un plexo solar desequilibrado, asfixia la fluidez natural del amor. Al no confiar en el diseño del universo, generas un muro de resistencia magnética que retrasa severamente el encuentro con tu compañero de vida divino.", decreto: "Yo suelto la necesidad de control y me rindo a la perfecta sincronía del universo amoroso. Yo soy el fluir natural de la vida, confiando en que la pareja perfecta para mi mayor bien ya está en camino hacia mí sin resistencias." },
        { diagnostico: "Tu chakra raíz no está anclado a la seguridad de la Tierra, generando un profundo miedo subconsciente a la intimidad. Esta desestabilización te hace huir instintivamente cuando el amor verdadero se acerca, creando un patrón de auto-sabotaje relacional crítico.", decreto: "Yo me anclo en la seguridad del presente y me abro sin miedo a la intimidad emocional profunda. Yo soy un espacio seguro para amar y ser amado, atrayendo relaciones sólidas, leales y firmemente enraizadas en el respeto incondicional." },
        { diagnostico: "La calcificación de tu glándula pineal te mantiene atrapado en ilusiones y estándares de amor de baja vibración. Al estar desconectado de tu intuición superior, eliges desde el ego y la carencia, ignorando a las almas que realmente vibran en tu misma frecuencia áurea.", decreto: "Yo activo mi visión superior y reconozco el amor verdadero más allá de las ilusiones del ego. Yo soy un imán exacto para mi contraparte divina, atrayendo una conexión inquebrantable, espiritual y profundamente mágica hoy y siempre." }
    ],
    salud: [
        { diagnostico: "Tu chakra garganta y corazón albergan emociones reprimidas que se han cristalizado, somatizando el dolor en tu cuerpo físico. Esta fuga energética debilita severamente tu sistema inmunológico y te mantiene en una frecuencia de enfermedad que requiere atención urgente para evitar mayor deterioro.", decreto: "Yo soy la perfecta expresión de la salud divina en la Tierra. Libero con amor toda emoción estancada y permito que la energía sanadora del universo regenere cada célula de mi cuerpo, vibrando en completa vitalidad y bienestar físico aquí y ahora." },
        { diagnostico: "Estás manifestando lealtades familiares invisibles que replican dolencias de tu linaje ancestral. Estas creencias limitantes heredadas operan en tu memoria celular, creando un bloqueo agudo en tu chakra raíz que interrumpe tu anclaje natural a la fuerza vital del planeta.", decreto: "Yo rompo ahora mismo todo contrato kármico y lealtad de enfermedad con mis ancestros. Yo soy la resurrección y la vida de mi cuerpo físico, reprogramando mi ADN con la luz cuántica de la salud perfecta, radiante y duradera." },
        { diagnostico: "Tu plexo solar sufre una grave fisura energética debido a la constante exposición al estrés y la cesión de tu poder personal. Este desequilibrio bioenergético colapsa tu campo áurico, dejándote completamente vulnerable a desarmonías físicas y a un agotamiento crónico peligroso.", decreto: "Yo recupero mi poder personal absoluto y restauro el escudo protector magnético de mi aura. Yo soy un canal puro de energía vital inagotable, llenando mi cuerpo de fuerza, vigor y una salud inquebrantable que me acompaña en cada respiro." },
        { diagnostico: "La biodescodificación de tus síntomas revela un profundo resentimiento enquistado que acidifica tu entorno biológico. Al negarte a soltar y perdonar, mantienes una densidad vibracional tóxica que bloquea los procesos de autosanación natural de tus órganos y tejidos.", decreto: "Yo libero todo resentimiento y permito que el poder del perdón disuelva cualquier cristalización de dolor en mi interior. Yo soy la salud perfecta fluyendo libremente por mis venas, regenerando mis sistemas y restableciendo mi total equilibrio cuántico." },
        { diagnostico: "Operas desde una frecuencia de supervivencia y miedo constante que agota las glándulas suprarrenales y paraliza tu chakra sacro. Este cortocircuito en tu campo electromagnético frena abruptamente la regeneración celular, acelerando el envejecimiento y el malestar físico.", decreto: "Yo confío plenamente en el flujo seguro y benévolo de la vida. Mi cuerpo es un templo sagrado de luz y bienestar absoluto, donde cada célula se renueva constantemente en una vibración de salud perfecta, juventud y armonía inagotable." },
        { diagnostico: "Tu glándula pineal y chakra del tercer ojo están saturados por bucles mentales oscuros y ansiedad prolongada. Esta hiperactividad densa drena tu energía etérica durante la noche, impidiendo el descanso reparador celular y fracturando críticamente tu vitalidad diaria.", decreto: "Yo calmo mi mente y me rindo al flujo curativo del universo. Yo soy el descanso profundo y la regeneración celular activa, despertando cada día con niveles desbordantes de energía, claridad mental cristalina y fuerza biológica absoluta." },
        { diagnostico: "Presentas cordones y parásitos energéticos adheridos a tu biocampo por interactuar recurrentemente con entornos o personas tóxicas. Estas fugas succionan tu fuerza vital diaria, causando fatiga inexplicable y reduciendo drásticamente tu capacidad natural de sanación.", decreto: "Yo corto, disuelvo y transmuto todo cordón energético que no sirva a mi mayor bien físico y espiritual. Yo soy una esfera de luz curativa impenetrable, vibrando en la más alta frecuencia de salud, resistencia biológica y vitalidad expansiva." },
        { diagnostico: "El desamor y la crítica hacia ti mismo han creado una densa armadura alrededor de tu chakra corazón, limitando la oxigenación energética. Esta frecuencia de carencia afectiva interna se somatiza como debilidad física, apagando tu chispa vital y bajando tus defensas rápidamente.", decreto: "Yo me amo, me apruebo y bendigo mi vehículo físico de manera incondicional. Yo soy el flujo del amor divino materializando una salud vibrante en mis órganos, mis huesos y mis sistemas, irradiando luz sanadora desde mi interior hacia el mundo." },
        { diagnostico: "Tu chakra corona se encuentra sellado por el escepticismo o la desesperanza, interrumpiendo tu conexión con la Fuente. Al depender únicamente de tu limitada reserva física, experimentas un desgaste prematuro y síntomas crónicos que exigen una realineación espiritual inmediata.", decreto: "Yo abro mi corona y mi campo cuántico para recibir la infinita corriente de luz sanadora del Cosmos. Yo soy la materialización del bienestar supremo, permitiendo que la inteligencia universal repare y optimice mi cuerpo biológico en este mismo instante." },
        { diagnostico: "Tu sistema nervioso retiene la memoria cuántica de traumas de impactos emocionales no resueltos, manteniendo tu biología en una falsa alerta. Esta tensión de alta frecuencia bloquea la homeostasis celular, forzando a tu cuerpo a gritar a través del dolor físico.", decreto: "Yo comando a mi sistema nervioso central a entrar en un estado de paz profunda y seguridad absoluta. Yo soy la sanación cuántica en perfecta acción, reseteando mi memoria celular hacia su estado original de perfección, equilibrio y salud indestructible." }
    ]
};

// Lógica de funcionamiento de la aplicación corregida para los nombres de audio
const formulario = document.getElementById('formulario-diagnostico');
const bodyFondo = document.getElementById('body-fondo');

// Elementos a actualizar
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaResultado = document.getElementById('pantalla-resultado');
const resNombre = document.getElementById('res-nombre');
const resDiagnostico = document.getElementById('res-diagnostico');
const resDecreto = document.getElementById('res-decreto');
const audioDecreto = document.getElementById('audio-decreto');
const sourceAudio = document.getElementById('source-audio');

// Evento: Cambio de fondo
document.getElementById('area').addEventListener('change', function(e) {
    const areaSeleccionada = e.target.value;
    bodyFondo.className = `bg-${areaSeleccionada}`;
});

// Evento principal: Revelar diagnóstico
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombreUsuario = document.getElementById('nombre').value;
    const areaSeleccionada = document.getElementById('area').value;
    
    const indiceAleatorio = Math.floor(Math.random() * 10);
    const resultado = baseDeDatos[areaSeleccionada][indiceAleatorio];

    resNombre.textContent = nombreUsuario.toUpperCase();
    resDiagnostico.textContent = `"${resultado.diagnostico}"`;
    resDecreto.textContent = resultado.decreto;

    const numeroAudio = indiceAleatorio + 1;
    let nombreAudio = "";
    
    // Concatenación exacta según la nomenclatura de tus archivos subidos
    if (areaSeleccionada === 'abundancia') {
        nombreAudio = `Gratuito - Abundancia - Decreto ${numeroAudio}.MP3`;
    } else if (areaSeleccionada === 'amor') {
        nombreAudio = `Gratuito - Amor- Decreto ${numeroAudio}.MP3`;
    } else if (areaSeleccionada === 'salud') {
        nombreAudio = `Gratuito - Salud- Decreto ${numeroAudio}.MP3`;
    }

    // Codificar espacios para que la URL los lea perfectamente en internet
    sourceAudio.src = `assets/${encodeURIComponent(nombreAudio)}`;
    audioDecreto.load();

    pantallaInicio.classList.add('oculto');
    pantallaResultado.classList.remove('oculto');
});

// Lógica de Prueba Social Falsa (Contador y Popups)
let contadorBase = 1734;
const contadorElement = document.getElementById('contador-personas');
setInterval(() => {
    contadorBase += Math.floor(Math.random() * 3) + 1;
    if(contadorElement) contadorElement.innerText = contadorBase;
}, 4000);

const nombresToast = ["María L.", "Juan P.", "Andrea C.", "Carlos M.", "Lucía R.", "Jorge T.", "Sofía A."];
const areasToast = ["Abundancia", "Amor", "Salud"];
const toastBox = document.getElementById('toast-notificacion');
const toastTexto = document.getElementById('toast-texto');

function mostrarToastAleatorio() {
    const nombreAleatorio = nombresToast[Math.floor(Math.random() * nombresToast.length)];
    const areaAleatoria = areasToast[Math.floor(Math.random() * areasToast.length)];
    
    toastTexto.innerHTML = `✨ <strong>${nombreAleatorio}</strong> activó su Kit VIP de ${areaAleatoria}`;
    toastBox.classList.remove('oculto');
    
    setTimeout(() => {
        toastBox.classList.add('oculto');
    }, 3500);
}

setTimeout(() => {
    mostrarToastAleatorio();
    setInterval(mostrarToastAleatorio, 12000);
}, 6000);
