## Video Editing Portfolio (Next.js)

Elegant dark-theme portfolio built with **Next.js 14** and **Tailwind CSS**, designed specifically to showcase video editing work (showreel, selected projects, services, and contact).

### Run the project locally

1. **Install dependencies**

```bash
cd /Users/adithyack/Portfolio
npm install
```

2. **Start the dev server**

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

### Where to customize your portfolio

- **Global layout & metadata**: `app/layout.tsx`
- **Main page content**: `app/page.tsx`
- **Global styles & dark theme utilities**: `app/globals.css`
- **Tailwind configuration (colors, fonts, etc.)**: `tailwind.config.mjs`

### Plug in your real content

- **Your name & identity**
  - Header initials/logo: update the `VE` letters.
  - Footer name: replace `Your Name` in `app/page.tsx`.

- **Showreel**
  - In `app/page.tsx`, search for `Showreel` and replace the placeholder area with:
    - A real thumbnail image (in `public/`), or
    - An embedded Vimeo/YouTube player.

- **Selected projects**
  - Edit the `projects` array at the top of `app/page.tsx`:
    - `title`: name of the piece.
    - `role`: what you did (edit, grade, sound, etc.).
    - `year`: year of the project.
    - `link`: URL to Vimeo/YouTube or a case study page.

- **Services & tools**
  - In the **About** and **Services** sections, update the bullet points to match your exact workflow, tools (Premiere, DaVinci, etc.), and types of work you want.

- **Contact & socials**
  - Replace `you@example.com` in `app/page.tsx` with your real email.
  - Update the Instagram/YouTube/Vimeo links with your real profiles.

### Adding thumbnails and media

1. Create a `public/thumbnails` folder:

```bash
mkdir -p public/thumbnails
```

2. Drop your JPG/PNG stills into that folder.
3. Make sure the `thumb` paths in the `projects` array match the filenames, e.g. `/thumbnails/your-film.jpg`.

### Tweaking the look

- Update brand colors (e.g. accent orange) in `tailwind.config.mjs` under `colors.accent`.
- Adjust glow/blur and glass effects in `app/globals.css` (`.glass-panel`, gradients, etc.).
- All typography and spacing use Tailwind utility classes directly in `app/page.tsx`, so you can tweak the design in one place.


# video_editing_portfolio
