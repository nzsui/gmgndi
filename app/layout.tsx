import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmgndi.vercel.app"),
  title: "gmgndi — sembilan tahun di jaringan",
  description:
    "gmgndi: validator node operator, web3 researcher, ICO/IDO investor, retroactive farmer, liquidity provider on Uniswap and Meteora, and community builder. Nine years in crypto.",
  keywords: [
    "gmgndi",
    "web3",
    "validator",
    "uniswap",
    "meteora",
    "liquidity provider",
    "crypto",
  ],
  authors: [{ name: "gmgndi" }],
  openGraph: {
    title: "gmgndi — sembilan tahun di jaringan",
    description:
      "Validator, researcher, liquidity provider, community. Nine years on-chain.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "gmgndi",
    description: "Nine years in the network.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
