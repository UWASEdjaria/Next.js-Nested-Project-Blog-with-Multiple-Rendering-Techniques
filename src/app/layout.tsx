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
      <body className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between w-full p-4 bg-black border border-purple-400 rounded-lg">
          <h1 className="text-xl font-bold text-purple-400 sm:text-2xl">
            Nested Blog
          </h1>
          <nav className="flex flex-wrap gap-4 mt-2 sm:mt-0 sm:gap-6">
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

     
        <div className="flex flex-col flex-1 w-full gap-6 p-4 sm:flex-row sm:p-6">
          {/* Theme Selector */}
          <div className="w-full sm:w-60">
            <select
              className="w-full p-2 transition border border-purple-400 rounded-lg select select-bordered hover:scale-105"
              title="Theme Selector"
              defaultValue=""
              onChange={handleThemeChange}
            >
              <option
                disabled
                value=""
                className="text-white bg-gray-600 rounded-lg"
              >
                Pick a theme
              </option>
              <option
                value="light"
                className="text-white bg-gray-600 rounded-lg"
              >
                Light
              </option>
              <option
                value="dark"
                className="text-white bg-gray-600 rounded-lg"
              >
                Dark
              </option>
            </select>
          </div>

          {/* Main Content */}
          <main className="flex-1">{children}</main>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-white bg-black border-t border-purple-800 rounded-t-lg">
          © 2025 My Blog
        </footer>
      </body>
    </html>
  );
}
