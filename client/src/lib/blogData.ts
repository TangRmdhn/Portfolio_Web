import studyIMG from '@/assets/learnAI.png';
import ngajarIMG from '@/assets/ngajarIMG.png';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
  img: string;
}

const dummyContent = `
  <div class="prose prose-lg dark:prose-invert max-w-none">
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <h2>Introduction</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

    <h2>Key Concepts</h2>
    <ul>
      <li><strong>Concept 1:</strong> Detailed explanation here about the first major point. It involves understanding the core principles.</li>
      <li><strong>Concept 2:</strong> More details about this concept and how it relates to the bigger picture.</li>
      <li><strong>Concept 3:</strong> Final thoughts on this topic and future implications.</li>
    </ul>

    <h2>Deep Dive</h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
    
    <blockquote>
      "This is a sample quote that highlights the importance of the topic discussed in this article."
    </blockquote>

    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

    <h2>Conclusion</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
  </div>
`;

const HowTosStudyWithAI = `
<div class="prose prose-lg dark:prose-invert max-w-none">
    <p class="lead">Seringkali kita mendengar anggapan sinis bahwa <strong>Artificial Intelligence (AI)</strong> adalah musuh bagi dunia pendidikan. Banyak yang khawatir kehadiran AI hanya akan memicu kemalasan, menciptakan generasi mahasiswa yang ingin serba instan.</p>
    
    <p>Jujur, saya pun sempat berpikir begitu. Namun, pandangan itu berubah ketika saya menyadari bahwa AI ibarat pisau bermata dua. Di tangan yang salah, ia mematikan kreativitas. Namun di tangan yang tepat, AI adalah <strong>akselerator pemahaman</strong>.</p>

    <p>Sebagai mahasiswa yang sering berhadapan dengan materi kuliah yang "njlimet" dan abstrak, saya merasa sangat terbantu. Bagi saya, AI bukan alat untuk menjadi joki skripsi, melainkan mentor pribadi yang siap sedia 24 jam. Berikut adalah cara saya memanfaatkan AI untuk membedah materi sulit.</p>

    <h2>1. Mengubah Konsep Rumit Menjadi Sederhana</h2>
    <p>Salah satu hal paling membuat frustrasi saat kuliah adalah ketika dosen menjelaskan materi teknis dengan bahasa yang tinggi, atau saat membaca buku diktat yang isinya penuh jargon. Dulu, saya bisa menghabiskan berjam-jam menatap satu paragraf tanpa benar-benar paham.</p>
    
    <p>Sekarang, saya menggunakan teknik <strong>ELI5 (Explain Like I'm 5)</strong>. Otak kita lebih mudah mencerna informasi baru jika dikaitkan dengan hal yang sudah familiar.</p>

    <blockquote>
      "Saya mahasiswa semester akhir yang sedang kesulitan memahami [Materi Kuliah]. Tolong jelaskan konsep ini seolah-olah kamu sedang menjelaskannya kepada anak umur 5 tahun. Gunakan perumpamaan sehari-hari yang sederhana."
    </blockquote>

    <h2>2. Simulasi Ujian Tanpa Henti (Active Recall)</h2>
    <p>Sistem Kebut Semalam (SKS) sering terjadi karena kita merasa sudah paham saat membaca catatan, tapi ternyata <em>blank</em> saat lembar ujian dibagikan. Membaca materi berulang-ulang seringkali memberikan ilusi kompetensi.</p>

    <p>Sekarang, saya menjadikan AI sebagai dosen penguji pribadi untuk memaksa otak bekerja aktif (<em>active recall</em>):</p>

    <blockquote>
      "Saya akan menghadapi ujian mata kuliah [Nama Matkul]. Ini rangkuman materi yang sudah saya pelajari: [Paste Materi]. Tolong buatkan 5 soal esai analisis untuk menguji pemahaman saya. Jangan berikan jawabannya dulu, koreksi saya setelah saya menjawab."
    </blockquote>

    <h2>3. Menembus Batas Bahasa</h2>
    <p>Seringkali referensi terbaik untuk tugas kuliah seperti jurnal internasional atau dokumentasi teknologi terbaru tersedia dalam bahasa asing yang kompleks. Dulu, rasanya baru baca abstrak jurnal saja kepala sudah pusing karena harus bolak-balik buka kamus.</p>

    <p>Kini, saya cukup mengirimkan teks tersebut ke AI dan meminta <strong>konteks</strong>:</p>

    <blockquote>
      "Tolong bedah jurnal bahasa Inggris ini. Jelaskan poin-poin utamanya dalam Bahasa Indonesia yang santai, dan jelaskan relevansinya dengan studi kasus saya tentang [Topik Tugas]."
    </blockquote>

    <h2>Penutup</h2>
    <p>Pada akhirnya, AI hanyalah alat. Apakah ia akan membuat kita menjadi mahasiswa malas atau justru membuat kita semakin cerdas, semua tergantung pada <strong>niat dan cara kita memegangnya</strong>.</p>
    
    <p>Bagi saya, AI adalah <em>leverage</em>. Asalkan kita memiliki kemauan untuk bertanya dan belajar, AI akan membantu kita memecahkan kerumitan materi kuliah jauh lebih cepat. Jangan gunakan AI untuk menggantikan proses berpikir, tapi gunakanlah untuk menajamkannya.</p>
  </div>
`;

