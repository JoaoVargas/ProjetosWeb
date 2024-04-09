import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

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
      <html 
      lang="pt-br"
      suppressHydrationWarning>
        <body className={cn(
          font.className,
          '')}>
          <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="local-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
