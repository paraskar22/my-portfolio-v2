import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  r,
  html,
  anaconda,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  nirma,
  liu,
  cj,
  simplex,
  pycharm,
  match,
  book,
  movie,
  custom,
  probuddy,
  brik,
} from "../assets";

export const navLinks = [
  {
    id: "linkedin",
    icon: "/linkedin.png", 
    url: "https://www.linkedin.com/in/vaishali-paraskar-23b2691a7/",
  },
  {
    id: "github",
    icon: "/github.png", 
    url: "https://github.com/paraskar22",
  },
  {
    id: "email",
    icon: "/mail.png", 
    url: "mailto:paraskar06.vaishali@gmail.com",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer Intern ",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Reader",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "pycharm",
    icon: pycharm,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "anaconda",
    icon: anaconda,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "r",
    icon: r,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "BRIK Partners INC. | Remote | USA",
    icon: brik,
    iconBg: "#708090",
    date: "Sep 2024 – Present",
    points: [
      "Leading backend architecture using Django, Node.js, and MongoDB to build scalable web platforms.",
      "Integrated Stripe, Firebase, and GraphQL APIs to support e-commerce and SaaS applications.",
      "Deployed containerized applications with Docker, managed CI/CD via GitHub Actions, and used Terraform for infra provisioning.",
      "Designed and implemented frontend interfaces using React, Next.js, and Radix UI for performance and accessibility.",
      "Mentoring junior developers and conducting code reviews to maintain code quality and accelerate delivery."
    ],
  },
  {
    title: "Master of Computer Science",
    company_name: "Long Island University | Brooklyn | NY",
    icon: liu,
    iconBg: "#383E56",
    date: "Sep 2023 – May 2025",
    points: [
      "GPA: 3.07 / 4.0",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "SimplexDiam | New York | USA",
    icon: simplex,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Aug 2024",
    points: [
      "Built internal inventory management and operations dashboard using React.js, Node.js, and PostgreSQL.",
      "Developed backend APIs with Express.js and deployed microservices on AWS (Lambda,S3).",
      "Enhanced UI/UX using Tailwind CSS, Material UI, and React hooks, increasing user task efficiency.",
      "Improved query performance by 30% through PostgreSQL indexing and refactoring.",
      "Followed agile practices and collaborated across teams for fast-paced feature delivery."
    ],
  },
  {
    title: "Software Developer",
    company_name: "PRO Buddy | Remote | INDIA",
    icon: probuddy,
    iconBg: "#383E56",
    date: "Aug 2019 – Dec 2022",
    points: [
       "Developed and maintained scalable full-stack applications using React.js, Next.js, and Node.js, supporting both internal teams and external clients.",
        "Engineered modular backend services with Express.js and Django REST Framework, processing over 100K API calls per day acrossmicroservices.",
        "Designed and deployed cloud-based infrastructure on AWS (EC2, S3, Lambda) using Docker containers and CI/CD pipelines with GitHub Actions.",
        "Built and integrated secure authentication systems with JWT, Firebase Auth, and OAuth2, ensuring data protection and user identity management.",
        "Improved system performance and scalability by optimizing PostgreSQL queries, implementing Redis caching, and introducing asynchronous job handling.",
        "Collaborated with UI/UX designers to craft responsive interfaces using Tailwind CSS, Material UI, and component-driven architecture in React.",
        "Integrated third-party services like Stripe, SendGrid, and Razorpay for billing, notifications, and payments, enhancing platform functionality.",
        "Led agile sprints, participated in code reviews, and ensured continuous delivery of well-tested features using Jest, PyTest, and best practices such as TDD, BDD, and CI/CD practices."
    ],
  },
  
  {
    title: "Master of Computer Application",
    company_name: "Nirma University | Ahmedabad | India",
    icon: nirma,
    iconBg: "#383E56",
    date: "Aug 2019 – Jun 2021",
    points: [
      "GPA: 3.07 / 4.0",
    ],
  },
  {
    title: "Bachelor of Computer Application",
    company_name: "C.J.Patel College of Computer Application | India",
    icon: cj,
    iconBg: "#E6DEDD",
    date: "Oct. 2015 – June 2018",
    points: [
      "GPA: 3.08 / 4.0",
    ],
  },
];

const testimonials = [
  // Uncomment and customize as needed
  /*
  {
    title: "AI For Everyone",
    organization: "Coursera - Andrew Ng",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo.svg",
    date: "March 2024",
    certificate_link: "https://coursera.org/verify/your-certificate-id",
  },
  */
];

const projects = [
  {
    name: "Advanced Matchmaking Algorithm System",
    description:
      "Engineered a sophisticated matchmaking system processing 100,000+ user profiles, using weighted algorithms based on personality, professional background, and interests. Developed a dynamic data generation pipeline and an intelligent scoring system, achieving 85% better matches by incorporating MBTI and hobby compatibility.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: match,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beyond - Book",
    description:
      "Developed a community-driven reading platform with AI-powered book recommendations.Implemented real-time chat and forums using Django Channels and WebSockets.Integrated Firebase for authentication and Django for backend services.Created analytics dashboards with Chart.js and Recharts to visualize reading habits.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Radix UI",
        color: "blue-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Recommendation System Using Auto Encoders",
    description:
      "Created a movie recommendation system using Auto Encoders, applying the Embarrassingly Shallow Auto Encoders algorithm for improved performance. Evaluated across datasets like Netflix and Million Songs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Platform for Custom Jewelry",
    description:
      "Built a full-featured e-commerce platform with Stripe-based secure checkout, SSR enabled Next.js pages, and MongoDB backend.      Implemented advanced search and filtering using Elasticsearch and aggregation pipelines for personalized product discovery.Designed an admin dashboard for inventory, orders, and analytics with real-time data management.Deployed on Vercel with optimized performance settings, improving SEO and reducing load times by over 40%.",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: custom,
    source_code_link: "https://github.com/",
  },
  
];

const certifications = [
  {
    name: "AWS Fundamentals: Going Cloud-Native",
    provider: "AWS",
    description:
      "Gained hands-on experience with AWS services like EC2, S3, and Lambda while learning core cloud-native architecture, scalability, and security principles.",
    cert_link: "/Coursera AWS.pdf",
    image: "/Coursera AWS.jpg",
  },
  {
    name: "Software Processes and Agile Practices",
    provider: "University of Alberta",
    description:
      "Learned key software development methodologies with a focus on Agile, Scrum, and iterative workflows to enhance team collaboration and project delivery.",
    cert_link: "/Coursera Software Processes and Agile Practices.pdf",
    image: "/Software.png",
  },
  {
    name: "IT Project Management",
    provider: "ISB",
    description:
      "Gained practical knowledge in planning, executing, and monitoring IT projects using tools like Gantt charts, risk assessment, and stakeholder management. Learned to align project goals with business objectives and deliver results within scope, time, and budget.",
    cert_link: "/Coursera IT Project Management.pdf",
    image: "/ISB.png",
  },
];

export { services, technologies, experiences, testimonials, projects, certifications, };