const Ngajar = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Pernahkah kalian merasa ingin mencoba sesuatu yang benar-benar baru, tapi pikiran kalian sendiri yang malah menahan langkah itu? Itulah yang saya rasakan ketika memutuskan untuk keluar dari zona nyaman dan menjadi pengajar.</p>
  
  <h2>Mencoba Hal yang Sangat Baru</h2>
  <p>Cerita ini bermula ketika saya mendaftar di <strong>IF Learning, </strong>sebuah program belajar bareng di jurusan kami di mana mahasiswa mengajar mahasiswa lainnya. Saya mengambil tantangan untuk mengampu mata kuliah Struktur Data.</p>

  <p>Bagi saya, ini bukan sekadar tugas biasa. Ini adalah pengalaman yang benar-benar baru dan asing. Saya belum pernah punya pengalaman formal mengajar orang lain, apalagi harus membawakan materi teknis yang cukup berat secara daring (<em>online</em>). Tujuan awal saya sebenarnya sederhana: ingin mencari pengalaman baru dan menerapkan metode <em>learning by teaching</em>.</p>
  
  <p>Namun, proses menuju ke sana ternyata tidak sesederhana yang saya bayangkan. Saat tombol pendaftaran ada di depan mata, keraguan besar muncul.</p>
  
  <p>Saya sempat mencoba mencari "jalan aman" dengan mendaftar untuk mengajar adik tingkat, berharap lebih percaya diri di sana. Namun, takdir berkata lain; saya ditolak di sana tetapi justru dipilih untuk mengajar angkatan saya sendiri.</p>

  <h2>Pergulatan Batin dan Rasa "Imposter"</h2>
  <ul>
    <li><strong>Keraguan Identitas:</strong> Selama tiga hari saya berpikir, "Saya ini siapa di angkatan? Memangnya ada yang kenal?" Rasa takut tidak dianggap valid begitu menghantui.</li>
    <li><strong>Ketakutan Dihakimi:</strong> Ada ketakutan besar dianggap "sok jago" karena harus mengajar teman sebaya (satu angkatan).</li>
    <li><strong>Perubahan Mindset:</strong> Akhirnya saya berdamai dengan diri sendiri. Jika saya kurang dikenal, inilah saatnya mencoba dikenal. Saya di sini bukan untuk pamer, tapi untuk belajar menjadi lebih baik.</li>
  </ul>

  <h2>Melawan Arus Kecemasan di Ruang Virtual</h2>
  <p>Persiapan sudah matang, bahkan saya sudah validasi materi ke dosen. Namun, beberapa jam sebelum sesi Zoom dimulai, "monster" keraguan itu datang lagi. Jantung berdetak kencang, rasa cemas (<em>anxiety</em>) meluap, dan penyesalan mulai muncul. Rasanya ingin membatalkan semuanya saat itu juga.</p>
  
  <blockquote>
    "Kalau saya takut dibilang lebih jago, saya akan bilang ke diri sendiri: Aku di sini bukan karena lebih jago, tapi aku mencoba menjadi lebih jago dengan cara mengajar."
  </blockquote>

  <p>Namun, saat saya menekan tombol <em>"Start Meeting"</em>, keajaiban terjadi. Di hadapan lebih dari 25 partisipan di layar laptop, rasa takut itu perlahan hilang tergantikan oleh fokus. Mulut yang awalnya terbata-bata mulai lancar mengikuti arus materi (<em>flow state</em>) meskipun kami tidak bertatap muka secara langsung.</p>

  <h2>Dampak yang Sebenarnya</h2>
  <p>Rasa lega yang sesungguhnya baru datang setelah masa UTS berakhir. Saat saya bertanya kepada teman saya, ia berterima kasih karena nilainya membaik berkat sesi belajar tersebut. Mendengar itu, rasa senangnya luar biasa sampai jauh melebihi ekspektasi saya.</p

  <p>Pengalaman mencoba hal baru ini mengubah perspektif saya sepenuhnya. Menjelang UAS, saya memutuskan untuk mengajar lagi dengan tujuan yang jauh lebih murni: Saya ingin teman-teman saya terbantu, dan saya bahagia bisa menjadi bagian dari kesuksesan mereka.</p>
</div>
`;

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cara Saya Belajar Lebih Efektif Menggunakan AI",
    excerpt: "Seringkali kita mendengar anggapan bahwa kecerdasan buatan atau Artificial Intelligence (AI) berdampak buruk bagi proses pembelajaran. Banyak yang khawatir bahwa kehadiran AI hanya akan memicu kemalasan, di mana seseorang bisa menyelesaikan tugas secara instan tanpa benar-benar memahami isinya.",
    content: HowTosStudyWithAI,
    category: "AI",
    readTime: "6 min read",
    publishedAt: "2025-12-07",
    featured: true,
    img: studyIMG
  },
  {
    id: "2",
    title: "Mengubah Ragu Menjadi Dampak: Pengalaman Saya Mengajar Teman Satu Angkatan",
    excerpt: "Pengalaman mengajar Struktur Data di IF Learning yang mengubah perspektif saya sepenuhnya.",
    content: Ngajar,
    category: "Personal Development",
    readTime: "6 min read",
    publishedAt: "2025-12-07",
    featured: true,
    img: ngajarIMG
  },
];
