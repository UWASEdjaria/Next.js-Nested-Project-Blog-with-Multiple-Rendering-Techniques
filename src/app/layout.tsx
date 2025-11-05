import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";




export const metadata: Metadata = {
  title: "Nested Blog with Next.js",
  description: "A blog website using Next.js showing different rendering techniques (CSR, SSR, SSG, ISR) with nested layouts, categories, and dynamic pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col  bg-gray-100 p-4">

      <header className="w-full border border-purple-400 rounded-lg bg-black p-4  flex items-center justify-between">
        
        <h1 className="text-purple-400 text-2xl font-bold">Nested Blog</h1>
        <nav className="flex gap-6">
          <Link
           href='/'
           className="text-white hover:text-purple-600 font-semibold transition-colors">Home
           </Link>
          <Link
                href='/about'
             className="text-white hover:text-purple-600 font-semibold transition-colors">About
          </Link>
          <Link
                href="/blog"
                className="text-white hover:text-purple-600 font-semibold transition-colors">Blog
          </Link>

        </nav>
        </header>
        <main className="flex-1"> {children}</main>
       
         <footer className="text-center text-white py-6 border-t border-purple-800">© 2025 My Blog</footer>
        
      </body>
    </html>
  );
}
