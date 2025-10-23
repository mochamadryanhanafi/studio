# Dockerfile

# Tahap 1: Builder
# Menggunakan image Node.js versi 18 sebagai dasar
FROM node:18-alpine AS builder

# Mengatur direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh kode aplikasi
COPY . .

# Membangun aplikasi Next.js
RUN npm run build

# Tahap 2: Runner
# Menggunakan image Node.js versi 18 yang lebih ringan
FROM node:18-alpine AS runner

WORKDIR /app

# Membuat user dan grup non-root untuk keamanan
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Mengatur environment variable untuk produksi
ENV NODE_ENV=production

# Menyalin output build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mengubah kepemilikan direktori ke user non-root
USER nextjs

# Mengekspos port yang digunakan oleh Next.js
EXPOSE 3000

# Menentukan perintah untuk menjalankan aplikasi
CMD ["node", "server.js"]
