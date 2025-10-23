# Dockerfile

# Tahap 1: Builder
# -----------------
FROM node:18-alpine AS base

# Instal dependensi yang diperlukan untuk build
RUN apk add --no-cache libc6-compat

# Atur direktori kerja
WORKDIR /app

# Menyalin file package.json dan lockfile
COPY package*.json ./

# Tahap 2: Dependensi Produksi
# ----------------------------
FROM base AS prod-deps
# Instal hanya dependensi produksi
RUN npm install --omit=dev --ignore-scripts


# Tahap 3: Builder
# ----------------
FROM base AS builder
# Salin dependensi dev
COPY --from=prod-deps /app/node_modules /app/node_modules
# Instal semua dependensi
RUN npm install

# Menyalin sisa file aplikasi
COPY . .

# Bangun aplikasi Next.js
RUN npm run build


# Tahap 4: Runner (Produksi)
# ---------------------------
FROM node:18-alpine AS runner
WORKDIR /app

# Membuat pengguna dan grup non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set variabel lingkungan
ENV NODE_ENV=production

# Menyalin output build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mengatur pengguna
USER nextjs

# Expose port yang digunakan aplikasi
EXPOSE 3000

# Menjalankan aplikasi
CMD ["node", "server.js"]
