import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dax Dev",
  description:
    "Minimalist portfolio of a software developer specializing in building exceptional digital experiences.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Minimalist",
  ],
  openGraph: {
    title: "Dax",
    description:
      "Minimalist portfolio of a software developer specializing in building exceptional digital experiences.",
    url: "https://example.com",
    siteName: "Dax Dev",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
