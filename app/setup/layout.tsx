/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import ProgressBar from "./_components/ui/ProgressBar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnswerFlow AI - Boost Efficiency with Data-Driven Chatbot",
  description:
    "Elevate your business efficiency with AnswerFlow AI. Leverage data-driven chatbot and natural language processing for better insights and automation",
  icons: {
    icon: "/favicon.png",
  },
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
