/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-17 22:48:49
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-17 23:02:09
 * @Description: file content
 */
"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Lines from "@/app/components/Lines";
import ScrollToTop from "@/app/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "./context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
