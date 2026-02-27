# Sonar Bangla Muri

[![N|Solid](https://www.krishnasagar.net/img/sbm_eng_flat_by_kspl2.svg)](https://krishnasagar.net)

Sonar Bangla Muri is one of the best puffed rice making company in India since october 2009. Their products are made in West Bengal and we deliver it through out India.

They have over 20 employees in their factory and we ensure that they maintain proper hygiene. They always use gloves, masks and head caps during their work.

They have a great care for the environment. We use 'Pallets' as their fuel which make negligible air pollution compared to other fuels.

## Tech stack

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS** for styling; base theme in `theme/theme.ts` (design-system ready)
- **ESLint** + **Prettier**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

For static export (e.g. S3, GitHub Pages), set `output: 'export'` in `next.config.ts` and run `npm run build`; output will be in `out/`.
