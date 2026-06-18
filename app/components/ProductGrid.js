'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LINE_URL = 'https://line.me/ti/g2/xVjCTMP0kt9Nc64Nx1zXCM6TQCftgkxeypmqCg';

const CATS = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'skincare', label: '✨ สกินแคร์' },
  { key: 'fashion', label: '👗 แฟชั่น' },
  { key: 'food', label: '🍜 อาหาร' },
  { key: 'other', label: '🌟 อื่นๆ' },
];

export default function ProductGrid({ products }) {
  const [cat, setCat] = useState('all');

  const filtered = cat === 'all'
    ? products
    : products.filter(p => p.category === cat);

  return (
    <>
      <div className="filter-wrap">
        {CATS.map(c => (
          <button
            key={c.key}
            className={`filter-btn${cat === c.key ? ' active' : ''}`}
            onClick={() => setCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.length === 0 ? (
          <div className="state-box">
            <div className="icon">🛒</div>
            <p>ยังไม่มีสินค้าในหมวดนี้ — <a href={LINE_URL} target="_blank" style={{ color: 'var(--coral)' }}>ถามใน LINE</a> ได้เลย!</p>
          </div>
        ) : filtered.map(p => (
          <div key={p.id} className="product-card">
            <Link href={`/product/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="product-img-wrap">
                <Image
                  src={p.image_url || 'https://placehold.co/400x400/FFE4DC/FF8B6A?text=Pickipop'}
                  alt={p.name}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                />
                {p.badge && <span className="product-badge">{p.badge}</span>}
              </div>
              <div className="product-body">
                {p.brand && <div className="product-brand">{p.brand}</div>}
                <div className="product-name">{p.name}</div>
                <div className="product-price">
                  {p.price ? `${Number(p.price).toLocaleString()} ฿` : 'ติดต่อสอบถาม'}
                </div>
                <div className="product-meta">
                  {p.shipping && Number(p.shipping) > 0 && <span>🚢 ค่าส่ง {Number(p.shipping).toLocaleString()} ฿</span>}
                  {p.deadline && <span>⏰ ปิดรับ {p.deadline}</span>}
                  {p.arrival && <span>📦 ของถึง {p.arrival}</span>}
                </div>
              </div>
            </Link>
            <a className="product-cta" href={LINE_URL} target="_blank" rel="noopener">
              สั่งซื้อผ่าน LINE ✉️
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
