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
    "IT Engineering student & Summer 2026 SDE Intern Candidate. Focused on high-performance backend systems, custom C++ compiler engineering, and distributed architectures. Passionate about systems-level optimizations, robust RDBMS schema design, and Dockerized production environments."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true 
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mahesh-nibe-dev",
  linkedin: "https://www.linkedin.com/in/mahesh-nibe-dev/",
  gmail: "maheshnibe.dev@gmail.com",
  whatsapp: "https://wa.me/917972097423",
  phone: "tel:+917972097423",
  display: true 
};

// Technical Focus Section
const skillsSection = {
  title: "Core Competencies",
  subTitle: "I am deeply passionate about the unseen infrastructure that powers the web. My engineering philosophy revolves around writing code that respects physical hardware boundaries—prioritizing efficient algorithms, predictable memory management, and scalable data schemas. Rather than just consuming frameworks, I strive to understand database internals, compiler mechanics, and network bottlenecks.",
  skills: [
    emoji("⚡ Systems & Architectures: Designing scalable, distributed backend environments with Java (Spring Boot 3) and Node.js/Express, focusing on high-throughput microservice communications."),
    emoji("⚡ Data Modeling & Isolation: Designing 3NF relational schemas in PostgreSQL/MySQL, utilizing optimized query indexing, connection pooling, and low-level SQL triggers to enforce transaction integrity."),
    emoji("⚡ Memory Caching & Rate Limiting: Implementing ultra-low latency sliding window rate limiters and atomic caching mechanisms with Redis cluster setups."),
    emoji("⚡ Systems & Compiler Engineering: Writing performant low-level pipelines in C++ including hand-crafted lexical tokenizers, AST parsers, and custom 8-bit assembly generation."),
    emoji("⚡ Production Infrastructure & Containerization: Orchestrating multi-tier architectures with secure, multi-stage Docker builds, Docker Compose networks, and reverse-proxied, high-concurrency Nginx configurations.")
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
  title: "Engineering Philosophy & Architecture",
  subtitle: "A deep dive into how I approach software design, infrastructure, and technical problem-solving.",
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
      content: "Experienced in packaging robust application environments using multi-stage Docker builds, Docker Compose files, and SPA-routing configured Nginx reverse proxies, effectively minimizing deployment footprints and isolating runtime dependencies."
    },
    {
      id: "compilers",
      title: "Low-Level & Compilers",
      icon: "fas fa-microchip",
      content: "Fascinated by how software executes at the bare-metal level. My experience building custom compilers (lexing, parsing ASTs, emitting 8-bit assembly) profoundly shaped my understanding of memory boundaries, garbage collection, and language design, directly translating to more efficient high-level backend code."
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
      desc: "Developed and architected high-performance web applications and backend systems, leading the migration to scalable containerized microservice architectures.",
      descBullets: [
        "Architected and deployed a multi-container Cafe Management infrastructure using Spring Boot, securing the administrative perimeter with custom stateless JWT authentication chains and HTTP-only cookies to eliminate XSS/CSRF vectors.",
        "Engineered 'Blogfy', a high-performance publishing platform with optimized multipart media processing pipelines, secure MongoDB connection pooling, and request rate-limiting configurations, resolving database write bottlenecks under concurrent traffic spikes."
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
      title: "Simple-Lang Compiler",
      subtitle: "Problem: High-level programming representations need to target bare-metal 8-bit registers directly, requiring custom intermediate optimizations without high-level library overhead.",
      architecture: "Solution: Engineered a hand-written 3-pass compiler in C++17. Designed an LL(1) Lexical Tokenizer, an Abstract Syntax Tree (AST) Recursive Descent Parser, and an optimized 8-bit assembly emitter.",
      techStack: ["C++", "Systems Programming", "Assembly", "Regex"],
      keyDecisions: [
        "Hand-wrote the tokenizer and parser from scratch using recursive-descent techniques to guarantee strict operator precedence and custom error diagnostic handling.",
        "Designed custom memory-swapping architectures using CPU reserved RAM scratchpads to execute multi-register mathematical operations under standard single-accumulator limits."
      ],
      scalability: "Emitter produces tight, instruction-optimized bare-metal code executable with negligible runtime overhead.",
      deployment: "Compiled as a static binary target via g++ pipeline with no runtime external dependencies.",
      githubLink: "https://github.com/mahesh-nibe-dev/simple-lang-compiler.git",
      demoLink: ""
    },
    {
      id: "2",
      title: "High-Performance Distributed Rate Limiter",
      subtitle: "Problem: Public APIs face constant denial-of-service threats and resource starvation under concurrent request spikes, requiring a sub-millisecond throttle that does not add network overhead.",
      architecture: "Solution: Engineered a thread-safe, non-blocking Spring Boot HandlerInterceptor that intercepts incoming HTTP packets and evaluates client quotas atomically against a shared Redis cluster using pipelined sliding-window counters.",
      techStack: ["Java 21", "Spring Boot", "Redis", "Docker"],
      keyDecisions: [
        "Avoided local in-memory stores (like Guava/Caffeine) to eliminate state desynchronization across horizontally scaled server nodes.",
        "Implemented atomic multi-key Redis transactions via Lua scripting to prevent race conditions and double-evaluation under concurrent threads."
      ],
      scalability: "Handles peak transaction loads with sub-millisecond latency overhead, scaling horizontally alongside stateless API nodes.",
      deployment: "Fully containerized utilizing multi-stage Docker builds integrated into a local compose network with a replicated Redis cluster.",
      githubLink: "https://github.com/mahesh-nibe-dev/high-performance-rate-limiter.git",
      demoLink: ""
    },
    {
      id: "3",
      title: "E-Commerce RDBMS Architecture",
      subtitle: "Problem: Application-layer validation of stock inventory under high-concurrency ordering causes race conditions, leading to double-allocation and database corruption.",
      architecture: "Solution: Engineered a robust e-commerce RDBMS pipeline focused entirely on strict data constraints. Offloaded business logic validations directly to the database engine using custom MySQL Triggers and Stored Procedures.",
      techStack: ["React", "Node.js", "MySQL", "SQL Triggers"],
      keyDecisions: [
        "Moved critical stock checks directly to MySQL triggers to enforce atomic constraints at the physical database layer, completely bypassing application race conditions.",
        "Structured a global React Context framework to synchronize cart data with minimal render loops and local storage caching."
      ],
      scalability: "Bypassed CPU-bound application checks by leveraging the MySQL engine's highly optimized internal trigger engine.",
      deployment: "Decoupled architecture allowing independent scaling of the Node.js API server and MySQL database.",
      githubLink: "https://github.com/mahesh-nibe-dev/DBMS-e-commerce-project",
      demoLink: ""
    },
    {
      id: "4",
      title: "Distributed Cafe Management System",
      subtitle: "Problem: Food operations need zero-latency inventory checks and strict role-based control boundaries to prevent transaction leaks.",
      architecture: "Solution: Built a decoupled full-stack platform using React 18 communicating with a stateless Java Spring Boot 3 microservice backend, utilizing PostgreSQL for strict transactional consistency.",
      techStack: ["Java 17", "Spring Boot", "React", "PostgreSQL", "Docker"],
      keyDecisions: [
        "Hardened order states using Spring Security chains with custom role-based filters to ensure secure horizontal privilege levels.",
        "Packaged the entire platform via multi-stage Docker builds, drastically reducing final image footprints from 800MB to 120MB by stripping compile-time dependencies."
      ],
      scalability: "Designed stateless REST controllers with decoupled layers to facilitate frictionless horizontal scalability behind Nginx.",
      deployment: "Managed via automated Docker Compose including Nginx as a reverse proxy, handling static React SPA assets and proxying API calls dynamically.",
      githubLink: "https://github.com/mahesh-nibe-dev/my-cafe-project_final.git",
      demoLink: ""
    },
    {
      id: "5",
      title: "Distributed URL Shortener API",
      subtitle: "Problem: High-concurrency link redirection platforms suffer from database locks during analytics tracking, causing performance degradation.",
      architecture: "Solution: Designed a low-latency redirection REST API in Node.js/Express using MongoDB. Implemented collision-resistant unique short-key generation utilizing high-entropy nanoid sequences.",
      techStack: ["Node.js", "Express", "MongoDB", "Docker", "Swagger"],
      keyDecisions: [
        "Decoupled redirection logic from analytics logging by using non-blocking asynchronous event emitters, ensuring redirects resolve instantly without waiting for database writes.",
        "Authored an exhaustive Swagger/OpenAPI specification to allow seamless RESTful integrations for third-party systems."
      ],
      scalability: "Achieved sub-10ms redirection responses by indexing database lookups directly on the unique high-entropy key.",
      deployment: "Orchestrated via Docker Compose for localized isolated networking between the Express app and MongoDB cluster.",
      githubLink: "https://github.com/mahesh-nibe-dev/ShortURL-Handler",
      demoLink: ""
    },
    {
      id: "6",
      title: "Blogfy: Secure MVC Publishing Infrastructure",
      subtitle: "Problem: Traditional publishing portals often suffer from database vulnerability vectors (SQLi, XSS) and media storage depletion under brute-force uploads.",
      architecture: "Solution: Architected a production-hardened MVC web server in Node.js/Express backed by MongoDB. Secured authentication using stateless, signed JSON Web Tokens (JWT) stored in HTTP-Only, SameSite cookies.",
      techStack: ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
      keyDecisions: [
        "Structured a strict security perimeter using Helmet, express-rate-limit, and sanitize-html to sanitize user inputs directly at the controller layer.",
        "Engineered a secure Multer middleware layer that validates file mime-types on the fly, preventing malicious binary execution inside the file server."
      ],
      scalability: "Implemented server-side pagination, database index planning for user relations, and client-side page caching to reduce database compute under load.",
      deployment: "Fully containerized in a modular Docker Compose network with segregated database and application tiers.",
      githubLink: "https://github.com/mahesh-nibe-dev/Blogging-website.git",
      demoLink: ""
    },
    {
      id: "7",
      title: "S&P 500 Machine Learning Predictor",
      subtitle: "Problem: Time-series market forecasting suffers from massive noise-to-signal ratios, making raw direction prediction algorithms highly volatile.",
      architecture: "Solution: Developed a modular Scikit-Learn data science pipeline. Trained a Random Forest Classifier on historical index indicators and optimized trading signals for predictive risk management.",
      techStack: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"],
      keyDecisions: [
        "Tuned the hyperparameter search to prioritize Precision (62%) over raw Accuracy, accepting a lower quantity of trade signals to severely minimize high-risk false positives.",
        "Engineered a vectorized data preprocessing pipeline in Pandas, maximizing matrix computational speeds."
      ],
      scalability: "Processes extensive historical index datasets using vectorized matrix mathematics with O(N log N) tree parsing speeds.",
      deployment: "Encapsulated in Python notebook workflows for hyperparameter training, exporting the final model state as a serialized binary.",
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
  email_address: "maheshnibe.dev@gmail.com"
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
