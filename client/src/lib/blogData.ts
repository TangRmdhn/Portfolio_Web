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
    <p class="lead">Seringkali kita mendengar anggapan bahwa kecerdasan buatan atau Artificial Intelligence (AI) berdampak buruk bagi proses pembelajaran. Banyak yang khawatir bahwa kehadiran AI hanya akan memicu kemalasan, di mana seseorang bisa menyelesaikan tugas secara instan tanpa benar-benar memahami isinya.</p>
    
    <h2>Bukan Curang, Tapi Strategi</h2>
    <p>Anggapan tersebut tidak sepenuhnya salah, namun juga tidak sepenuhnya benar. Bagi saya, AI justru menjadi alat yang sangat powerful jika kita tahu cara menggunakannya. Bukan sebagai joki tugas, melainkan sebagai mentor pribadi.</p>
    
    <p>Kuncinya ada pada pola pikir: saya tidak meminta AI mengerjakan tugas saya, tetapi saya meminta AI membantu saya memahami tugas tersebut.</p>

    <h2>Metode Belajar Saya</h2>
    <ul>
      <li><strong>Sederhanakan dengan Analogi:</strong> Saat bertemu konsep rumit, saya meminta AI menjelaskannya menggunakan analogi sehari-hari atau teknik "ELI5" (Explain Like I'm 5). Ini membantu otak mencerna hal abstrak menjadi konkret.</li>
      <li><strong>Simulasi Ujian Mandiri:</strong> Saya mengirimkan materi belajar ke AI dan memintanya membuat soal latihan (pilihan ganda atau esai). Jika jawaban saya salah, saya minta AI menjelaskan letak kesalahan logikanya sampai saya paham.</li>
      <li><strong>Hapus Batasan Bahasa:</strong> Saat menemukan sumber belajar bagus dalam bahasa asing, saya minta AI membedah dan menjelaskannya dalam Bahasa Indonesia. Keterbatasan bahasa bukan lagi alasan untuk berhenti belajar.</li>
    </ul>

    <h2>Filosofi Penggunaan</h2>
    <p>Tantangan terbesar dalam menggunakan AI bukanlah teknisnya, melainkan menahan godaan untuk mengambil jalan pintas. Proses belajar terjadi saat kita bergulat dengan materi, bukan saat kita menyalin jawaban.</p>
    
    <blockquote>
      "AI adalah mentor 24 jam yang siap membantu memecahkan kerumitan, asalkan kita memiliki kemauan untuk bertanya dan belajar, bukan sekadar ingin cepat selesai."
    </blockquote>

    <p>Dengan metode ini, saya merasa pemahaman konsep menjadi lebih mendalam karena saya terlibat aktif dalam diskusi dengan AI, bukan sekadar menjadi penerima informasi pasif.</p>

    <h2>Kesimpulan</h2>
    <p>Pada akhirnya, AI hanyalah sebuah alat. Apakah ia akan membuat kita malas atau justru membuat kita semakin cerdas, itu semua tergantung pada bagaimana kita memegangnya. Gunakanlah untuk menantang pemikiranmu, bukan untuk mematikan proses berpikirmu.</p>
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
