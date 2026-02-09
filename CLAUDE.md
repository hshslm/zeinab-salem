# Zeinab Salem - Ceramic Artist Portfolio Website

> Project instructions for Claude Code and Antigravity

## Project Overview

A minimal, dark portfolio website for ceramic artist **Zeinab Salem** to showcase and sell her handmade sculptural ceramics. Display-first with contact-to-purchase model (no cart/checkout).

## Artist & Work Style

- **Artist:** Zeinab Salem
- **Medium:** Sculptural ceramic vessels
- **Style:** Dark raku-fired glazes, iridescent metallic surfaces (oil-slick rainbow sheen), primitive organic forms with chimney-like protrusions
- **Feel:** Moody, ancient, contemporary art pieces — not decorative pottery

## Site Structure

### 1. Landing Page (`/`)
- "Zeinab Salem" centered
- 2-sentence artist statement
- Single "View Work" link
- Dark, atmospheric hero

### 2. Products Page (`/work`)
- Grid of pieces
- Name and price only beneath each image
- 2 columns desktop, 1 column mobile
- Generous gaps between items

### 3. Product Detail Page (`/work/[slug]`)
- Large image (dominant)
- Name, price
- "Inquire" link (opens email or contact form)
- Minimal text below image

### 4. Contact/Inquire
- Simple form: name, email, message
- Or mailto link
- Phone number visible
- Form submissions → email

## Design Specifications

### Colors
- Background: near-black `#0A0A0A`
- Text: off-white `#F5F5F5`
- Let iridescent ceramics pop against darkness

### Typography
- Single refined serif typeface
- Options: Cormorant, Freight Display, or similar
- Large, elegant headings
- Minimal body text

### Layout
- Centered narrow content column
- Maximum whitespace/blackspace
- Images float in darkness like museum lighting
- No decorations, no icons, no borders

### Feel
- Underground gallery
- Ancient artifacts in a dark room
- Japanese minimalism meets gallery exhibition
- Let the work glow

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Backend:** Supabase (products table, contact form submissions)
- **Deployment:** Vercel
- **Domain:** TBD (zeinabsalem.com or similar)

## Data Structure

### Products Table (Supabase)
```sql
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  price decimal(10,2) not null,
  image_url text not null,
  description text,
  dimensions text,
  available boolean default true,
  sort_order integer,
  created_at timestamp default now()
);
```

### Contact Submissions Table
```sql
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id),
  name text not null,
  email text not null,
  message text,
  created_at timestamp default now()
);
```

## File Structure

```
ZeinabSalem/
├── CLAUDE.md              # This file
├── products/              # Product images (already exists)
│   ├── vase-001.jpg
│   ├── vase-002.jpg
│   └── ...
├── app/
│   ├── layout.tsx
│   ├── page.tsx           # Landing
│   ├── work/
│   │   ├── page.tsx       # Products grid
│   │   └── [slug]/
│   │       └── page.tsx   # Product detail
│   └── globals.css
├── components/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── InquiryForm.tsx
│   └── Header.tsx
├── lib/
│   ├── supabase.ts
│   └── types.ts
└── public/
    └── fonts/
```

## Development Workflow

1. **Pull Stitch designs:** `@stitch Get HTML from Zeinab Salem project`
2. **Set up Supabase:** `@supabase Create project zeinab-salem-dev`
3. **Create tables:** Use schema above
4. **Upload product images** to Supabase Storage
5. **Build pages** following design specs
6. **Deploy to Vercel** for preview

## MCP Commands for This Project

```
@stitch List my projects
@stitch Get screens from [project-id]
@supabase Create project zeinab-salem-dev in region us-east-1
@supabase Create table products with schema [above]
@github Create repo ZeinabSalem
@context7 Next.js 16 image optimization
```

## Content Needed

- [ ] Artist statement (2 sentences)
- [ ] Product names and prices
- [ ] Product dimensions (optional)
- [ ] Contact email address
- [ ] Phone number (optional)
- [ ] Domain name

## References

- Miro tea
- Jenna Peffley ceramics
- MFCC.jp
- Noguchi Museum website

---

## Notes

- Product images located at: `/products/`
- Designs ready on Stitch
- No cart/checkout — inquiry model only
- Dark theme to complement iridescent glazes
