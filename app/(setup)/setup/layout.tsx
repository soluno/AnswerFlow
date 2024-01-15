/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ProgressBar from "./_components/ui/ProgressBar";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AnswerFlow AI - SetUp Bot",
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
