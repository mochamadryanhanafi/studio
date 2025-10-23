# 1. Tahap Instalasi Dependensi
FROM node:20-alpine AS deps
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package.json ./
# Menginstal dependensi
RUN npm install

# 2. Tahap Build
FROM node:20-alpine AS builder
WORKDIR /app
# Menyalin dependensi dari tahap sebelumnya
COPY --from=deps /app/node_modules ./node_modules
# Menyalin sisa kode aplikasi
COPY . .

# Membangun aplikasi Next.js
RUN npm run build

# 3. Tahap Produksi
FROM node:20-alpine AS runner
WORKDIR /app

# Mengatur lingkungan produksi
ENV NODE_ENV=production

# Menyalin output build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Menjalankan aplikasi
EXPOSE 9002
ENV PORT 9002

CMD ["node", "server.js"]
