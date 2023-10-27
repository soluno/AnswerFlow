import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnswerFlow AI - Boost Efficiency with Data-Driven Chatbots",
  description:
    "Elevate your business efficiency with AnswerFlow AI. Leverage data-driven chatbots and natural language processing for better insights and automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
