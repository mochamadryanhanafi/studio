import { placeholderImages } from './placeholder-images.json';
import EthersJSIcon from '@/components/icons/ethers-js-icon';
import { Code, Server, Database, GitBranch, PenTool, Wind, Layers, Settings, Puzzle, Cpu } from 'lucide-react';

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
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "GraphQL", icon: GitBranch },
  { name: "Solidity", icon: Cpu },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Layers },
  { name: "Figma", icon: PenTool },
  { name: "UI/UX Design", icon: Puzzle },
  { name: "Web3", icon: Wind },
  { name: "Ethers.js", icon: EthersJSIcon },
];

export const galleryImages: GalleryImage[] = placeholderImages.slice(12);