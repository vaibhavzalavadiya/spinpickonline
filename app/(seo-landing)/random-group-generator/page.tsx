import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoSchoolOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { FiShield, FiUsers } from "react-icons/fi";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
    title: "Random Group Generator – Classroom Group Maker for Teachers",
    description: "Free random group generator for teachers and educators. Create fair student groups, study pairs, and project teams for classrooms instantly. No signup, works on any device.",
    canonical: "/random-group-generator",
});

// Default choice entries
const GROUP_ENTRIES = [
    { id: "1", label: "Group A", color: "#ef4444" },
    { id: "2", label: "Group B", color: "#3b82f6" },
    { id: "3", label: "Group C", color: "#10b981" },
    { id: "4", label: "Group D", color: "#f59e0b" },
];

export default function RandomGroupGeneratorPage() {
    const webAppSchema = generateWebApplicationSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Group Generator", item: `${SITE_CONFIG.url}/random-group-generator` },
    ]);
    const faqSchema = generateFAQSchema([
        {
            question: "How do teachers create random groups in the classroom?",
            answer: "Put your group names (e.g., Group A, Group B, Group C) on the wheel. Call out each student's name and spin the wheel to assign them to a random group. The visual spin ensures students trust the process and accept their assignment without complaint."
        },
        {
            question: "What is the fairest way to split students into groups?",
            answer: "Using a cryptographically random group generator is the fairest method. Unlike manual assignment, where teacher bias (even unconscious) can influence groupings, our algorithm gives every student an exactly equal chance of being placed in any group."
        },
        {
            question: "Can I use this for pair work and study partners?",
            answer: "Yes! Set up a wheel with just two options (Pair A, Pair B) and spin for each student. Or use the wheel with all student names and spin twice to form each pair. It works perfectly for lab partners, debate partners, and conversation practice partners."
        },
        {
            question: "How many groups should I create for a class of 30 students?",
            answer: "For most collaborative projects, groups of 4–5 students work best. For a class of 30, create 6 groups of 5 or 7–8 groups of 3–4. Smaller groups (3–4) ensure everyone participates. Larger groups (5–6) provide more diverse perspectives but risk some students disengaging."
        },
        {
            question: "Does this tool store my students' names?",
            answer: "No. All data stays in your browser's local storage on your own device. Student names are never transmitted to our servers. This makes our tool safe for FERPA and GDPR compliance in educational settings."
        },
        {
            question: "How is this different from the Team Picker tool?",
            answer: "Our Team Picker (at /team-picker) is designed for splitting a roster into two or more sports-style teams with captains and drafting. This Random Group Generator is designed for classroom educators who need to create multiple balanced study groups, project teams, or activity pairs for academic purposes."
        },
        {
            question: "Can I save my class roster for future use?",
            answer: "Yes. The wheel automatically saves your entries in your browser's local storage. When you return to this page tomorrow, your student groups will still be there. To clear the saved data, use the reset button or clear your browser's local storage."
        }
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                            <IoSchoolOutline className="text-lg" />
                            <span>Classroom Group Maker</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Group Generator for Classrooms
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The easiest way for teachers to create fair, unbiased student groups. Spin the wheel to assign students to project teams, study pairs, and activity groups — no favoritism, no complaints.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={GROUP_ENTRIES} storageKey="randomGroupGeneratorState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Teachers Love This Group Generator
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Built specifically for educators who need fair, visual, and instant group assignments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow">
                            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Eliminates Bias</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographic randomization removes all teacher bias — conscious or unconscious — from group formation.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Students Trust It</h3>
                            <p className="md:text-base text-sm text-gray-600">The visual spin makes the process transparent. Students accept their groups because they see the fair selection.</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                            <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Saves Class Time</h3>
                            <p className="md:text-base text-sm text-gray-600">Stop wasting 10 minutes manually sorting students. Assign groups in under 60 seconds with the wheel.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiShield className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">FERPA Safe</h3>
                            <p className="md:text-base text-sm text-gray-600">All student names stay in your browser. Nothing is ever sent to our servers. Safe for school use.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Teacher&apos;s Guide to Random Student Group Assignment
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Every teacher knows the scenario: you announce a group project, and immediately hands shoot up. &quot;Can I be with Sarah?&quot; &quot;I don&apos;t want to work with that group.&quot; &quot;That&apos;s not fair!&quot; Manual group assignment is a minefield of social dynamics, perceived favoritism, and wasted instructional time. That&apos;s exactly why we built this <strong>random group generator</strong> — to give educators a fast, transparent, and completely unbiased way to form student groups.
                            </p>
                            <p>
                                Unlike corporate <Link href="/team-picker" className="text-blue-600 hover:underline">team picker tools</Link> designed for splitting sports rosters or office teams, this tool is built with the <strong>classroom</strong> in mind. It handles the unique challenges educators face: varying class sizes, odd numbers of students, the need for visual transparency, and strict student data privacy requirements.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Create Random Student Groups</h3>
                            <p>
                                Using this <strong>classroom group maker</strong> takes less than a minute. Here is the step-by-step process that thousands of teachers follow every day:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Set Up Group Names:</strong> In the wheel input, type the names of your groups — one per line. For example: &quot;Table 1&quot;, &quot;Table 2&quot;, &quot;Table 3&quot;, &quot;Table 4&quot;. Or get creative: &quot;Team Einstein&quot;, &quot;Team Curie&quot;, &quot;Team Newton&quot;.</li>
                                <li><strong>Call a Student&apos;s Name:</strong> Go through your class roster (alphabetically, randomly, or from your seating chart).</li>
                                <li><strong>Spin the Wheel:</strong> For each student, click to spin the wheel. Whichever group the wheel lands on, that student is assigned to that group.</li>
                                <li><strong>Record the Assignment:</strong> Write down which group each student belongs to on the board or in your planning app.</li>
                                <li><strong>Repeat:</strong> Continue until every student is assigned.</li>
                            </ol>
                            <p>
                                The visual spin is what makes this tool so effective in the classroom. Students <em>see</em> the randomization happen live. There is no hidden algorithm, no teacher manipulation — just a spinning wheel that lands where math determines it should. This transparency is the key to student buy-in.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Best Practices for Group Sizes in Education</h3>
                            <p>
                                Educational research consistently shows that group size significantly impacts collaboration quality. Here are evidence-based guidelines for different classroom activities:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pairs (2 students):</strong> Ideal for think-pair-share exercises, reading buddies, peer editing, lab partners, and conversation practice in language classes. Every student must participate — there is nowhere to hide.</li>
                                <li><strong>Small groups (3–4 students):</strong> Best for problem-solving activities, science experiments, short-term projects, and in-class discussions. Small enough that everyone contributes, large enough for diverse perspectives.</li>
                                <li><strong>Medium groups (5–6 students):</strong> Suitable for longer-term projects, presentations, and complex research assignments. Provides role differentiation (researcher, writer, presenter, editor) but requires clear task delegation to prevent free-riding.</li>
                                <li><strong>Large groups (7+ students):</strong> Best reserved for debate teams, simulation exercises, or performance groups. Risk of disengagement increases significantly beyond 6 members.</li>
                            </ul>
                            <p>
                                For most classroom activities, <strong>groups of 3–4 students</strong> hit the sweet spot between participation and diversity. For a class of 28, that means 7 groups of 4. For a class of 30, you can do 6 groups of 5 or 10 groups of 3.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Handling Odd Numbers and Remainders</h3>
                            <p>
                                Real classrooms rarely divide perfectly. If you have 29 students and want groups of 4, you will get 7 groups of 4 plus 1 remaining student. Here are strategies teachers use:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Add the remainder to the first group(s):</strong> The first 1–3 groups get an extra member, creating groups of 5 while the rest stay at 4.</li>
                                <li><strong>Create one smaller group:</strong> Let the last group have fewer members but give them a slightly reduced workload to compensate.</li>
                                <li><strong>Use a wildcard spin:</strong> If you cannot decide where to place the remaining student, let the wheel decide! You can also use our <Link href="/flip-a-coin" className="text-blue-600 hover:underline">coin flip tool</Link> for a quick 50/50 decision between two groups.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Random Groups Improve Learning Outcomes</h3>
                            <p>
                                Research in educational psychology has repeatedly shown that <strong>randomized grouping</strong> leads to better learning outcomes compared to student-chosen or teacher-curated groups. Here is why:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Breaks social cliques:</strong> Students who always work with their friends rarely challenge each other intellectually. Random groups force students to collaborate with peers they might not normally interact with, building social skills and exposing them to different problem-solving approaches.</li>
                                <li><strong>Eliminates the &quot;last picked&quot; problem:</strong> Captain-style drafting systems (common in sports) are emotionally damaging for students who are consistently chosen last. Random assignment eliminates this entirely.</li>
                                <li><strong>Reduces perceived favoritism:</strong> When a teacher manually assigns groups, students may suspect bias — even if none exists. Random assignment is visibly fair and eliminates complaints of favoritism.</li>
                                <li><strong>Encourages adaptability:</strong> In the real world, people rarely get to choose their coworkers. Learning to collaborate with randomly assigned partners builds the adaptability and interpersonal skills that employers value.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Classroom Scenarios and Activity Ideas</h3>
                            <p>
                                Here are specific ways teachers across different subjects use our random group generator:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Science labs:</strong> Randomly assign lab partners every week so students learn to work with different people and develop universal lab communication skills.</li>
                                <li><strong>Literature circles:</strong> Create reading groups of 4–5 students. Each group reads a different book and presents a discussion summary to the class.</li>
                                <li><strong>Math problem-solving:</strong> Form groups of 3 to tackle challenging problems collaboratively. Rotate groups weekly to maintain freshness.</li>
                                <li><strong>History debates:</strong> Split the class into two large groups for structured debates on historical events or ethical dilemmas.</li>
                                <li><strong>Art projects:</strong> Create groups of 3–4 for collaborative art pieces, murals, or multimedia presentations.</li>
                                <li><strong>PE and sports:</strong> Form teams for in-class sports activities. For dedicated sports team splitting, check our <Link href="/team-picker" className="text-blue-600 hover:underline">Team Picker</Link> tool which supports captain-style drafting.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Student Data Privacy and Compliance</h3>
                            <p>
                                Student data privacy is non-negotiable in education. Our random group generator is designed with privacy as a core principle:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Zero server transmission:</strong> Student names you type into the wheel are never sent to our servers. All processing happens locally in your browser.</li>
                                <li><strong>Local storage only:</strong> Saved wheel data is stored in your browser&apos;s <code>localStorage</code> on your device. It persists between sessions but never leaves your machine.</li>
                                <li><strong>No accounts required:</strong> There is no signup, no login, and no data collection. You can start using the tool immediately.</li>
                                <li><strong>FERPA and GDPR compatible:</strong> Because no student data is transmitted or stored on our servers, our tool is compatible with both US (FERPA) and EU (GDPR) student data privacy regulations.</li>
                            </ul>
                            <p>
                                For an even more private session, use your browser&apos;s incognito or private browsing mode. In this mode, no data is saved after you close the tab.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Related Tools for Educators</h3>
                            <p>
                                Our platform offers several tools built for the classroom:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pick a random student:</strong> Use the <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link> to call on students randomly during class — eliminates the same 3 students always raising their hands.</li>
                                <li><strong>Generate team names:</strong> Let newly formed groups spin the <Link href="/team-name-generator" className="text-blue-600 hover:underline">Team Name Generator</Link> to pick a fun team identity.</li>
                                <li><strong>Random letter for activities:</strong> Use the <Link href="/random-letter-generator" className="text-blue-600 hover:underline">Random Letter Generator</Link> for spelling games, alphabet activities, or choosing starting letters for brainstorming exercises.</li>
                                <li><strong>Quick yes/no decisions:</strong> Use the <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> for quick classroom votes or decisions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Classroom Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/team-name-generator", label: "Team Names" },
                            { href: "/team-picker", label: "Team Picker" },
                            { href: "/random-letter-generator", label: "Random Letter" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
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
