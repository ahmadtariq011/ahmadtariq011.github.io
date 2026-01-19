
import { SkillCategory, Project, Achievement, Recommendation, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Hafiz Ahmad Tariq",
  role: "Senior Software Engineer",
  specialization: "Full Stack & Integration Specialist",
  summary: "Senior Software Engineer with over 6 years of experience building scalable enterprise solutions. I specialize in cloud-native integrations, .NET architectures, and automating complex business operations.",
  fullBio: "I am a Senior Software Engineer and former Microsoft Vendor (Contractor) specializing in creating secure, resilient, and maintainable integration architectures. During my tenure with Microsoft's internal engineering teams (CAM Team), I automated complex messaging workflows and high-scale delivery systems. My expertise bridges the gap between ERP ecosystems like Dynamics 365 F&O and external applications using Azure Logic Apps, Functions, and Service Bus. I am also proficient in the Power Platform, building intelligent apps that streamline modern workflows with a focus on production stability and security.",
  email: "ahmadtariq011@gmail.com",
  linkedIn: "https://www.linkedin.com/in/hafiz-ahmad-t-b36b70b7/",
  recommendationsLink: "https://www.linkedin.com/in/hafiz-ahmad-t-b36b70b7/details/recommendations/?detailScreenTabIndex=0",
  github: "https://github.com/hafiz-ahmad-tariq",
  location: "Remote / Hybrid",
  yearsExperience: "6+"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems",
    skills: [".NET 9 (C#)", "ASP.NET Core Web APIs", "Entity Framework Core", "SQL Server", "Unit Testing", "SignalR"]
  },
  {
    title: "Cloud & Integrations",
    skills: ["Azure Functions", "Logic Apps", "Service Bus", "API Management", "D365 F&O Integrations", "Storage Accounts", "Key Vault", "App Insights"]
  },
  {
    title: "Frontend & Web",
    skills: ["Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "RxJS"]
  },
  {
    title: "Power Platform & DevOps",
    skills: ["Power Apps", "Power Automate", "Dataverse", "Azure DevOps (CI/CD)", "GitHub Actions", "Git"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Microsoft (CAM Team)",
    role: "Software Engineer (Vendor/Contractor)",
    period: "Recent Expertise",
    description: "Collaborated directly with Microsoft internal engineering teams to build validation frameworks for high-scale email delivery systems. Developed automation using .NET, Selenium, and Adobe Campaign APIs.",
    tags: [".NET 6", "Azure", "Selenium", "ACS/AEM", "Automation"]
  },
  {
    company: "Janie & Jack",
    role: "Lead Integration Developer",
    period: "Enterprise Project",
    description: "Architected the integration layer between D365 F&O and external retail platforms. Leveraged Azure Functions, Logic Apps, and the Data Management Framework (DMF) to synchronize global inventory and orders.",
    tags: ["Azure Functions", "D365 F&O", "Logic Apps", "C#", "DMF"]
  },
  {
    company: "ShipLink",
    role: "Senior Full Stack Developer",
    period: "Product Development",
    description: "Developed ERP-integrated shipping solutions and high-performance web portals. Built internal order management tools and carrier connectivity modules using .NET Core and SQL Server.",
    tags: [".NET Core", "SQL Server", "TypeScript", "API Development"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Janie & Jack ERP Integration",
    problem: "Synchronize high-volume customer orders, AR/AP, and inventory across D365 F&O and external retail channels.",
    role: "Lead Integration Developer",
    technologies: ["Azure Functions", "Logic Apps", "D365 F&O", "DMF", ".NET Core"],
    solution: "Designed and implemented a high-performance integration layer using Azure serverless architecture and Data Management Framework (DMF) for robust product master data handling.",
    impact: "Unified integration layer improving data accuracy and retail operational efficiency globally.",
    imageUrl: "https://filardi.cloud/wp-content/uploads/2020/06/image-47.png"
  },
  {
    id: "p2",
    name: "Omni-Channel Messaging – Microsoft (CAM)",
    problem: "The Microsoft Messaging Engineering team required high-scale automation to validate complex workflows for email delivery readiness.",
    role: "Software Engineer (Vendor/Contractor)",
    technologies: [".NET 6", "C#", "Selenium", "Adobe Campaign (ACS/AEM)", "Azure Services"],
    solution: "Automated Omni-Channel Messaging workflows and report validation using .NET and Selenium. Integrated with Adobe Campaign Standard APIs to ensure 100% reporting accuracy.",
    impact: "Reduced manual testing time significantly and ensured reliable messaging delivery for mission-critical internal teams.",
    imageUrl: "https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/12/microsoft-headquarters-fdi.jpg"
  },
  {
    id: "p3",
    name: "ShipLink Enterprise Web & ERP Portal",
    problem: "A unified platform for shipment management, carrier connectivity, and internal order tracking with deep ERP integration.",
    role: "Full Stack & ERP Developer",
    technologies: [".NET Core", "SQL Server", "Azure Functions", "Logic Apps", "TypeScript"],
    solution: "Developed the ShipLink web ecosystem and internal ERP-integrated applications for shipment tracking and carrier management, focusing on high-performance scalability.",
    impact: "Streamlined logistics workflows for global shipping operations with high-performance ERP connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=1200"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Azure Solutions Architect",
    description: "Expertise in designing and implementing solutions that run on Microsoft Azure."
  },
  {
    title: "Process Automation Lead",
    description: "Successfully automated workflows for enterprise clients, saving thousands of manual hours."
  },
  {
    title: "Problem-Solving Mindset",
    description: "Known for ownership of complex integrations and delivering measurable business value."
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: "Mahmood ul Hassan",
    role: "Software Professional",
    company: ".NET Solutions",
    content: "Ahmed demonstrated exceptional technical expertise, particularly in .NET development. His problem-solving skills and dedication to delivering high-quality results were instrumental to the project's success.",
    avatar: "",
    tag: "Azure & .Net specialist"
  },
  {
    name: "Jayser Mendez",
    role: "Team Lead",
    company: "Test Automation",
    content: "I highly recommend Ahmad for his exceptional work in automating tasks. He demonstrated excellent skills in Selenium, C#, and Nunit. As a team lead, I trusted Ahmad to deliver, and he did not disappoint.",
    avatar: "",
    tag: "Automation Specialist"
  },
  {
    name: "Rohit Mallya",
    role: "Engineering Professional",
    company: "Vendor Development",
    content: "Ahmad consistently delivered solid solutions, demonstrating a good understanding of the platform's capabilities. He was reliable and completed his tasks efficiently. I recommend Ahmad for Power Platform experience.",
    avatar: "",
    tag: "Power Platform Expert"
  }
];
