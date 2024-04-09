import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatUp",
  description: "Projeto criando uma aplicaçao de chat de voz e video, baseado no Discord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
