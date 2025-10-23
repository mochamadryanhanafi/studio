# Tahap 1: Builder
FROM node:18-alpine AS builder

# Mengatur direktori kerja
WORKDIR /app

# Menyalin package.json dan package-lock.json (atau yarn.lock)
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin sisa file aplikasi
COPY . .

# Membangun aplikasi
RUN npm run build

# Tahap 2: Runner
FROM node:18-alpine AS runner

WORKDIR /app

# Menambahkan pengguna non-root untuk keamanan
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Mengatur variabel lingkungan
ENV NODE_ENV=production

# Menyalin output build standalone
# Direktori public mungkin tidak ada jika tidak ada aset statis, jadi kita buat opsional
COPY --from=builder /app/public* ./public/
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mengatur pengguna
USER nextjs

# Mengekspos port
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "server.js"]
