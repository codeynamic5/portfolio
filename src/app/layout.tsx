// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Your Name - Full Stack Developer & Designer',
    template: '%s | Your Name Portfolio'
  },
  description: 'Full-stack developer and designer passionate about creating beautiful, functional digital experiences. View my projects, skills, and creative work.',
  keywords: ['full-stack developer', 'web developer', 'designer', 'portfolio', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Your Name - Full Stack Developer & Designer',
    description: 'Full-stack developer and designer passionate about creating beautiful, functional digital experiences.',
    siteName: 'Your Name Portfolio',
    images: [{
      url: 'https://yourportfolio.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Your Name Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer & Designer',
    description: 'Full-stack developer and designer passionate about creating beautiful, functional digital experiences.',
    images: ['https://yourportfolio.com/og-image.jpg'],
    creator: '@yourtwitterhandle'
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}