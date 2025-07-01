import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Seimbang.in - Smart Money, Balanced Journey',
    template: '%s | Seimbang.in'
  },
  description: 'Seimbang.in membantu kamu mengelola keuangan dengan mudah, cerdas, dan tetap fun. Satu aplikasi, semua solusi finansial. Mulai gratis sekarang!',
  keywords: ['keuangan', 'fintech', 'budgeting', 'investasi', 'tabungan', 'aplikasi keuangan', 'manajemen uang'],
  authors: [{ name: 'Seimbang.in Team' }],
  creator: 'Seimbang.in',
  publisher: 'Seimbang.in',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seimbangin.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://seimbangin.site',
    title: 'Seimbang.in - Smart Money, Balanced Journey',
    description: 'Seimbang.in membantu kamu mengelola keuangan dengan mudah, cerdas, dan tetap fun. Satu aplikasi, semua solusi finansial.',
    siteName: 'Seimbang.in',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Seimbang.in - Smart Money, Balanced Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seimbang.in - Smart Money, Balanced Journey',
    description: 'Seimbang.in membantu kamu mengelola keuangan dengan mudah, cerdas, dan tetap fun.',
    images: ['/og-image.png'],
    creator: '@seimbangin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0FSJJZV93J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0FSJJZV93J', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        <Script
          type="application/ld+json"
          id="structured-data"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Seimbang.in",
            "url": "https://seimbangin.site",
            "logo": "https://seimbangin.site/logo.png",
            "description": "Seimbang.in membantu kamu mengelola keuangan dengan mudah, cerdas, dan tetap fun.",
            "sameAs": [
              "https://twitter.com/seimbangin",
              "https://instagram.com/seimbangin"
            ]
          })}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* GLOBAL BACKGROUND DESIGN - improved */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
          {/* Layer 1: Soft main gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-[#0a183d] dark:via-[#10151a] dark:to-[#0e1a17]" />
          {/* Overlay to soften background and prevent color clash */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50/80 via-indigo-50/70 to-purple-50/70 dark:from-blue-900/60 dark:via-indigo-900/50 dark:to-purple-900/50" />
          {/* Layer 2: Top left blob */}
          <svg className="absolute left-[-35vw] top-[-18vh] w-[60vw] h-[40vw] opacity-60 blur-2xl animate-blob1" viewBox="0 0 700 500" fill="none">
            <ellipse cx="350" cy="250" rx="350" ry="200" fill="url(#bg1)" />
            <defs>
              <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
          </svg>
          {/* Layer 3: Top right pink-peach blob */}
          <svg className="absolute right-[-32vw] top-[-16vh] w-[38vw] h-[30vw] opacity-50 blur-2xl animate-blob2" viewBox="0 0 500 350" fill="none">
            <ellipse cx="250" cy="175" rx="250" ry="140" fill="url(#bg2)" />
            <defs>
              <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f9a8d4" />
                <stop offset="1" stopColor="#fcd34d" />
              </linearGradient>
            </defs>
          </svg>
          {/* Layer 4: Bottom left yellow blob */}
          <svg className="absolute left-[-28vw] bottom-[-14vh] w-[32vw] h-[24vw] opacity-30 blur-3xl animate-blob3" viewBox="0 0 400 300" fill="none">
            <ellipse cx="200" cy="150" rx="200" ry="120" fill="url(#bg3)" />
            <defs>
              <radialGradient id="bg3" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                <stop stopColor="#fef9c3" stopOpacity="0.7" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          {/* Layer 5: Bottom right blue-teal blob */}
          <svg className="absolute right-[-28vw] bottom-[-16vh] w-[38vw] h-[28vw] opacity-40 blur-2xl animate-blob4" viewBox="0 0 550 350" fill="none">
            <ellipse cx="275" cy="175" rx="275" ry="140" fill="url(#bg4)" />
            <defs>
              <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#5eead4" />
              </linearGradient>
            </defs>
          </svg>
          {/* Layer 6: Radial highlight center */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-2xl" />
        </div>
        <ThemeProvider defaultTheme="system" storageKey="seimbang-theme">
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
