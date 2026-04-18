import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoSparklesOutline, IoShieldCheckmarkOutline, IoPhonePortraitOutline, IoShareSocialOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Ruleta Aleatoria Gratis – Gira la Ruleta Online | SpinPickOnline",
    description: "Gira la ruleta aleatoria gratis y elige al azar entre tus opciones. Sin registro, funciona en móvil. Perfecta para sorteos onilne, clases y decisiones en grupo.",
    alternates: {
        canonical: "https://www.spinpickonline.com/ruleta-aleatoria",
        languages: {
            "en": "https://www.spinpickonline.com/random-picker-wheel",
            "es": "https://www.spinpickonline.com/ruleta-aleatoria",
            "x-default": "https://www.spinpickonline.com/random-picker-wheel",
        },
    },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Ruleta Aleatoria Gratis – Gira la Ruleta Online",
        description: "Gira la ruleta aleatoria gratis. Sin registro, funciona en móvil. Perfecta para sorteos, clases y decisiones.",
        type: "website",
        url: "https://www.spinpickonline.com/ruleta-aleatoria",
        locale: "es_ES",
    },
};

const RULETA_ENTRIES = [
    { id: "1", label: "Opción 1", color: "#ef4444" },
    { id: "2", label: "Opción 2", color: "#3b82f6" },
    { id: "3", label: "Opción 3", color: "#22c55e" },
    { id: "4", label: "Opción 4", color: "#f59e0b" },
    { id: "5", label: "Opción 5", color: "#8b5cf6" },
    { id: "6", label: "Opción 6", color: "#ec4899" },
];

