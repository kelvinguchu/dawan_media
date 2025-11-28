import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dawanmedia.com"),
  title: {
    default: "Dawan Media | Africa tells its story in its own voice",
    template: "%s | Dawan Media",
  },
  description:
    "An independent, multilingual media company redefining how the Horn of Africa is represented — through accurate, ethical, and African-led journalism. Headquartered in Mogadishu, Somalia.",
  keywords: [
    "Dawan Media",
    "African journalism",
    "Horn of Africa",
    "Somalia news",
    "Somali media",
    "African news",
    "independent journalism",
    "multilingual media",
    "Dawan Africa",
    "Dawan TV",
    "Bawaba Africa",
    "Mogadishu",
    "East Africa news",
    "Arabic news Africa",
  ],
  authors: [{ name: "Dawan Media", url: "https://dawanmedia.com" }],
  creator: "Dawan Media",
  publisher: "Dawan Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dawanmedia.com",
    siteName: "Dawan Media",
    title: "Dawan Media | Africa tells its story in its own voice",
    description:
      "An independent, multilingual media company redefining how the Horn of Africa is represented — through accurate, ethical, and African-led journalism.",
    images: [
      {
        url: "https://www.dawanmedia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dawan Media - African-led journalism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawan Media | Africa tells its story in its own voice",
    description:
      "An independent, multilingual media company redefining how the Horn of Africa is represented.",
    creator: "@dawan_tv",
    site: "@dawan_tv",
    images: ["https://www.dawanmedia.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.dawanmedia.com",
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-BSKRQK4KTW'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BSKRQK4KTW');
          `}
        </Script>
      </head>
      <body className={`${lora.className} antialiased`}>{children}</body>
    </html>
  );
}
