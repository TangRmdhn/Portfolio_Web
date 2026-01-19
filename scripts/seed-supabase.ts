
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('Missing Supabase credentials in .env file');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// --- FULL DATA ---

const projectData = [
    {
        id: "1",
        title: "TrainHub",
        description: "Web application designed to help users create personalized weekly workout plans using the power of AI.",
        technologies: ["FastAPI", "Gemini API", "Python"],
        category: "AI Integration",
        featured: true,
        links: {
            github: "https://github.com/TangRmdhn/TrainHub",
            demo: "https://trainhub.web.id"
        },
        imageUrl: "https://placehold.co/600x400?text=TrainHub",
    },
    {
        id: "2",
        title: "WhatsInNews",
        description: "RAG-based web app that allows users to summarize news articles and chat with the content.",
        technologies: ["OpenAI API", "LangChain", "ChromaDB"],
        category: "AI Integration",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/WhatsInNews",
            demo: "https://github.com/TangRmdhn/WhatsInNews"
        },
        imageUrl: "https://placehold.co/600x400?text=WhatsInNews",
    },
    {
        id: "3",
        title: "CodeGrader",
        description: "A web application to automatically grade programming assignments using Groq AI.",
        technologies: ["Groq API", "PyPDF", "Streamlit"],
        category: "AI Integration",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/CodeGrader",
            demo: "https://penilaikode.streamlit.app"
        },
        imageUrl: "https://placehold.co/600x400?text=CodeGrader",
    },
    {
        id: "4",
        title: "MyFirstRAG",
        description: "First end-to-end implementation project for learning and understanding Retrieval-Augmented Generation (RAG).",
        technologies: ["RAG", "OpenAI API", "Streamlit"],
        category: "AI Integration",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/MyFirstRAG/tree/main",
            demo: "https://github.com/TangRmdhn/MyFirstRAG/tree/main"
        },
        imageUrl: "https://placehold.co/600x400?text=MyFirstRAG",
    },
    {
        id: "5",
        title: "FlowerClassification",
        description: "Flower classification notebook using transfer learning and deep learning.",
        technologies: ["Transfer Learning", "Deep Learning", "Python"],
        category: "Deep Learning",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/FlowersClassification",
            demo: "https://github.com/TangRmdhn/FlowersClassification"
        },
        imageUrl: "https://placehold.co/600x400?text=FlowerClassification",
    },
    {
        id: "6",
        title: "AnimeRecomendation",
        description: "Anime recomendation using NLP and Machine Learning.",
        technologies: ["NLP", "Machine Learning", "Python"],
        category: "Machine Learning",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/Anime-Recommendation",
            demo: "https://github.com/TangRmdhn/Anime-Recommendation"
        },
        imageUrl: "https://placehold.co/600x400?text=AnimeRecomendation",
    },
    {
        id: "7",
        title: "HousePricePrediction",
        description: "House price prediction using Machine Learning.",
        technologies: ["Machine Learning", "Python", "Regression"],
        category: "Machine Learning",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/HousePricePrediction/tree/main",
            demo: "https://github.com/TangRmdhn/HousePricePrediction/tree/main"
        },
        imageUrl: "https://placehold.co/600x400?text=HousePricePrediction",
    },
    {
        id: "8",
        title: "HeartAttackClassification",
        description: "Heart attack classification using Machine Learning.",
        technologies: ["Machine Learning", "Python", "Classification"],
        category: "Machine Learning",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/HeartAttackClassification/tree/main",
            demo: "https://github.com/TangRmdhn/HeartAttackClassification/tree/main"
        },
        imageUrl: "https://placehold.co/600x400?text=HeartAttackClassification",
    },
    {
        id: "9",
        title: "SentimentalAnalysis",
        description: "Sentimental analysis using Machine Learning & NLP.",
        technologies: ["Machine Learning", "Python", "NLP"],
        category: "Machine Learning",
        featured: false,
        links: {
            github: "https://github.com/TangRmdhn/SentimentAnalysis",
            demo: "https://github.com/TangRmdhn/SentimentAnalysis"
        },
        imageUrl: "https://placehold.co/600x400?text=SentimentalAnalysis",
    },
    {
        id: "10",
        title: "LegalFlows",
        description: "An autonomous agent specialized in UU ITE, PDP, and PSE regulations. Validate your product features against Indonesian law before release.",
        technologies: ["AI Agent", "LangChain", "LangGraph"],
        category: "AI Agent",
        featured: true,
        links: {
            github: "https://github.com/TangRmdhn/LegalFlow",
            demo: "https://legalflows.vercel.app/"
        },
        imageUrl: "https://placehold.co/600x400?text=LegalFlows",
    },
];

