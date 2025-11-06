'use client';

import "./globals.css";
import Link from "next/link";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    document.documentElement.setAttribute("data-theme", e.target.value);
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen gap-4 p-4 bg-gray-100 sm:flex-row sm:gap-6 sm:p-6">

        {/* Header */}
        <header className="flex flex-row items-center justify-between w-full p-4 bg-black border border-purple-400 rounded-lg">
          <h1 className="text-2xl font-bold text-purple-400 sm">Nested Blog</h1>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="font-semibold text-white transition-colors hover:text-purple-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-semibold text-white transition-colors hover:text-purple-600"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="font-semibold text-white transition-colors hover:text-purple-600"
            >
              Blog
            </Link>
          </nav>
        </header>

        {/* Theme Selector */}
        <div className="my-4">
          <select
            className="p-2 border border-purple-400 rounded-lg select select-bordered w-60 hover:scale-105"
            title="Theme Selector"
            defaultValue=""
            onChange={handleThemeChange}
          >
            <option disabled value="" className="text-white bg-gray-600 rounded-lg">
              Pick a theme
            </option>
            <option value="light" className="text-white bg-gray-600 rounded-lg">Light</option>
            <option value="dark" className="text-white bg-gray-600 rounded-lg">Dark</option>
          </select>
        </div>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="py-6 text-center text-white border-t border-purple-800">
          © 2025 My Blog
        </footer>
      </body>
    </html>
  );
}
