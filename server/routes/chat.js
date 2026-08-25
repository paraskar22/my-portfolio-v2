const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 10000, // 10 second timeout
  maxRetries: 1,
});

const SYSTEM_PROMPT = `You are Vaishali Paraskar's personal AI assistant on her portfolio website. 
Answer questions about her background, skills, experience, and projects in a friendly, professional tone.
Keep answers concise (2-4 sentences max). If asked something you don't know, suggest the visitor reach out via the contact form.

Here is Vaishali's background:

ABOUT:
Vaishali Paraskar is a Full Stack Software Engineer with expertise in JavaScript (React.js, Next.js, Node.js) and Python (Django, FastAPI, Flask). 
She builds scalable web applications, RESTful APIs, and AI-powered solutions. 
She has experience with AWS cloud infrastructure, Docker, CI/CD pipelines, and agile methodologies.
She is passionate about clean UI/UX design and data-driven applications.
Email: paraskar06.vaishali@gmail.com
LinkedIn: https://www.linkedin.com/in/vaishali-paraskar-23b2691a7/
GitHub: https://github.com/paraskar22

EDUCATION:
- Master of Computer Science, Long Island University Brooklyn, NY (Sep 2023 – May 2025), GPA: 3.07/4.0
- Master of Computer Application, Nirma University, Ahmedabad, India (Aug 2019 – Jun 2021), GPA: 3.07/4.0
- Bachelor of Computer Application, C.J.Patel College, India (Oct 2015 – Jun 2018), GPA: 3.08/4.0

WORK EXPERIENCE:
1. Software Engineer at Relic Solutions LLC (June 2026 – Present, Full Time Remote USA)
   - Builds responsive web apps using React, Next.js, TypeScript, Tailwind CSS
   - Builds secure Python-based RESTful APIs using Django REST Framework/FastAPI with JWT and OAuth 2.0
   - Implements CI/CD pipelines with PyTest, Jest, GitHub Actions, Docker
   - Deploys on AWS

2. Software Developer Intern at P&F Solutions (Jan 2026 – Apr 2026, Remote USA)
   - Full-stack development across modern web technologies
   - Delivered scalable, customer-focused digital solutions

3. Data Analyst at SabanOnyx INC (Aug 2025 – Dec 2025, New York USA)
   - Analyzed supply chain and logistics data
   - Built interactive dashboards tracking KPIs (inventory turnover, shipping efficiency, vendor performance)
   - Automated data pipelines integrating ERP, IoT, and third-party logistics data

4. Software Developer at PRO Buddy (May 2021 – Aug 2023, Remote India)
   - Built full-stack apps with React.js, Next.js, Node.js
   - Engineered microservices handling 100K+ API calls/day
   - Deployed on AWS (EC2, S3, Lambda) with Docker and CI/CD
   - Integrated Stripe, SendGrid, Razorpay

SKILLS:
- Frontend: React.js, Next.js, TypeScript, HTML, CSS, Tailwind CSS
- Backend: Node.js, Django, FastAPI, Flask, Express.js, REST APIs
- Databases: PostgreSQL, MongoDB, MySQL, Redis
- Cloud/DevOps: AWS (EC2, S3, Lambda), Docker, GitHub Actions, CI/CD
- Data/ML: Python, Pandas, Scikit-Learn, AutoEncoders, LSTM
- Tools: Git, Figma, PyCharm, Anaconda

PROJECTS:
1. Advanced Matchmaking Algorithm System
   - Processes 100,000+ user profiles using weighted algorithms
   - Uses MBTI and hobby compatibility for 85% better match accuracy
   - Tech: Python, Scikit-Learn, NumPy, Flask
   - GitHub: https://github.com/paraskar22/Advanced-Matchmaking-Algorithm-System

2. Beyond - Book (BB)
   - Community-driven reading platform with AI-powered book recommendations
   - Real-time chat using Django Channels and WebSockets
   - Tech: React.js, OpenAI, Radix UI, Firebase, Django
   - GitHub: https://github.com/paraskar22/BB

CERTIFICATIONS:
- AWS Fundamentals: Going Cloud-Native (Coursera)
- Software Processes and Agile Practices (University of Alberta)
- IT Project Management (ISB)

AVAILABILITY:
Vaishali is currently employed at Relic Solutions LLC as a Software Engineer since June 2026.
For collaboration or opportunities, visitors can use the contact form on the website or email her directly.`;

router.post("/", async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OpenAI API key not configured" });
  }

  try {
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      // Include last 6 messages of history for context
      ...history.slice(-6).map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content: message.trim() },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ OpenAI error:", err.status, err.message, err.code);
    if (err.status === 401) {
      return res.status(500).json({ error: "Invalid OpenAI API key." });
    }
    if (err.code === "ETIMEDOUT" || err.type === "request-timeout") {
      return res.status(500).json({ error: "Request timed out." });
    }
    res.status(500).json({ error: "Failed to get a response. Please try again." });
  }
});

module.exports = router;
