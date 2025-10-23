# Panduan Deploy ke Google Cloud Run

Dokumen ini menjelaskan cara men-deploy aplikasi Next.js ini ke Google Cloud Run menggunakan Docker.

## Prasyarat

Sebelum memulai, pastikan Anda telah memenuhi persyaratan berikut:

1.  **Google Cloud SDK (gcloud CLI)**: [Instal dan konfigurasikan](https://cloud.google.com/sdk/docs/install) gcloud CLI.
2.  **Docker**: [Instal Docker Desktop](https://www.docker.com/products/docker-desktop/) di mesin lokal Anda.
3.  **Project Google Cloud**: Siapkan [project Google Cloud](https://console.cloud.google.com/projectcreate) dengan penagihan (billing) yang telah diaktifkan.
4.  **Aktifkan API**: Pastikan **Artifact Registry API** dan **Cloud Run Admin API** telah diaktifkan untuk project Anda. Anda dapat mengaktifkannya dengan perintah:
    ```bash
    gcloud services enable artifactregistry.googleapis.com run.googleapis.com
    ```

## Langkah-langkah Deployment

### 1. Konfigurasi gcloud CLI

Atur project Google Cloud Anda dan konfigurasikan Docker untuk melakukan autentikasi dengan Artifact Registry.

```bash
# Ganti [PROJECT_ID] dengan ID project Google Cloud Anda
export PROJECT_ID=[PROJECT_ID]

# Set project gcloud
gcloud config set project $PROJECT_ID

# Konfigurasi Docker
gcloud auth configure-docker us-central1-docker.pkg.dev
```

### 2. Buat Repositori Artifact Registry

Buat repositori Docker di Artifact Registry untuk menyimpan image Docker Anda.

```bash
# Ganti [REPOSITORY_NAME] dengan nama repositori Anda (misalnya: 'my-portfolio-repo')
export REPOSITORY=[REPOSITORY_NAME]
export REGION=us-central1

gcloud artifacts repositories create $REPOSITORY \
  --repository-format=docker \
  --location=$REGION \
  --description="Docker repository for my portfolio"
```

### 3. Bangun (Build) dan Tag Image Docker

Bangun image Docker dari `Dockerfile` yang ada di proyek Anda dan berikan tag yang sesuai.

```bash
# Ganti [IMAGE_NAME] dengan nama image Anda (misalnya: 'portfolio-app')
export IMAGE_NAME=[IMAGE_NAME]
export IMAGE_TAG=${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE_NAME}:latest

# Bangun image Docker
docker build -t $IMAGE_TAG .
```

### 4. Unggah (Push) Image Docker

Unggah image yang sudah Anda bangun ke Artifact Registry.

```bash
docker push $IMAGE_TAG
```

### 5. Deploy ke Google Cloud Run

Deploy image Anda dari Artifact Registry ke Google Cloud Run.

```bash
# Ganti [SERVICE_NAME] dengan nama layanan Cloud Run Anda (misalnya: 'my-portfolio-service')
export SERVICE_NAME=[SERVICE_NAME]

gcloud run deploy $SERVICE_NAME \
  --image=$IMAGE_TAG \
  --platform=managed \
  --region=$REGION \
  --allow-unauthenticated
```

Setelah perintah ini selesai, gcloud CLI akan memberikan URL layanan Anda yang sudah berjalan. Anda dapat mengakses aplikasi Anda melalui URL tersebut.

Selamat! Aplikasi Next.js Anda sekarang sudah berhasil di-deploy ke Google Cloud Run.
