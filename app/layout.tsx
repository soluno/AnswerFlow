import type { Metadata } from "next";

import { Toaster } from "sonner";
import AuthProvider from "./context/Auth";

import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins font
const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// root meta data
export const metadata: Metadata = {
  title: "AnswerFlow AI - Boost Efficiency with Data-Driven Chatbot",
  description:
    "Elevate your business efficiency with AnswerFlow AI. Leverage data-driven chatbot and natural language processing for better insights and automation",
  icons: {
    icon: "/favicon.png",
  },
};
// root layout put scripts and providers for all app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* scripts for google statists */}
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
      <body className={font.className}>
        <Toaster position="bottom-center" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
