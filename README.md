# gmgndi

Situs about-me minimalis untuk **gmgndi** — validator, web3 research, liquidity provider (Uniswap & Meteora), dan pembangun komunitas. Sembilan tahun di industri kripto.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Deploy ke Vercel

1. Commit & push repo ini ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new) → Import Project.
3. Framework Preset: **Next.js** (biarkan default).
4. Deploy.

Atau dari CLI:

```bash
npx vercel
```

## Kustomisasi cepat

| Yang diubah | File |
| --- | --- |
| Teks ID/EN, narasi, CTA | `lib/content.ts` |
| Link X / handle | `lib/content.ts` → `socials` |
| Foto PFP & galeri | `public/images/` |
| Domain metadata | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` |
