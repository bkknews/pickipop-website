import { getProducts, getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductGallery from '@/app/components/ProductGallery';

const LINE_URL = 'https://line.me/ti/g2/xVjCTMP0kt9Nc64Nx1zXCM6TQCftgkxeypmqCg';

export async function generateStaticParams() {
  return getProducts().map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const p = getProductById(params.id);
  if (!p) return {};

  const desc = `${p.name}${p.brand ? ' | ' + p.brand : ''} ราคา ${Number(p.price).toLocaleString()} บาท${p.description?.length ? ' | ' + p.description[0] : ''} | สั่งซื้อได้ที่ Pickipop`;
  const url = `https://www.pickipop.com/product/${p.id}`;
  const images = p.images?.length ? p.images : [p.image_url];

  return {
    title: p.name,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.name} — Pickipop Shopping`,
      description: desc,
      url,
      images: images.map(img => ({ url: img })),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.name} — Pickipop Shopping`,
      description: desc,
      images: [images[0]],
    },
  };
}

export default function ProductPage({ params }) {
  const p = getProductById(params.id);
  if (!p) notFound();

  const images = p.images?.length ? p.images : [p.image_url];
  const url = `https://www.pickipop.com/product/${p.id}`;

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: p.name,
    image: images,
    description: p.description?.join(' ') || p.name,
    brand: { '@type': 'Brand', name: p.brand || 'Pickipop' },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'THB',
      price: p.price,
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Pickipop' },
    },
  };

  const hasSizeChart = p.size_chart && Object.keys(p.size_chart.measurements || {}).length > 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="breadcrumb">
        <Link href="/">หน้าแรก</Link>
        {' › '}
        <Link href={`/?cat=${p.category || 'all'}`}>{p.brand || 'สินค้า'}</Link>
        {' › '}
        {p.name}
      </div>

      <div className="product-wrap">
        <ProductGallery images={images} name={p.name} badge={p.badge} />

        <div className="product-info">
          {p.brand && <div className="product-brand-lg">{p.brand}</div>}
          <div className="product-name-lg">{p.name}</div>

          <div>
            <div className="product-price-lg">{Number(p.price).toLocaleString()} ฿</div>
            <div className="product-price-note">ราคารวมทุกอย่างแล้ว ไม่มีค่าส่งเพิ่ม</div>
          </div>

          {p.deadline && (
            <div><span className="deadline-badge">⏰ ปิดรับออเดอร์ {p.deadline}</span></div>
          )}

          <div className="divider" />

          {p.description?.length > 0 && (
            <div className="info-row">
              <div className="info-label">รายละเอียดสินค้า</div>
              <ul className="desc-list">
                {p.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          )}

          <div className="specs-box">
            {p.material && (
              <div className="spec-row">
                <span className="spec-key">วัสดุ</span>
                <span className="spec-val">{p.material}</span>
              </div>
            )}
            {p.colors && (
              <div className="spec-row">
                <span className="spec-key">สี</span>
                <span className="spec-val">{p.colors}</span>
              </div>
            )}
            {p.made_in && (
              <div className="spec-row">
                <span className="spec-key">ผลิตที่</span>
                <span className="spec-val">{p.made_in}</span>
              </div>
            )}
          </div>

          {hasSizeChart && (
            <div className="info-row">
              <div className="info-label">ตารางไซส์ ({p.size_chart.unit})</div>
              <div className="size-chart-wrap">
                <table className="size-table">
                  <thead>
                    <tr>
                      <th></th>
                      {p.size_chart.sizes.map(s => <th key={s}>{s}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(p.size_chart.measurements).map(([key, vals]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        {vals.map((v, i) => <td key={i}>{v}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {p.model_info && (
                <div className="model-info">{p.model_info.join(' · ')}</div>
              )}
            </div>
          )}

          <div className="divider" />

          <div className="cta-wrap">
            <a className="btn-line-lg" href={LINE_URL} target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.31 1.86 6.22 4.67 7.94L6 22l3.5-1.5c.79.22 1.62.34 2.5.34 5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
              </svg>
              สั่งซื้อผ่าน LINE OpenChat
            </a>
            <div className="cta-note">แจ้งชื่อสินค้า รุ่น และไซส์ที่ต้องการในแชท</div>
          </div>
        </div>
      </div>
    </>
  );
}
