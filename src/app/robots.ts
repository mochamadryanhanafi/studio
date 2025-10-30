import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Ganti 'https://your-domain.com' dengan URL domain production Anda
  const baseUrl = 'https://your-domain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh jika ada halaman private yang tidak ingin di-crawl
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}