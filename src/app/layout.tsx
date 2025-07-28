import type { Metadata } from "next";
import CustomFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import 'aos/dist/aos.css';
import ClientWrapper from "./clientWrapper";

const podcast = CustomFont({
  src: "./fonts/Podcast.ttf",
  variable: "--font-podcast",
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Tours to Tuscany",
  description: "Discover the beauty of Tuscany with our curated tours. Explore charming villages, rolling hills, fine wines, and unforgettable Italian experiences.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${podcast.variable} ${openSans.variable} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
