export const portfolioData = {
  personal: {
    name: "Ashan Mir",
    title: "Front-End Developer",
    tagline: "Turning ideas into interactive and responsive web experiences",
    email: "ashanmirofficial@gmail.com",
    phone: "+92-319-0799711",
    location: "Islamabad, Pakistan",
    avatar: "src/assets/profile.jpeg",
    resume: "src/assets/resume.pdf"
  },

  about: {
    intro: "I’m a passionate junior front-end developer with a strong foundation in modern web technologies. I enjoy crafting clean, responsive, and engaging user interfaces, and I’m always eager to learn and grow in a collaborative environment.",
    highlights: [
      "Proficient in HTML, CSS, JavaScript, and React.js",
      "Strong understanding of responsive and mobile-first design",
      "Built several personal and collaborative frontend projects",
      "Quick learner with a passion for UI/UX best practices"
    ]
  },


  skills: [
    { name: "HTML5/CSS3", level: 90, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 80, category: "Frontend" },
    { name: "React.js", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Responsive Design", level: 88, category: "Frontend" },

    { name: "Django", level: 50, category: "Backend" },

    { name: "MySQL", level: 60, category: "Database" },

    { name: "Git & GitHub", level: 75, category: "Tools" },
    { name: "Figma/Adobe XD", level: 70, category: "Design" }
  ],

  experience: [
    {
      title: "Frontend Professional Certification",
      company: "Coursea",
      period: "Dec 2024 – Jan 2025",
      description: "Certified in HTML5, CSS3, JavaScript, and React.js for web development."
    },
    {
      title: "Freelance Projects",
      company: "Self-employed - Team Work",
      period: "2024 – Present",
      description: "Designed and developed multiple client websites and personal projects with clean code practices and performance optimization in mind."
    }
  ],

  projects: [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS to showcase my skills, resume, and projects.",
      image: "https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS"],
      category: "Web",
      demoUrl: "#",
      githubUrl: "https://github.com/ashanmir/portfolio",
      featured: true,
      challenges: "Designed a responsive layout and integrated modular components.",
      results: "Improved my understanding of reusable components and responsive design."
    },
    {
      id: 2,
      title: "Note App Project",
      description: "A simple Note management app to add, remove, and mark tasks, styled.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      demoUrl: "#",
      githubUrl: "https://github.com/Mikey-Here3/Note-app-Project-For-Begineers-Web-Development",
      featured: false,
      challenges: "Implemented dynamic DOM manipulation and localStorage persistence.",
      results: "Enhanced my JavaScript fundamentals and code organization skills."
    }
  ],

  social: {
    github: "https://github.com/Mikey-Here3",
    linkedin: "https://www.linkedin.com/in/ashan-a-444a35348/",
    email: "ashanmirofficial@gmail.com"
  }

};
