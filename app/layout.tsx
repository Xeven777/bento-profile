import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Clarity from "@/components/Clarity";

export const metadata: Metadata = {
  title: "Anish Biswas",
  description: "Anish's Bento Links",
  metadataBase: new URL("https://bento.anish7.me"),
};

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" ? <Clarity /> : null}
      <body className={cn(font.className, "antialiased")}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
