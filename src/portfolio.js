import Corso from "./assets/corso.png";
import BeansScene from "./assets/beans-scens.png";
import CinemaScope from "./assets/cinema-scope.png";
import ExpenseTracker from "./assets/expense-tracker.png";
import MediaFinder from "./assets/media-finder.png";
import Todo from "./assets/todo.png";
import MotorCut from "./assets/motorcut.png";
import Vibanc from "./assets/vibanc.png";
import ShopEase from "./assets/shopease.png";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "#",
  title: "MS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sohaib",
  role: "Web Developer based in Doha, Qatar",
  picture: "https://avatars.githubusercontent.com/u/93024641?v=4",

  description_1:
    "A Developer with hands-on experience building modern web applications using React.js and Next.js. I'm proficient in API integration, state management with Redux Toolkit, and responsive design. ",
  description_2:
    "I have demonstrated my abilities through 4+ deployed projects including multi-API platforms, financial tracking systems, and interactive user interfaces. I have a strong foundation in component architecture, React Router, and modern CSS frameworks.",
  description_3:
    "I'm eager to contribute my technical skills in a collaborative development environment and continue growing as a developer.",
  resume:
    "https://docs.google.com/document/d/1mS91ig-LklDjLiuP6Fef4DIMgzup2xW7/edit?usp=drive_link&ouid=116157002439243558652&rtpof=true&sd=true",
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-sohaib-pro/",
    github: "https://github.com/MuhammadSohaib-pro",
    whatsapp: "https://wa.me/97433425140",
  },
};

const experiences = [
  {
    role: "Frontend Developer (React / Next.js)",
    company: "CorTechSols",
    duration: "Jan 2024 – Present",
    location: "Islamabad, Pakistan (Hybrid)",
    description: [
      "Developed 5+ responsive web applications using React/Next.js, focusing on high-performance solutions with modern UI/UX standards.",
      "Designed and implemented 10+ complex UI components, and reusable React components with pixel-perfect, responsive design across all devices and browsers.",
      "Integrated REST APIs endpoints while implementing Redux Toolkit state management.",
    ],
  },
  {
    role: "Frontend Developer (React / Next.js)",
    company: "Fiverr",
    duration: "May 2023 – December 2023",
    location: "Freelance",
    description: [
      "Built full-featured e-commerce platforms with React.js, TypeScript, and Redux Toolkit.",
      "Implemented advanced product filtering/search with debouncing, category navigation, and real-time cart updates.",
      "Developed responsive UI using Tailwind CSS and shadcn/ui component library.",
    ],
  },
];

const projects = [
  {
    name: "MotorCut",
    description:
      "AI-powered web application for enhancing vehicle images, increasing engagement by 50% and user satisfaction by 40%. Built with React.js, Firebase Authentication, and Redux Toolkit for efficient state management.",
    stack: ["React.js", "Redux Toolkit", "Firebase", "REST APIs"],
    sourceCode: "",
    livePreview: "https://app.motor-cut.com/",
    image: MotorCut,
  },
  {
    name: "Vibanc",
    description:
      "Responsive marketplace platform built with Next.js, Tailwind CSS, and Shadcn UI. Features dynamic profile switching between Buyer and Seller modes with Next Auth integration supporting Google, LinkedIn, and credential-based authentication.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Next Auth"],
    sourceCode: "",
    livePreview: "https://vibanc.com/",
    image: Vibanc,
  },
  {
    name: "ShopEase",
    description:
      "Full-featured e-commerce platform with shopping cart, wishlist, order management, and checkout flow. Features advanced product filtering with debouncing, real-time cart updates, and localStorage persistence.",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/shopease",
    livePreview: "https://shopease-zeta-ten.vercel.app/",
    image: ShopEase,
  },
  {
    name: "Media Finder",
    description:
      "Multi-API media search platform integrating Unsplash, Pexels, and Giphy with Redux Toolkit state management. Features collection system with localStorage persistence and modern UI design.",
    stack: ["React.js", "Redux Toolkit", "Axios", "REST APIs"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/media-finder",
    livePreview: "https://media-finder.vercel.app/",
    image: MediaFinder,
  },
  {
    name: "CinemaScope",
    description:
      "Movie search application using React.js and OMDB API with React Router navigation, IMDb ratings, and comprehensive film details. Features responsive dark theme with custom properties and error handling.",
    stack: ["React.js", "React Router", "OMDB API", "CSS3"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/Cinema-Scope",
    livePreview: "https://cinema-scope-kappa.vercel.app/",
    image: CinemaScope,
  },
  {
    name: "Beans Scenes",
    description:
      "Modern, fully responsive coffee shop website featuring elegant design with Bootstrap 5 and PHP. Includes product showcase, customer testimonials carousel, newsletter subscription, and reusable components for easy customization.",
    stack: ["PHP", "Bootstrap 5", "CSS3", "JavaScript"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/Beans-Scenes",
    livePreview: "https://bean-scene.infinityfreeapp.com/",
    image: BeansScene,
  },
  {
    name: "Expense Tracker",
    description:
      "Finance tracking app with React.js featuring CRUD operations, localStorage persistence, and real-time calculations. Responsive Bootstrap 5 interface with React Hooks for efficient state management.",
    stack: ["React.js", "Bootstrap 5", "LocalStorage", "React Hooks"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/expense-tracker-app",
    livePreview: "https://expense-tracker-app-zeta-tan.vercel.app/",
    image: ExpenseTracker,
  },
  {
    name: "Todo Management",
    description:
      "Task management app with advanced filtering (all/active/completed), statistics tracking, and component-based architecture. Features Bootstrap Icons with clean UI and reusable components.",
    stack: ["React.js", "Bootstrap", "Bootstrap Icons", "JavaScript"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/todo-app",
    livePreview: "https://todo-app-fawn-chi-47.vercel.app/",
    image: Todo,
  },
  {
    name: "Corso",
    description:
      "Modern, responsive landing page for training and seminar programs featuring course registration, interactive carousel, and newsletter subscription. Built with clean HTML5, CSS3, and Bootstrap design.",
    stack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    sourceCode: "https://github.com/MuhammadSohaib-pro/Corso",
    livePreview: "https://corso-gray.vercel.app",
    image: Corso,
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "CI/CD",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "muhammadsohaib030@mail.com",
  phone: "+974 3342 5140",
};

export { header, about, experiences, projects, skills, contact };
