# Portfolio Frontend Architecture & Project API Directory

This document provides a comprehensive blueprint of your React portfolio platform's structure, smooth-scroll navigations (simulated pages), and the API structures of your underlying engineering project dossiers.

---

## 1. Frontend Portfolio Architecture & Simulated Pages
Your portfolio is designed as a high-performance **Single Page Application (SPA)** with lazy-loaded modules. It simulates distinct page navigations via smooth-scroll anchors linked directly to active React containers.

### Anchor Navigation Directory (Simulated Pages)
Below is the mapping of each navigational link in the Header to its corresponding React container and configuration model:

| Navigation Item | Anchor Link | React Container File | Configuration Source (`src/portfolio.js`) |
| :--- | :--- | :--- | :--- |
| **Hero / Terminal** | `#greeting` | `src/containers/greeting/Greeting.js` | `greeting` |
| **Competencies** | `#skills` | `src/containers/skills/Skills.js` | `skillsSection` |
| **Architecture** | `#architecture` | `src/containers/architecture/Architecture.js` | `architectureSection` |
| **Education** | `#education` | `src/containers/education/Education.js` | `educationInfo` |
| **Experience** | `#experience` | `src/containers/workExperience/WorkExperience.js` | `workExperiences` |
| **Case Studies** | `#projects` | `src/containers/projects/Projects.js` | `engineeringProjects` |
| **Contact** | `#contact` | `src/containers/contact/Contact.js` | `contactInfo` |

---

## 2. Shared Assets & Data APIs
The React application reads local static data files to render dynamic components asynchronously, improving First Contentful Paint (FCP) and SEO:

### Local JSON Feeds
*   **GitHub Profile Feed**: `/profile.json`
    *   **Usage**: Fetched by `src/containers/profile/Profile.js` to render the `GithubProfileCard` showing follower stats, bios, and repository pins asynchronously.
    *   **Fallback**: Reverts gracefully to static `Contact` view if the network is down or the file is missing.

---

## 3. Engineering Projects API & Endpoint Index
Since your portfolio positions you as a **Backend-focused Systems Engineer**, recruiters will drill down on your project APIs. Below is the directory of all REST API endpoints and systems of the projects highlighted in your master dossier:

### ☕ Cafe Website (Spring Boot REST API)
*   **Tech Stack**: Spring Boot 3, Spring Security, JWT, PostgreSQL, Nginx
*   **Security Perimeter**: Stateless JWT Filter Chain with Role-Based Access Control (RBAC)

| Method | Endpoint | Description | Access Level |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Customer / Employee registration | Public |
| **POST** | `/api/auth/login` | Secure authentication; issues short-lived JWT | Public |
| **GET** | `/api/menu` | Retrieves the dynamic active cafe menu | Public / Client |
| **POST** | `/api/menu` | Inserts / updates menu items (CRUD) | Admin / Staff |
| **POST** | `/api/orders` | Place a real-time order with shopping cart data | Authorized Client |
| **GET** | `/api/orders` | Track pending / completed order queue | Staff / Admin |
| **POST** | `/api/feedback` | Submit dynamic loyalty customer reviews | Authorized Client |

---

### 📝 Blogging App (Node.js/Express MVC API)
*   **Tech Stack**: Node.js, Express.js, MongoDB, Mongoose ORM, EJS, Multer
*   **Security Perimeter**: JWT stored in HTTP-Only cookies, Helmet HTTP headers, Rate Limiting, `sanitize-html` XSS filter.

| Method | Endpoint | Description | Access Level |
| :--- | :--- | :--- | :--- |
| **POST** | `/user/signUp` | Dynamic email-password registration | Public |
| **POST** | `/user/signIn` | Validates credentials; sets HTTP-Only JWT Cookie | Public |
| **GET** | `/user/logout` | Clears the HTTP-Only cookie session | Public |
| **POST** | `/blog/add_new_blog` | Accepts multipart form (Multer cover image upload) | Authorized User |
| **GET** | `/blog/:id` | Server-Side Renders a specific blog post | Public |
| **PUT** | `/blog/:id` | Modifies blog details (restricted to owner) | Content Owner |
| **DELETE** | `/blog/:id` | Removes blog and cascades comment deletions | Content Owner |
| **POST** | `/blog/comment/:blogId` | Append persistent nested comments to a post | Authorized User |

---

### 🛡️ High-Performance Rate Limiter (Spring Boot + Redis Middleware)
*   **Tech Stack**: Java 21, Spring Boot 3.5, Redis (Spring Data Redis)
*   **Architecture**: Interceptor pattern (`HandlerInterceptor`) executing atomic Redis lookups prior to routing.

| Interceptor Hook | Metric Tracked | Redis Storage Key | Mechanism |
| :--- | :--- | :--- | :--- |
| `preHandle()` | Request Rate / IP | `rate:limit:ip:<IP_ADDRESS>` | Atomic decrements; sliding window counter |
| `preHandle()` | Request Rate / JWT Token | `rate:limit:token:<JWT_SUB>` | Token bucket atomic check |

---

### 🔗 ShortURL-Handler (Node.js + Swagger Documented API)
*   **Tech Stack**: Node.js, Express, MongoDB, Swagger-UI, Docker Compose
*   **Redirection Method**: HTTP 302 Temporary Redirect

| Method | Endpoint | Description | Documentation |
| :--- | :--- | :--- | :--- |
| **GET** | `/api-docs` | Interactive Swagger UI API playground | Open API / Swagger |
| **GET** | `/api/health` | Service health heartbeat endpoint | Public |
| **POST** | `/shorten` | Takes a destination URL; returns unique base62 string | Authorized Client |
| **GET** | `/:shortId` | Redirects to destination URL; logs analytics | Redirect Engine |
| **GET** | `/analytics/:shortId` | Returns click volume, timestamps, and referrers | Authorized Creator |

---

### 🛠️ E-commerce Database Integrity App (MySQL Trigger API)
*   **Tech Stack**: React, Express, MySQL, raw SQL Triggers
*   **Database Automations**: Business constraints executed strictly at the DB layer via custom triggers.

| SQL Trigger File | Triggering Event | DB Action Taken | Business Logic Enforced |
| :--- | :--- | :--- | :--- |
| `check_stock_before_order` | `BEFORE INSERT ON order_items` | Checks stock availability; throws SQL State error if negative | Prevents selling unavailable inventory |
| `decrement_stock_on_order` | `AFTER INSERT ON order_items` | Deducts product stock dynamically in `products` table | Syncs physical inventory instantly |
| `audit_order_history` | `AFTER UPDATE ON orders` | Inserts old order state into `order_audit` history | Enforces transparent purchase tracking |

---

### 💻 Simple-Lang Compiler (Systems Programming CLI API)
*   **Tech Stack**: C++, Makefile, 8-Bit accumulator assembly ISA
*   **Execution Command Line API**:

```bash
# Compilation pipeline
./simple_compiler source.sl output.asm

# Phase 1: Lexical analysis (output tokens)
./simple_compiler --lex source.sl

# Phase 2: AST Construction (grammar checks)
./simple_compiler --ast source.sl
```
