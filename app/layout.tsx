/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
