
export const professionalSummary = `Software Engineer and Full Stack Developer passionate about creating efficient, high-impact technological solutions. Experienced in end-to-end application development (front-end and back-end). I possess a strong understanding of software architectures and agile methodologies. My focus is on delivering quality products. I am seeking opportunities to add value and continue growing professionally in dynamic environments.`;

export const technologies = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL", 
  "Django", "React Js", "Next Js", "Express Js", "GitHub", "Git", "Vite"
];

export const skills = [
  "Punctuality and responsibility.",
  "Efficient and effective.",
  "Assertive communicator.",
  "Versatility to perform successfully both in collaborative environments and in roles requiring autonomy and self-management.",
  "Capacity for analysis and research.",
  "Proactive problem-solving and overcoming obstacles.",
  "Competent management of obligations and commitments in both professional and personal settings."
];

export const experiences = [
  {
    role: "INDEPENDENT PROGRAMMER",
    period: "2024-2025",
    description: "I developed a recipe platform that integrates Artificial Intelligence for culinary content generation. The application allows users to obtain and save recipes, as well as perform traditional searches. Deployed on Railway, it utilizes the PERN stack and consumes HuggingFace models for its AI functionalities.",
    imagePlaceholder: "/Chef.jpg", // Replace with your actual screenshot
    liveLink: "https://master-chef-frontend-production.up.railway.app", // Replace with your actual live link
  },
  {
    role: "INDEPENDENT PROGRAMMER",
    period: "2023-2024",
    description: "I created and deployed a dynamic news site on Railway, implementing two-factor authentication (2FA) via OTP or verification link, based on user preference. The project was developed using the PERN stack (PostgreSQL, Express.js, React.js, Node.js) and integrated the News API for content retrieval. Additionally, I successfully deployed a secure and efficient authentication system on Vercel, using Clerk and leveraging Tailwind CSS and Shadcn/ui technologies.",
    imagePlaceholder: "/Noticias.webp", // Replace with your actual screenshot
    liveLink: "https://frontend-react-production-6e44.up.railway.app", // Replace with your actual live link
  },
  {
    role: "INDEPENDENT PROGRAMMER",
    period: "2023-2024",
    description: "I successfully deployed a secure and efficient authentication system on Vercel, using Clerk and leveraging Tailwind CSS and Shadcn/ui technologies.",
    imagePlaceholder: "/Clerk.jpg", // Replace with your actual screenshot
    liveLink: "https://authclerk-pi.vercel.app/", // Replace with your actual live link
  },
  {
    role: "INDEPENDENT PROGRAMMER",
    period: "2022-2023",
    description: "I developed 'Hoteles.SA,' a desktop software system. This management solution was specifically designed for upscale (3+ star) 'Sun and Beach' hotels in Cuba, with a focus on optimizing resource management and improving operational efficiency.",
    imagePlaceholder: "/Hotelsa.webp", // Replace with your actual screenshot
  },
  {
    role: "EPFO-VC COMPUTER ENGINEER",
    period: "2016-2021",
    description: "Responsible for the comprehensive management of the company's technological infrastructure and cybersecurity, including its 52 units distributed throughout the province. My main responsibilities included: Proactive maintenance, installation, and updating of servers and client equipment to ensure operational continuity and optimal performance. Monitoring and compliance with the institution's specific technological and software requirements, ensuring system integrity and availability. Implementation and management of cybersecurity policies to protect the company's information assets.",
  },
  {
    role: "IPVCE ERNESTO GUEVARA PROFESSOR",
    period: "2014-2016",
    description: "Lead Teacher of Mathematics and English for 10th and 11th-grade students, responsible for the instruction and academic progress of eight groups. My duties included designing and implementing curricula and planning lessons tailored to student needs. Additionally, I actively participated as a member of the Mathematics evaluation panel, contributing to the grading of entrance exams.",
  },
];

export const education = [
  {
    degree: "Degree in Computer Engineering",
    institution: "HIGHER EDUCATION UCLV MARTA ABREU",
    period: "2010-2014",
  },
  {
    degree: "BACCALAUREATE",
    institution: "IPVCE ERNESTO GUEVARA",
    period: "2007-2010",
  },
];

export const contactInfo = {
  phone: "(53) 55405073",
  email: "edortacardenas@gmail.com", // Removed "https://" for cleaner mailto and display
  github: "https://github.com/edortacardenas",
  address: "Sindico#58 b/ Colon y Bonifacio M. streets. Villa Clara, Santa Clara.",
};

export const languages = [
  { lang: "Spanish", level: "Native" },
  { lang: "English", level: "C1", certificateLink: "http://cert.efset.org/AuHvM8" },
];

// Reusable animation variant for sections
export const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};