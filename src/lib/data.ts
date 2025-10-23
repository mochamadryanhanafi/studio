import { placeholderImages } from './placeholder-images.json';
import EthersJSIcon from '@/components/icons/ethers-js-icon';
import { Code, Server, Database, GitBranch, PenTool, Wind, Layers, Settings, Puzzle, Cpu, Cloud, Terminal } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  detailImageUrls: string[];
  projectContext: string;
  keywords: string;
  link: string;
  github: string;
};

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  imageUrl: string;
  imageHint: string;
  link: string;
};

export type GalleryImage = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

export type Skill = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export type TimelineItem = {
    title: string;
    company: string;
    date: string;
    description: string;
    type: 'work' | 'education';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A futuristic web platform for decentralized applications.",
    imageUrl: placeholderImages[0].imageUrl,
    imageHint: placeholderImages[0].imageHint,
    detailImageUrls: [placeholderImages[4].imageUrl, placeholderImages[5].imageUrl],
    projectContext: "Project Alpha is a cutting-edge platform built with Next.js and Solidity, aimed at revolutionizing dApp interactions.",
    keywords: "web3, blockchain, decentralized, react, nextjs",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "A sleek mobile application for seamless asset management.",
    imageUrl: placeholderImages[1].imageUrl,
    imageHint: placeholderImages[1].imageHint,
    detailImageUrls: [placeholderImages[6].imageUrl],
    projectContext: "Project Beta is a native mobile app for iOS and Android that allows users to track and manage their digital assets in real-time.",
    keywords: "mobile, finance, asset management, react native",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "An interactive data visualization dashboard for market trends.",
    imageUrl: placeholderImages[2].imageUrl,
    imageHint: placeholderImages[2].imageHint,
    detailImageUrls: [placeholderImages[7].imageUrl, placeholderImages[8].imageUrl],
    projectContext: "Project Gamma uses D3.js and React to create dynamic and interactive charts that help users understand complex market data.",
    keywords: "data, visualization, d3, react, dashboard",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "A complete branding and identity design for a tech startup.",
    imageUrl: placeholderImages[3].imageUrl,
    imageHint: placeholderImages[3].imageHint,
    detailImageUrls: [placeholderImages[9].imageUrl],
    projectContext: "The Project Delta branding project involved creating a unique visual identity, including logo, color palette, and typography, for a new AI startup.",
    keywords: "branding, design, logo, identity, marketing",
    link: "#",
    github: "#",
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
    imageUrl: placeholderImages[10].imageUrl,
    imageHint: placeholderImages[10].imageHint,
    link: "#",
  },
  {
    id: 2,
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2022",
    imageUrl: placeholderImages[11].imageUrl,
    imageHint: placeholderImages[11].imageHint,
    link: "#",
  },
];

export const skills: Skill[] = [
  { name: "Express JS", icon: Server },
  { name: "Golang", icon: Code },
  { name: "AWS", icon: Cloud },
  { name: "GCP", icon: Cloud },
  { name: "Next JS", icon: Code },
  { name: "REST API", icon: GitBranch },
  { name: "Python", icon: Code },
  { name: "Linux", icon: Terminal },
  { name: "Laravel", icon: Code },
  { name: "Docker", icon: Layers },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "TensorFlow", icon: Cpu },
];

export const galleryImages: GalleryImage[] = placeholderImages.slice(12);

export const workExperience: TimelineItem[] = [
    {
        title: "Management Information System Intern",
        company: "PT YAMAHA MUSICAL PRODUCTS INDONESIA",
        date: "Agustus – Present",
        description: "Developed an object detection model to monitor missing items such as stationery, utilizing over 1,800 datasets and more than 100,000 labels. Built a web application using Laravel with an efficient and easily manageable MySQL database. Added 8 new features within two months to enhance the efficiency of the company’s internal systems. Collaborated across multiple divisions to understand operational needs and implement effective solutions for manufacturing processes.",
        type: 'work'
    },
    {
        title: "Backend Developer",
        company: "PT KITA BANTU Indonesia",
        date: "Mei – Juli 2025",
        description: "Developed mobile application APIs using Laravel. Implemented Clean Architecture principles to build structured, maintainable, and scalable API services. Integrated a message broker (RabbitMQ) to enable efficient data communication across platforms. Collaborated with web and mobile teams to develop and enhance backend features for the payment system.",
        type: 'work'
    },
    {
        title: "Fullstack Developer",
        company: "PT Winnicode Garuda Teknologi",
        date: "Januari– Juni 2025",
        description: "Built a news portal application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Developed a secure backend by implementing safeguards against common web attacks such as XSS filtering, CORS policies, and rate limiting. Integrated Redis and session cookies to enhance page loading speed and overall application performance. Designed and implemented a user-friendly frontend interface with a unique layout that distinguishes it from traditional news portals. Deployed the news portal application using Google Cloud Run on the Google Cloud Platform (GCP).",
        type: 'work'
    },
    {
        title: "Backend Developer",
        company: "Café Dewi Pandawa",
        date: "September - Decemeber 2024",
        description: "Developed a JWT authentication feature with bcrypt encryption to ensure secure user login. Integrated a machine learning model and Firebase Firestore into the application for data storage and analysis. Deployed the application using Google Cloud Run, ensuring stable and scalable performance. Collected over 400 manually annotated datasets and trained the model using TensorFlow Lite to improve detection accuracy. Actively collaborated with team members for 4 months to ensure smooth and effective model development and integration. Successfully integrated the machine learning model with the website and Firestore database for seamless data management",
        type: 'work'
    }
];

export const education: TimelineItem[] = [
    {
        title: "Bachelor of Science in Computer Science",
        company: "University of Technology",
        date: "2015 - 2019",
        description: "Focused on software engineering, algorithms, and artificial intelligence. Graduated with honors.",
        type: 'education'
    },
    {
        title: "High School Diploma",
        company: "Science High School",
        date: "2012 - 2015",
        description: "Specialized in mathematics and physics, laying a strong foundation for a career in technology.",
        type: 'education'
    }
]
