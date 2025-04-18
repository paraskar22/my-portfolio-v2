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
  bisag,
  simplex,
  advantmed,
  pycharm,
  match,
  book,
  movie,
} from "../assets";

export const navLinks = [
  {
    id: "linkedin",
    icon: "/linkedin.png", // Correct path to your icon image
    url: "https://www.linkedin.com/in/vaishali-paraskar-23b2691a7/",
  },
  {
    id: "github",
    icon: "/github.png", // Correct path to your icon image
    url: "https://github.com/paraskar22",
  },
  {
    id: "email",
    icon: "/mail.png", // Correct path to your icon image
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
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Intern",
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
    title: "Master of Computer Science",
    company_name: "Long Island University | Brooklyn | NY",
    icon: liu,
    iconBg: "#383E56",
    date: "Sep 2023 – May 2025",
    points: [
      "GPA: 3.08 / 4.0",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "SimplexDiam | New York | USA",
    icon: simplex,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Aug 2024",
    points: [
      "Developed predictive models to optimize inventory management, reducing overstock by 25%.",
      "Conducted data cleaning and preprocessing on large datasets, improving model accuracy.",
      "Designed interactive dashboards in Power BI to visualize key business metrics.",
      "Implemented NLP-based sentiment analysis to enhance customer insights.",
      "Automated ETL workflows for real-time data updates, reducing manual processing time by 40%.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Advantmed India LLP | Gandhinagar | INDIA",
    icon: advantmed,
    iconBg: "#383E56",
    date: "Aug 2021 – Jul 2023",
    points: [
      "Built an AI-powered analytics dashboard for healthcare data visualization.",
      "Designed REST APIs to integrate machine learning models into web applications.",
      "Optimized SQL queries to enhance data retrieval performance.",
    ],
  },
  {
    title: "Intern - Face Recognition Based Attendance System",
    company_name: "BISAG-N | Gandhinagar | INDIA",
    icon: bisag,
    iconBg: "#708090",
    date: "Jan 2021 – Apr 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "AI-Powered Book Club & Reading Community",
    description:
      "Implemented NLP-based book recommendations and real-time discussion forums using WebSockets. Developed a collaborative reading tracking system with personalized suggestions, Firebase authentication for secure user management, and enhanced user engagement through an intuitive interface.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
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
