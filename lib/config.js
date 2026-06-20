// ============================================================
// PORTFOLIO CONFIG — Edit everything here
// ============================================================

export const personal = {
  name: "Karthik Ganamukkula",
  role: "Frontend Developer",
  roleHighlight: "React.js | Next.js",
  tagline: "Building scalable, user-centric web applications",
  email: "gkarthikchary2001@gmail.com",
  phone: "+91-9381993084",
  location: "Hyderabad, India",
  // Photo: place your photo in /public/ and update the path below
  photo: "/1000494726.jpg",
  // Resume: place your resume PDF in /public/ and update the path below
  resume: "/KarthikCharyGanamukkula.pdf",
  about: `Frontend Developer specializing in React.js, Next.js, and modern JavaScript (ES6+) with experience building responsive web applications and integrating REST APIs. Skilled in developing reusable UI components and scalable frontend architectures. Familiar with Node.js, MongoDB, and backend integration for full-stack application development. Passionate about creating efficient, user-centric web solutions.`,
  highlights: [
    {
      label: "REST API Integration",
      desc: "Connecting frontends to powerful backends seamlessly",
    },
    {
      label: "Reusable Components",
      desc: "Modular, maintainable component-based architecture",
    },
    {
      label: "Scalable Architecture",
      desc: "Building codebases that grow gracefully",
    },
  ],
};

// ============================================================
// SOCIAL LINKS — Update your URLs here
// ============================================================
export const social = {
  github: "https://github.com/karthikchary06", // ← your GitHub URL
  linkedin:
    "https://www.linkedin.com/in/karthik-ganamukkula-frontend-developer/", // ← your LinkedIn URL
  twitter: "", // ← optional Twitter/X
};

