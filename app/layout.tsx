import type { Metadata } from "next";
import { Cinzel_Decorative, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 标题专用：神秘风格
const cinzel = Cinzel_Decorative({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
  variable: "--font-mystery"     
});

// 正文/副标题专用：古籍衬线风格
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "My Digital Void",
  description: "Gateway to the unknown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 注入所有字体变量，并设置深色背景 */}
      <body className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} antialiased bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}