import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoSparklesOutline, IoShieldCheckmarkOutline, IoPhonePortraitOutline, IoShareSocialOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Roda Putar Online Gratis – Pengocok Nama | SpinPickOnline",
    description: "Putar roda keberuntungan gratis secara online. Pengacak nama, undian online, spin wheel untuk kelas, event dan keputusan grup. Tanpa daftar, bisa di HP.",
    alternates: {
        canonical: "https://www.spinpickonline.com/roda-putar",
        languages: {
            "en": "https://www.spinpickonline.com/random-picker-wheel",
            "id": "https://www.spinpickonline.com/roda-putar",
            "x-default": "https://www.spinpickonline.com/random-picker-wheel",
        },
    },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Roda Putar Online Gratis – Spin Wheel & Pengocok Nama",
        description: "Putar roda keberuntungan gratis. Tanpa daftar, bisa di HP. Untuk undian, kelas dan keputusan grup.",
        type: "website",
        url: "https://www.spinpickonline.com/roda-putar",
        locale: "id_ID",
    },
};

const RODA_PUTAR_ENTRIES = [
    { id: "1", label: "Pilihan 1", color: "#ef4444" },
    { id: "2", label: "Pilihan 2", color: "#3b82f6" },
    { id: "3", label: "Pilihan 3", color: "#22c55e" },
    { id: "4", label: "Pilihan 4", color: "#f59e0b" },
    { id: "5", label: "Pilihan 5", color: "#8b5cf6" },
    { id: "6", label: "Pilihan 6", color: "#ec4899" },
];

