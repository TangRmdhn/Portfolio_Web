import studyIMG from '@/assets/learnAI.png';

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
    <p>Seringkali referensi terbaik untuk tugas kuliah—seperti jurnal internasional atau dokumentasi teknologi terbaru—tersedia dalam bahasa asing yang kompleks. Dulu, rasanya baru baca abstrak jurnal saja kepala sudah pusing karena harus bolak-balik buka kamus.</p>

    <p>Kini, saya cukup mengirimkan teks tersebut ke AI dan meminta <strong>konteks</strong>:</p>

    <blockquote>
      "Tolong bedah jurnal bahasa Inggris ini. Jelaskan poin-poin utamanya dalam Bahasa Indonesia yang santai, dan jelaskan relevansinya dengan studi kasus saya tentang [Topik Tugas]."
    </blockquote>

    <h2>Penutup</h2>
    <p>Pada akhirnya, AI hanyalah alat. Apakah ia akan membuat kita menjadi mahasiswa malas atau justru membuat kita semakin cerdas, semua tergantung pada <strong>niat dan cara kita memegangnya</strong>.</p>
    
    <p>Bagi saya, AI adalah <em>leverage</em>. Asalkan kita memiliki kemauan untuk bertanya dan belajar, AI akan membantu kita memecahkan kerumitan materi kuliah jauh lebih cepat. Jangan gunakan AI untuk menggantikan proses berpikir, tapi gunakanlah untuk menajamkannya.</p>
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
    title: "Modern CSS Techniques for 2024",
    excerpt: "Explore the latest CSS features including container queries, cascade layers, subgrid, and modern layout techniques that will transform your web designs.",
    content: dummyContent,
    category: "CSS",
    readTime: "6 min read",
    publishedAt: "2024-10-08",
    featured: false,
    img: ""
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    excerpt: "A comprehensive guide to writing type-safe, maintainable TypeScript code for production applications with advanced typing patterns.",
    content: dummyContent,
    category: "TypeScript",
    readTime: "10 min read",
    publishedAt: "2024-09-28",
    featured: false,
    img: ""
  },
  {
    id: "4",
    title: "State Management in Modern React",
    excerpt: "Comparing different state management solutions including Context API, Redux, Zustand, and Jotai for various application scales.",
    content: dummyContent,
    category: "React",
    readTime: "12 min read",
    publishedAt: "2024-09-15",
    featured: false,
    img: ""
  },
  {
    id: "5",
    title: "Performance Optimization Strategies",
    excerpt: "Deep dive into web performance optimization techniques including lazy loading, code splitting, and bundle size reduction.",
    content: dummyContent,
    category: "Performance",
    readTime: "9 min read",
    publishedAt: "2024-09-01",
    featured: false,
    img: ""
  },
  {
    id: "6",
    title: "Understanding Web Accessibility",
    excerpt: "A practical guide to making your web applications accessible to everyone, following WCAG guidelines and best practices.",
    content: dummyContent,
    category: "Accessibility",
    readTime: "7 min read",
    publishedAt: "2024-08-20",
    featured: false,
    img: ""
  },
];
