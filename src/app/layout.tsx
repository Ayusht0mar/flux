import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google"
import { Source_Sans_3 } from "next/font/google"

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400', '600']
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Flux",
  description: "Flux is a agency template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.className} ${barlowCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
