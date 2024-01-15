import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/Auth";
import { Toaster } from "sonner";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AnswerFlow AI - Boost Efficiency with Data-Driven Chatbot",
  description:
    "Elevate your business efficiency with AnswerFlow AI. Leverage data-driven chatbot and natural language processing for better insights and automation",
  icons: {
    icon: "/favicon.png",
  },
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
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
