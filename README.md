# Cloud POS System - Dunia Kobar

Modern cloud-based Point of Sale system menggantikan iPOS 5 dengan real-time synchronization, multi-device support, dan integrasi Supabase.

## 🚀 Features

### Core POS
- ✅ Scan Barcode Real-time
- ✅ Multi-Payment (Cash, Transfer, QRIS)
- ✅ Thermal Printer Integration
- ✅ Hold & Resume Transaksi
- ✅ Retur Penjualan
- ✅ Diskon & Pajak Dinamis

### Inventory Management
- ✅ Stok Masuk/Keluar/Opname
- ✅ Transfer Stok Antar Lokasi
- ✅ Adjustment & Reconciliation
- ✅ History Pergerakan Stok

### Business Features
- ✅ Customer Management & Member
- ✅ Point Reward System
- ✅ Purchase Order & Hutang Supplier
- ✅ Customer Hutang/Piutang Tracking
- ✅ Dashboard Owner dengan Analytics

### Migration
- ✅ Import dari iPOS 5 (.i5bu)
- ✅ Data Validation & Rollback
- ✅ Error Logging & Recovery

## 📋 Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | NestJS + TypeScript |
| **Frontend** | Next.js 14 + React 18 |
| **Mobile** | Flutter |
| **Database** | PostgreSQL (Supabase) |
| **Cache** | Redis |
| **Real-time** | Supabase Realtime |
| **Storage** | Supabase Storage |
| **Auth** | Supabase Auth + JWT |
| **Containerization** | Docker |
| **Deployment** | Linux VPS |

## 📁 Project Structure

```
pos-dunia-kobar/
├── backend/                    # NestJS Backend
│   ├── src/
│   │   ├── auth/              # Authentication Module
│   │   ├── common/            # Shared resources
│   │   ├── modules/           # Feature modules
│   │   │   ├── pos/           # POS Transactions
│   │   │   ├── inventory/     # Inventory Management
│   │   │   ├── customer/      # Customer Management
│   │   │   ├── supplier/      # Supplier Management
│   │   │   ├── product/       # Product Master
│   │   │   ├── dashboard/     # Analytics
│   │   │   └── migration/     # iPOS 5 Migration
│   │   ├── database/
│   │   │   ├── entities/      # TypeORM/Prisma Entities
│   │   │   ├── migrations/    # DB Migrations
│   │   │   └── seeds/         # Initial Data
│   │   ├── config/            # Configuration Files
│   │   └── main.ts
│   ├── test/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── .env.example
│   └── package.json
│
├── frontend/                   # Next.js Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── (auth)/
│   │   │   ├── (dashboard)/
│   │   │   └── (pos)/
│   │   ├── components/
│   │   │   ├── ui/            # Reusable UI Components
│   │   │   ├── layouts/
│   │   │   ├── forms/
│   │   │   └── pos/           # POS Specific Components
│   │   ├── lib/
│   │   │   ├── api/           # API Client
│   │   │   ├── supabase/      # Supabase Client
│   │   │   ├── hooks/         # Custom Hooks
│   │   │   └── utils/
│   │   ├── styles/
│   │   └── types/
│   ├── public/
│   ├── Dockerfile
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── .env.example
│   └── package.json
│
├── mobile/                     # Flutter Mobile App
│   ├── lib/
│   │   ├── main.dart
│   │   ├── config/
│   │   ├── models/
│   │   ├── providers/
│   │   ├── screens/
│   │   ├── widgets/
│   │   └── services/
│   ├── android/
│   ├── ios/
│   ├── pubspec.yaml
│   └── .env.example
│
├── docs/                       # Documentation
│   ├── API.md                 # API Documentation
│   ├── ARCHITECTURE.md        # System Architecture
│   ├── DATABASE.md            # Database Schema & ERD
│   ├── MIGRATION.md           # iPOS 5 Migration Guide
│   ├── DEPLOYMENT.md          # Production Deployment
│   ├── SECURITY.md            # Security Best Practices
│   ├── BACKUP.md              # Backup & Recovery
│   └── ROADMAP.md             # Development Roadmap
│
├── .github/
│   ├── workflows/
│   │   ├── ci-backend.yml
│   │   ├── ci-frontend.yml
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
│
├── docker-compose.yml         # Local Development
├── docker-compose.prod.yml    # Production
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
└── LICENSE
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL (via Supabase)
- Redis

### 1. Clone & Setup
```bash
git clone https://github.com/mrx05549-creator/pos-dunia-kobar.git
cd pos-dunia-kobar
git checkout develop

# Copy environment
cp .env.example .env.local
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run migration:run
npm run seed
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Using Docker
```bash
docker-compose up -d
```

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Architecture Design](./docs/ARCHITECTURE.md)
- [iPOS 5 Migration](./docs/MIGRATION.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Security Best Practices](./docs/SECURITY.md)
- [Backup Strategy](./docs/BACKUP.md)
- [Development Roadmap](./docs/ROADMAP.md)

## 🔐 Security

- JWT-based Authentication
- Role-Based Access Control (RBAC)
- Encrypted Sensitive Data
- Rate Limiting
- Input Validation & Sanitization
- CORS Configuration
- HTTPS Only
- Regular Security Audits

## 📊 Deployment

### Development
```bash
docker-compose -f docker-compose.yml up
```

### Staging
```bash
docker-compose -f docker-compose.staging.yml up
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up
```

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed guide.

## 🔄 Real-time Sync

- **Supabase Realtime**: Multi-device synchronization
- **Offline Mode**: Automatic cache & sync
- **Conflict Resolution**: Last-write-wins strategy
- **Background Sync**: WebWorkers untuk frontend

## 📱 Multi-Device Support

- ✅ Android (Flutter)
- ✅ PC/Laptop (Next.js Web)
- ✅ Browser (Responsive Design)
- ✅ Tablet Support

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT

## 📞 Support

- Issues: [GitHub Issues](https://github.com/mrx05549-creator/pos-dunia-kobar/issues)
- Documentation: [./docs](./docs)

---

**Last Updated**: May 28, 2026
**Version**: 1.0.0-dev
**Status**: 🔨 In Development