export default function RodaPutarPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Bagaimana cara kerja roda putar online?",
            answer: "Roda putar online kami menggunakan generator angka acak yang aman secara kriptografi (Web Crypto API) untuk memastikan hasil yang sepenuhnya adil. Tambahkan pilihan Anda, klik putar, dan roda akan memilih satu opsi secara acak dengan probabilitas yang sama untuk semua entri.",
        },
        {
            question: "Apakah roda putar ini gratis?",
            answer: "Ya! Roda putar kami 100% gratis. Anda tidak perlu mendaftar atau membuat akun. Anda bisa memutarnya sebanyak yang Anda mau tanpa biaya apapun.",
        },
        {
            question: "Bisakah digunakan untuk undian online?",
            answer: "Tentu saja! Sangat cocok untuk undian online di Instagram, YouTube, atau TikTok. Tambahkan nama peserta, putar roda secara langsung atau rekam video, dan pemenang dipilih secara acak sepenuhnya. Pengikut Anda bisa melihat bahwa undiannya benar-benar adil.",
        },
        {
            question: "Apakah roda putar bisa digunakan di HP?",
            answer: "Ya! Roda putar kami sepenuhnya dioptimalkan untuk smartphone Android dan iPhone. Tidak perlu mengunduh aplikasi — gunakan langsung dari browser HP Anda dengan dukungan layar sentuh.",
        },
        {
            question: "Berapa banyak pilihan yang bisa ditambahkan di pengacak nama?",
            answer: "Anda bisa menambahkan pilihan sebanyak yang diperlukan. Tidak ada batasan tetap, tapi untuk pengalaman visual terbaik, kami merekomendasikan antara 2 hingga 50 pilihan. Roda akan menyesuaikan diri secara otomatis.",
        },
        {
            question: "Bagaimana cara mengacak nama dari daftar?",
            answer: "Tempelkan daftar nama Anda di panel masukan, satu per baris atau dipisahkan koma. Kemudian klik putar dan roda keberuntungan akan memilih satu nama secara adil dan acak.",
        },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" lang="id">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-red-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>Roda Putar Gratis · Tanpa Daftar</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Roda Putar Online – Spin Wheel & Pengocok Nama Gratis
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Tambahkan pilihan, putar <strong>roda putar</strong>, dan dapatkan hasil acak seketika. Gratis, tanpa daftar, bisa di HP semua perangkat.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={RODA_PUTAR_ENTRIES} storageKey="rodaPutarState" />
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Kenapa Pakai Roda Putar Online Kami?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Ribuan guru, kreator konten, dan tim mempercayai spin wheel kami setiap hari
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-red-600" />, bg: "from-red-50 to-orange-50", border: "border-red-200", ibg: "bg-red-100", title: "Benar-Benar Acak", desc: "Menggunakan Web Crypto API untuk angka acak yang aman secara kriptografi. Semua pilihan memiliki probabilitas yang sama persis di setiap putaran roda." },
                            { icon: <IoSparklesOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "100% Gratis & Tanpa Daftar", desc: "Tidak perlu buat akun atau masukkan email. Buka halamannya dan langsung mulai putar roda — sepenuhnya gratis, selamanya." },
                            { icon: <IoPhonePortraitOutline className="text-xl text-green-600" />, bg: "from-green-50 to-emerald-50", border: "border-green-200", ibg: "bg-green-100", title: "Bisa di HP & Tablet", desc: "Dioptimalkan untuk layar sentuh. Pakai di iPhone, Android, tablet, atau PC tanpa unduh aplikasi tambahan." },
                            { icon: <IoShareSocialOutline className="text-xl text-purple-600" />, bg: "from-purple-50 to-violet-50", border: "border-purple-200", ibg: "bg-purple-100", title: "Bagikan Roda Anda", desc: "Simpan roda putar personal Anda dan bagikan link ke teman, murid, atau follower. Transparansi penuh di setiap undian." },
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

            {/* Cara pakai */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Cara Pakai Roda Putar – Langkah demi Langkah
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">Mulai putar roda dalam waktu kurang dari 30 detik</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { n: "1", title: "Tambahkan nama atau pilihan", desc: "Ketik nama peserta, pilihan makanan, tugas, atau daftar apapun di panel input. Anda bisa menambahkan 2 hingga ratusan entri ke roda putar. Anda juga bisa tempel daftar lengkap sekaligus." },
                            { n: "2", title: "Sesuaikan warna roda", desc: "Klik setiap entri untuk mengubah warnanya. Membuat roda keberuntungan lebih visual dan menarik — terutama kalau ditampilkan di proyektor kelas atau live event buat audiens Anda." },
                            { n: "3", title: "Putar roda dan lihat hasilnya", desc: "Klik tombol putar besar di tengah. Roda putar akan berputar dengan animasi mulus dan berhenti di pilihan yang dipilih secara acak. Hasilnya ditampilkan dengan jelas agar semua bisa melihat." },
                            { n: "4", title: "Ulangi atau hapus pemenang", desc: "Butuh lebih dari satu pemenang? Hapus pilihan yang sudah terpilih dan putar lagi. Ini memastikan setiap pemilihan berikutnya tetap adil karena pemenang sebelumnya sudah tidak ada di roda." },
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

            {/* Kegunaan populer */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Kegunaan Populer Roda Putar Online
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Dari undian di media sosial hingga keputusan sehari-hari, roda putar menyelesaikan semuanya
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        {[
                            { e: "🏆", title: "Undian Online di Media Sosial", desc: "Pilih pemenang undian di Instagram, YouTube, atau TikTok secara transparan. Tambahkan nama atau username peserta, putar roda langsung atau rekam video. Follower Anda bisa melihat bahwa undian online benar-benar adil dan tidak ada manipulasi." },
                            { e: "🎓", title: "Roda Putar untuk Kelas", desc: "Guru menggunakan roda putar untuk memilih murid secara acak untuk pertanyaan, presentasi, atau aktivitas. Menjaga semua murid tetap fokus dan aktif berpartisipasi. Juga cocok untuk membagi topik tugas atau membentuk kelompok belajar secara adil." },
                            { e: "🍕", title: "Mau Makan Apa Hari Ini?", desc: "Pecahkan perdebatan panjang soal mau pesan makanan apa atau makan di mana. Tambahkan pilihan restoran atau menu favorit, putar roda, dan selesaikan dilema makan siang grup tanpa drama." },
                            { e: "👥", title: "Pengacak Tim Acak", desc: "Bagi kelompok secara acak dan adil untuk olahraga, proyek sekolah, atau aktivitas perusahaan. Pengacak random memastikan tidak ada yang bisa protes bahwa pembagian timnya tidak adil atau sudah diatur." },
                            { e: "🎮", title: "Game dan Hiburan", desc: "Pakai roda putar untuk menentukan urutan pemain, siapa yang mulai duluan, atau memilih tantangan berikutnya dalam truth or dare. Tambahkan keseruan dan kejutan di setiap pertemuan atau permainan." },
                            { e: "📋", title: "Bagi Tugas Secara Acak", desc: "Bagikan tugas rumah, tanggung jawab kerja, atau kewajiban proyek secara acak. Hindari konflik dan biarkan roda keberuntungan memutuskan siapa yang mengerjakan apa — sepenuhnya adil dan tidak memihak." },
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

            {/* Artikel konten */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                            Semua tentang Roda Putar Online
                        </h2>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">Apa Itu Roda Putar Online?</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                <strong>Roda putar online</strong> adalah alat digital yang mensimulasikan putaran roda keberuntungan untuk memilih satu opsi secara acak dari semua entri yang tersedia. Berbeda dengan undian manual, roda putar bisa menangani berapa pun jumlah pilihan dan menawarkan seleksi yang berdampak visual dan transparan — sangat cocok untuk membuktikan kejujuran sebuah <strong>undian online</strong>.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <strong>Pengacak nama</strong> kami menggunakan Web Crypto API browser — standar keamanan yang sama yang digunakan untuk transaksi perbankan online — memastikan hasilnya tidak mungkin diprediksi atau dimanipulasi. Setiap pilihan memiliki peluang yang persis sama untuk terpilih.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Ilmu di Balik Pilihan Acak</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    Menurut studi psikologi kognitif, manusia membuat lebih dari <strong>35.000 keputusan per hari</strong>, yang menyebabkan apa yang disebut &quot;kelelahan keputusan&quot;. Untuk pilihan berdampak rendah — mau makan apa, siapa yang duluan — mendelegasikan keputusan ke <strong>roda putar</strong> menghemat energi mental untuk hal yang benar-benar penting.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Selain itu, ketika hasil roda mengecewakan kita, kita langsung tahu apa yang sebenarnya kita inginkan. Ini cara cerdas untuk mengungkap preferensi tersembunyi tanpa stres kebingungan.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Tips Pakai Roda Putar</h3>
                                <div className="space-y-3">
                                    {[
                                        { t: "Gunakan nama yang pendek", d: "Entri yang pendek lebih mudah dibaca di segmen roda. Pakai nama panggilan atau inisial kalau namanya panjang." },
                                        { t: "Tampilkan di layar besar", d: "Untuk kelas atau event: sambungkan ke proyektor. Animasi roda putar menciptakan ketegangan saat undian." },
                                        { t: "Hapus pemenang setelah dipilih", d: "Untuk beberapa pemenang tanpa pengulangan, hapus entri yang sudah terpilih sebelum putar lagi." },
                                        { t: "Rekam undiannya", d: "Untuk media sosial, rekam layar saat roda berputar. Video lengkap undian membangun kepercayaan follower." },
                                    ].map((tip, i) => (
                                        <div key={i} className="flex gap-2 items-start">
                                            <span className="text-red-500 font-bold text-sm mt-0.5">💡</span>
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
                            Pertanyaan Umum tentang Roda Putar
                        </h2>
                        <div className="space-y-3">
                            {[
                                { q: "Bagaimana cara kerja roda putar online?", a: "Menggunakan Web Crypto API untuk angka acak yang aman. Tambahkan pilihan, klik putar — hasilnya sepenuhnya tidak bias.", color: "bg-red-500" },
                                { q: "Apakah roda putar gratis?", a: "Ya, 100% gratis, tanpa daftar dan tanpa iklan mengganggu. Putar sebanyak yang Anda mau.", color: "bg-blue-500" },
                                { q: "Bisa digunakan untuk undian online?", a: "Sempurna! Tambahkan nama peserta, putar langsung atau rekam — transparensi penuh untuk undian Anda.", color: "bg-green-500" },
                                { q: "Bisa dipakai di HP?", a: "Sepenuhnya dioptimalkan untuk iOS dan Android. Tanpa unduh aplikasi, langsung dari browser dengan dukungan layar sentuh.", color: "bg-purple-500" },
                                { q: "Berapa banyak pilihan yang bisa ditambahkan?", a: "Tanpa batas praktis. Kami merekomendasikan 2-50 pilihan untuk pengalaman visual terbaik.", color: "bg-orange-500" },
                                { q: "Bagaimana cara mengacak nama dari daftar?", a: "Tempel daftar nama di panel input, satu per baris, lalu klik putar. Roda memilih satu nama secara adil sepenuhnya.", color: "bg-pink-500" },
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>T</span>
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Alat Pilihan Acak Lainnya</h2>
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
