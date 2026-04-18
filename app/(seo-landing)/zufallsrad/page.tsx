import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoSparklesOutline, IoShieldCheckmarkOutline, IoPhonePortraitOutline, IoShareSocialOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Glücksrad Drehen – Zufallsgenerator Kostenlos | SpinPickOnline",
    description: "Drehen Sie das Glücksrad kostenlos online. Zufallsgenerator für Namen, Verlosung online, Entscheidungsrad. Ohne Anmeldung, für Schule, Events und Gruppen.",
    alternates: {
        canonical: "https://www.spinpickonline.com/zufallsrad",
        languages: {
            "en": "https://www.spinpickonline.com/random-picker-wheel",
            "de": "https://www.spinpickonline.com/zufallsrad",
            "x-default": "https://www.spinpickonline.com/random-picker-wheel",
        },
    },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Glücksrad Drehen – Zufallsgenerator Kostenlos Online",
        description: "Glücksrad kostenlos drehen. Zufallsgenerator für Verlosung, Schule und Entscheidungen. Ohne Anmeldung.",
        type: "website",
        url: "https://www.spinpickonline.com/zufallsrad",
        locale: "de_DE",
    },
};

const GLUECKSRAD_ENTRIES = [
    { id: "1", label: "Option 1", color: "#3b82f6" },
    { id: "2", label: "Option 2", color: "#f59e0b" },
    { id: "3", label: "Option 3", color: "#ef4444" },
    { id: "4", label: "Option 4", color: "#22c55e" },
    { id: "5", label: "Option 5", color: "#8b5cf6" },
    { id: "6", label: "Option 6", color: "#ec4899" },
];

