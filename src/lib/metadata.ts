import type { Metadata } from 'next';
import { FaGithub, FaServer, FaUnity, FaReact, FaMicrophone, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi, FaTasks, FaStripeS } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiReact, SiCsharp, SiFastapi, SiPython, SiSwagger, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPostman, SiHibernate, SiGithub, SiFirebase,SiDjango } from "react-icons/si";


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Priya Ghayal - Portfolio',
  description: 'Professional portfolio showcasing projects and skills',
  author: 'Priya Ghayal',
  siteUrl: 'https://github.com/priyaghayal/portfolio',
  twitterHandle: '@priya',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;
  
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/priya1.jpg`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${currentUrl}/images/priya1.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}; 

export const experiences = [
  {
    title: "Working Student - Data Analyst",
    company: "TransnetBW GmbH",
    location: "Stuttgart, DE",
    type: "Part-time",
    date: "2024 - Present",
    description: "Developed ETL pipelines and REST APIs using Python, Django, and SQL. Performed data analysis with Pandas, NumPy, and Matplotlib for insight generation. Automated reporting with PowerShell. Deployed Dockerized applications to AWS ECS via GitHub Actions. Collaborated in Agile teams, ensuring quality with Pytest and Unittest.",
    skills: [    "Python",
      "Django",
      "SQL",
      "Pandas",
      "Docker",
      "AWS",
      "GitHub Actions",
      "Agile"
    ],
  },
  {
    title: "Software Engineer",
    company: "Precisely Data",
    location: "Pune, IN",
    type: "Full-time",
    date: "2021 - 2023",
    description: "Automated server maintenance and log monitoring using Bash and Python, enhancing debugging efficiency. Optimized Java enterprise applications on Linux and IBM i OS, contributing to system performance improvements. Supported migration from monolith to Microservices architecture using containerization tools. Actively participated in Agile processes via Jira, led code reviews, and mentored new hires. Created technical documentation and handled cross-functional communication.",
    skills: [
      "Python",
      "Bash",
      "Java",
      "Linux",
      "Docker",
      "Microservices",
      "Git",
      "Jira",
      "Agile"
  ],
  },
  {
    title: "Machine Learning Intern",
    company: "AI Adventures",
    location: "Pune, IN",
    type: "Part-time",
    date: "2019 - 2020",
    description: "Developed an AI-powered vehicle damage detection system to automate the insurance claim process. Processed and analyzed large datasets of automobile images using Python, Pandas, NumPy, and OpenCV. Applied machine learning algorithms like SVM and Random Forest, improving classification accuracy.",
    skills: [   
      "Python",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Machine Learning",
      "SVM",
      "Random Forest",
      "AI",
      "Data Analysis"
  ]  
},
];

export const education = [
  {
    title: "Master of Science in Software Technology",
    institution: "Hochschule fur Technik Stuttgart",
    location: "Stuttgart, DE",
    date: "2023 - 2025",
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    institution: "University of Pune",
    location: "Pune, IN",
    date: "2017 - 2021",
  }
];

export const projects = [
  {
    id: 1,
    title: "Banking Backend API",
    des: "Developed a RESTful banking API using FastAPI to handle customer creation, account management, and fund transfers. Integrated Swagger UI for documentation and PyTest for test coverage.",
    img: "images/projects/project1.png",
    icons: [
      { icon: SiFastapi, color: "#009688" },  // FastAPI
      { icon: SiPython, color: "#306998" },  // Python
      { icon: SiGithub, color: "#181717" },  // GitHub
      { icon: SiSwagger, color: "#85ea2d" }  // Swagger UI
    ],
    link: "https://github.com/priyaghayal/bank-api/"
  },
  {
    id: 2,
    title: "Job Referral System",
    des: "A React Native application that provides functionality to post job availability and refer people for that job.",
    img: "images/projects/project2.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" },  // React
      { icon: FaServer, color: "#2E8B57" },  // Server

    ],
    link: "https://github.com/priyaghayal/jobReferralSystem"
  },
  {
    id: 3,
    title: "Unity-AudioVisualizer",
    des: "An audio visualizer developed using Unity3D, generating animated imagery based on a piece of audio, rendered in real-time.",
    img: "images/projects/project3.png",
    icons: [
      { icon: FaUnity, color: "#000000" },  // Unity3D
      { icon: SiCsharp, color: "#239120" },  // C#
      { icon: FaMicrophone, color: "#FF4500" }  // Audio
    ],
    link: "https://github.com/priyaghayal/Unity-AudioVisualizer"
  },
  {
    id: 4,
    title: "Budget-Manager",
    des: "Budget Buddy is a web-based application to keep a record of user’s daily/monthly expenses.",
    img: "images/projects/project4.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" },  // React
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
      { icon: SiMongodb, color: "#47A248" },  // MongoDB
      { icon: FaGithub, color: "#181717" }   // GitHub
    ],
    link: "https://github.com/priyaghayal/Budget-Manager"
  },
  {
    id: 5,
    title: "TheModernTimes",
    des: "This project is made to be deployed in P.E.S Modern College of Engineering for better information sharing inside the college. It can be customized and deployed in other systems as well. The project is open for contributions.",
    img: "images/projects/project5.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" },  // React
      { icon: FaServer, color: "#2E8B57" },  // Server
      { icon: FaGithub, color: "#181717" }   // GitHub
    ],
    link: "https://github.com/priyaghayal/TheModernTimes"
  },
  {
    id: 6,
    title: "Cognitive Workload Evaluation",
    des: "Project to analyze and classify users’ mental workload while performing cognitive tasks. Used deep learning techniques on EEG signals for classifying Cognitive Workload.",
    img: "images/projects/project6.png",
    icons: [
      { icon: SiReact, color: "#61DAFB" },  // React
      { icon: FaServer, color: "#2E8B57" },  // Server
      { icon: FaGithub, color: "#181717" }   // GitHub
    ],
    link: "https://github.com/priyaghayal/CognitiveWorkloadEvaluation"
  }
];