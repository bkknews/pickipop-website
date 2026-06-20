import fs from 'fs';
import path from 'path';

function readAll() {
  const filePath = path.join(process.cwd(), 'products.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getProducts() {
  return readAll()
    .filter(p => p.active !== 'false' && p.active !== '0' && p.name)
;
}

export function getProductById(id) {
  return readAll().find(p => p.id === id) || null;
}
