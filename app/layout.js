import { Kanit, Noto_Sans_Thai } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-9SRZTT3KCH';

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-kanit',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600'],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.pickipop.com'),
  title: {
    default: 'Pickipop Shopping | Wiggle Wiggle ของแท้ 100% + สกินแคร์เกาหลี ราคาดี',
    template: '%s — Pickipop Shopping',
  },
  description: 'Pickipop Shopping ร้าน Wiggle Wiggle ของแท้ 100% พร้อมสกินแคร์เกาหลี (MEDICUBE, BIODANCE) และแฟชั่นเกาหลี/ญี่ปุ่น ส่งตรงจากต้นทาง สั่งง่ายผ่าน LINE',
  keywords: ['wiggle wiggle', 'wiggle wiggle ไทย', 'wiggle wiggle ของแท้', 'พรีออเดอร์เกาหลี', 'สกินแคร์เกาหลี', 'medicube', 'biodance', 'แฟชั่นเกาหลี', 'Pickipop'],
  openGraph: {
    siteName: 'Pickipop Shopping',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    google: 'YtswhUD1ovZTYiJXsdgBjyQgQQrPkj9anEeq32',
  },
};

const LINE_URL = 'https://line.me/ti/g2/xVjCTMP0kt9Nc64Nx1zXCM6TQCftgkxeypmqCg';

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${kanit.variable} ${notoSansThai.variable}`}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body>
        <nav>
          <Link className="nav-logo" href="/">
            <Image src="/logo.jpg" alt="Pickipop Logo" width={44} height={44} style={{ borderRadius: '50%', objectFit: 'contain' }} />
            <span className="nav-logo-text">Pickipop</span>
          </Link>
          <a className="nav-line-btn" href={LINE_URL} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2C6.48 2 2 6.04 2 11c0 3.31 1.86 6.22 4.67 7.94L6 22l3.5-1.5c.79.22 1.62.34 2.5.34 5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
            </svg>
            สั่งซื้อ LINE
          </a>
        </nav>

        {children}

        <a className="line-float" href={LINE_URL} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 3.31 1.86 6.22 4.67 7.94L6 22l3.5-1.5c.79.22 1.62.34 2.5.34 5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
          </svg>
          <span>สั่งซื้อ LINE</span>
        </a>
      </body>
    </html>
  );
}
