import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoSparklesOutline, IoShieldCheckmarkOutline, IoPhonePortraitOutline, IoShareSocialOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Roda da Sorte Grátis – Girar a Roda Online | SpinPickOnline",
    description: "Gire a roda da sorte grátis e escolha ao acaso entre suas opções. Sem cadastro, funciona no celular. Ideal para sorteio online, aulas e decisões em grupo.",
    alternates: {
        canonical: "https://www.spinpickonline.com/roda-da-sorte",
        languages: {
            "en": "https://www.spinpickonline.com/random-picker-wheel",
            "pt": "https://www.spinpickonline.com/roda-da-sorte",
            "x-default": "https://www.spinpickonline.com/random-picker-wheel",
        },
    },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Roda da Sorte Grátis – Girar a Roda Online",
        description: "Gire a roda da sorte grátis. Sem cadastro, funciona no celular. Ideal para sorteio online, aulas e decisões.",
        type: "website",
        url: "https://www.spinpickonline.com/roda-da-sorte",
        locale: "pt_BR",
    },
};

const RODA_ENTRIES = [
    { id: "1", label: "Opção 1", color: "#22c55e" },
    { id: "2", label: "Opção 2", color: "#3b82f6" },
    { id: "3", label: "Opção 3", color: "#f59e0b" },
    { id: "4", label: "Opção 4", color: "#ef4444" },
    { id: "5", label: "Opção 5", color: "#8b5cf6" },
    { id: "6", label: "Opção 6", color: "#ec4899" },
];

