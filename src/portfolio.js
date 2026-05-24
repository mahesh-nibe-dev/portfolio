/*
  Personal Portfolio Configuration
  Fill in your details below to customize the portfolio.
*/

import emoji from "react-easy-emoji";


// Splash Screen
const splashScreen = {
  enabled: false,
  animation: null,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Mahesh Nibe",
  title: "dev:~$ Mahesh Nibe",
  subTitle: emoji(
    "Computer Science student and backend systems engineer. Builder of custom C++ language compilers, Redis-backed distributed rate limiters, and full-stack environments containerized with Spring Boot, Node.js, and Docker."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true 
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mahesh-nibe-dev",
  linkedin: "https://www.linkedin.com/in/mahesh-nibe-dev/",
  gmail: "maheshnibe3006@gmail.com",
  whatsapp: "https://wa.me/917972097423",
  phone: "tel:+917972097423",
  display: true 
};

// Technical Focus Section
const skillsSection = {
  title: "Core Competencies",
  subTitle: "SPECIALIZED IN BACKEND ARCHITECTURE, SYSTEMS PROGRAMMING & CLOUD INFRASTRUCTURE",
  skills: [
    emoji("⚡ Architecting distributed backend services using Java (Spring Boot 3) and Node.js/Express"),
    emoji("⚡ Designing robust database schemas (PostgreSQL, MySQL), indexing strategies, and automated SQL triggers"),
    emoji("⚡ Implementing distributed caching and high-performance concurrency primitives with Redis"),
    emoji("⚡ Systems programming in C++, including custom compiler engineering, parsing theory, and AST code generation"),
    emoji("⚡ Packaging full-stack environments using multi-stage Docker builds, Docker Compose, and Nginx proxies")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Nginx", fontAwesomeClassname: "fas fa-network-wired" }
  ],
  display: true 
};

// Architecture & Engineering Section
const architectureSection = {
  display: true,
  title: "Architecture & Engineering",
  subtitle: "Deep dive into system design philosophy, infrastructure, and technical maturity.",
  topics: [
    {
      id: "api-design",
      title: "API Design & Philosophy",
      icon: "fas fa-network-wired",
      content: "I design clean RESTful APIs utilizing the Data Transfer Object (DTO) pattern to encapsulate internal database models, and configure global exception handlings (such as Spring Boot's @ControllerAdvice) to guarantee predictable error payloads. All APIs are documented interactively via OpenAPI/Swagger UI specifications."
    },
    {
      id: "auth-flow",
      title: "Authentication & Security",
      icon: "fas fa-shield-alt",
      content: "Deep understanding of web security architectures. Implementations focus on stateless JWT authentication filters using custom Spring Security chains, combined with secure cookie management (HTTP-Only) to block XSS scripting. Integrations utilize rate-limiting, Helmet headers, and input validators."
    },
    {
      id: "database",
      title: "Database Design & Scaling",
      icon: "fas fa-database",
      content: "Proficient in relational modeling (3NF) and atomic caching. Experiences include writing custom SQL Triggers directly at the database layer (MySQL) to automate transaction integrity, alongside implementing high-performance distributed sliding-window rate checks using memory-optimized Redis keys."
    },
    {
      id: "deployment",
      title: "Systems & Infrastructure",
      icon: "fab fa-docker",
      content: "Experienced in low-level systems programming in C++ (building recursive descent token Lexers, AST builders, and 8-bit assembly code generators), and packaging robust application environments using multi-stage Docker builds, Docker Compose files, and SPA-routing configured Nginx reverse proxies."
    }
  ]
};

// Education Section
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "D. Y. Patil College of Engineering ( DYPCOE ) , Akurdi, Pune",
      logo: require("./assets/images/DYPLogo.jpg"),
      subHeader: "Bachelor of Engineering - BE, Information Technology",
      duration: "Jun 2023 – Jun 2027",
      desc: "Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems (OS), Computer Networks & Security (CNS), Compiler Design, Software Engineering.",
      descBullets: [
        "Top 2% Nationwide in NPTEL RDBMS Certification.",
        "Two-time College-Level Selectee for the Smart India Hackathon (SIH) in consecutive years.",
        "Selected at the college level for the Avishkar Hackathon (2nd Year).",
        "Active participant and Department Winner in the College General Championship."
      ]
    }
  ]
};

