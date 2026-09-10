export type Lang = "id" | "en";

export const socials = {
  x: "https://x.com/gmgndi",
  handle: "@gmgndi",
};

export const copy = {
  id: {
    brand: "gmgndi",
    hero: {
      title: "Hi, i'm gmgndi",
      lead: "validator, researcher, LP, ICO/IDO & retro — sembilan tahun di kripto.",
      note: "semua yang dibangun di sini tumbuh on-chain ♥️",
    },
    articles: {
      title: "Latest Articles",
      viewAll: "View all",
      back: "← Kembali",
      allTitle: "Articles",
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Scanme",
          detail: "Agen LP otonom · Meteora DLMM",
        },
        {
          title: "Meteora Pool Scanner",
          detail: "Telegram bot · Jupiter & DLMM",
        },
        {
          title: "Uniswap Robinhood Bot",
          detail: "Telegram bot · Uniswap Data API",
        },
        {
          title: "Validator Operations",
          detail: "Infrastruktur node · uptime",
        },
        {
          title: "Liquidity Desk",
          detail: "Uniswap · Meteora",
        },
        {
          title: "ICO / IDO & Retroactive",
          detail: "Early allocation · airdrop paths",
        },
      ],
    },
    focus: {
      title: "Focus",
      items: [
        {
          title: "Validator node",
          detail: "Menjaga infrastruktur jaringan tetap hidup",
        },
        {
          title: "Web3 research",
          detail: "Mekanisme, insentif, dan titik gagal protokol",
        },
        {
          title: "ICO / IDO & retroactive",
          detail: "Alokasi awal dan jalur sebelum reward diberi nama",
        },
        {
          title: "Liquidity provider",
          detail: "Kedalaman pasar di Uniswap & Meteora",
        },
        {
          title: "Komunitas Web3",
          detail: "Ruang belajar dan bertahan setelah hype mereda",
        },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "Saya masuk ke kripto ketika industri ini masih terdengar seperti desas-desus. Sembilan tahun kemudian, saya masih di sini — di lapisan yang jarang ramai.",
        "Infrastruktur, riset, early allocation, likuiditas, dan komunitas. Bukan turis siklus.",
      ],
    },
    footer: {
      credit: "Built with Next.js",
      lang: "EN",
    },
  },
  en: {
    brand: "gmgndi",
    hero: {
      title: "Hi, i'm gmgndi",
      lead: "validator, researcher, LP, ICO/IDO & retro — nine years in crypto.",
      note: "everything here grows on-chain ♥️",
    },
    articles: {
      title: "Latest Articles",
      viewAll: "View all",
      back: "← Back",
      allTitle: "Articles",
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Scanme",
          detail: "Autonomous LP agent · Meteora DLMM",
        },
        {
          title: "Meteora Pool Scanner",
          detail: "Telegram bot · Jupiter & DLMM",
        },
        {
          title: "Uniswap Robinhood Bot",
          detail: "Telegram bot · Uniswap Data API",
        },
        {
          title: "Validator Operations",
          detail: "Node infrastructure · uptime",
        },
        {
          title: "Liquidity Desk",
          detail: "Uniswap · Meteora",
        },
        {
          title: "ICO / IDO & Retroactive",
          detail: "Early allocation · airdrop paths",
        },
      ],
    },
    focus: {
      title: "Focus",
      items: [
        {
          title: "Validator node",
          detail: "Keeping network infrastructure alive",
        },
        {
          title: "Web3 research",
          detail: "Mechanisms, incentives, and failure points",
        },
        {
          title: "ICO / IDO & retroactive",
          detail: "Early allocation and unlabeled reward paths",
        },
        {
          title: "Liquidity provider",
          detail: "Market depth on Uniswap & Meteora",
        },
        {
          title: "Web3 community",
          detail: "Rooms to learn and stay after the hype thins out",
        },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I entered crypto when the industry still felt like a rumor. Nine years later, I am still here — in the quieter layers.",
        "Infrastructure, research, early allocation, liquidity, and community. Not a tourist of cycles.",
      ],
    },
    footer: {
      credit: "Built with Next.js",
      lang: "ID",
    },
  },
} as const;
