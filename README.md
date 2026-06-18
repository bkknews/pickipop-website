# 🌸 Pickipop Shopping — คู่มือ Deploy

## ขั้นตอน Deploy บน Netlify

1. เปิด [netlify.com](https://netlify.com) → Log in หรือ Sign up
2. กดปุ่ม **"Add new site"** → **"Deploy manually"**
3. ลากโฟลเดอร์ `Pickipop Website` ทั้งโฟลเดอร์ไปวางในกล่อง
4. รอ 30 วินาที → เว็บขึ้นแล้ว! 🎉

---

## ตั้ง Google Sheets (CMS)

### สร้าง Spreadsheet
1. เปิด Google Sheets → สร้าง Sheet ใหม่
2. ตั้งชื่อ: `Pickipop Products`
3. แถวแรก (Header) ใส่คอลัมน์ตามนี้ทุกตัว:

| name | brand | category | price | shipping | deadline | arrival | badge | image_url | active |
|------|-------|----------|-------|----------|----------|---------|-------|-----------|--------|

### คอลัมน์อธิบาย
- `name` — ชื่อสินค้า
- `brand` — แบรนด์
- `category` — `skincare` / `fashion` / `food` / `kpop`
- `price` — ราคาสินค้า (ตัวเลขเท่านั้น เช่น `590`)
- `shipping` — ค่าส่ง (ตัวเลขเท่านั้น เช่น `150`)
- `deadline` — วันปิดรับออเดอร์ เช่น `5 ก.ค.`
- `arrival` — วันของถึง เช่น `25 ก.ค.`
- `badge` — ป้ายสั้นๆ เช่น `🔥 ขายดี` หรือ `ใหม่` (ว่างได้)
- `image_url` — link รูปจาก ImgBB
- `active` — `true` = แสดง / `false` = ซ่อน

### Publish เป็น CSV
1. **File → Share → Publish to web**
2. เลือก **Sheet1** → Format: **Comma-separated values (.csv)**
3. กด **Publish** → copy link ที่ได้

### วาง URL ใน index.html
เปิด `index.html` → หาบรรทัดนี้:
```js
const SHEET_URL = 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE';
```
แทนที่ด้วย link CSV ที่ copy มา

---

## อัปรูปสินค้า (ImgBB)

1. เปิด [imgbb.com](https://imgbb.com)
2. กดอัปโหลดรูป → copy **Direct link**
3. วางใน Sheets คอลัมน์ `image_url`

---

## ต้องแก้อะไรอีก
- [ ] วาง `logo.png` ในโฟลเดอร์นี้
- [ ] แก้ `SHEET_URL` ใน `index.html`
- [ ] แก้ URL ใน `sitemap.xml` ให้ตรงกับชื่อ Netlify จริง

---

## Domain ภายหลัง
ซื้อ `.com` ที่ [Namecheap](https://namecheap.com) ~300 บาท/ปี  
แล้วผูก domain ใน Netlify → Domain management