// Technical Experience Stack
const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud/DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Software Engineering Intern",
      company: "PHN Technology",
      companylogo: require("./assets/images/PHNLOGO.png"),
      headerImg: process.env.PUBLIC_URL + "/PHNLOGO.svg",
      footerImg: require("./assets/images/maxresdefault.jpg"),
      date: "Current",
      desc: "Developed and architected scalable web applications, focusing on robust backend systems and full-stack integration.",
      descBullets: [
        "Engineered a production-ready Cafe Management website utilizing Spring Boot, JWT security, and Dockerized microservices.",
        "Built Blogfy, a high-performance MERN stack blogging platform with optimized media uploads and RESTful API endpoints."
      ]
    }
  ]
};

// Engineering Projects Case Studies
const engineeringProjects = {
  display: true,
  title: "Featured Software Projects",
  projects: [
    {
      id: "1",
      title: "High-Performance Distributed Rate Limiter",
      subtitle: "Problem: Public APIs face constant threats of DoS attacks and user quota abuse, requiring extremely rapid protection without slowing down the application.",
      architecture: "Solution: I engineered a custom Spring Boot HandlerInterceptor backed by a centralized Redis cache. This seamlessly intercepts incoming HTTP traffic and rapidly calculates atomic request quotas to protect backend environments.",
      techStack: ["Java 21", "Spring Boot", "Redis", "Docker"],
      keyDecisions: [
        "Chose Redis over in-memory Java collections to prevent local-state desynchronization across multiple server instances.",
        "Implemented atomic operations to accurately track sliding window constraints under high concurrency."
      ],
      scalability: "Operates with sub-millisecond latency for rate-checking operations, designed for horizontal scalability.",
      deployment: "Containerized backend utility ready for deployment alongside an AWS ElastiCache Redis cluster.",
      githubLink: "https://github.com/mahesh-nibe-dev/rate-limiter",
      demoLink: ""
    },
    {
      id: "2",
      title: "Simple-Lang Compiler",
      subtitle: "Problem: Needed to bridge high-level programming logic with raw machine instructions for highly constrained 8-bit hardware.",
      architecture: "Architected a custom 3-pass compiler in C++ without external tools. Built a Lexical Analyzer for tokenization, a Recursive Descent Parser for AST generation, and an Assembly Code Generator.",
      techStack: ["C++", "Systems Programming", "Assembly", "Regex"],
      keyDecisions: [
        "Engineered memory-swapping techniques utilizing reserved RAM scratchpads to simulate multi-register operations on a single-accumulator CPU.",
        "Hand-wrote the parser to strictly enforce operator precedence and mathematical correctness."
      ],
      scalability: "Produces optimized assembly code executable directly on custom 8-bit ISAs.",
      deployment: "Compiled via g++ and executed as a standalone binary pipeline.",
      githubLink: "https://github.com/mahesh-nibe-dev/simple-lang-compiler",
      demoLink: ""
    },
    {
      id: "3",
      title: "Blogfy: Secure MVC Blogging Platform",
      subtitle: "Problem: Needed a highly secure, monolithic content platform capable of managing rich-media and user sessions against brute-force attacks.",
      architecture: "Solution: Architected a full-stack SSR Node.js/Express application. Implemented stateless JWT auth securely stored in HTTP-only cookies and integrated Multer for optimized multipart media parsing.",
      techStack: ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
      keyDecisions: [
        "Designed a robust security perimeter combining Helmet headers, strict CORS, express-rate-limit, and XSS HTML sanitization.",
        "Engineered an efficient MongoDB schema utilizing Mongoose population to map complex relationships between Users, Blogs, and Comments."
      ],
      scalability: "Optimized database read operations utilizing pagination and indexed queries to ensure feed responsiveness under load.",
      deployment: "Containerized Node.js environment integrated with a managed MongoDB database instance.",
      githubLink: "https://github.com/mahesh-nibe-dev/Blogging-App",
      demoLink: ""
    },
    {
      id: "4",
      title: "Distributed Cafe Management System",
      subtitle: "Problem: Cafe operations required a digitized, real-time interface to eliminate manual order tracking and inventory desynchronization.",
      architecture: "Solution: Engineered a full-stack solution utilizing React 18 frontend communicating via RESTful APIs to a Spring Boot 3 Java backend.",
      techStack: ["Java 17", "Spring Boot", "React", "PostgreSQL", "Docker"],
      keyDecisions: [
        "Secured the administrative backend using Spring Security and stateless JWTs to strictly separate customer orders from employee management views.",
        "Packaged the multi-tier environment into automated multi-stage Docker builds orchestrating Nginx, Spring Boot, and PostgreSQL containers."
      ],
      scalability: "Designed stateless REST controllers ensuring horizontal scalability for peak ordering hours.",
      deployment: "Orchestrated using Docker Compose with an Nginx reverse proxy for robust multi-container deployment.",
      githubLink: "https://github.com/mahesh-nibe-dev/Cafe_Website",
      demoLink: ""
    },
    {
      id: "5",
      title: "Distributed URL Shortener API",
      subtitle: "Problem: Users need to condense long, cumbersome web links into manageable identifiers while tracking click analytics.",
      architecture: "Solution: Built a scalable Node.js/Express REST API using MongoDB. Engineered a high-performance HTTP 302 redirection engine and utilized nanoid for collision-resistant unique ID generation, all fully containerized via Docker.",
      techStack: ["Node.js", "Express", "MongoDB", "Docker", "Swagger"],
      keyDecisions: [
        "Authored interactive REST API documentation using Swagger UI to facilitate seamless third-party integration.",
        "Designed an analytics tracking system to log visit history and click counts for individual URLs by appending timestamps to NoSQL documents."
      ],
      scalability: "Generated collision-resistant, lightweight unique identifiers optimized for high-volume redirection lookups.",
      deployment: "Fully containerized application and database tiers using Docker Compose for zero-configuration deployments.",
      githubLink: "https://github.com/mahesh-nibe-dev/ShortURL-Handler",
      demoLink: ""
    },
    {
      id: "6",
      title: "E-Commerce RDBMS Architecture",
      subtitle: "Problem: Complex e-commerce systems often suffer from inventory desynchronization and data corruption under high concurrent load.",
      architecture: "Solution: Engineered a full-stack React and Node.js platform specifically focused on robust database integrity. Implemented advanced custom MySQL SQL Triggers to automatically validate inventory and enforce business rules at the lowest database layer.",
      techStack: ["React", "Node.js", "MySQL", "SQL Triggers"],
      keyDecisions: [
        "Offloaded critical inventory calculations directly to the MySQL database engine via Triggers rather than relying on application-layer logic.",
        "Implemented global state management in React using the Context API to seamlessly track shopping carts across sessions."
      ],
      scalability: "Abstracted database connection pooling using mysql2 to handle scalable concurrent transaction access safely.",
      deployment: "Decoupled React SPA frontend and Express REST API backend architecture.",
      githubLink: "https://github.com/mahesh-nibe-dev/DBMS-e-commerce-project",
      demoLink: ""
    },
    {
      id: "7",
      title: "S&P 500 Machine Learning Predictor",
      subtitle: "Problem: Financial markets generate massive amounts of volatile, noisy time-series data that makes directional forecasting highly difficult.",
      architecture: "Solution: Developed a Machine Learning pipeline in Python using Pandas and Scikit-Learn. Trained and optimized a Random Forest Classifier to process historical market data and predict the daily closing direction of the S&P 500 index.",
      techStack: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"],
      keyDecisions: [
        "Prioritized model Precision (achieving 62%) over sheer Accuracy to minimize false-positive trading signals, directly addressing real-world financial risk metrics.",
        "Engineered a data preprocessing pipeline using NumPy and Pandas to structure and clean historical time-series datasets."
      ],
      scalability: "Processed thousands of rows of historical market data utilizing optimized DataFrame vectorization.",
      deployment: "Executed via interactive Jupyter Notebooks for rapid feature analysis and iterative modeling.",
      githubLink: "https://github.com/mahesh-nibe-dev/SPX-Predictor",
      demoLink: ""
    }
  ]
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true 
};

// Contact Info
const contactInfo = {
  title: "Let's Connect.",
  subtitle: "I am actively seeking Software Engineering Internships for Summer 2026. Whether you need a dedicated full-stack developer or someone passionate about distributed systems and backend infrastructure, my inbox is always open. Let's build something extraordinary together.",
  number: "+91-7972097423",
  email_address: "maheshnibe3006@gmail.com"
};

const isHireable = true; 

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  architectureSection,
  educationInfo,
  techStack,
  workExperiences,
  engineeringProjects,
  openSource,
  resumeSection,
  contactInfo,
  isHireable
};
