import type { Metadata } from "next";;
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
        className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4"
      >
        <Link href='/'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Blo'>Blog</Link>
        {children}
      </body>
    </html>
  );
}
