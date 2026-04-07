export const personalInfo = {
  name: "Sanjay Kumar",
  title: "Software Engineer",
  email: "sanjaykumarskc87@gmail.com",
  phone: "+91 7257047565",
  location: "Bhilai, Chhattisgarh",
  linkedin: "https://linkedin.com/in/sanjay-kumar-330104280",
  github: "https://github.com/skc-87",
  resume: "/sanjay-kumar-resume.pdf",
  tagline: "Building intelligent systems at the intersection of data, AI, and the web.",
};

export const education = [
  {
    id: "rungta",
    institution: "Rungta College of Engineering and Technology",
    degree: "Bachelor of Technology",
    grade: "CGPA: 7.3",
    period: "06/2022 – Present",
    location: "Bhilai, India",
  },
  {
    id: "ms-memorial",
    institution: "MS Memorial Academy",
    degree: "Higher Secondary (XII)",
    grade: "Percentage: 79.2%",
    period: "05/2020 – 05/2022",
    location: "Patna, India",
  },
];

export const experience = [
  {
    id: "accenture",
    role: "Associate Software Engineer Intern",
    company: "Accenture",
    client: "a healthcare firm",
    period: "05/2025 – 07/2025",
    location: "Indore, India",
    current: false,
    link: "https://drive.google.com/file/d/1vEBDRTu4bmmpD7w0fIQXjgMU9Q4k95gm/view?usp=sharing",
    highlights: [
      "Collaborated on a client project for a healthcare firm, transforming and structuring complex healthcare data to enable advanced analytics and reporting.",
      "Gained hands-on experience with Snowflake for cloud-based data warehousing and applied DBT to develop scalable, modular data transformation pipelines.",
      "Contributed to the design and implementation of a robust data architecture to support business intelligence initiatives and data-driven decision-making.",
    ],
    tags: ["Snowflake", "DBT", "Data Engineering", "Healthcare Analytics"],
  },
  {
    id: "coders-crux",
    role: "Front End Developer",
    company: "Coders Crux",
    period: "01/2024 – 02/2024",
    location: "Bhilai, India",
    current: false,
    link: "https://drive.google.com/file/d/1opCc2yY4mQ2xDxzJNSWdKPL0htF88DvA/view?usp=sharing",
    highlights: [
      "Developed and optimized dynamic login and signup pages using the MERN stack (MongoDB, Express.js, React, Node.js) with JavaScript functionality.",
      "Designed responsive, user-friendly interfaces with HTML, CSS, and React Router for smooth client-side navigation.",
      "Built scalable front-end modules using React's component-based architecture while collaborating on clean, maintainable full-stack code.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express.js", "React Router"],
  },
];

export const projects = [
  {
    id: "ai-attendance",
    title: "AI-Powered Face Recognition Attendance & Assignment Evaluation System",
    role: "AI/ML & Backend Developer",
    description:
      "A real-time face recognition system for automated attendance and a Siamese neural network for handwriting verification, enabling automated assignment authentication.",
    highlights: [
      "Built a real-time face recognition system using MTCNN (DeepFace), ArcFace embeddings, and Cosine Similarity for secure, automated attendance via webcam and image input.",
      "Developed a Siamese Neural Network for handwriting verification, enabling automated assignment authentication against stored samples.",
      "Architected a modular backend (Node.js, Python) with secure REST APIs (JWT), optimizing AI pipelines for preprocessing, embedding, and evaluation at scale.",
    ],
    tags: ["Python", "Node.js", "MTCNN", "ArcFace", "JWT", "Deep Learning", "REST API"],
    image: "/images/projects/ai-attendance.jpg",
    github: "https://github.com/skc-87/test",
    liveUrl: "https://test-gamma-roan-88.vercel.app/",
  },
];

export const skills = {
  languages: ["C++", "Python", "JavaScript", "SQL", "Java"],
  frameworks: ["React", "Node.js", "Express.js", "Next.js"],
  tools: ["Snowflake", "DBT", "MongoDB", "Git", "REST APIs"],
  aiml: ["DeepFace", "MTCNN", "ArcFace", "Siamese Networks", "JWT Auth"],
  certificates: [
    { 
      name: "Snowflake Workshop", 
      issuer: "Snowflake",
      link: "https://drive.google.com/file/d/1oGUxQizTjFbyL3_SrNa4tC--qE0TOX98/view?pli=1"
    },
    { 
      name: "DBT Fundamentals", 
      issuer: "dbt Labs",
      link: "https://drive.google.com/file/d/1og_fdCSkXe_D84yaBvSaCZapr-SWB5Po/view"
    },
  ],
};
