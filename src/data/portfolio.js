// Single Source of Truth for Heshan Hettiarachchi's Portfolio
// Derived ONLY from user-provided facts without invented metrics, testimonials, employers, or skills.

export const portfolioData = {
  personal: {
    name: "Heshan Hettiarachchi",
    title: "BSc (Hons) Computer Science undergraduate — seeking software engineering internship",
    location: "Sri Lanka",
    status: "Seeking Software Engineering Internship",
    contact: {
      email: "nheshan177@gmail.com",
      github: "https://github.com/heshan3939",
      linkedin: "https://www.linkedin.com/in/nipuna-heshan-8b2810339"
    }
  },

  summary: "Second-year BSc (Hons) Computer Science undergraduate with hands-on full-stack experience across C#, PHP (Laravel), JavaScript (React.js/Node.js), and AWS cloud infrastructure. Delivered projects spanning event ticketing, e-commerce, and multi-tier AWS migration, including leading a 4-person Agile team through a 3-sprint software project.",

  projects: [
    {
      id: "aws-migration",
      title: "AWS Cloud Migration & Infrastructure Design",
      role: "Cloud Infrastructure Architect / Engineer",
      period: "Oct–Nov 2025",
      link: "https://lnkd.in/p/g7phMFUs",
      linkText: "View Case Study",
      linkIsGithub: false,
      category: "Cloud & DevOps",
      featured: true,
      cardSummary: "Multi-tier AWS infrastructure with CloudFormation IaC, targeting high availability across two availability zones with a 30 % simulated cost reduction.",
      problem: "An on-premises system needed migrating to AWS with high-availability and cost-optimisation requirements across multiple availability zones.",
      hasArchDiagram: true,
      highlights: [
        "Designed and deployed a multi-tier AWS infrastructure (EC2, S3, RDS, VPC) using CloudFormation Infrastructure-as-Code, targeting high availability across 2 availability zones.",
        "Analyzed an on-premises system and produced a cloud migration plan with cost-optimization modelling, estimating a 30% reduction in simulated infrastructure costs.",
        "Configured VPC subnets, security groups, and IAM roles for least-privilege access."
      ],
      stack: ["AWS", "CloudFormation", "EC2", "S3", "RDS", "VPC", "IAM"]
    },
    {
      id: "eventix",
      title: "Eventix — Event Ticket Booking System",
      role: "Full-Stack Developer",
      period: "Feb–Apr 2026",
      link: "https://github.com/heshan3939/Eventix",
      linkText: "GitHub Repository",
      linkIsGithub: true,
      category: "Full-Stack Web",
      featured: true,
      cardSummary: "Full-stack ticketing platform in Laravel and MySQL with role-based access, real-time seat availability, and booking confirmation emails.",
      problem: "Needed a web-based event ticketing system supporting Admin, Organiser, and Customer roles with real-time seat management.",
      hasArchDiagram: false,
      highlights: [
        "Full-stack ticketing platform in Laravel (PHP) and MySQL with event creation, seat reservation, and authentication.",
        "Role-based access control for Admin, Organizer, and Customer, with real-time seat availability and booking confirmation emails.",
        "Normalised MySQL schema across 6 tables."
      ],
      stack: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      id: "dairylink",
      title: "Nestlé Dairy Chain Connect (DairyLink)",
      role: "Agile Team Lead, Full-Stack Developer",
      period: "Jan–May 2026",
      link: "https://github.com/Laksan-P/diary-chain-connect",
      linkText: "GitHub Repository",
      linkIsGithub: true,
      category: "Full-Stack Web & Mobile",
      featured: true,
      cardSummary: "Dairy supply-chain management system built across 3 Agile sprints by a 4-person team, with web and mobile interfaces on React.js, Flutter, and Supabase.",
      problem: "Nestlé required a supply-chain management tool for dairy operations, to be delivered iteratively using Agile methodology.",
      hasArchDiagram: false,
      highlights: [
        "Led a 4-person team across 3 Agile sprints for a dairy supply chain management system, rotating through Business Analyst (Sprint 1), Scrum Master/Developer (Sprint 2), and QA (Sprint 3).",
        "Built with TypeScript, JavaScript, Dart, Flutter, Tailwind CSS, React.js, Node.js, Supabase (PostgreSQL); produced database schemas, UML diagrams, and sprint documentation.",
        "Ran stand-ups, sprint planning, and retrospectives; delivered all sprint milestones on schedule."
      ],
      stack: ["TypeScript", "JavaScript", "Dart", "Flutter", "Tailwind CSS", "React.js", "Node.js", "Supabase"]
    },
    {
      id: "event-desktop",
      title: "Event Ticketing System (Desktop)",
      role: "Desktop Software Engineer",
      period: "Apr–Jun 2025",
      link: "https://github.com/heshan3939/SDAM-FINAL",
      linkText: "GitHub Repository",
      linkIsGithub: true,
      category: "Desktop & C#",
      featured: false,
      cardSummary: "Windows Forms desktop app in C# with full CRUD, seat reservation, ticket cancellation, and receipt generation against MS SQL Server.",
      problem: "Required a desktop application for event ticket management applying OOP principles and the MVC pattern.",
      hasArchDiagram: false,
      highlights: [
        "Windows Forms app in C# applying OOP (inheritance, encapsulation, polymorphism) and MVC.",
        "Full CRUD with MS SQL Server, including seat reservation, ticket cancellation, and receipt generation."
      ],
      stack: ["C#", "Windows Forms", "MS SQL Server"]
    },
    {
      id: "ecommerce-web",
      title: "Computer Parts E-Commerce Web App",
      role: "Front-End & Database Developer",
      period: "Nov 2024–Jan 2025",
      link: "https://github.com/heshan3939/wdos-assignment",
      linkText: "GitHub Repository",
      linkIsGithub: true,
      category: "Web Development",
      featured: false,
      cardSummary: "Multi-page e-commerce site with dynamic product filtering, localStorage cart persistence, and a MySQL backend for products and orders.",
      problem: "Needed a web storefront for computer parts with a shopping cart, product filtering, and order management.",
      hasArchDiagram: false,
      highlights: [
        "Multi-page web app with HTML, CSS, JavaScript, localStorage cart persistence, and a MySQL backend for products and orders.",
        "Dynamic product filtering, order summaries, responsive mobile-first UI."
      ],
      stack: ["HTML", "CSS", "JavaScript", "MySQL"]
    }
  ],

  skills: [
    {
      category: "Languages",
      items: ["C#", "JavaScript (ES6+)", "PHP", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks",
      items: ["Laravel", "React.js", "Node.js"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MS SQL Server", "Supabase"]
    },
    {
      category: "Cloud",
      items: [
        "AWS (EC2, S3, RDS, VPC, IAM, CloudFormation, Security Groups, Multi-AZ, CloudWatch)"
      ]
    },
    {
      category: "Tools",
      items: ["GitHub", "Visual Studio", "MySQL Management Studio", "Google Antigravity"]
    },
    {
      category: "Methodologies",
      items: ["Agile/Scrum"]
    },
    {
      category: "Architecture",
      items: ["MVC", "REST API design", "OOP", "CRUD", "UML"]
    }
  ],

  education: [
    {
      institution: "APIIT",
      degree: "BSc (Hons) in Computer Science",
      period: "2024–present",
      note: "Computing Foundation completed"
    },
    {
      institution: "D.S. Senanayake College, Colombo 7",
      degree: "G.C.E. A/L, Mathematics stream",
      period: "2022/23"
    },
    {
      institution: "Aquinas College of Higher Studies",
      degree: "Diploma in English Language and Literature",
      period: "2023–2024"
    }
  ]
};
