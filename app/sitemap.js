import { getProducts } from '@/lib/products';

export default function sitemap() {
  const products = getProducts();
  return [
    {
      url: 'https://www.pickipop.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...products.map(p => ({
      url: `https://www.pickipop.com/product/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ];
}
