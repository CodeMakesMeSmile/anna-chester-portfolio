# Anna Chester Portfolio

A polished personal portfolio for `annachester.dev`, designed around a dark-mode-first technical aesthetic with subtle botanical branding.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS 3
- No theme dependency; dark/light mode uses a small localStorage toggle

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Edit profile content

Most public-facing content lives in:

```txt
src/data/profile.ts
```

Update the project list, email address, LinkedIn URL, and skills there.

## Recommended deployment layout

Use two separate Vercel projects:

1. `anna-chester-portfolio` → `annachester.dev` and `www.annachester.dev`
2. `la-vianue-commerce` → `lavianue.annachester.dev`

This keeps the portfolio and ecommerce app isolated while still hosting La Vianué under the same root domain.

## Portfolio Vercel setup

```bash
pnpm install
pnpm build
vercel
vercel --prod
```

Then add these domains to the portfolio project in Vercel:

```txt
annachester.dev
www.annachester.dev
```

## La Vianué Vercel setup

In the La Vianué project, add:

```txt
lavianue.annachester.dev
```

Update production env vars in that project:

```env
NEXT_PUBLIC_SITE_URL="https://lavianue.annachester.dev"
DATABASE_URL="..."
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."
```

Create a production Stripe webhook endpoint pointing to:

```txt
https://lavianue.annachester.dev/api/webhooks/stripe
```

## DNS notes

If DNS is managed outside Vercel, add the exact records Vercel shows in each project’s Settings → Domains page. Typically:

- Apex domain uses an A record.
- Subdomains use CNAME records.

Always follow the records shown by Vercel for your specific account and DNS provider.

## Design direction

The brand direction is technical, polished, and quietly organic: dark mode, soft grid texture, botanical circuit shapes, earthy accents, and clear product-minded copy. Plants are present visually, not as a literal written theme.
