import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoSparklesOutline, IoShieldCheckmarkOutline, IoPhonePortraitOutline, IoShareSocialOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Roue Aléatoire Gratuite – Générateur Aléatoire | SpinPickOnline",
    description: "Faites tourner la roue aléatoire gratuitement. Tirage au sort en ligne, générateur aléatoire de noms, sans inscription. Parfait pour les cours, concours et décisions de groupe.",
    alternates: {
        canonical: "https://www.spinpickonline.com/roue-aleatoire",
        languages: {
            "en": "https://www.spinpickonline.com/random-picker-wheel",
            "fr": "https://www.spinpickonline.com/roue-aleatoire",
            "x-default": "https://www.spinpickonline.com/random-picker-wheel",
        },
    },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Roue Aléatoire Gratuite – Générateur Aléatoire en Ligne",
        description: "Faites tourner la roue aléatoire gratuitement. Sans inscription, fonctionne sur mobile.",
        type: "website",
        url: "https://www.spinpickonline.com/roue-aleatoire",
        locale: "fr_FR",
    },
};

const ROUE_ENTRIES = [
    { id: "1", label: "Option 1", color: "#3b82f6" },
    { id: "2", label: "Option 2", color: "#ef4444" },
    { id: "3", label: "Option 3", color: "#22c55e" },
    { id: "4", label: "Option 4", color: "#f59e0b" },
    { id: "5", label: "Option 5", color: "#8b5cf6" },
    { id: "6", label: "Option 6", color: "#ec4899" },
];

