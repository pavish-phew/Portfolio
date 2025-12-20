import { Github, Linkedin, Mail } from "lucide-react";

export const PROFILE_DATA = {
    name: "Pavish S",
    role: "Full Stack Developer",
    tagline: "Building scalable, user-friendly web applications that solve real-world problems.",
    about: "Turning complex problems into simple, reliable web applications. Focused on building products that are clean, scalable, and user-centric.",
    social: [
        { name: "GitHub", icon: Github, url: "https://github.com/pavish-phew" },
        { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/pavish-phew" },
        { name: "Email", icon: Mail, url: "mailto:pavishs127@gmail.com" },
    ],
    contactEmail: "pavishs127@gmail.com",
    web3FormsKey: "7317d235-7a1a-4171-b099-6ff79059e310" // Get yours at https://web3forms.com/
};

export const EXPERIENCES = [
    {
        company: "Rampex Technologies",
        role: "React Trainee",
        duration: "Oct 2024 - Nov 2024",
        description: "Completed comprehensive training in React, building dynamic web applications with interactive UI components, state management, and API integration."
    }
];

export const EDUCATION = [
    {
        institution: "Sri Shakthi Institute of Engineering and Technology",
        degree: "Bachelor of Engineering in Computer Science",
        duration: "2022 - 2026",
        description: "Focusing on Software Engineering, Data Structures, and Full Stack Development."
    }
];

export const SKILLS = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Java"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Canva"] },
];

export const PROJECTS = [
    {
        title: "Real-Time Chat Application",
        description: "A full-featured real-time messaging platform using Socket.IO for instant bi-directional communication. Features include JWT authentication, persistent chat history with MongoDB, and a responsive UI built with Tailwind CSS.",
        tech: ["React", "Express", "Tailwind", "MongoDB", "Socket.IO"],
        link: "https://github.com/pavish-phew/chatify",
        live: "https://chatify-nu9e.onrender.com"
    },
    {
        title: "Agro-Connect",
        description: "An integrated e-commerce ecosystem connecting farmers directly with consumers. Built with a Express backend and React frontend, featuring secure transaction processing and a specialized chatbot to assist users in agricultural trade.",
        tech: ["React", "Express", "Tailwind", "Node", "MongoDB"],
        link: "https://github.com/pavish-phew/AgroConnect-chatbot",
        live: "https://agro-connect-chatbot.vercel.app/"
    },
    {
        title: "Credit Card Management",
        description: "A secure financial dashboard for managing credit card operations. Implements full CRUD functionality for card management, transaction tracking, and user authentication with a focus on data integrity and security.",
        tech: ["React", "Node.js", "Express", "MySQL"],
        link: "#",
        live: "#"
    },
];
