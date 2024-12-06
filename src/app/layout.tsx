import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";

// Load the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gold Mine Marketers",
  description: "Gold Mine Marketers is a leading digital marketing agency, delivering innovative strategies in web design, SEO, social media, and brand development to drive business growth and engagement across global markets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
