# 📋 Panduan Setup POS Dunia Kobar

Panduan lengkap untuk setup dan menjalankan POS Dunia Kobar di lokal Anda.

## 📋 Prasyarat

Pastikan Anda sudah install:
- **Node.js** (v14+) - Download: https://nodejs.org/
- **Git** - Download: https://git-scm.com/
- **Code Editor** (VS Code recommended) - Download: https://code.visualstudio.com/

## 🚀 Cara Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/mrx05549-creator/pos-dunia-kobar.git
cd pos-dunia-kobar
```

### 2. Install Dependencies
```bash
npm install
```

Tunggu sampai selesai (akan download semua package yang diperlukan).

### 3. Jalankan Server
```bash
npm start
```

Atau untuk development mode (auto-reload):
```bash
npm run dev
```

Output yang muncul:
```
🚀 POS Dunia Kobar server running on http://localhost:3000
📊 API docs: http://localhost:3000/api
```

### 4. Buka di Browser
- **PC**: Buka `http://localhost:3000`
- **Android**: Gunakan IP lokal PC (cek dengan `ipconfig` di Windows atau `ifconfig` di Linux)
  - Contoh: `http://192.168.1.100:3000`

## 📁 Struktur Project

```
pos-dunia-kobar/
├── backend/
│   ├── server.js          # Main server file
│   └── ...
├── frontend/
│   ├── index.html         # Main UI
│   ├── css/
│   │   └── style.css      # Styling
│   ├── js/
│   │   ├── app.js         # Main logic
│   │   ├── transaction.js # Transaksi logic
│   │   ├── product.js     # Produk management
│   │   └── report.js      # Laporan logic
│   └── manifest.json      # PWA config
├── database/
│   ├── pos.db            # SQLite database (created automatically)
│   └── schema.sql        # Database schema
├── docs/
│   └── ...               # Documentation
├── package.json          # Dependencies
└── README.md            # Project info
```

## 🔧 Konfigurasi

### Environment Variables
Copy `.env.example` ke `.env` dan sesuaikan:
```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=3000
NODE_ENV=development
DB_PATH=./database/pos.db
```

## 📚 Fitur Utama

### 1. Transaksi (💳)
- Input barang dengan pilih dari daftar produk
- Atur jumlah barang
- Lihat keranjang real-time
- Diskon otomatis
- Metode pembayaran (Tunai, Kartu, Transfer, Lainnya)
- Print struk

### 2. Produk (📦)
- Tambah produk baru
- Edit produk
- Hapus produk
- Lihat stok
- Kategori produk

### 3. Laporan (📊)
- Laporan penjualan harian
- Total transaksi
- Total penjualan
- Total item terjual
- Print laporan

### 4. Pengaturan (⚙️)
- Backup data
- Restore data

## 🌐 Akses dari Android

### Metode 1: Via WiFi Lokal (Rekomendasi)
1. **Cari IP lokal PC:**
   - Windows: Buka Command Prompt, ketik `ipconfig`, cari "IPv4 Address"
   - Linux/Mac: Buka Terminal, ketik `ifconfig`, cari "inet"

2. **Buka di Android:**
   - Browser → ketik `http://[IP_PC]:3000`
   - Contoh: `http://192.168.1.100:3000`

3. **Install sebagai App:**
   - Chrome → Menu → "Install app" atau "Add to Home Screen"

### Metode 2: Via USB Debugging
Gunakan tools seperti ngrok atau adb untuk forward port.

## 📝 API Documentation

### Endpoints

#### Products
```
GET    /api/products           - Get all products
GET    /api/products/:id       - Get single product
POST   /api/products           - Create product
PUT    /api/products/:id       - Update product
DELETE /api/products/:id       - Delete product
```

#### Transactions
```
POST   /api/transactions       - Create transaction
GET    /api/transactions/:id   - Get transaction details
```

#### Reports
```
GET    /api/reports/daily?date=YYYY-MM-DD - Get daily report
```

## 🐛 Troubleshooting

### Error: "Cannot find module"
**Solusi:**
```bash
npm install
```

### Error: "Port 3000 already in use"
**Solusi 1:** Gunakan port lain
```bash
PORT=3001 npm start
```

**Solusi 2:** Kill process yang menggunakan port 3000
- Windows: `netstat -ano | findstr :3000` lalu `taskkill /PID [PID] /F`
- Linux: `lsof -ti:3000 | xargs kill -9`

### Android tidak bisa akses
- Pastikan PC dan Android di WiFi yang sama
- Pastikan firewall tidak memblokir port 3000
- Cek IP lokal dengan benar
- Ping dari Android: `ping [IP_PC]`

### Database error
- Pastikan folder `database/` ada
- Delete `database/pos.db` untuk reset (data akan hilang!)
- Run server lagi, database akan dibuat otomatis

## 📱 Mobile Optimization

POS ini sudah responsive untuk mobile:
- Layout otomatis menyesuaikan screen size
- Tombol besar untuk tap mudah
- Font readable
- PWA support (bisa install seperti app native)

## 🔒 Keamanan (Production)

Sebelum deploy ke production:
- [ ] Ganti `CORS_ORIGIN` di `.env`
- [ ] Setup HTTPS
- [ ] Gunakan PostgreSQL bukan SQLite
- [ ] Setup authentication/login
- [ ] Setup environment variables dengan aman
- [ ] Backup database secara berkala

## 📞 Support & Help

Jika ada masalah:
1. Cek console browser (F12 → Console)
2. Cek terminal server untuk error messages
3. Cek file `package.json` apakah semua dependencies terinstall
4. Hubungi developer untuk bantuan lebih lanjut

## 🎉 Selesai!

Selamat! POS Dunia Kobar sudah siap digunakan. 

Mulai:
1. **Input Produk** di menu Produk
2. **Buat Transaksi** di menu Transaksi
3. **Lihat Laporan** di menu Laporan

Enjoy! 🚀