const HowTosStudyWithAI_ID = `
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

const HowTosStudyWithAI_EN = `
<div class="prose prose-lg dark:prose-invert max-w-none">
    <p class="lead">We often hear cynical assumptions that <strong>Artificial Intelligence (AI)</strong> is the enemy of the education world. Many worry that AI's presence will only trigger laziness, creating a generation of students who want everything instant.</p>
    
    <p>Honestly, I once thought that way too. However, that perspective changed when I realized that AI is like a double-edged sword. In the wrong hands, it kills creativity. But in the right hands, AI is an <strong>accelerator of understanding</strong>.</p>

    <p>As a student who often deals with complex and abstract course material, I find it extremely helpful. For me, AI is not a tool to become a thesis ghostwriter, but rather a personal mentor available 24 hours. Here's how I use AI to dissect difficult material.</p>

    <h2>1. Turning Complex Concepts into Simple Ones</h2>
    <p>One of the most frustrating things in college is when professors explain technical material in high-level language, or when reading textbooks full of jargon. I used to spend hours staring at one paragraph without truly understanding it.</p>
    
    <p>Now, I use the <strong>ELI5 (Explain Like I'm 5)</strong> technique. Our brain digests new information more easily if it's connected to something already familiar.</p>

    <blockquote>
      "I'm a senior student struggling to understand [Course Material]. Please explain this concept as if you're explaining it to a 5-year-old. Use simple everyday analogies."
    </blockquote>

    <h2>2. Endless Exam Simulation (Active Recall)</h2>
    <p>Last-minute cramming often happens because we feel we understand when reading notes, but then go <em>blank</em> when the exam sheet is handed out. Re-reading material repeatedly often gives an illusion of competence.</p>

    <p>Now, I make AI my personal examiner to force my brain to work actively (<em>active recall</em>):</p>

    <blockquote>
      "I will be taking an exam for [Course Name]. Here's a summary of the material I've studied: [Paste Material]. Please create 5 analytical essay questions to test my understanding. Don't give the answers yet, grade me after I answer."
    </blockquote>

    <h2>3. Breaking Through Language Barriers</h2>
    <p>Often the best references for assignments, like international journals or the latest technology documentation, are available in complex foreign languages. In the past, just reading a journal abstract would give me a headache from constantly opening the dictionary.</p>

    <p>Now, I simply send the text to AI and ask for <strong>context</strong>:</p>

    <blockquote>
      "Please analyze this English journal. Explain the main points in casual Indonesian, and explain its relevance to my case study on [Assignment Topic]."
    </blockquote>

    <h2>Conclusion</h2>
    <p>In the end, AI is just a tool. Whether it will make us lazy students or actually make us smarter, it all depends on <strong>our intention and how we use it</strong>.</p>
    
    <p>For me, AI is <em>leverage</em>. As long as we have the willingness to ask and learn, AI will help us break down the complexity of coursework much faster. Don't use AI to replace the thinking process, but use it to sharpen it.</p>
  </div>
`;

const Ngajar_ID = `
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
  <p>Rasa lega yang sesungguhnya baru datang setelah masa UTS berakhir. Saat saya bertanya kepada teman saya, ia berterima kasih karena nilainya membaik berkat sesi belajar tersebut. Mendengar itu, rasa senangnya luar biasa sampai jauh melebihi ekspektasi saya.</p>

  <p>Pengalaman mencoba hal baru ini mengubah perspektif saya sepenuhnya. Menjelang UAS, saya memutuskan untuk mengajar lagi dengan tujuan yang jauh lebih murni: Saya ingin teman-teman saya terbantu, dan saya bahagia bisa menjadi bagian dari kesuksesan mereka.</p>
</div>
`;

const Ngajar_EN = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Have you ever felt like trying something completely new, but your own thoughts held you back? That's what I felt when I decided to step out of my comfort zone and become a teacher.</p>
  
  <h2>Trying Something Completely New</h2>
  <p>This story began when I registered for <strong>IF Learning, </strong>a peer-to-peer learning program in our department where students teach other students. I took on the challenge of teaching the Data Structures course.</p>

  <p>For me, this was not just an ordinary task. This was a completely new and unfamiliar experience. I had never had formal experience teaching others, let alone having to deliver quite heavy technical material online. My initial goal was actually simple: I wanted to seek new experiences and apply the <em>learning by teaching</em> method.</p>
  
  <p>However, the process of getting there turned out to be less simple than I imagined. When the registration button was right in front of me, great doubts arose.</p>
  
  <p>I tried to find a "safe path" by registering to teach junior students, hoping to feel more confident there. However, fate said otherwise; I was rejected there but was chosen to teach my own cohort.</p>
  
  <h2>Inner Struggle and "Imposter" Feelings</h2>
  <ul>
    <li><strong>Identity Doubts:</strong> For three days I thought, "Who am I in this cohort? Does anyone even know me?" The fear of not being considered valid haunted me deeply.</li>
    <li><strong>Fear of Judgment:</strong> There was a great fear of being seen as "showing off" because I had to teach peers (same cohort).</li>
    <li><strong>Mindset Shift:</strong> Finally I made peace with myself. If I'm not well-known, this is the time to try to be known. I'm not here to show off, but to learn to become better.</li>
  </ul>
  
  <h2>Fighting the Wave of Anxiety in Virtual Space</h2>
  <p>Preparation was complete, I had even validated the material with the lecturer. However, a few hours before the Zoom session started, that "monster" of doubt came back. My heart was pounding, anxiety overflowed, and regret began to emerge. It felt like I wanted to cancel everything right then.</p>
  
  <blockquote>
    "If I'm afraid of being called more skilled, I will tell myself: I'm not here because I'm more skilled, but I'm trying to become more skilled by teaching."
  </blockquote>

  <p>However, when I pressed the <em>"Start Meeting"</em> button, a miracle happened. In front of more than 25 participants on my laptop screen, that fear slowly disappeared, replaced by focus. My mouth, which was initially stuttering, began to flow smoothly with the material (<em>flow state</em>) even though we weren't face-to-face.</p>
  
  <h2>The Real Impact</h2>
  <p>The true relief only came after the midterm exam period ended. When I asked my friend, he thanked me because his grades improved thanks to that study session. Hearing that, the happiness was extraordinary, far exceeding my expectations.</p>

  <p>This experience of trying something new completely changed my perspective. Before the final exam, I decided to teach again with a much purer purpose: I wanted my friends to be helped, and I was happy to be part of their success.</p>
</div>
`;

const LLM_Size_ID = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Pernahkah kalian mencoba menjalankan model AI lokal seperti Llama-3 atau Mistral di laptop sendiri? Hal pertama yang mungkin mengejutkan adalah ukurannya. Untuk model "kecil" 8 Miliar parameter saja, kita harus mengunduh file sebesar 16 GB.</p>
  
  <p>Pertanyaan besarnya adalah: <strong>Apa sebenarnya isi file sebesar itu?</strong> Banyak yang mengira isinya adalah database teks, tapi kenyataannya, di dalamnya tidak ada satu pun kata yang bisa dibaca manusia.</p>

  <h2>1. Salah Kaprah Terbesar: LLM Bukanlah SQL Database</h2>
  <p>Sebelum masuk ke teknis, kita harus meluruskan satu hal fundamental. Banyak orang berpikir LLM bekerja seperti database pencari fakta.</p>
  
  <p>Jika kita menggunakan <strong>SQL Database</strong>, sifatnya adalah <em>Retrieval</em> (Pengambilan kembali). Datanya pasti dan tersimpan rapi:</p>
  
  <pre><code>SELECT * FROM history WHERE event = 'Independence Day Indonesia'
-- Result: 17 August 1945</code></pre>

  <p>Sebaliknya, LLM bukanlah tempat penyimpanan data, melainkan hasil dari <strong>Kompresi Pengetahuan (Lossy Compression)</strong>. Saat proses <em>training</em>, model "membaca" internet, tapi dia tidak menyimpannya ke dalam hard drive. Dia mempelajari <strong>pola</strong> hubungan antar kata. Jadi, file model AI itu berisi miliaran aturan matematika, bukan ensiklopedia.</p>

  <h2>2. Bedah Anatomi: "Bobot" dan Matematika</h2>
  <p>Jika file model itu dibedah, isinya hanyalah deretan angka desimal yang tak berujung. Angka-angka ini disebut <strong>Parameters</strong> atau <strong>Weights (Bobot)</strong>.</p>
  
  <p>Bayangkan fungsi matematika sederhana <code>f(x) = 2x</code>. Angka <strong>2</strong> di sana adalah parameter. LLM modern adalah fungsi matematika raksasa dengan miliaran parameter. Setiap bobot merepresentasikan kekuatan hubungan antar neuron buatan. Di sinilah "pengetahuan" itu disimpan sebagai nilai probabilitas statistik.</p>

  <h2>3. Matematika di Balik Ukuran File (The GB Logic)</h2>
  <p>Mengapa ukurannya bisa sampai bergiga-giga? Ini murni kalkulasi <em>Computer Science</em> dasar.</p>
  
  <p>Dalam komputasi, setiap angka desimal (Floating Point) membutuhkan ruang memori. Standar industri saat ini sering menggunakan presisi <strong>FP16 (2 Byte)</strong>. Mari kita hitung:</p>

  <ul>
    <li><strong>Jumlah Parameter:</strong> 8 Miliar (8.000.000.000)</li>
    <li><strong>Ukuran per Parameter:</strong> 2 Byte (16-bit)</li>
  </ul>

  <blockquote>
    "8 Miliar x 2 Byte = 16 Miliar Byte (sekitar 16 GB)."
  </blockquote>

  <p>Itulah jawabannya. File 16 GB itu secara harfiah berisi tumpukan 8 miliar angka desimal. Jika Anda menggunakan model 70B, maka ukurannya membengkak menjadi sekitar 140 GB. Tidak ada sihir, hanya matematika.</p>

  <h2>4. Scaling Laws: Mengapa Lebih Besar = Lebih Pintar?</h2>
  <p>Riset menunjukkan ada korelasi langsung antara jumlah parameter dengan kecerdasan model. Kita bisa membayangkannya seperti <strong>resolusi gambar</strong>:</p>
  
  <ul>
    <li><strong>Model Kecil (Low Res):</strong> Ibarat gambar pecah-pecah (pixelated). Model hanya memahami konsep umum.</li>
    <li><strong>Model Besar (High Res):</strong> Ibarat gambar 4K Ultra HD. Dengan miliaran parameter tambahan, model memiliki "ruang otak" untuk menangkap nuansa halus, sarkasme, dan logika yang rumit.</li>
  </ul>

  <h2>Kesimpulan</h2>
  <p>LLM bukanlah database pencari fakta, melainkan sebuah artefak matematika—sebuah "otak beku" berukuran raksasa. Ukuran file yang besar adalah harga yang harus dibayar untuk menyimpan "kecerdasan" dalam bentuk matriks numerik.</p>

  <hr />

  <h3>Referensi & Bacaan Lanjut</h3>
  <ul>
    <li><a href="https://arxiv.org/abs/2001.08361" target="_blank" rel="noopener noreferrer">Scaling Laws for Neural Language Models (Kaplan et al., OpenAI)</a> - Paper dasar tentang kenapa parameter besar itu penting.</li>
    <li><a href="https://huggingface.co/docs/accelerate/usage_guides/model_size_estimator" target="_blank" rel="noopener noreferrer">Hugging Face Model Memory Estimator</a> - Panduan menghitung kebutuhan VRAM.</li>
    <li><a href="https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web" target="_blank" rel="noopener noreferrer">ChatGPT Is a Blurry JPEG of the Web</a> - Analogi bagus tentang kompresi pengetahuan.</li>
  </ul>
</div>
`;

const LLM_Size_EN = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Have you ever tried running a local AI model like Llama-3 or Mistral on your own laptop? The first thing that might surprise you is the size. For a "small" 8 Billion parameter model, you have to download a file around 16 GB in size.</p>
  
  <p>The big question is: <strong>What is actually inside that massive file?</strong> Many assume it contains a text database, but in reality, there isn't a single word inside readable by humans.</p>

  <h2>1. The Biggest Misconception: LLM is Not an SQL Database</h2>
  <p>Before diving into the technicals, let's clear up a fundamental point. Many people think LLMs work like a fact-retrieval database.</p>
  
  <p>If we use an <strong>SQL Database</strong>, it relies on <em>Retrieval</em>. The data is exact and stored neatly:</p>
  
  <pre><code>SELECT * FROM history WHERE event = 'Independence Day Indonesia'
-- Result: 17 August 1945</code></pre>

  <p>Conversely, an LLM is not a data storage; it is the result of <strong>Knowledge Compression (Lossy Compression)</strong>. During <em>training</em>, the model "reads" the internet, but it doesn't save it to a hard drive. It learns the <strong>patterns</strong> of relationships between words. So, that AI model file contains billions of mathematical rules, not an encyclopedia.</p>

  <h2>2. Anatomy Breakdown: "Weights" and Math</h2>
  <p>If we dissect the model file, it's just an endless sequence of decimal numbers. These numbers are called <strong>Parameters</strong> or <strong>Weights</strong>.</p>
  
  <p>Imagine a simple math function <code>f(x) = 2x</code>. The number <strong>2</strong> there is a parameter. Modern LLMs are giant mathematical functions with billions of parameters. Each weight represents the strength of the connection between artificial neurons. This is where "knowledge" is stored as statistical probability values.</p>

  <h2>3. The Math Behind the File Size (The GB Logic)</h2>
  <p>Why is the size in the gigabytes? This is pure basic <em>Computer Science</em> calculation.</p>
  
  <p>In computing, every decimal number (Floating Point) requires memory space. Industry standards currently use <strong>FP16 (2 Bytes)</strong> precision. Let's do the math:</p>

  <ul>
    <li><strong>Parameter Count:</strong> 8 Billion (8,000,000,000)</li>
    <li><strong>Size per Parameter:</strong> 2 Bytes (16-bit)</li>
  </ul>

  <blockquote>
    "8 Billion x 2 Bytes = 16 Billion Bytes (approx. 16 GB)."
  </blockquote>

  <p>That is the answer. That 16 GB file literally contains a stack of 8 billion decimal numbers. If you use a 70B model, the size swells to around 140 GB. There is no magic, only mathematics.</p>

  <h2>4. Scaling Laws: Why Bigger = Smarter?</h2>
  <p>Research shows a direct correlation between the number of parameters and model intelligence. We can think of it like <strong>image resolution</strong>:</p>
  
  <ul>
    <li><strong>Small Model (Low Res):</strong> Like a pixelated image. The model only understands general concepts.</li>
    <li><strong>Large Model (High Res):</strong> Like a 4K Ultra HD image. With billions of extra parameters, the model has the "brain space" to capture subtle nuances, sarcasm, and complex logic.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>An LLM is not a fact-finding database, but a mathematical artifact—a giant "frozen brain." The massive file size is the price we pay to store "intelligence" in the form of numeric matrices.</p>

  <hr />

  <h3>References & Further Reading</h3>
  <ul>
    <li><a href="https://arxiv.org/abs/2001.08361" target="_blank" rel="noopener noreferrer">Scaling Laws for Neural Language Models (Kaplan et al., OpenAI)</a> - The foundational paper on why parameter size matters.</li>
    <li><a href="https://huggingface.co/docs/accelerate/usage_guides/model_size_estimator" target="_blank" rel="noopener noreferrer">Hugging Face Model Memory Estimator</a> - Guide to calculating VRAM requirements.</li>
    <li><a href="https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web" target="_blank" rel="noopener noreferrer">ChatGPT Is a Blurry JPEG of the Web</a> - A great analogy about knowledge compression.</li>
  </ul>
</div>
`;

const LegalAgent_ID = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Dalam euforia penggunaan <em>Large Language Models</em> (LLM), teknik <strong>RAG (Retrieval-Augmented Generation)</strong> sering dianggap sebagai solusi pamungkas. Alurnya sederhana: User Bertanya &rarr; Cari Dokumen &rarr; Jawab. Namun, benarkah sesederhana itu?</p>
  
  <p>Dalam studi kasus pengembangan <strong>LegalFlow</strong>, kami menemukan bahwa pendekatan RAG linier memiliki cacat fatal, terutama untuk domain hukum yang kompleks. Artikel ini akan membedah mengapa kami beralih ke arsitektur <strong>ReAct Agent</strong> menggunakan <strong>LangGraph</strong>.</p>

  <h2>1. Jebakan Linear RAG (The Linear Trap)</h2>
  <p>Masalah utama dari arsitektur RAG tradisional adalah sifatnya yang <strong>kaku dan deterministik</strong>. Sistem dipaksa untuk melakukan pencarian data (<em>retrieval</em>) untuk <em>setiap</em> input pengguna, tanpa mempedulikan konteksnya.</p>
  
  <p>Bayangkan skenario berikut:</p>
  <ul>
    <li><strong>User:</strong> "Halo, selamat pagi."</li>
    <li><strong>Linear RAG:</strong> Sistem akan memaksa melakukan <em>vector search</em> untuk kata "Selamat pagi" di database UU. Hasilnya? Potongan teks tidak relevan diambil, membingungkan LLM, dan memboroskan token.</li>
  </ul>

  <p>Linear RAG tidak memiliki kemampuan untuk <strong>memilih</strong>. Ia hanyalah sebuah pipa (pipeline) yang buta.</p>

  <h2>2. Solusi: Memberikan "Otak" dengan ReAct Agent</h2>
  <p>Untuk mengatasi hal ini, kami mengimplementasikan pola <strong>ReAct (Reason + Act)</strong>. Berbeda dengan <em>chain</em> biasa, sebuah Agen memiliki kemampuan <strong>Reasoning</strong> sebelum bertindak.</p>
  
  <p>Di dalam kode <code>agent.py</code>, kami mendefinisikan <em>conditional edge</em> yang cerdas:</p>
  
  <pre><code>// Logika pengambilan keputusan agen
workflow.add_conditional_edges("agent", tools_condition)</code></pre>

  <p>Inilah yang mengubah permainan. Agen (Gemini-2.5) kini bisa berpikir dinamis. Jika user hanya berkata "Terima kasih", agen akan memutuskan untuk <strong>tidak memanggil tool apapun</strong>. Ini meningkatkan efisiensi latensi dan biaya secara signifikan.</p>

  <h2>3. Strategi Pencarian yang Adaptif</h2>
  <p>Lebih jauh lagi, agen tidak hanya memilih <em>antara</em> mencari atau tidak, tapi juga <em>bagaimana</em> cara mencarinya. Kami menyediakan dua strategi berbeda:</p>

  <ul>
    <li><strong>Pencarian Presisi (<code>search_specific_clause</code>):</strong> Digunakan saat agen mendeteksi pengguna menyebut nomor pasal spesifik (misal: "Pasal 27"). Agen akan menggunakan filter metadata untuk akurasi 100%.</li>
    <li><strong>Pencarian Konsep (<code>search_legal_concept</code>):</strong> Digunakan untuk pertanyaan abstrak (misal: "Apa sanksi penyebaran hoax?"). Agen menggunakan pencarian semantik untuk memahami konteks.</li>
  </ul>

  <h2>4. Implementasi dengan LangGraph</h2>
  <p>Kami menggunakan <strong>LangGraph</strong> untuk memvisualisasikan alur pikir ini sebagai sebuah graf (<em>state machine</em>):</p>
  
  <ol>
    <li><strong>Node Agent:</strong> Menerima pesan, berpikir, dan memutuskan langkah selanjutnya.</li>
    <li><strong>Node Tools:</strong> Hanya dieksekusi JIKA agen merasa perlu.</li>
    <li><strong>Loop:</strong> Jika hasil pencarian tool belum memuaskan, agen bisa memutuskan untuk mencari lagi atau mensintesis jawaban.</li>
  </ol>

  <h2>Kesimpulan</h2>
  <p>Beralih dari Linear RAG ke <em>Agentic Workflow</em> bukan sekadar tren, melainkan kebutuhan untuk menciptakan aplikasi yang <em>robust</em>. Dengan memberikan kemampuan "memilih" kepada AI, LegalFlow tidak hanya menjadi mesin pencari hukum, melainkan konsultan hukum virtual yang tahu kapan harus diam, dan kapan harus membuka buku undang-undang.</p>
</div>
`;

const LegalAgent_EN = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">In the hype of <em>Large Language Models</em> (LLM), <strong>Retrieval-Augmented Generation (RAG)</strong> is often hailed as the ultimate solution. The flow is simple: User Asks &rarr; Search Documents &rarr; Answer. But is it really that simple?</p>
  
  <p>In the <strong>LegalFlow</strong> development case study, we found that linear RAG approaches have fatal flaws, especially for complex legal domains. This article breaks down why we switched to a <strong>ReAct Agent</strong> architecture using <strong>LangGraph</strong>.</p>

  <h2>1. The Linear Trap</h2>
  <p>The main problem with traditional RAG architecture is its <strong>rigid and deterministic</strong> nature. The system is forced to perform data retrieval for <em>every</em> user input, regardless of context.</p>
  
  <p>Imagine the following scenario:</p>
  <ul>
    <li><strong>User:</strong> "Hello, good morning."</li>
    <li><strong>Linear RAG:</strong> The system forces a <em>vector search</em> for "Good morning" in the law database. The result? Irrelevant text chunks are retrieved, confusing the LLM, and wasting tokens.</li>
  </ul>

  <p>Linear RAG lacks the ability to <strong>choose</strong>. It is merely a blind pipeline.</p>

  <h2>2. The Solution: Giving It a "Brain" with ReAct Agent</h2>
  <p>To overcome this, we implemented the <strong>ReAct (Reason + Act)</strong> pattern. Unlike a standard <em>chain</em>, an Agent has <strong>Reasoning</strong> capabilities before acting.</p>
  
  <p>In our <code>agent.py</code> code, we define smart <em>conditional edges</em>:</p>
  
  <pre><code>// Agent decision logic
workflow.add_conditional_edges("agent", tools_condition)</code></pre>

  <p>This is a game-changer. The Agent (Gemini-2.5) can now think dynamically. If a user simply says "Thank you," the agent decides <strong>not to call any tools</strong>. This significantly improves latency and cost efficiency.</p>

  <h2>3. Adaptive Search Strategies</h2>
  <p>Furthermore, the agent doesn't just choose <em>whether</em> to search, but also <em>how</em> to search. We provide two different strategies:</p>

  <ul>
    <li><strong>Precision Search (<code>search_specific_clause</code>):</strong> Used when the agent detects the user mentioning a specific article number (e.g., "Article 27"). The agent uses metadata filtering for 100% accuracy.</li>
    <li><strong>Concept Search (<code>search_legal_concept</code>):</strong> Used for abstract questions (e.g., "What are the sanctions for spreading hoaxes?"). The agent uses semantic search to understand context.</li>
  </ul>

  <h2>4. Implementation with LangGraph</h2>
  <p>We use <strong>LangGraph</strong> to visualize this thought process as a graph (<em>state machine</em>):</p>
  
  <ol>
    <li><strong>Agent Node:</strong> Receives messages, thinks, and decides the next step.</li>
    <li><strong>Tools Node:</strong> Executed ONLY if the agent deems it necessary.</li>
    <li><strong>Loop:</strong> If the tool search results are unsatisfactory, the agent can decide to search again or synthesize an answer.</li>
  </ol>

  <h2>Conclusion</h2>
  <p>Moving from Linear RAG to an <em>Agentic Workflow</em> is not just a trend, but a necessity for creating robust applications. By giving AI the ability to "choose," LegalFlow becomes not just a legal search engine, but a virtual legal consultant that knows when to speak casually, and when to open the law books.</p>
</div>
`;

const AgentMemory_ID = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Banyak orang mengira ketika berbincang dengan ChatGPT atau AI Agent, model tersebut memiliki "otak" yang menyimpan percakapan kita secara <em>real-time</em>. Padahal, kenyataan teknisnya jauh lebih sederhana—dan sedikit lebih rumit untuk dikelola oleh developer.</p>
  
  <p>Dalam artikel ini, kita akan membedah konsep teknis di balik memori AI, mengapa <em>Large Language Models</em> (LLM) sebenarnya bersifat <em>stateless</em>, dan bagaimana kita merekayasa sistem agar memiliki ingatan.</p>

  <h2>1. The Stateless Reality</h2>
  <p>Secara fundamental, interaksi dengan LLM (seperti GPT-4, Claude, atau Llama) dilakukan melalui API call. Sifat dasar dari protokol ini adalah <strong>Stateless</strong>.</p>
  
  <p>Artinya, model tidak menyimpan <em>state</em> (keadaan) dari satu <em>request</em> ke <em>request</em> berikutnya. Jika Anda mengirimkan pesan "Halo" sekarang, dan lima menit kemudian mengirimkan "Siapa nama saya?", model tersebut memperlakukan kedua pesan itu sebagai dua kejadian terpisah.</p>

  <h2>2. The Illusion: Context Injection</h2>
  <p>Jika modelnya <em>stateless</em>, bagaimana chatbot bisa menjawab pertanyaan "Siapa nama saya?" dengan benar? Jawabannya ada pada sisi <em>client</em> (aplikasi kita).</p>

  <p>Sebagai <em>AI Engineer</em>, kita harus menyimpan seluruh riwayat percakapan dalam sebuah variabel, dan mengirimkan ulang <strong>seluruh</strong> riwayat tersebut setiap kali pengguna mengirim pesan baru.</p>
  
  <pre><code># Konsep "Memori" dalam Python
chat_history = []

def chat_with_ai(user_input):
    # 1. Tambah input ke list
    chat_history.append(f"User: {user_input}")
    
    # 2. INJEKSI seluruh history ke prompt
    full_prompt = "\\n".join(chat_history)
    
    # 3. Kirim ulang semua ke AI
    response = llm.predict(full_prompt)
    
    return response</code></pre>

  <p>Jadi, beban komputasi untuk "mengingat" sebenarnya ada pada manipulasi <em>string</em> yang kita lakukan sebelum memanggil API.</p>

  <h2>3. Tantangan: Context Window Limit</h2>
  <p>Metode <em>brute-force</em> (mengirim semua chat) memiliki kelemahan fatal: biaya token dan batas <em>Context Window</em>. Jika chat terlalu panjang, aplikasi akan error atau biaya API membengkak.</p>

  <h2>4. Solusi: Strategi Manajemen Memori</h2>
  <p>Di sinilah peran framework seperti <strong>LangChain</strong> atau logika kustom di <strong>LangGraph</strong>. Kita bisa menggunakan beberapa strategi:</p>

  <ul>
    <li><strong>Conversation Buffer Window:</strong> Hanya menyimpan $K$ percakapan terakhir (Sliding Window). Hemat memori tapi AI bisa "lupa" topik awal.</li>
    <li><strong>Conversation Summary:</strong> Menggunakan LLM lain untuk merangkum percakapan lama menjadi ringkasan padat, sehingga menghemat token tanpa kehilangan konteks utama.</li>
  </ul>

  <h2>Kesimpulan</h2>
  <p>Membangun "Memori" pada AI Agent adalah tentang menyeimbangkan konteks dan efisiensi resource. Pemilihan strategi memori yang tepat adalah kunci membangun aplikasi AI yang <em>robust</em>.</p>
</div>
`;

const AgentMemory_EN = `
<div class="prose prose-lg dark:prose-invert max-w-none">
  <p class="lead">Many people assume that when chatting with ChatGPT or an AI Agent, the model has a "brain" that stores our conversation in <em>real-time</em>. In reality, the technical truth is much simpler—and a bit trickier for developers to manage.</p>
  
  <p>In this article, we will dissect the technical concept behind AI memory, why <em>Large Language Models</em> (LLMs) are actually <em>stateless</em>, and how we engineer systems to have "memory."</p>

  <h2>1. The Stateless Reality</h2>
  <p>Fundamentally, interactions with LLMs (like GPT-4, Claude, or Llama) happen via API calls. The basic nature of this protocol is <strong>Stateless</strong>.</p>
  
  <p>This means the model does not save the <em>state</em> from one request to the next. If you send "Hello" now, and five minutes later send "What is my name?", the model treats these as two completely separate, unrelated events.</p>

  <h2>2. The Illusion: Context Injection</h2>
  <p>If the model is <em>stateless</em>, how can a chatbot correctly answer "What is my name?" The answer lies on the <em>client-side</em> (our application).</p>

  <p>As <em>AI Engineers</em>, we must store the entire conversation history in a variable and re-send the <strong>entire</strong> history every time the user sends a new message.</p>
  
  <pre><code># The concept of "Memory" in Python
chat_history = []

def chat_with_ai(user_input):
    # 1. Add input to list
    chat_history.append(f"User: {user_input}")
    
    # 2. INJECT entire history into prompt
    full_prompt = "\\n".join(chat_history)
    
    # 3. Resend everything to AI
    response = llm.predict(full_prompt)
    
    return response</code></pre>

  <p>So, the computational burden of "remembering" actually lies in the <em>string</em> manipulation we perform before calling the API.</p>

  <h2>3. The Challenge: Context Window Limit</h2>
  <p>The <em>brute-force</em> method (sending all chats) has a fatal flaw: token costs and <em>Context Window</em> limits. If the chat gets too long, the application will crash or API costs will skyrocket.</p>

  <h2>4. The Solution: Memory Management Strategies</h2>
  <p>This is where frameworks like <strong>LangChain</strong> or custom logic in <strong>LangGraph</strong> come in. We can use several strategies:</p>

  <ul>
    <li><strong>Conversation Buffer Window:</strong> Only stores the last $K$ conversations (Sliding Window). Saves memory, but the AI might "forget" early topics.</li>
    <li><strong>Conversation Summary:</strong> Uses another LLM to summarize old conversations into a concise summary, saving tokens without losing the main context.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Building "Memory" in AI Agents is about balancing context and resource efficiency. Choosing the right memory strategy is key to building robust AI applications.</p>
</div>
`;

const blogPosts = [
    {
        id: "1",
        title: {
            id: "Cara Saya Belajar Lebih Efektif Menggunakan AI",
            en: "How I Study More Effectively Using AI"
        },
        excerpt: {
            id: "Seringkali kita mendengar anggapan bahwa kecerdasan buatan atau Artificial Intelligence (AI) berdampak buruk bagi proses pembelajaran. Banyak yang khawatir bahwa kehadiran AI hanya akan memicu kemalasan, di mana seseorang bisa menyelesaikan tugas secara instan tanpa benar-benar memahami isinya.",
            en: "We often hear assumptions that Artificial Intelligence (AI) has a negative impact on the learning process. Many worry that AI's presence will only trigger laziness, where someone can complete tasks instantly without truly understanding the content."
        },
        content: {
            id: HowTosStudyWithAI_ID,
            en: HowTosStudyWithAI_EN
        },
        category: "AI",
        readTime: "6 min read",
        publishedAt: "2025-12-07",
        featured: false,
        img: "https://placehold.co/600x400?text=How+To+Study+with+AI"
    },
    {
        id: "2",
        title: {
            id: "Mengubah Ragu Menjadi Dampak: Pengalaman Saya Mengajar Teman Satu Angkatan",
            en: "Turning Doubt into Impact: My Experience Teaching Peers"
        },
        excerpt: {
            id: "Pengalaman mengajar Struktur Data di IF Learning yang mengubah perspektif saya sepenuhnya.",
            en: "My experience teaching Data Structures at IF Learning that completely changed my perspective."
        },
        content: {
            id: Ngajar_ID,
            en: Ngajar_EN
        },
        category: "Personal Development",
        readTime: "6 min read",
        publishedAt: "2025-12-07",
        featured: true,
        img: "https://placehold.co/600x400?text=Teaching+Peers"
    },
    {
        id: "3",
        title: {
            id: "Mengenal LLM: Ukuran File dan Parameter",
            en: "Getting to Know LLM: File Sizes and Parameters"
        },
        excerpt: {
            id: "Pernahkah Anda terkejut melihat ukuran model AI yang mencapai bergiga-giga byte? Artikel ini membedah alasan teknis di balik ukuran tersebut dan meluruskan salah kaprah bahwa LLM adalah sebuah database.",
            en: "Have you ever been shocked by the massive file size of AI models? This article breaks down the technical reasons behind those gigabytes and debunks the misconception that LLMs are databases."
        },
        content: {
            id: LLM_Size_ID,
            en: LLM_Size_EN
        },
        category: "Artificial Intelligence",
        readTime: "5 min read",
        publishedAt: "2026-01-02",
        featured: true,
        img: "https://placehold.co/600x400?text=LLM+Size"
    },
    {
        id: "4",
        title: {
            id: "Linear RAG vs AI Agent: Jangan Biarkan Chatbot Anda 'Buta'",
            en: "Linear RAG vs AI Agent: Don't Let Your Chatbot Fly Blind"
        },
        excerpt: {
            id: "Mengapa sekadar menempelkan database ke LLM (Linear RAG) seringkali gagal? Pelajari bagaimana arsitektur Agentic Workflow membuat aplikasi hukum menjadi lebih cerdas dan efisien.",
            en: "Why does simply attaching a database to an LLM (Linear RAG) often fail? Learn how Agentic Workflow architecture makes legal applications smarter and more efficient."
        },
        content: {
            id: LegalAgent_ID,
            en: LegalAgent_EN
        },
        category: "AI AGENT",
        readTime: "7 min read",
        publishedAt: "2026-01-08",
        featured: true,
        img: "https://placehold.co/600x400?text=Linear+RAG"
    },
    {
        id: "5",
        title: {
            id: "Stateless to Stateful: Membedah Cara Kerja 'Memori' pada AI Agent",
            en: "Stateless to Stateful: Dissecting How 'Memory' Works in AI Agents"
        },
        excerpt: {
            id: "Pernah bingung kenapa AI bisa ingat chat sebelumnya padahal API-nya stateless? Artikel ini membongkar trik 'Context Injection' dan strategi manajemen memori agar hemat token.",
            en: "Ever wondered how AI remembers past chats even though the API is stateless? This article debunks the 'Context Injection' trick and memory management strategies to save tokens."
        },
        content: {
            id: AgentMemory_ID,
            en: AgentMemory_EN
        },
        category: "AI AGENT",
        readTime: "6 min read",
        publishedAt: "2026-01-13",
        featured: false,
        img: "https://placehold.co/600x400?text=AI+Memory"
    }
];

async function seed() {
    console.log('Seeding Projects...');
    for (const project of projectData) {
        const { error } = await supabase.from('projects').insert({
            title: project.title,
            description: project.description,
            technologies: project.technologies,
            category: project.category,
            featured: project.featured,
            github_link: project.links.github,
            demo_link: project.links.demo,
            image_url: project.imageUrl,
            // id: project.id // Let supabase generate UUID
        });
        if (error) console.error(`Error inserting project ${project.title}:`, error);
        else console.log(`Inserted project: ${project.title}`);
    }

    console.log('Seeding Blogs...');
    for (const blog of blogPosts) {
        const { error } = await supabase.from('blogs').insert({
            title: blog.title, // jsonb
            excerpt: blog.excerpt, // jsonb
            content: blog.content, // jsonb
            category: blog.category,
            read_time: blog.readTime,
            published_at: blog.publishedAt,
            featured: blog.featured,
            image_url: blog.img
        });
        if (error) console.error(`Error inserting blog ${blog.title.en}:`, error);
        else console.log(`Inserted blog: ${blog.title.en}`);
    }
}

seed();
