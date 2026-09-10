import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmgndi.vercel.app"),
  title: "gmgndi",
  description:
    "gmgndi — validator, web3 researcher, LP on Uniswap & Meteora, ICO/IDO investor, retroactive farmer. Nine years in crypto.",
  authors: [{ name: "gmgndi" }],
  openGraph: {
    title: "gmgndi",
    description:
      "Validator, researcher, liquidity provider, ICO/IDO & retroactive. Nine years on-chain.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "gmgndi",
    description: "Nine years in crypto.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${montserrat.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('gmgndi-theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
