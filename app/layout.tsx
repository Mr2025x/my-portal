import type { Metadata } from "next";
// 引入神秘字体 Cinzel Decorative
import { Cinzel_Decorative, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 配置神秘字体
const cinzel = Cinzel_Decorative({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"], // 引入不同粗细
  variable: "--font-mystery"     // 定义 CSS 变量名
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
      {/* 将字体变量注入 body，这样全站都能用 */}
      <body className={`${inter.className} ${cinzel.variable}`}>{children}</body>
    </html>
  );
}