export default function RuletaAleatoriaPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "¿Cómo funciona la ruleta aleatoria online?",
            answer: "Nuestra ruleta aleatoria online usa un generador de números aleatorios criptográficamente seguro (Web Crypto API) para garantizar resultados completamente imparciales. Añade tus opciones al panel de la izquierda, pulsa el botón de girar y la rueda seleccionará una opción al azar con igual probabilidad para todas las entradas.",
        },
        {
            question: "¿Es gratis la ruleta para sorteos?",
            answer: "Sí, nuestra ruleta para sorteos es 100% gratuita. No necesitas registrarte, crear una cuenta ni introducir tu tarjeta de crédito. Puedes girarla tantas veces como quieras sin ningún coste y sin publicidad intrusiva.",
        },
        {
            question: "¿Puedo usar la rueda de la fortuna para hacer sorteos en Instagram?",
            answer: "¡Por supuesto! Es perfecta para sorteos en Instagram, YouTube y TikTok. Añade los nombres o usuarios de los participantes, gira la ruleta en pantalla completa o grábalo en video y el ganador se selecciona de forma totalmente aleatoria y transparente. Ideal para demostrar la imparcialidad del sorteo online.",
        },
        {
            question: "¿Funciona la ruleta online en el móvil?",
            answer: "Sí, nuestra ruleta online está optimizada para funcionar perfectamente en smartphones Android e iPhone. No necesitas descargar ninguna aplicación: úsala directamente desde el navegador de tu móvil con pantalla táctil.",
        },
        {
            question: "¿Cuántas opciones puedo añadir al generador aleatorio?",
            answer: "Puedes añadir tantas opciones como necesites al generador aleatorio. No hay un límite fijo, aunque para una mejor experiencia visual recomendamos entre 2 y 50 opciones. La rueda se ajusta automáticamente al número de entradas.",
        },
        {
            question: "¿Cómo elijo al azar un nombre de una lista?",
            answer: "Para elegir al azar un nombre de una lista, simplemente escribe o pega todos los nombres en el campo de entrada de la ruleta, uno por línea. Luego pulsa el botón de girar y la rueda aleatoria seleccionará un nombre de forma justa e imparcial.",
        },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" lang="es">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-red-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>Ruleta Aleatoria Gratis · Sin Registro</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ruleta Aleatoria – Gira la Rueda y Elige al Azar
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Añade tus opciones, gira la <strong>ruleta aleatoria</strong> y elige al azar al instante. Gratis, sin registro, en todos los dispositivos.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={RULETA_ENTRIES} storageKey="ruletaAleatoriaState" />
                </div>
            </section>

            {/* Por qué nuestra ruleta */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            ¿Por Qué Usar Nuestra Ruleta Aleatoria Online?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Miles de profesores, creadores de contenido y equipos confían en nuestra rueda aleatoria cada día
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-red-600" />, bg: "from-red-50 to-orange-50", border: "border-red-200", ibg: "bg-red-100", title: "Aletoriedad Garantizada", desc: "Usa la Web Crypto API para generar números criptográficamente seguros. Todas las opciones tienen exactamente la misma probabilidad en cada giro de la ruleta." },
                            { icon: <IoSparklesOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "100% Gratis y Sin Registro", desc: "No necesitas crear ninguna cuenta ni introducir tu correo. Abre la página y empieza a girar la ruleta de inmediato, de forma totalmente gratuita, siempre." },
                            { icon: <IoPhonePortraitOutline className="text-xl text-green-600" />, bg: "from-green-50 to-emerald-50", border: "border-green-200", ibg: "bg-green-100", title: "Móvil y Tablet", desc: "La ruleta online está optimizada para pantallas táctiles. Úsala desde tu iPhone, Android, tablet o PC sin instalar ninguna aplicación extra." },
                            { icon: <IoShareSocialOutline className="text-xl text-purple-600" />, bg: "from-purple-50 to-violet-50", border: "border-purple-200", ibg: "bg-purple-100", title: "Comparte Tu Ruleta", desc: "Guarda tu rueda de la fortuna personalizada y comparte el enlace con tus amigos, alumnos o seguidores. Transparencia total en cada sorteo online." },
                        ].map((c, i) => (
                            <div key={i} className={`bg-gradient-to-br ${c.bg} md:p-5 p-4 md:rounded-xl rounded-lg border-2 ${c.border} hover:shadow-lg transition-shadow`}>
                                <div className={`${c.ibg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>{c.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cómo usar */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Cómo Usar la Ruleta Aleatoria – Paso a Paso
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">Empieza a girar la rueda en menos de 30 segundos</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { n: "1", title: "Añade tus nombres u opciones", desc: "Escribe los nombres de los participantes, opciones de comida, tareas o cualquier lista en el panel de entrada. Puedes añadir desde 2 hasta cientos de entradas en tu ruleta aleatoria. También puedes pegar una lista entera de golpe." },
                            { n: "2", title: "Personaliza los colores de la rueda", desc: "Haz clic en cada entrada para cambiar su color. Personalizar la rueda de la fortuna la hace más visual y divertida, especialmente si la proyectas en clase o en un evento en vivo ante tu audiencia." },
                            { n: "3", title: "Gira la ruleta y obtén el resultado", desc: "Pulsa el gran botón central de girar. La ruleta aleatoria girará con una animación fluida y se detendrá en una opción seleccionada completamente al azar. El resultado aparece destacado para que todos lo puedan ver claramente." },
                            { n: "4", title: "Repite o elimina el ganador", desc: "¿Necesitas más de un ganador o resultado? Puedes eliminar la opción seleccionada y volver a girar la ruleta. Así, cada nueva selección es justa porque el ganador anterior ya no aparece en la rueda del sorteo." },
                        ].map((s) => (
                            <div key={s.n} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">{s.n}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Usos populares */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Usos Populares de la Ruleta Aleatoria
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Desde sorteos en redes sociales hasta decisiones diarias, la ruleta lo resuelve todo
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        {[
                            { e: "🏆", title: "Sorteos Online en Redes Sociales", desc: "Selecciona ganadores de sorteos en Instagram, YouTube, TikTok o Twitch de manera transparente. Añade los nombres o @ de los participantes, gira la rueda en directo o grábalo en video y comparte el resultado. Tus seguidores verán que el sorteo online es completamente justo e imparcial." },
                            { e: "🎓", title: "Ruleta para Clases y Educación", desc: "Los profesores usan la ruleta aleatoria para elegir alumnos al azar para preguntas, presentaciones o actividades. Mantiene a todos atentos y participativos. También sirve para asignar temas de trabajo, formar grupos de estudio o decidir el orden de exposición de forma justa." },
                            { e: "🍕", title: "¿Qué Comemos Hoy? Rueda de la Comida", desc: "Acaba con el eterno debate de qué pedir o where ir a comer. Añade tus restaurantes favoritos, opciones de comida a domicilio o platos que tienes en casa, gira la ruleta y pon fin a la indecisión. También funciona para decidir el restaurante perfecto en grupo." },
                            { e: "👥", title: "Generador Aleatorio para Equipos", desc: "Divide grupos de forma aleatoria y completamente justa para deportes, proyectos escolares, actividades de empresa o team building. El generador aleatorio garantiza que nadie pueda quejarse de que la distribución fue manipulada o tendenciosa." },
                            { e: "🎮", title: "Juegos y Entretenimiento", desc: "Usa la rueda aleatoria para decidir el orden de los jugadores, elegir quién empieza, seleccionar el próximo reto en un juego de verdad o atrevimiento, o determinar una prenda. Añade emoción y sorpresa a cualquier reunión o juego de mesa." },
                            { e: "📋", title: "Asignar Tareas y Responsabilidades", desc: "Reparte las tareas del hogar, las responsabilidades del trabajo o las obligaciones de un proyecto de forma aleatoria con nuestra ruleta. Evita los conflictos típicos de \"siempre me toca a mí\" al dejar que el azar decida quién hace cada tarea de forma imparcial." },
                        ].map((u, i) => (
                            <div key={i} className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">{u.e}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{u.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artículo largo */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Todo lo que Necesitas Saber sobre la Ruleta Aleatoria
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">¿Qué es una Ruleta Aleatoria Online?</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    Una <strong>ruleta aleatoria online</strong> es una herramienta digital que simula el giro de una rueda de la fortuna para seleccionar una opción de forma completamente aleatoria entre todas las entradas disponibles. A diferencia de un sorteo manual o de lanzar una moneda, la ruleta aleatoria puede manejar cualquier número de opciones y ofrece una selección visualmente impactante y transparente.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    El concepto es simple: añades tus opciones (nombres, números, palabras, emojis o cualquier texto), la rueda se divide en segmentos de igual tamaño para cada entrada, giras y el puntero fijo indica el resultado ganador. La clave está en el <strong>generador aleatorio</strong> que impulsa la selección: el nuestro usa la Web Crypto API del navegador, el mismo estándar de seguridad que protege las transacciones bancarias online, garantizando que el resultado sea impossible de predecir o manipular.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">La Ciencia detrás de Elegir al Azar</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                        Según estudios de psicología cognitiva, el ser humano toma más de <strong>35.000 decisiones al día</strong>, lo que provoca la llamada &quot;fatiga de decisión&quot;. Este fenómeno reduce nuestra capacidad de tomar buenas decisiones conforme avanza el día. Para las elecciones de bajo impacto —qué comer, quién va primero, qué hacer el fin de semana— delegar la decisión a una <strong>ruleta aleatoria</strong> libera energía mental para lo que realmente importa.
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Además, existe un fenómeno llamado &quot;efecto de claridad del girador&quot;: cuando el resultado de la ruleta nos decepciona, inmediatamente sabemos lo que realmente queríamos. Es una forma inteligente de revelar nuestras preferencias ocultas sin el estrés de la indecisión.
                                    </p>
                                </div>
                                <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Aleatoriedad Real vs Pseudoaleatoriedad</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                        No todas las ruletas online son iguales. Muchas usan funciones simples como <code className="text-xs bg-gray-100 px-1 rounded">Math.random()</code> de JavaScript, que son <strong>pseudoaleatorias</strong>: generan secuencias que parecen aleatorias pero que siguen un patrón matemático predecible si conoces la semilla inicial.
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Nuestra <strong>ruleta aleatoria</strong> usa <code className="text-xs bg-gray-100 px-1 rounded">crypto.getRandomValues()</code>, que obtiene entropía real del hardware del dispositivo y del sistema operativo. Esto garantiza una aleatoriedad genuina, imposible de predecir, adecuada incluso para sorteos legales y profesionales donde la transparencia es esencial.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Ruleta Aleatoria vs Otras Formas de Elegir al Azar</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                                                <th className="px-3 py-2 text-left font-semibold">Método</th>
                                                <th className="px-3 py-2 text-left font-semibold">Múltiples opciones</th>
                                                <th className="px-3 py-2 text-left font-semibold">Visual y divertido</th>
                                                <th className="px-3 py-2 text-left font-semibold">Sin sesgo</th>
                                                <th className="px-3 py-2 text-left font-semibold">Compartible</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                ["Ruleta Aleatoria Online", "✅ Ilimitadas", "✅ Animación", "✅ Crypto RNG", "✅ Sí"],
                                                ["Cara o Cruz", "❌ Solo 2", "⚠️ Básico", "✅ Sí", "❌ No"],
                                                ["Sorteo Manual", "✅ Sí", "⚠️ Lento", "⚠️ Cuestionable", "❌ No"],
                                                ["Lista de Números Aleatorios", "✅ Sí", "❌ Aburrido", "✅ Sí", "⚠️ Difícil"],
                                                ["Preguntar al grupo", "✅ Sí", "❌ No", "❌ Hay sesgo social", "❌ No"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i === 0 ? "bg-red-50/50 font-medium" : ""}>
                                                    {row.map((cell, j) => (
                                                        <td key={j} className="px-3 py-2 text-gray-700">{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Consejos para Sacar el Máximo de Tu Ruleta Aleatoria</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { t: "Usa nombres claros y cortos", d: "Las entradas más cortas se ven mejor en los segmentos de la rueda. Si los nombres son largos, usa apodos o iniciales para mayor claridad visual." },
                                        { t: "Proyecta en pantalla grande", d: "Para sorteos en clase o eventos, conecta el ordenador a un proyector o TV. El efecto visual de la ruleta girando genera expectación y emoción en el público." },
                                        { t: "Elimina entradas tras seleccionarlas", d: "Si necesitas varios ganadores sin repetición, activa la opción de eliminar la entrada tras cada giro. Así la ruleta garantiza que nadie gana dos veces el mismo premio." },
                                        { t: "Graba el sorteo para compartirlo", d: "Para sorteos en redes sociales, graba la pantalla mientras giras la ruleta en directo. Publicar el video completo del sorteo online genera confianza y transparencia con tus seguidores." },
                                    ].map((tip, i) => (
                                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-1 text-sm">💡 {tip.t}</h4>
                                            <p className="text-xs text-gray-600 leading-relaxed">{tip.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Preguntas Frecuentes sobre la Ruleta Aleatoria
                        </h2>
                        <div className="space-y-3">
                            {[
                                { q: "¿Cómo funciona la ruleta aleatoria online?", a: "Usa la Web Crypto API para generar números criptográficamente seguros. Añade tus opciones, pulsa girar y el resultado es completamente imparcial — igual probabilidad para cada entrada.", color: "bg-red-500" },
                                { q: "¿Es gratis la ruleta para sorteos?", a: "Sí, 100% gratuita, sin registro y sin publicidad intrusiva. Gira tantas veces como quieras sin ningún coste y sin crear ninguna cuenta.", color: "bg-orange-500" },
                                { q: "¿Puedo usar la rueda de la fortuna para sorteos en Instagram?", a: "¡Perfecta! Añade los @ de los participantes, gira en directo o graba el video y el resultado demuestra transparencia total a tus seguidores.", color: "bg-blue-500" },
                                { q: "¿Funciona la ruleta online en el móvil?", a: "Completamente optimizada para iOS y Android. Sin descargas, funciona directo desde el navegador con pantalla táctil.", color: "bg-green-500" },
                                { q: "¿Cuántas opciones puedo añadir al generador aleatorio?", a: "Sin límite práctico. Recomendamos 2–50 opciones para la mejor experiencia visual, aunque la herramienta soporta listas mucho más grandes.", color: "bg-purple-500" },
                                { q: "¿Cómo elijo al azar un nombre de una lista?", a: "Pega tu lista de nombres en el panel de entradas, uno por línea o separados por comas, y pulsa girar. La ruleta elige un nombre al azar de forma totalmente justa.", color: "bg-pink-500" },
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>P</span>
                                        <span className="text-sm md:text-base font-bold text-gray-900 flex-1">{item.q}</span>
                                    </summary>
                                    <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Más Herramientas de Selección Aleatoria</h2>
                        <p className="text-sm text-gray-600">Descubre todas las opciones de SpinPickOnline</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel" },
                            { href: "/roda-da-sorte", label: "Roda da Sorte 🇧🇷" },
                            { href: "/roue-aleatoire", label: "Roue Aléatoire 🇫🇷" },
                            { href: "/zufallsrad", label: "Zufallsrad 🇩🇪" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-red-300 hover:text-red-600 transition-all">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
