import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./(dashboard)/_components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'auto'
})

export const metadata: Metadata = {
  title: "Treina-Dev",
  description: "Desenvolvimento de Aulas e treinamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` ${inter.className} antialiased h-full`}
      >
        <div className="flex gap-8">
        <Sidebar />
        {children}
        </div>
      </body>
    </html>
  );
}
