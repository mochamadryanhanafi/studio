
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
    title: "CleanEat",
    description: "Real-Time Cloud-Based Dirty Table Monitoring System",
    imageUrl: "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761186476/pandawa1_qwcszz.jpg",
    imageHint: "dashboard project",
    detailImageUrls: ["https://res.cloudinary.com/dnvulh8wx/image/upload/v1761186476/pandawa2_dnkjft.jpg", "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761186474/cleaneat_kha02e.png"],
    projectContext: "This system is designed to detect and monitor dirty tables in real time using CCTV cameras and machine learning. By leveraging a cloud-based infrastructure, it processes image data to identify unclean tables and displays the results on a web dashboard for efficient supervision. The solution integrates object detection models, Flask API, and cloud computing services to provide scalable, automated, and data-driven monitoring, improving cleanliness management and operational efficiency in environments such as canteens, restaurants, and public dining areas.",
    keywords: "Flask, Python, firestore, Goodle Coud Platform",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "MaternalCare API Development — Flask-based Health Platform for Expecting Mothers",
    description: "Secure Cloud-Hosted API with Firebase Firestore Integration and Health News Aggregation",
    imageUrl: "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761203000/maternal_care_placeholder.jpg",
    imageHint: "health app",
    detailImageUrls: [],
    projectContext: "This project involved the development of a complete backend API for MaternalCare, a web-based health platform built with Flask that supports maternal wellness during pregnancy. Over the course of one month, I designed and implemented core features that allow users to register, log in, reset passwords, and securely access personalized maternal health information through various API endpoints. The backend seamlessly integrates with Firebase Firestore for reliable user data management and utilizes the NewsAPI to deliver up-to-date articles related to maternal and prenatal health. Additionally, the entire API system was successfully deployed on Google Cloud, leveraging both Cloud Run and App Engine to ensure scalability, performance, and ease of maintenance in a production environment.",
    keywords: "Flask, Firebase Firestore, Google Cloud, NewsAPI, Backend",
    link: "#",
    github: "#",
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Re/Start Graduate",
    issuer: "AWS and PT Orbit Future Academy",
    year: "2025",
    imageUrl: "https://images.credly.com/size/340x340/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
    imageHint: "aws badge",
    link: "https://www.credly.com/badges/cbc907d2-9c58-43cd-92ce-19d55f4ea5ef/linked_in_profile",
  },
  {
    id: 2,
    title: "Bangkit Cloud Computing Cohort",
    issuer: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    year: "2022",
    imageUrl: "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761186475/sertifbangkit_w9fwrz.png",
    imageHint: "Bangkit certificate",
    link: "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761186475/sertifbangkit_w9fwrz.png",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    issuer: "PT Winnicode Garuda Teknologi",
    year: "2024",
    imageUrl: "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761201795/Sertif-Winnicode_cqrwcx.png",
    imageHint: "Fullstack Developer certificate",
    link: "https://winnicode.com/sertifikat/WINNI-MG-2024-06650FBE",
  },
  {
    id: 4,
    title: "Implementation of Machine Learning on Google Cloud",
    issuer: "Dicoding Indonesia",
    year: "2024",
    imageUrl: "https://res.cloudinary.com/dnvulh8wx/image/upload/v1761186476/penerapan-machine-learning-cloud_grhwu6.png",
    imageHint: "Machine Learning Certificate",
    link: "https://www.dicoding.com/certificates/KEXLYDR04ZG2",
  },
  {
    id: 5,
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google",
    year: "2024",
    imageUrl: "https://images.credly.com/size/340x340/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png",
    imageHint: "Google Cloud certificate",
    link: "https://www.credly.com/badges/e913f8ae-5fc2-46d8-837d-dbe9e55a0778/linked_in_profile",
  },
  {
    id: 6,
    title: "AWS Educate Introduction to Generative AI - Training Badge",
    issuer: "AWS Educate",
    year: "2025",
    imageUrl: "https://images.credly.com/size/340x340/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/blob",
    imageHint: "Generative AI badge",
    link: "https://www.credly.com/badges/eaa894c2-32b2-40b7-b420-2fa635d80880/linked_in_profile",
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

export const galleryImages: GalleryImage[] = placeholderImages.slice(25, 28);

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
        title: "Informatics Engineering",
        company: "Politeknik Negeri Jember",
        date: "2022- Currently",
        description: "GPA 3.90/4.00 ● I succeeded in making various projects during college, namely Cleaneat, SiDebuh, and Improman",
        type: 'education'
    },
    {
        title: "AWS re/Start – Cloud Computing Fundamentals",
        company: "PT Orbit Future Academy",
        date: "Agustus – Oktober 2025",
        description: "The AWS re/Start program, organized by PT Orbit Future Academy, is an intensive three-month training program to build competence in Cloud Computing and IT Operations. Participants are equipped with basic to advanced skills covering Linux, networking, security, Python, databases, and core AWS services such as EC2, S3, CloudWatch, and Auto Scaling. The program also develops professional soft skills to prepare participants to become work-ready talent in the cloud and information technology industry.",
        type: 'education'
    },
    {
        title: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        company: "Cloud Computing Cohort",
        date: "September – December 2024",
        description: "● Completed the Bangkit Academy program in 4 months. ● Gained in-depth knowledge of Google Cloud Platform (GCP) technologies and services, successfully completing all projects and assignments on time. ● Applied effective time management to balance the intensive Bangkit Academy schedule with university coursework. ● Earned multiple Dicoding certifications demonstrating proficiency in Cloud Computing and Modern Infrastructure. ● Successfully developed a Backend API within 1 month for MaternalCare, a Flask-based application providing maternal health services during pregnancy. ● Integrated Firebase Firestore for user data storage and NewsAPI to display the latest health-related articles.",
        type: 'education'
    }
]












    

    

