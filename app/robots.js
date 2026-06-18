export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.pickipop.com/sitemap.xml',
  };
}
