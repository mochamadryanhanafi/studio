import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Ryan Hanafi | Fullstack Developer Portfolio',
  description: 'Portfolio Mochamad Ryan Hanafi, seorang Fullstack Developer dengan keahlian di Backend, Cloud Computing, dan Machine Learning. Lihat proyek, sertifikasi, dan layanan yang ditawarkan.',
  keywords: ['Fullstack Developer', 'Backend Developer', 'Cloud Computing', 'Machine Learning', 'Next.js', 'React', 'Node.js', 'AWS', 'GCP', 'Portfolio', 'Mochamad Ryan Hanafi'],
  authors: [{ name: 'Mochamad Ryan Hanafi', url: 'https://www.linkedin.com/in/mochamad-ryan-hanafi' }],
  creator: 'Mochamad Ryan Hanafi',
  publisher: 'Mochamad Ryan Hanafi',
  verification: {
    google: 'XBCHQFoZi9LrlNfRJg4rNtBf9h92jB_eswLXYjNlljE',
  },
  openGraph: {
    title: 'Ryan Hanafi | Fullstack Developer Portfolio',
    description: 'Portfolio seorang Fullstack Developer yang bersemangat tentang Backend, Cloud, dan AI.',
    url: 'https://ryanhanafi.netlify.app',
    siteName: 'Ryan Hanafi Portfolio',
    images: [
      {
        url: 'https://ryanhanafi.netlify.app/og-image.png', // Ganti dengan URL gambar Open Graph Anda
        width: 1200,
        height: 630,
        alt: 'Mochamad Ryan Hanafi Portfolio',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Hanafi | Fullstack Developer Portfolio',
    description: 'Jelajahi portfolio Mochamad Ryan Hanafi, seorang developer dengan keahlian di backend, cloud, dan machine learning.',
    creator: '@mochamadryanh',
    images: ['https://ryanhanafi.netlify.app/twitter-image.png'], // Ganti dengan URL gambar Twitter Anda
  },
  icons: {
    icon: '/cloud-computing.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-body antialiased relative overflow-x-hidden">
        <div className="sun"></div>
        <div className="sun2"></div>
        <div className="sun3"></div>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
