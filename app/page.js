import { getProducts } from '@/lib/products';
import ProductGrid from './components/ProductGrid';

const LINE_URL = 'https://line.me/ti/g2/xVjCTMP0kt9Nc64Nx1zXCM6TQCftgkxeypmqCg';

export const metadata = {
  alternates: { canonical: 'https://www.pickipop.com/' },
  openGraph: {
    url: 'https://www.pickipop.com/',
    title: 'Pickipop Shopping | Wiggle Wiggle ของแท้ + สกินแคร์เกาหลี',
    description: 'ร้าน Wiggle Wiggle ของแท้ 100% พร้อมสกินแคร์เกาหลี (MEDICUBE, BIODANCE) และแฟชั่นเกาหลี/ญี่ปุ่น ราคาดี ส่งตรงจากต้นทาง',
  },
};

export default function HomePage() {
  const products = getProducts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'OnlineStore',
            name: 'Pickipop Shopping',
            description: 'ร้าน Wiggle Wiggle ของแท้ 100% พร้อมสกินแคร์เกาหลี (MEDICUBE, BIODANCE) และแฟชั่นเกาหลี/ญี่ปุ่น',
            url: 'https://www.pickipop.com/',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              url: LINE_URL,
            },
          }),
        }}
      />

      <section className="hero">
        <div className="hero-badge">🇰🇷🇯🇵 ส่งตรงจากเกาหลี/ญี่ปุ่น</div>
        <h1>
          Wiggle Wiggle ของแท้ + สกินแคร์เกาหลี<br />
          <span>ราคาดี ของแท้ 100%</span>
        </h1>
        <p>Wiggle Wiggle, MEDICUBE, BIODANCE และแฟชั่นเกาหลี/ญี่ปุ่น สั่งง่าย แค่แชทใน LINE</p>
        <a className="hero-btn" href={LINE_URL} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 3.31 1.86 6.22 4.67 7.94L6 22l3.5-1.5c.79.22 1.62.34 2.5.34 5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
          </svg>
          เข้าร่วม LINE OpenChat
        </a>
      </section>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">✈️</div>
          <div className="feature-title">ส่งตรงจากต้นทาง</div>
          <div className="feature-desc">เกาหลี & ญี่ปุ่น ไม่ผ่านคนกลาง</div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💎</div>
          <div className="feature-title">ของแท้ 100%</div>
          <div className="feature-desc">รับประกันสินค้าทุกชิ้น</div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <div className="feature-title">สั่งง่ายผ่าน LINE</div>
          <div className="feature-desc">แชทได้ตลอดเวลา</div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏷️</div>
          <div className="feature-title">ราคาคุ้มค่า</div>
          <div className="feature-desc">เทียบราคาจากต้นทางตรง</div>
        </div>
      </div>

      <div className="section-header">
        <h2>🛍️ สินค้าพรีออเดอร์</h2>
        <p>อัปเดตสินค้าใหม่ทุกสัปดาห์</p>
      </div>

      <ProductGrid products={products} />

      <footer>
        <div className="footer-logo">Pickipop Shopping</div>
        <p>
          Wiggle Wiggle ของแท้ 100% สกินแคร์เกาหลี แฟชั่นเกาหลี/ญี่ปุ่น ส่งตรงจากต้นทาง<br />
          <a href={LINE_URL} target="_blank" rel="noopener">LINE OpenChat</a>
          {' | '}
          © 2025 Pickipop Shopping
        </p>
      </footer>
    </>
  );
}