// ============================================================
// SKILLS — Add/remove skills freely
// ============================================================
export const skills = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript ES6+", level: 88 },
      { name: "Redux Toolkit", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    category: "Backend & DB",
    icon: "⚙️",
    items: [
      { name: "Node.js / Express", level: 65 },
      { name: "Python", level: 60 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    category: "Tools & Concepts",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

// ============================================================
// EXPERIENCE — Add/remove roles freely
// ============================================================
export const experience = [
  {
    role: "React Developer Intern",
    company: "Securxpert Technologies Pvt. Ltd.",
    location: "Hyderabad",
    duration: "Dec 2025 – Present",
    type: "Internship",
    achievements: [
      "Developed responsive web interfaces using React.js and Tailwind CSS, improving UI consistency across multiple screen sizes.",
      "Built reusable React components and managed application state using Redux Toolkit, improving maintainability and code reusability.",
      "Integrated REST APIs to perform CRUD operations, enabling dynamic data flow between frontend and backend systems.",
      "Tested and validated API endpoints using Postman, ensuring reliable backend communication.",
      "Collaborated with the dev team to build modern web modules using HTML, CSS, JavaScript, and React ecosystem tools.",
    ],
    tech: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "REST API",
      "Postman",
    ],
  },
];

// ============================================================
// PROJECTS — Add more projects easily here
// ============================================================
export const projects = [
  {
    id: 1,
    title: "Placement Management Portal",
    description:
      "A role-based web application that streamlines campus recruitment by connecting students, recruiters, and admins with secure workflows and smart job matching.",
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "JavaScript",
    ],
    features: [
      "Role-based dashboards (Student, Recruiter, Admin)",
      "Authentication & protected routes for secure access",
      "Advanced job search with filters (CGPA, branch, skills)",
      "Match scoring system for job recommendations",
      "Recruiter dashboard for job posting & applicant management",
      "Global state management using Redux Toolkit",
      "Fully responsive UI (mobile, tablet, desktop)",
    ],
    github: "https://github.com/karthikchary06/PlaceHub",
    live: "https://place-hub-five.vercel.app/",
    color: "#0ea5e9",
    icon: "🎓",
    featured: true,
  },
  {
    id: 2,
    title: "Grocery Delivery Platform (Full Stack)",
    description:
      "A full-stack grocery delivery web application with authentication, product browsing, and seamless cart & order management.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    features: [
      "JWT authentication & protected routes",
      "Dynamic product listing with search & filtering",
      "Cart and order management system",
      "Global state management using Redux Toolkit",
      "Reusable components for scalable UI",
      "Responsive design for all device sizes",
      "REST API integration for frontend-backend communication",
    ],
    github: "https://github.com/karthikchary06/groceryApp",
    live: "https://grocery-app-rv23-87leh8z8j-karthiks-projects-fa874fb0.vercel.app/",
    color: "#10b981",
    icon: "🛒",
    featured: true,
  },
  {
    id: 3,
    title: "Next.js Shopping Cart App (Auth + Redux)",
    description:
      "A modern e-commerce frontend built with Next.js App Router featuring GitHub authentication, protected routes, dynamic product pages, and cart state management using Redux Toolkit.",
    tech: [
      "Next.js",
      "React",
      "NextAuth.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript",
      "REST API (DummyJSON)",
    ],
    features: [
      "GitHub OAuth authentication using NextAuth v5",
      "Protected routes for authenticated users only",
      "Dynamic product listing and detail pages (App Router)",
      "Add/remove items from cart using Redux Toolkit",
      "Persistent cart state on client side",
      "Loading skeleton UI for better UX",
      "Responsive modern UI using Tailwind CSS",
      "Server and client component architecture",
    ],
    github:
      "https://github.com/karthikchary06/Next.js-Shopping-Cart-App--Auth-Redux-", // update if needed
    live: "https://next-js-shopping-cart-app-auth-redu-iota.vercel.app",
    color: "#6366f1",
    icon: "🛒",
    featured: true,
  },
  // ← Add more projects below this line:
  {
    id: 4,
    title: "Chatbot Web Application",
    description:
      "A responsive chatbot interface built using React and Vite that handles user queries with predefined logic and dynamic responses like date handling.",
    tech: ["React JS", "JavaScript", "CSS", "React Router", "Vite"],
    features: [
      "Interactive chat interface with user and bot messages",
      "Rule-based response system for handling user queries",
      "Dynamic date response functionality",
      "Component-based architecture using React",
      "Fast development and build using Vite",
      "Responsive design for multiple devices",
      "Deployed on Vercel",
    ],
    github: "https://github.com/karthikchary06/chatBotProject/", // update if needed
    live: "https://chat-bot-project-g69lccjpl-karthiks-projects-fa874fb0.vercel.app/",
    color: "#10b981",
    icon: "🤖",
    featured: false,
  },
  // {
  //   id: 4,
  //   title: "React Axios CRUD App",
  //   description:
  //     "A React-based CRUD application that performs GET, POST, PUT, and DELETE operations using Axios with the JSONPlaceholder API, demonstrating API integration and state management.",
  //   tech: [
  //     "React JS",
  //     "Axios",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "Vite",
  //     "REST API",
  //   ],
  //   features: [
  //     "Fetch and display posts from API (GET)",
  //     "Add new posts using controlled form inputs (POST)",
  //     "Edit existing posts with pre-filled form data (PUT)",
  //     "Delete posts with instant UI update (DELETE)",
  //     "Centralized API handling using Axios service layer",
  //     "Reusable components for form and post listing",
  //     "Real-time UI updates without page reload",
  //     "Responsive UI using Tailwind CSS",
  //   ],
  //   github: "https://github.com/karthikchary06/react_full_stack_axios",
  //   live: "https://your-live-link.vercel.app/", // update after deployment
  //   color: "#3b82f6",
  //   icon: "📦",
  //   featured: true,
  // },
];

// ============================================================
// EDUCATION — Add/remove entries freely
// ============================================================
export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Sri Indu College of Engineering & Technology",
    year: "2024",
    score: "CGPA: 8.56 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Alphores Junior College",
    year: "2020",
    score: "98%",
  },
  {
    degree: "SSC",
    institution: "Krishnaveni Talent School",
    year: "2018",
    score: "GPA: 10 / 10",
  },
];