export default function RodaDaSortePage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Como funciona a roda da sorte online?",
            answer: "Nossa roda da sorte online usa um gerador de números aleatórios criptograficamente seguro (Web Crypto API) para garantir resultados completamente imparciais. Adicione suas opções, clique em girar e a roda selecionará uma opção ao acaso com igual probabilidade para todas as entradas.",
        },
        {
            question: "A roda da sorte para sorteio é gratuita?",
            answer: "Sim! Nossa roda da sorte para sorteio é 100% gratuita. Não é necessário se cadastrar, criar uma conta ou informar cartão de crédito. Você pode girá-la quantas vezes quiser sem nenhum custo.",
        },
        {
            question: "Posso usar o sorteador online para sortear no Instagram?",
            answer: "Com certeza! É perfeita para sorteio online no Instagram, YouTube e TikTok. Adicione os nomes ou @ dos participantes, gire a roda ao vivo ou grave um vídeo e o vencedor é selecionado de forma totalmente aleatória e transparente. Seus seguidores podem ver que o sorteio é completamente justo.",
        },
        {
            question: "A roda da sorte funciona no celular?",
            answer: "Sim! Nossa roda da sorte é totalmente otimizada para smartphones Android e iPhone. Não precisa baixar nenhum aplicativo — use diretamente pelo navegador do seu celular, com suporte completo à tela de toque.",
        },
        {
            question: "Quantas opções posso adicionar no gerador aleatório?",
            answer: "Você pode adicionar quantas opções precisar no gerador aleatório. Não há limite fixo, mas para a melhor experiência visual, recomendamos entre 2 e 50 opções. A roda se ajusta automaticamente ao número de entradas.",
        },
        {
            question: "Como sortear nomes aleatoriamente em uma lista?",
            answer: "Para sortear nomes aleatoriamente, cole sua lista de nomes no painel de entrada, um por linha ou separados por vírgula. Em seguida, clique em girar e a roda da sorte selecionará um nome de forma totalmente justa e imparcial.",
        },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" lang="pt">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-green-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>Roda da Sorte Grátis · Sem Cadastro</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Roda da Sorte – Gire a Roda e Escolha ao Acaso
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Adicione suas opções, gire a <strong>roda da sorte</strong> e escolha ao acaso na hora. Grátis, sem cadastro, em todos os dispositivos.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={RODA_ENTRIES} storageKey="rodaDaSorteState" />
                </div>
            </section>

            {/* Por que usar */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Por Que Usar Nossa Roda da Sorte Online?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Milhares de professores, criadores de conteúdo e equipes confiam em nosso sorteador online todo dia
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-green-600" />, bg: "from-green-50 to-emerald-50", border: "border-green-200", ibg: "bg-green-100", title: "Aleatoriedade Garantida", desc: "Usa a Web Crypto API para gerar números criptograficamente seguros. Todas as opções têm exatamente a mesma probabilidade em cada giro da roda da sorte." },
                            { icon: <IoSparklesOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "100% Grátis e Sem Cadastro", desc: "Não precisa criar conta nem informar e-mail. Abra a página e comece a usar o sorteador online imediatamente, de forma totalmente gratuita, sempre." },
                            { icon: <IoPhonePortraitOutline className="text-xl text-yellow-600" />, bg: "from-yellow-50 to-amber-50", border: "border-yellow-200", ibg: "bg-yellow-100", title: "Funciona no Celular", desc: "Otimizada para telas de toque, iPhone e Android. Use do celular, tablet ou computador sem instalar nenhum aplicativo extra." },
                            { icon: <IoShareSocialOutline className="text-xl text-purple-600" />, bg: "from-purple-50 to-violet-50", border: "border-purple-200", ibg: "bg-purple-100", title: "Compartilhe os Resultados", desc: "Salve sua roda da sorte personalizada e compartilhe o link com amigos, alunos ou seguidores. Transparência total em cada sorteio online." },
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

            {/* Como usar */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Como Usar a Roda da Sorte – Passo a Passo
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">Comece a girar a roda em menos de 30 segundos</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { n: "1", title: "Adicione seus nomes ou opções", desc: "Escreva os nomes dos participantes, opções de comida, tarefas ou qualquer lista no painel de entrada. Você pode adicionar de 2 a centenas de entradas na sua roda da sorte. Também é possível colar uma lista inteira de uma vez." },
                            { n: "2", title: "Personalize as cores da roda", desc: "Clique em cada entrada para mudar sua cor. Personalizar a roda da sorte a torna mais visual e divertida, especialmente se você for projetá-la em aula ou em um evento ao vivo para sua audiência." },
                            { n: "3", title: "Gire a roda e veja o resultado", desc: "Clique no grande botão central de girar. A roda da sorte vai girar com uma animação fluida e parar em uma opção selecionada completamente ao acaso. O resultado aparece em destaque para todos verem claramente." },
                            { n: "4", title: "Repita ou elimine o vencedor", desc: "Precisa de mais de um ganhador? Você pode eliminar a opção já selecionada e girar novamente. Assim, cada nova seleção é justa porque o ganhador anterior já não aparece mais na roda do sorteio." },
                        ].map((s) => (
                            <div key={s.n} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">{s.n}</div>
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
                            Usos Populares da Roda da Sorte
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            De sorteios em redes sociais a decisões diárias, a roda da sorte resolve tudo
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        {[
                            { e: "🏆", title: "Sorteio Online em Redes Sociais", desc: "Selecione vencedores de sorteios no Instagram, YouTube, TikTok ou Twitch de maneira transparente. Adicione os nomes ou @ dos participantes, gire a roda ao vivo ou grave um vídeo e compartilhe o resultado. Seus seguidores verão que o sorteio online é completamente justo e imparcial." },
                            { e: "🎓", title: "Roda da Sorte para Aulas", desc: "Professores usam a roda da sorte para escolher alunos aleatoriamente para perguntas, apresentações ou atividades. Mantém todos atentos e participativos. Também é ótima para sortear temas de trabalho, formar grupos de estudo ou decidir a ordem de apresentação de forma justa." },
                            { e: "🍕", title: "O Que Comer Hoje? Roda da Comida", desc: "Acabe com a indecisão de onde pedir comida ou o que cozinhar. Adicione seus restaurantes favoritos, opções de delivery ou pratos que tem em casa, gire a roda e resolva o dilema eterno de 'o que vamos comer hoje?'" },
                            { e: "👥", title: "Gerador Aleatório para Times", desc: "Divida grupos de forma aleatória e completamente justa para esportes, projetos escolares, atividades de empresa ou dinâmicas de grupo. O gerador aleatório garante que ninguém possa reclamar que a divisão foi manipulada ou tendenciosa." },
                            { e: "🎮", title: "Jogos e Entretenimento", desc: "Use a roda aleatória para decidir a ordem dos jogadores, escolher quem começa, selecionar o próximo desafio em uma verdade ou consequência, ou determinar uma missão. Adicione emoção e surpresa em qualquer reunião ou jogo de tabuleiro." },
                            { e: "📋", title: "Distribuir Tarefas e Responsabilidades", desc: "Distribua tarefas domésticas, responsabilidades do trabalho ou obrigações de um projeto de forma aleatória. Evite conflitos com a roda da sorte e deixe o acaso decidir quem faz cada tarefa de maneira imparcial." },
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

            {/* Artigo de conteúdo */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Tudo Sobre a Roda da Sorte Online
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">O que é uma Roda da Sorte Online?</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    Uma <strong>roda da sorte online</strong> é uma ferramenta digital que simula o giro de uma roda para selecionar uma opção de forma completamente aleatória entre todas as entradas disponíveis. Diferente de um sorteio manual, a roda da sorte online pode lidar com qualquer número de opções e oferece uma seleção visualmente impactante e transparente, ideal para provar a imparcialidade de um <strong>sorteio online</strong>.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    O conceito é simples: você adiciona suas opções (nomes, números, palavras, emojis), a roda se divide em segmentos de tamanho igual para cada entrada, você gira, e o ponteiro fixo indica o resultado vencedor. A chave está no <strong>gerador aleatório</strong> que impulsiona a seleção: o nosso usa a Web Crypto API do navegador, o mesmo padrão de segurança utilizado em transações bancárias digitais, garantindo que o resultado seja impossível de prever ou manipular.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">A Ciência por trás de Escolher ao Acaso</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                        Segundo estudos de psicologia cognitiva, o ser humano toma mais de <strong>35.000 decisões por dia</strong>, causando o chamado &quot;cansaço de decisão&quot;. Esse fenômeno reduz nossa capacidade de tomar boas decisões conforme o dia avança. Para escolhas de baixo impacto — o que comer, quem vai primeiro, o que fazer no fim de semana — delegar a decisão a uma <strong>roda da sorte</strong> libera energia mental para o que realmente importa.
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Além disso, quando o resultado da roda nos decepciona, imediatamente sabemos o que realmente queríamos. É uma forma inteligente de revelar nossas preferências ocultas sem o estresse da indecisão.
                                    </p>
                                </div>
                                <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Aleatoriedade Real vs Pseudoaleatoriedade</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                        Nem todos os sorteadores online são iguais. Muitos usam funções simples como <code className="text-xs bg-gray-100 px-1 rounded">Math.random()</code> do JavaScript, que são <strong>pseudoaleatórias</strong>: geram sequências que parecem aleatórias mas seguem um padrão matemático previsível se você conhecer a semente inicial.
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Nossa <strong>roda da sorte</strong> usa <code className="text-xs bg-gray-100 px-1 rounded">crypto.getRandomValues()</code>, que obtém entropia real do hardware do dispositivo. Isso garante uma aleatoriedade genuína, impossível de prever, adequada inclusive para sorteios profissionais e legais onde a transparência é essencial.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Dicas para Aproveitar ao Máximo sua Roda da Sorte</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { t: "Use nomes curtos e claros", d: "Entradas mais curtas ficam melhor nos segmentos da roda. Se os nomes forem longos, use apelidos ou iniciais para maior clareza visual." },
                                        { t: "Projete em tela grande", d: "Para sorteios em aula ou eventos, conecte o computador a um projetor ou TV. O efeito visual da roda girando gera expectativa e emoção na plateia." },
                                        { t: "Elimine entradas após cada sorteio", d: "Se precisar de vários ganhadores sem repetição, ative a opção de eliminar a entrada após cada giro para garantir que ninguém ganhe duas vezes." },
                                        { t: "Grave o sorteio para compartilhar", d: "Para sorteios em redes sociais, grave a tela enquanto gira a roda ao vivo. Publicar o vídeo completo do sorteio online gera confiança com seus seguidores." },
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
                            Perguntas Frequentes sobre a Roda da Sorte
                        </h2>
                        <div className="space-y-3">
                            {[
                                { q: "Como funciona a roda da sorte online?", a: "Usa a Web Crypto API para gerar números criptograficamente seguros. Adicione suas opções, clique em girar e o resultado é completamente imparcial.", color: "bg-green-500" },
                                { q: "A roda da sorte para sorteio é gratuita?", a: "Sim, 100% gratuita, sem cadastro e sem publicidade intrusiva. Gire quantas vezes quiser sem nenhum custo.", color: "bg-blue-500" },
                                { q: "Posso usar o sorteador online para sortear no Instagram?", a: "Perfeita! Adicione os @ dos participantes, gire ao vivo ou grave o vídeo e o resultado mostra transparência total para seus seguidores.", color: "bg-yellow-500" },
                                { q: "A roda da sorte funciona no celular?", a: "Totalmente otimizada para iOS e Android. Sem downloads, funciona direto do navegador com suporte à tela de toque.", color: "bg-purple-500" },
                                { q: "Quantas opções posso adicionar no gerador aleatório?", a: "Sem limite prático. Recomendamos 2–50 opções para a melhor experiência visual, mas a ferramenta suporta listas muito maiores.", color: "bg-orange-500" },
                                { q: "Como sortear nomes aleatoriamente em uma lista?", a: "Cole sua lista de nomes no painel de entradas, um por linha ou separados por vírgula, e clique em girar. A roda escolhe um nome ao acaso de forma totalmente justa.", color: "bg-pink-500" },
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Mais Ferramentas de Seleção Aleatória</h2>
                        <p className="text-sm text-gray-600">Descubra tudo que o SpinPickOnline oferece</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/ruleta-aleatoria", label: "Ruleta Aleatoria 🇪🇸" },
                            { href: "/roue-aleatoire", label: "Roue Aléatoire 🇫🇷" },
                            { href: "/zufallsrad", label: "Zufallsrad 🇩🇪" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-600 transition-all">
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
