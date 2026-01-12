import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";
import AppProviders from "../components/providers/AppProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Features",
  description:
    "A collection of frontend features for better performance and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 p-6">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
