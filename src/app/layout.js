import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"; // ← NOT "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ this one is correct


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: "Neptel",
  description: "Enterprise AI Infrastructure",
  icons: {
    icon: "/Neptel1080x.png",
  },
  openGraph: {
    title: "Neptel",
    description: "Privacy-first AI for modern organizations.",
    images: [
      {
        url: "https://www.neptel.dk/Neptel1080x.png",
        width: 1080,
        height: 1080,
        alt: "Neptel Logo",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  )
}

