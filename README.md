# Nested Blog with Next.js

A blog website built using **Next.js App Router** demonstrating different rendering techniques and nested layouts.  
This project includes a **dynamic blog page**, **nested layouts**, **categories sidebar**, and uses **Tailwind CSS** for styling.

---

## 📂 Folder Structure

app/
├── layout.tsx # Root layout with header and footer
├── page.tsx # Home page
├── about/
│ └── page.tsx # About page
└── blog/
├── page.tsx # Blog list page
└── [id]/
└── page.tsx # Dynamic blog page (/blog/1, /blog/2, etc.)
---

## ⚡ Features

- **Dynamic Routes:** `/blog/[id]` displays blog by ID  
- **Rendering Techniques:**  
  - Client-Side Rendering (CSR)  
  - Server-Side Rendering (SSR)  
  - Static Site Generation (SSG)  
  - Incremental Static Regeneration (ISR)  
- **Nested Layouts:** Separate layout for blog pages with sidebar  
- **Responsive Design:** Works on mobile, tablet, and desktop  
- **Theme:** Purple & black color scheme with Tailwind CSS  

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
cd <project-folder>
Install dependencies:

bash
Copy code
npm install
# or
yarn
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

📄 Usage
Home page: /

About page: /about

Blog list page: /blog

Dynamic blog page: /blog/1, /blog/2, etc.

