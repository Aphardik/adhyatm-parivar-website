import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/layouts/Header";
import Footer from "./_components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adhyatm Parivar",
  description: "aaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Gujarati:wght@100..800&family=Tiro+Devanagari+Hindi:ital@0;1&family=Yatra+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"/>
      </head>
      <body
        className="font-body bg-gradient1"
      >
        <Header />
        {/* <div className='max-w-7xl min-h-dvh pt-16 flex items-center justify-center mx-auto px-2 sm:px-6'> */}
        <div className=' min-h-dvh pt-16 flex items-center justify-center mx-auto '>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
