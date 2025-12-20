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
    ]
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
        description: "Real-time chat app using MERN stack and Socket.IO for bi-directional communication.",
        tech: ["React", "Express", "Tailwind", "MongoDB", "Socket.IO"],
        link: "#",
        live: "https://chatify-nu9e.onrender.com"
    },
    {
        title: "Agro-Connect",
        description: "E-commerce platform linking farmers and consumers directly with secure transactions.",
        tech: ["React", "SpringBoot", "MongoDB"],
        link: "#",
        live: "https://agro-connect-chatbot.vercel.app/"
    },
    {
        title: "Credit Card Management",
        description: "System for managing credit cards with secure authentication and CRUD operations.",
        tech: ["React", "Node.js", "Express", "MySQL"],
        link: "#",
        live: "#"
    },
];