export default function RoueAleatoirePage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Comment fonctionne la roue aléatoire en ligne ?",
            answer: "Notre roue aléatoire en ligne utilise un générateur de nombres aléatoires cryptographiquement sécurisé (Web Crypto API) pour garantir des résultats totalement impartiaux. Ajoutez vos options, cliquez sur tourner et la roue sélectionne une option au hasard avec une probabilité égale pour toutes les entrées.",
        },
        {
            question: "La roue aléatoire est-elle gratuite ?",
            answer: "Oui ! Notre roue aléatoire est 100 % gratuite. Pas besoin de créer un compte ni de renseigner votre e-mail. Vous pouvez la faire tourner autant de fois que vous le souhaitez, sans aucun coût.",
        },
        {
            question: "Puis-je l'utiliser pour un tirage au sort en ligne ?",
            answer: "Absolument ! C'est parfait pour un tirage au sort en ligne sur Instagram, YouTube ou TikTok. Ajoutez les noms ou pseudos des participants, faites tourner la roue en direct ou enregistrez une vidéo. Le gagnant est sélectionné de manière totalement aléatoire et transparente.",
        },
        {
            question: "La roue aléatoire fonctionne-t-elle sur mobile ?",
            answer: "Oui ! Notre roue aléatoire est entièrement optimisée pour les smartphones et tablettes Android et iOS. Pas besoin de télécharger d'application — utilisez-la directement depuis votre navigateur mobile avec support de l'écran tactile.",
        },
        {
            question: "Combien d'options puis-je ajouter dans le générateur aléatoire ?",
            answer: "Vous pouvez ajouter autant d'options que nécessaire dans le générateur aléatoire. Il n'y a pas de limite fixe, mais pour une meilleure expérience visuelle, nous recommandons entre 2 et 50 options. La roue s'ajuste automatiquement au nombre d'entrées.",
        },
        {
            question: "Comment choisir un nom au hasard dans une liste ?",
            answer: "Pour choisir un nom au hasard, collez votre liste de noms dans le panneau d'entrée, un par ligne ou séparés par une virgule. Ensuite, cliquez sur tourner et la roue aléatoire sélectionne un nom de manière totalement juste et impartiale.",
        },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" lang="fr">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-blue-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>Roue Aléatoire Gratuite · Sans Inscription</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Roue Aléatoire – Faites Tourner et Choisissez au Hasard
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Ajoutez vos options, faites tourner la <strong>roue aléatoire</strong> et choisissez au hasard instantanément. Gratuit, sans inscription, sur tous les appareils.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={ROUE_ENTRIES} storageKey="roueAleaState" />
                </div>
            </section>

            {/* Avantages */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Pourquoi Utiliser Notre Roue Aléatoire en Ligne ?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Des milliers d&apos;enseignants, créateurs de contenu et équipes font confiance à notre roue chaque jour
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "Aléatoire Garanti", desc: "Utilise la Web Crypto API pour générer des nombres cryptographiquement sécurisés. Toutes les options ont exactement la même probabilité à chaque tour de la roue." },
                            { icon: <IoSparklesOutline className="text-xl text-red-600" />, bg: "from-red-50 to-pink-50", border: "border-red-200", ibg: "bg-red-100", title: "100 % Gratuit", desc: "Pas besoin de créer un compte. Ouvrez la page et commencez à faire tourner la roue immédiatement, gratuitement et sans publicité intrusive." },
                            { icon: <IoPhonePortraitOutline className="text-xl text-green-600" />, bg: "from-green-50 to-emerald-50", border: "border-green-200", ibg: "bg-green-100", title: "Mobile et Tablette", desc: "Optimisée pour les écrans tactiles. Utilisez-la sur iPhone, Android, tablette ou PC sans installer aucune application." },
                            { icon: <IoShareSocialOutline className="text-xl text-purple-600" />, bg: "from-purple-50 to-violet-50", border: "border-purple-200", ibg: "bg-purple-100", title: "Partagez Votre Roue", desc: "Sauvegardez votre roue personnalisée et partagez le lien avec vos amis, élèves ou abonnés. Transparence totale pour chaque tirage au sort." },
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

            {/* Comment utiliser */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Comment Utiliser la Roue Aléatoire – Étape par Étape
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">Commencez à faire tourner la roue en moins de 30 secondes</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { n: "1", title: "Ajoutez vos noms ou options", desc: "Saisissez les noms des participants, les options de repas, les tâches ou n'importe quelle liste dans le panneau de saisie. Vous pouvez ajouter de 2 à des centaines d'entrées dans votre roue aléatoire. Vous pouvez également coller une liste entière d'un seul coup." },
                            { n: "2", title: "Personnalisez les couleurs de la roue", desc: "Cliquez sur chaque entrée pour modifier sa couleur. Personnaliser la roue de la fortune la rend plus visuelle et ludique, surtout si vous la projetez en classe ou lors d'un événement en direct." },
                            { n: "3", title: "Faites tourner la roue et obtenez le résultat", desc: "Cliquez sur le grand bouton central pour faire tourner. La roue aléatoire tourne avec une animation fluide et s'arrête sur une option sélectionnée complètement au hasard. Le résultat s'affiche bien en évidence pour que tout le monde puisse le voir." },
                            { n: "4", title: "Répétez ou supprimez le gagnant", desc: "Besoin de plusieurs gagnants ? Vous pouvez supprimer l'option sélectionnée et faire tourner la roue à nouveau. Ainsi, chaque nouvelle sélection est juste car le gagnant précédent n'apparaît plus dans la roue du tirage au sort." },
                        ].map((s) => (
                            <div key={s.n} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">{s.n}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Utilisations populaires */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Utilisations Populaires de la Roue Aléatoire
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        {[
                            { e: "🏆", title: "Tirage au Sort en Ligne", desc: "Sélectionnez des gagnants pour des concours sur Instagram, YouTube ou TikTok de manière transparente. Ajoutez les noms ou pseudos des participants, faites tourner la roue en direct ou enregistrez une vidéo. Vos abonnés verront que le tirage au sort en ligne est complètement équitable." },
                            { e: "🎓", title: "Roue Aléatoire pour les Cours", desc: "Les enseignants utilisent la roue aléatoire pour choisir des élèves au hasard pour les questions, les présentations ou les activités. Cela maintient tout le monde attentif et participatif. Elle sert aussi à attribuer des sujets de travail ou à former des groupes de façon équitable." },
                            { e: "🍕", title: "Que Manger Aujourd'hui ?", desc: "Mettez fin au débat éternel : où commander ou que cuisiner. Ajoutez vos restaurants préférés ou vos plats disponibles, faites tourner la roue et résolvez le dilemme du repas en groupe — sans discussions ni compromis compliqués." },
                            { e: "👥", title: "Générateur Aléatoire d'Équipes", desc: "Divisez des groupes de manière totalement équitable pour les sports, les projets scolaires ou les activités d'entreprise. Le générateur aléatoire garantit que personne ne peut se plaindre d'une répartition biaisée ou manipulée." },
                            { e: "🎮", title: "Jeux et Divertissement", desc: "Utilisez la roue aléatoire pour décider l'ordre des joueurs, choisir qui commence, sélectionner le prochain défi dans un jeu de vérité ou d'action. Ajoutez de l'excitation et de la surprise à n'importe quelle réunion." },
                            { e: "📋", title: "Répartir les Tâches", desc: "Répartissez les tâches ménagères, les responsabilités professionnelles ou les obligations d'un projet de façon aléatoire. Évitez les conflits et laissez le hasard décider qui fait quoi de manière impartiale." },
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

            {/* Article de contenu */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                            Tout Savoir sur la Roue Aléatoire en Ligne
                        </h2>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">Qu&apos;est-ce qu&apos;une Roue Aléatoire en Ligne ?</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                Une <strong>roue aléatoire en ligne</strong> est un outil numérique qui simule la rotation d&apos;une roue de la fortune pour sélectionner une option de manière totalement aléatoire parmi toutes les entrées disponibles. Contrairement à un tirage au sort manuel ou à un lancer de pièce, la roue aléatoire peut gérer n&apos;importe quel nombre d&apos;options et offre une sélection visuellement percutante et transparente — idéale pour prouver l&apos;impartialité d&apos;un <strong>tirage au sort en ligne</strong>.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Notre <strong>générateur aléatoire</strong> utilise la Web Crypto API du navigateur, le même standard de sécurité utilisé pour les transactions bancaires en ligne, garantissant que le résultat est impossible à prédire ou à manipuler. Chaque option a exactement la même probabilité d&apos;être sélectionnée, ce qui assure une justice et une transparence totales.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">La Science derrière le Hasard</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    Selon des études de psychologie cognitive, l&apos;être humain prend plus de <strong>35 000 décisions par jour</strong>, ce qui entraîne ce que les spécialistes appellent la &quot;fatigue décisionnelle&quot;. Pour les choix à faible impact — quoi manger, qui passe en premier —, déléguer la décision à une <strong>roue aléatoire</strong> libère de l&apos;énergie mentale pour ce qui compte vraiment.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    De plus, lorsque le résultat de la roue nous déçoit, nous découvrons aussitôt ce que nous voulions vraiment. C&apos;est une manière intelligente de révéler nos préférences cachées sans le stress de l&apos;indécision.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Conseils pour Votre Roue Aléatoire</h3>
                                <div className="space-y-3">
                                    {[
                                        { t: "Utilisez des noms courts", d: "Les entrées courtes s'affichent mieux dans les segments de la roue. Utilisez des surnoms ou des initiales pour une meilleure lisibilité." },
                                        { t: "Projetez sur grand écran", d: "Pour les cours ou événements, connectez votre ordinateur à un projecteur. L'animation de la roue crée de l'anticipation." },
                                        { t: "Supprimez après chaque tirage", d: "Pour plusieurs gagnants sans répétition, supprimez chaque option sélectionnée avant de faire tourner à nouveau." },
                                        { t: "Enregistrez le tirage", d: "Pour les réseaux sociaux, enregistrez l'écran pendant que la roue tourne. Publier la vidéo renforce la confiance." },
                                    ].map((tip, i) => (
                                        <div key={i} className="flex gap-2 items-start">
                                            <span className="text-blue-500 font-bold text-sm mt-0.5">💡</span>
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
                            Questions Fréquentes sur la Roue Aléatoire
                        </h2>
                        <div className="space-y-3">
                            {[
                                { q: "Comment fonctionne la roue aléatoire en ligne ?", a: "Elle utilise la Web Crypto API pour générer des nombres sécurisés. Ajoutez vos options, cliquez sur tourner et le résultat est totalement impartial.", color: "bg-blue-500" },
                                { q: "La roue aléatoire est-elle gratuite ?", a: "Oui, 100 % gratuite, sans inscription et sans publicité intrusive. Faites-la tourner autant que vous le souhaitez.", color: "bg-red-500" },
                                { q: "Puis-je l'utiliser pour un tirage au sort en ligne ?", a: "Parfaite pour ça ! Ajoutez les pseudos des participants, faites tourner en direct ou enregistrez la vidéo pour montrer la transparence totale.", color: "bg-green-500" },
                                { q: "Fonctionne-t-elle sur mobile ?", a: "Totalement optimisée pour iOS et Android. Sans téléchargement, fonctionne directement depuis le navigateur avec écran tactile.", color: "bg-purple-500" },
                                { q: "Combien d'options puis-je ajouter ?", a: "Sans limite pratique. Nous recommandons 2 à 50 options pour la meilleure expérience visuelle, mais l'outil supporte des listes bien plus longues.", color: "bg-orange-500" },
                                { q: "Comment choisir un nom au hasard dans une liste ?", a: "Collez votre liste dans le panneau d'entrée, un par ligne, puis cliquez sur tourner. La roue choisit un nom équitablement.", color: "bg-pink-500" },
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>Q</span>
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Plus d&apos;Outils de Sélection Aléatoire</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/ruleta-aleatoria", label: "Ruleta Aleatoria 🇪🇸" },
                            { href: "/roda-da-sorte", label: "Roda da Sorte 🇧🇷" },
                            { href: "/zufallsrad", label: "Zufallsrad 🇩🇪" },
                            { href: "/roda-putar", label: "Roda Putar 🇮🇩" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all">
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
