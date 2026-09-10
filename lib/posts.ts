import type { Lang } from "@/lib/content";

export type PostLocale = {
  title: string;
  excerpt: string;
  body: string[];
  quote: string;
  closing: string[];
};

export type Post = {
  slug: string;
  date: string;
  id: PostLocale;
  en: PostLocale;
};

export const posts: Post[] = [
  {
    slug: "sejarah-crypto",
    date: "2026-09-10",
    id: {
      title: "Catatan pribadi tentang sejarah crypto",
      excerpt:
        "Bukan timeline resmi. Hanya cara saya mengingat sembilan tahun di industri yang terus berganti nama, tapi jarang berganti sifat.",
      body: [
        "Saya tidak masuk crypto dari whitepaper. Saya masuk dari desas-desus — layar yang penuh angka, grup yang penuh keyakinan, dan rasa bahwa sesuatu yang besar sedang terbentuk di tempat yang belum banyak orang mau amati.",
        "Bitcoin lahir tahun 2009, tapi bagi banyak orang di luar sana, crypto baru “terjadi” ketika harga mulai membuat berita. Itu selalu pola yang sama: infrastruktur lebih dulu, narasi belakangan, dan keramaian datang paling akhir.",
        "Di awal, cerita crypto terdengar seperti fiksi yang keras kepala. Uang tanpa bank. Transfer tanpa izin. Komunitas kecil yang saling menjaga node seperti menjaga api unggun. Lalu datang keraguan publik, skandal exchange, dan musim dingin yang mengajari siapa yang benar-benar tinggal.",
        "2017 adalah pintu masuk banyak orang — termasuk saya. ICO datang seperti pasar malam yang terlalu terang: janji cepat, whitepaper tebal, dan keyakinan yang sering lebih keras daripada produknya. Sebagian proyek mati. Sebagian meninggalkan pelajaran. Yang bertahan biasanya bukan yang paling ramai, melainkan yang paling sabar memperbaiki dasar.",
        "Musim dingin setelahnya terasa sunyi. Grafik meredup. Grup sepi. Tapi justru di situ kerja yang lebih jujur muncul: riset, infrastruktur, dan orang-orang yang tetap datang tanpa kamera. Saya belajar bahwa industri ini tidak hanya tentang naik. Ia tentang tetap hadir ketika tidak ada yang menonton.",
        "Lalu DeFi membuka lantai baru. Likuiditas jadi bahasa. Pool jadi ruang. Uniswap dan protokol sejenisnya membuat pasar terasa lebih dekat ke tangan — sekaligus lebih menuntut tanggung jawab. Menyediakan likuiditas bukan spekulasi spekulan saja; itu duduk di dalam mesin pasar dan menanggung gesekannya.",
        "NFT, L2, Solana, restaking, airdrop, retroactive — setiap siklus membawa kosakata baru. Tapi di bawahnya, pertanyaan lama tetap sama: siapa yang membangun? siapa yang menjaga? siapa yang hanya lewat?",
        "Retroactive, bagi saya, adalah bentuk kesabaran yang aneh. Kamu berinteraksi sebelum reward punya nama. ICO dan IDO adalah keyakinan yang terukur — atau setidaknya seharusnya begitu. Validator adalah janji uptime. Komunitas adalah yang tersisa setelah hype selesai mengucapkan pidatonya.",
      ],
      quote:
        "Ini industri yang terus menguji apakah kamu datang untuk narasi, atau untuk kerja.",
      closing: [
        "Sembilan tahun kemudian, saya masih di sini. Bukan karena saya selalu benar. Melainkan karena saya sudah melihat cukup banyak siklus untuk tahu: yang paling berharga jarang datang dari keramaian pertama — ia datang dari orang yang tetap menyalakan mesin ketika semua orang bilang musim sudah selesai.",
      ],
    },
    en: {
      title: "A personal note on crypto history",
      excerpt:
        "Not an official timeline. Just how I remember nine years in an industry that keeps renaming itself, but rarely changes its nature.",
      body: [
        "I did not enter crypto through a whitepaper. I entered through rumor — screens full of numbers, groups full of conviction, and the feeling that something large was forming in a place most people were not yet willing to watch.",
        "Bitcoin was born in 2009, but for many people outside, crypto only “happened” when price made headlines. That pattern never really changes: infrastructure first, narrative later, and the crowd arrives last.",
        "In the beginning, crypto sounded like stubborn fiction. Money without banks. Transfers without permission. A small community tending nodes the way you tend a fire. Then came public doubt, exchange scandals, and winters that taught everyone who actually stayed.",
        "2017 was the doorway for many people — myself included. ICOs arrived like a night market with too much light: fast promises, thick papers, and belief that was often louder than the product. Some projects died. Some left lessons. The ones that lasted were rarely the loudest; they were the most patient about foundations.",
        "The winter after felt quiet. Charts dimmed. Groups emptied. And yet that was where more honest work appeared: research, infrastructure, and people who kept showing up without an audience. I learned this industry is not only about going up. It is about remaining when nobody is watching.",
        "Then DeFi opened another floor. Liquidity became a language. Pools became rooms. Uniswap and similar protocols made markets feel closer to the hand — and more responsible. Providing liquidity is not only speculative theater; it is sitting inside the market machine and carrying its friction.",
        "NFTs, L2s, Solana, restaking, airdrops, retroactives — every cycle brings a new vocabulary. Underneath, the old questions stay the same: who builds? who keeps? who is only passing through?",
        "Retroactive work, to me, is a strange form of patience. You interact before the reward has a name. ICOs and IDOs are measured conviction — or at least they should be. Validators are an uptime promise. Community is what remains after hype finishes its speech.",
      ],
      quote:
        "This is an industry that keeps testing whether you came for the narrative, or for the work.",
      closing: [
        "Nine years later, I am still here. Not because I was always right. But because I have seen enough cycles to know: the most valuable things rarely arrive with the first crowd — they arrive with the people who keep the machines on when everyone else says the season is over.",
      ],
    },
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostCopy(post: Post, lang: Lang) {
  return lang === "en" ? post.en : post.id;
}

export function formatPostDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
