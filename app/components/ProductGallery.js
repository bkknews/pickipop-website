'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, name, badge }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="gallery">
      <div className="main-img-wrap">
        <Image
          src={images[current]}
          alt={`${name} - รูปภาพสินค้า | Pickipop`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
        {badge && <span className="product-badge-lg">{badge}</span>}
      </div>

      {images.length > 1 && (
        <div className="thumb-row">
          {images.map((img, i) => (
            <div
              key={i}
              className={`thumb${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
            >
              <Image
                src={img}
                alt={`${name} รูปที่ ${i + 1} | Pickipop`}
                fill
                sizes="72px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