export default function ZufallsradPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Wie funktioniert das Zufallsrad online?",
            answer: "Unser Zufallsrad online verwendet einen kryptografisch sicheren Zufallszahlengenerator (Web Crypto API), um vollständig faire Ergebnisse zu gewährleisten. Fügen Sie Ihre Optionen hinzu, klicken Sie auf Drehen und das Rad wählt eine Option zufällig aus – jede Eingabe hat genau die gleiche Wahrscheinlichkeit.",
        },
        {
            question: "Ist das Glücksrad kostenlos?",
            answer: "Ja! Unser Glücksrad ist 100 % kostenlos. Sie müssen sich nicht registrieren oder ein Konto erstellen. Sie können es so oft drehen, wie Sie möchten, ohne Kosten.",
        },
        {
            question: "Kann ich es für eine Verlosung online verwenden?",
            answer: "Absolut! Es ist perfekt für eine Verlosung online auf Instagram, YouTube oder Twitch. Fügen Sie die Namen der Teilnehmer hinzu, drehen Sie das Rad live oder nehmen Sie ein Video auf. Der Gewinner wird vollständig zufällig und transparent ausgewählt.",
        },
        {
            question: "Funktioniert das Zufallsrad auf dem Smartphone?",
            answer: "Ja! Unser Zufallsrad ist vollständig für Smartphones und Tablets optimiert. Sie müssen keine App herunterladen — nutzen Sie es direkt über den mobilen Browser mit Touchscreen-Unterstützung.",
        },
        {
            question: "Wie viele Optionen kann ich beim Namensgenerator hinzufügen?",
            answer: "Sie können so viele Optionen hinzufügen, wie Sie benötigen. Es gibt kein festes Limit, aber für ein optimales visuelles Erlebnis empfehlen wir 2 bis 50 Optionen. Das Rad passt sich automatisch an die Anzahl der Einträge an.",
        },
        {
            question: "Wie ziehe ich zufällig einen Namen aus einer Liste?",
            answer: "Fügen Sie Ihre Namensliste im Eingabefeld ein, einen pro Zeile oder durch Komma getrennt. Klicken Sie dann auf Drehen und das Glücksrad wählt einen Namen völlig fair und unvoreingenommen aus.",
        },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" lang="de">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-yellow-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>Glücksrad Kostenlos · Ohne Anmeldung</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Glücksrad Drehen – Zufallsgenerator Online
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Optionen eintragen, das <strong>Glücksrad</strong> drehen und sofort zufällig auswählen. Kostenlos, ohne Anmeldung, auf allen Geräten.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={GLUECKSRAD_ENTRIES} storageKey="zufallsradState" />
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Warum Unser Glücksrad Online Verwenden?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Tausende Lehrer, Content-Creator und Teams vertrauen täglich auf unseren Zufallsgenerator
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-yellow-600" />, bg: "from-yellow-50 to-amber-50", border: "border-yellow-200", ibg: "bg-yellow-100", title: "Echte Zufälligkeit", desc: "Verwendet die Web Crypto API für kryptografisch sichere Zufallszahlen. Alle Optionen haben beim Drehen des Glücksrads exakt die gleiche Wahrscheinlichkeit." },
                            { icon: <IoSparklesOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "100 % Kostenlos", desc: "Kein Konto nötig. Öffnen Sie die Seite und drehen Sie das Zufallsrad sofort — völlig kostenlos und ohne lästige Werbung." },
                            { icon: <IoPhonePortraitOutline className="text-xl text-green-600" />, bg: "from-green-50 to-emerald-50", border: "border-green-200", ibg: "bg-green-100", title: "Mobil & Tablet", desc: "Optimiert für Touchscreens. Nutzen Sie es auf iPhone, Android, Tablet oder PC — ohne App-Download." },
                            { icon: <IoShareSocialOutline className="text-xl text-purple-600" />, bg: "from-purple-50 to-violet-50", border: "border-purple-200", ibg: "bg-purple-100", title: "Rad Teilen", desc: "Speichern Sie Ihr individuelles Glücksrad und teilen Sie den Link mit Freunden, Schülern oder Followern. Volle Transparenz bei jeder Verlosung." },
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

            {/* Wie benutzen */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            So Nutzen Sie das Glücksrad – Schritt für Schritt
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">In weniger als 30 Sekunden loslegen</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { n: "1", title: "Namen oder Optionen eingeben", desc: "Geben Sie die Namen der Teilnehmer, Essensoptionen, Aufgaben oder beliebige Listen in das Eingabefeld ein. Sie können beliebig viele Einträge in Ihr Glücksrad aufnehmen — von 2 bis zu mehreren Hundert. Sie können auch eine gesamte Liste auf einmal einfügen." },
                            { n: "2", title: "Farben des Rades anpassen", desc: "Klicken Sie auf jeden Eintrag, um seine Farbe zu ändern. Die Individualisierung des Zufallsrads macht es visuell ansprechender — besonders wenn Sie es im Unterricht auf einem Projektor oder bei einem Live-Event zeigen." },
                            { n: "3", title: "Rad drehen und Ergebnis erhalten", desc: "Klicken Sie auf den großen Dreh-Button. Das Glücksrad dreht sich mit einer flüssigen Animation und stoppt bei einer vollständig zufällig ausgewählten Option. Das Ergebnis wird deutlich hervorgehoben, damit alle es klar sehen können." },
                            { n: "4", title: "Wiederholen oder Gewinner entfernen", desc: "Brauchen Sie mehrere Gewinner? Entfernen Sie die ausgewählte Option und drehen Sie erneut. So ist jede neue Auswahl fair, da der vorherige Gewinner nicht mehr auf dem Rad erscheint." },
                        ].map((s) => (
                            <div key={s.n} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">{s.n}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beliebte Verwendungen */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Beliebte Verwendungen des Glücksrads
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        {[
                            { e: "🏆", title: "Verlosung Online", desc: "Wählen Sie Gewinner für Gewinnspiele auf Instagram, YouTube oder Twitch transparent aus. Fügen Sie die Namen der Teilnehmer hinzu, drehen Sie das Rad live oder nehmen Sie ein Video auf. Ihre Follower sehen, dass die Verlosung online vollständig fair ist." },
                            { e: "🎓", title: "Glücksrad für Schule und Unterricht", desc: "Lehrer nutzen das Zufallsrad, um zufällig Schüler für Fragen, Präsentationen oder Aktivitäten auszuwählen. Es sorgt dafür, dass alle aufmerksam sind. Auch ideal zur Themenverteilung für Projekte oder zur fairen Gruppenbildung." },
                            { e: "🍕", title: "Was Essen Wir Heute?", desc: "Beenden Sie die ewige Diskussion, was gekocht oder bestellt wird. Geben Sie Ihre Lieblingsrestaurants oder verfügbare Gerichte ein, drehen Sie das Rad und lösen Sie das Entscheidungsdilemma in der Gruppe schmerzlos." },
                            { e: "👥", title: "Zufälliger Teambuildung-Generator", desc: "Teilen Sie Gruppen für Sport, Schulprojekte oder Firmenaktivitäten zufällig und völlig fair auf. Der Zufallsgenerator stellt sicher, dass niemand eine manipulierte Einteilung beanstanden kann." },
                            { e: "🎮", title: "Spiele und Unterhaltung", desc: "Nutzen Sie das Glücksrad, um die Spielreihenfolge festzulegen, zu entscheiden wer anfängt, oder die nächste Aufgabe bei Wahrheit oder Pflicht zu wählen. Bringen Sie Aufregung in jede Spielrunde oder Feier." },
                            { e: "📋", title: "Aufgaben Zufällig Verteilen", desc: "Verteilen Sie Haushaltsaufgaben, Arbeitspflichten oder Projektverantwortungen zufällig. Vermeiden Sie Konflikte und lassen Sie den Zufall entscheiden, wer was tut — vollständig unparteiisch." },
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

            {/* Langer Artikel */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                            Alles über das Glücksrad Online
                        </h2>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">Was ist ein Zufallsrad Online?</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                Ein <strong>Zufallsrad online</strong> ist ein digitales Werkzeug, das die Drehung eines Glücksrads simuliert, um eine Option völlig zufällig aus allen verfügbaren Einträgen auszuwählen. Im Gegensatz zu einer manuellen Verlosung kann das Glücksrad beliebig viele Optionen verarbeiten und bietet eine visuell beeindruckende und transparente Auswahl — ideal um die Fairness einer <strong>Verlosung online</strong> zu beweisen.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Unser <strong>Zufallsgenerator</strong> verwendet die Web Crypto API des Browsers — denselben Sicherheitsstandard, der beim Online-Banking eingesetzt wird — und gewährleistet damit, dass das Ergebnis unmöglich vorherzusagen oder zu manipulieren ist. Jede Option hat exakt die gleiche Gewinnchance.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Die Wissenschaft des Zufalls</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    Laut psychologischen Studien trifft der Mensch täglich über <strong>35.000 Entscheidungen</strong>, was zur sogenannten &quot;Entscheidungsmüdigkeit&quot; führt. Für Entscheidungen mit geringem Einfluss — was essen, wer zuerst, was unternehmen — die Wahl an ein <strong>Glücksrad</strong> zu delegieren spart mentale Energie für das Wesentliche.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Außerdem: Wenn das Ergebnis des Rades uns enttäuscht, wissen wir sofort, was wir wirklich wollten — eine clevere Methode, versteckte Vorlieben zu enthüllen.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Tipps für Ihr Glücksrad</h3>
                                <div className="space-y-3">
                                    {[
                                        { t: "Kurze Namen verwenden", d: "Kurze Einträge sind besser lesbar in den Segmenten. Nutzen Sie Spitznamen oder Initialen für bessere Übersicht." },
                                        { t: "Auf Großbildschirm projizieren", d: "Für Unterricht oder Events: Beamer anschließen. Die Rad-Animation sorgt für Spannung bei der Verlosung." },
                                        { t: "Gewinner nach Ziehung entfernen", d: "Bei mehreren Gewinnern die gezogene Option entfernen, damit niemand doppelt gezogen werden kann." },
                                        { t: "Verlosung aufzeichnen", d: "Für Social Media den Bildschirm aufnehmen. Das vollständige Video der Verlosung schafft Vertrauen bei den Followern." },
                                    ].map((tip, i) => (
                                        <div key={i} className="flex gap-2 items-start">
                                            <span className="text-yellow-500 font-bold text-sm mt-0.5">💡</span>
                                            <div>
                                                <span className="font-semibold text-gray-900 text-sm">{tip.t}: </span>
                                                <span className="text-sm text-gray-600">{tip.d}</span>
                                            </div>
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
                            Häufige Fragen zum Glücksrad
                        </h2>
                        <div className="space-y-3">
                            {[
                                { q: "Wie funktioniert das Zufallsrad online?", a: "Es verwendet die Web Crypto API für kryptografisch sichere Zahlen. Einträge hinzufügen, drehen — das Ergebnis ist völlig unvoreingenommen.", color: "bg-yellow-500" },
                                { q: "Ist das Glücksrad kostenlos?", a: "Ja, 100 % kostenlos, ohne Anmeldung und störungsfreie Nutzung. So oft drehen wie gewünscht.", color: "bg-blue-500" },
                                { q: "Kann ich es für eine Verlosung online nutzen?", a: "Perfekt dafür! Teilnehmernamen eintragen, live drehen oder aufnehmen — transparente und faire Verlosung.", color: "bg-green-500" },
                                { q: "Funktioniert es auf dem Smartphone?", a: "Vollständig für iOS und Android optimiert. Keine App — direkt im Browser nutzen mit Touchscreen-Support.", color: "bg-purple-500" },
                                { q: "Wie viele Optionen kann ich hinzufügen?", a: "Ohne praktische Begrenzung. Für die beste Erfahrung empfehlen wir 2–50 Optionen.", color: "bg-red-500" },
                                { q: "Wie ziehe ich zufällig einen Namen?", a: "Liste einfügen, ein Name pro Zeile, dann drehen. Das Glücksrad wählt vollständig fair aus.", color: "bg-pink-500" },
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>F</span>
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Weitere Zufalls-Tools</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/ruleta-aleatoria", label: "Ruleta Aleatoria 🇪🇸" },
                            { href: "/roda-da-sorte", label: "Roda da Sorte 🇧🇷" },
                            { href: "/roue-aleatoire", label: "Roue Aléatoire 🇫🇷" },
                            { href: "/roda-putar", label: "Roda Putar 🇮🇩" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-yellow-300 hover:text-yellow-600 transition-all">
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
