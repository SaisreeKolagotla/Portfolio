# Saisree Reddy Kolagotla — Data Analyst Portfolio

A modern, premium data analyst portfolio built with sleek analytics styling, responsive UI, and business-focused storytelling.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit `.env.local` with your Resend API key and recipient email

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## ✏️ How to Customize Everything

All content is centralized in **`lib/config.js`** — edit that one file to update:

### 📸 Change Your Photo

1. Place your photo in the `/public/` folder (e.g., `my-photo.png`)
2. Update `lib/config.js`:
   ```js
   photo: "/my-photo.png",
   ```

### 📄 Change Your Resume

1. Place your resume PDF in `/public/` (e.g., `MyResume.pdf`)
2. Update `lib/config.js`:
   ```js
   resume: "/MyResume.pdf",
   ```

### 🔗 Update Social Links

In `lib/config.js`:

```js
export const social = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
  twitter: "https://twitter.com/YOUR_HANDLE", // optional
};
```

### ➕ Add More Projects

In `lib/config.js`, add to the `projects` array:

```js
{
  id: 3,
  title: "My New Project",
  description: "What this project does...",
  tech: ["React", "TypeScript", "..."],
  features: ["Feature 1", "Feature 2"],
  github: "https://github.com/your/repo",
  live: "https://your-live-url.com",
  color: "#8b5cf6",   // accent color for the card
  icon: "🚀",
  featured: true,
},
```

### 💼 Add More Experience

```js
{
  role: "Data Analyst",
  company: "Company Name",
  location: "City",
  duration: "Jan 2026 – Present",
  type: "Full-time",
  achievements: [
    "Achievement 1...",
    "Achievement 2...",
  ],
  tech: ["Python", "SQL"],
},
```

---

## 📧 Contact Form (Resend Setup)

The contact form sends emails via Resend (free, no SSL issues).

1. Go to [resend.com](https://resend.com) → Sign up free
2. Dashboard → API Keys → Create API Key → Copy it
3. Edit `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
EMAIL_TO=saisreereddy0909@gmail.com
```

## That's it — no SMTP or Gmail setup required.

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js        ← Email API (Resend)
│   ├── globals.css             ← Design system & CSS variables
│   ├── layout.js               ← Root layout + metadata
│   └── page.js                 ← Main page
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── Footer.js
│   └── ThemeWrapper.js
├── lib/
│   └── config.js               ← ⭐ ALL CONTENT LIVES HERE
├── store/
│   ├── store.js                ← Redux store
│   ├── themeSlice.js           ← Dark/light mode state
│   ├── uiSlice.js              ← Mobile menu state
│   └── ReduxProvider.js
├── public/
│   ├── photo.jpg               ← Your profile photo
│   └── Saisree_Reddy_Kolagotla_Resume.pdf  ← Your resume
├── .env.example                ← Copy to .env.local
└── package.json
```

---

## 🎨 Design System

Theme colors are CSS variables in `app/globals.css`:

```css
:root {               /* Light mode */
  --brand: #10b981;   /* Primary analytics green */
  --accent: #06b6d4;  /* Secondary blue accent */
  ...
}
.dark {               /* Dark mode */
  --brand: #10b981;
  ...
}
```

Change `--brand` and `--accent` to match your preferred analytics palette.

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel Dashboard:
# Settings → Environment Variables → Add RESEND_API_KEY, EMAIL_TO
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).

---

## 🛠 Tech Stack

| Technology    | Purpose                |
| ------------- | ---------------------- |
| Next.js 14    | Framework (App Router) |
| Tailwind CSS  | Styling                |
| Framer Motion | Animations             |
| Redux Toolkit | Theme & UI state       |
| Resend        | Contact form emails    |
| Lucide React  | Icons                  |

---

Built with ❤️ by **Saisree Reddy Kolagotla**
