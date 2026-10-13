// Central content for the portfolio. Edit links/text here.
// `icon` values are keys mapped to real SVG icons in the components.

export const about = {
  paragraphs: [
    "I'm a Full Stack Software Developer with experience building enterprise applications, e-commerce platforms, management systems, and mobile applications.",
    "My primary expertise lies in Microsoft's .NET ecosystem, where I develop secure REST APIs, scalable back-end services, and business applications using ASP.NET Core and C#. On the front-end, I create responsive, interactive interfaces with React and React Native.",
    "I enjoy learning new technologies, solving complex business challenges, and creating software that makes people's work easier. Outside of coding, I'm interested in UI/UX design, AI-powered applications, IoT automation, and cloud infrastructure.",
  ],
  objective:
    'To build innovative software solutions that solve real-world business problems while continuously growing my expertise in modern web, mobile, cloud, and enterprise technologies — delivering high-quality software and embracing new best practices.',
}

export const whyChooseMe = [
  'Clean and maintainable code',
  'Modern UI/UX design',
  'Secure application architecture',
  'Responsive across all devices',
  'Scalable software solutions',
  'Performance optimized applications',
  'Reliable communication',
  'On-time project delivery',
  'Long-term technical support',
]

// Skills grouped by category (rendered in this category order).
export const skillCategories = ['Frontend', 'Backend', 'Database', 'Cloud & Deployment', 'Tools']

export const skills = [
  // Frontend
  { icon: 'react', name: 'React.js', cat: 'Frontend' },
  { icon: 'reactnative', name: 'React Native', cat: 'Frontend' },
  { icon: 'typescript', name: 'TypeScript', cat: 'Frontend' },
  { icon: 'js', name: 'JavaScript', cat: 'Frontend' },
  { icon: 'html', name: 'HTML5', cat: 'Frontend' },
  { icon: 'css', name: 'CSS3', cat: 'Frontend' },
  { icon: 'tailwind', name: 'Tailwind CSS', cat: 'Frontend' },
  { icon: 'bootstrap', name: 'Bootstrap', cat: 'Frontend' },
  // Backend
  { icon: 'csharp', name: 'C#', cat: 'Backend' },
  { icon: 'aspnet', name: 'ASP.NET Core', cat: 'Backend' },
  { icon: 'efcore', name: 'EF Core', cat: 'Backend' },
  { icon: 'api', name: 'REST APIs', cat: 'Backend' },
  { icon: 'jwt', name: 'JWT Auth', cat: 'Backend' },
  // Database
  { icon: 'sqlserver', name: 'SQL Server', cat: 'Database' },
  { icon: 'mysql', name: 'MySQL', cat: 'Database' },
  // Cloud & Deployment
  { icon: 'hostinger', name: 'Hostinger VPS', cat: 'Cloud & Deployment' },
  { icon: 'linux', name: 'Linux (Ubuntu)', cat: 'Cloud & Deployment' },
  { icon: 'firebase', name: 'Firebase', cat: 'Cloud & Deployment' },
  { icon: 'vercel', name: 'Vercel', cat: 'Cloud & Deployment' },
  { icon: 'iis', name: 'IIS', cat: 'Cloud & Deployment' },
  // Tools
  { icon: 'visualstudio', name: 'Visual Studio', cat: 'Tools' },
  { icon: 'vscode', name: 'VS Code', cat: 'Tools' },
  { icon: 'git', name: 'Git', cat: 'Tools' },
  { icon: 'github', name: 'GitHub', cat: 'Tools' },
  { icon: 'androidstudio', name: 'Android Studio', cat: 'Tools' },
  { icon: 'postman', name: 'Postman', cat: 'Tools' },
]

export const services = [
  { icon: 'webapp', title: 'Web Application Development', desc: 'Custom, end-to-end web applications built with ASP.NET Core and React — clean architecture and secure server-side logic.' },
  { icon: 'enterprise', title: 'Enterprise Software Development', desc: 'Scalable business software and management systems tailored to real-world operational needs.' },
  { icon: 'ecommerce', title: 'E-Commerce Solutions', desc: 'Complete online stores with carts, secure checkout, order tracking, and admin dashboards.' },
  { icon: 'mobile', title: 'Mobile App Development', desc: 'Cross-platform mobile apps with React Native — smooth, native-feeling experiences on Android.' },
  { icon: 'api', title: 'REST API Development', desc: 'Robust, secure RESTful APIs with JWT authentication to power web and mobile front-ends.' },
  { icon: 'dashboard', title: 'Admin Dashboard Development', desc: 'Powerful admin panels with analytics, inventory, and full content management.' },
  { icon: 'management', title: 'Business Management Systems', desc: 'Systems to digitize expenses, workers, inventory, reports, and day-to-day operations.' },
  { icon: 'database', title: 'Database Design', desc: 'Well-structured SQL Server / MySQL schemas designed for performance and reliability.' },
  { icon: 'deploy', title: 'Website Deployment', desc: 'Deployment to cloud servers, VPS, and IIS — configured for speed and uptime.' },
  { icon: 'maintenance', title: 'Website Maintenance', desc: 'Ongoing updates, monitoring, and improvements to keep your product healthy.' },
  { icon: 'consulting', title: 'Technical Consulting', desc: 'Guidance on architecture, tech stack, and digital transformation decisions.' },
]

export const process = [
  { n: '01', title: 'Requirement Analysis', desc: 'Understanding your goals, users, and business requirements in detail.' },
  { n: '02', title: 'Planning & Architecture', desc: 'Designing a scalable structure, data models, and the right tech stack.' },
  { n: '03', title: 'UI / UX Design', desc: 'Crafting clean, intuitive interfaces focused on great user experience.' },
  { n: '04', title: 'Development', desc: 'Building secure, maintainable features with modern best practices.' },
  { n: '05', title: 'Testing', desc: 'Verifying functionality, performance, and reliability across devices.' },
  { n: '06', title: 'Deployment', desc: 'Shipping to cloud servers and VPS with a smooth, reliable release.' },
  { n: '07', title: 'Maintenance & Support', desc: 'Ongoing updates, monitoring, and long-term technical support.' },
]

export const experience = [
  {
    role: 'Full Stack .NET Developer',
    badge: '2025 – Present',
    company: 'Trimed Technologies · India',
    desc: 'Developing scalable web applications with ASP.NET Core and secure REST APIs, designing responsive React front-ends, and building cross-platform mobile apps with React Native. Integrating SQL databases, implementing authentication and authorization, deploying to cloud servers and VPS, and optimizing application performance across the software development lifecycle.',
    tags: ['ASP.NET Core', 'C#', 'React', 'React Native', 'SQL Server', 'REST APIs'],
  },
  {
    role: 'Freelancer',
    badge: 'Ongoing · Since 2025',
    company: 'Self-Employed',
    desc: 'Delivering end-to-end websites and applications for clients — from React and React Native front-ends and ASP.NET back-ends to fully managed WordPress sites. Handling everything from UI design and development to deployment and support.',
    tags: ['React', 'ASP.NET Core', 'React Native', 'WordPress', 'UI/UX'],
  },
  {
    role: 'Web Development Intern',
    badge: 'Oct 2022',
    company: 'Coder Plays Software and IT Services · Tirupur, India',
    desc: 'Completed a Web Development Foundation Course as part of the internship program. Gained hands-on experience with modern web technologies, development workflows, and best practices in building responsive web applications.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Fundamentals'],
  },
]

export const projects = [
  {
    title: 'SKV Pyros — Cracker Store',
    desc: 'An online storefront for Sivakasi Diwali crackers with a 177-product catalogue across 12 categories, cart and checkout with WhatsApp order hand-off, all served from a shared ASP.NET Core REST API.',
    tech: ['React', 'Tailwind CSS', 'ASP.NET Core', 'MySQL'],
    link: 'https://skvpyros.in/',
  },
  {
    title: 'Tenkasi Fresh',
    desc: 'A complete e-commerce platform for fresh fruits and vegetables — customer ordering, secure authentication, shopping cart, order tracking, admin dashboard, inventory management, and a fully responsive UI.',
    tech: ['ASP.NET Core Web API', 'React', 'SQL Server', 'JWT Auth'],
    link: 'https://tenkasifresh.in/',
  },    
  {
    title: 'Vymox Drone',
    desc: 'A sleek marketing and product website for Vymox drones, showcasing drone models, features, and specifications with an immersive, modern UI and smooth interactions.',
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://www.vyomexdrones.com/',
  },
  {
    title: 'Bharath Oxygen — Stock & Delivery',
    desc: 'A stock allocation and delivery management system for an industrial gas supplier — cylinder inventory, allocation, delivery tracking, and dashboards with charts.',
    tech: ['React', 'TypeScript', 'TanStack Query', 'Recharts'],
    link: 'https://gas-company-chi.vercel.app/',
  },
  {
    title: 'K76 Financial',
    desc: 'A finance management application for lending, chit funds, and collections, with dashboards and reports. Includes a demo mode so it runs without a backend.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    link: 'https://k76-finance.vercel.app/',
  },
  {
    title: 'K76 CRM',
    desc: 'A customer relationship management system built on a clean-architecture ASP.NET Core API with JWT authentication, validation, and logging, plus a deployable UI with a demo account.',
    tech: ['ASP.NET Core', 'EF Core', 'JWT Auth', 'React'],
    link: 'https://k76-crm.vercel.app/',
  },
  {
    title: 'Farm Management System',
    desc: 'A digital management solution for agricultural businesses to track expenses, worker management, crop information, financial reports, and day-to-day operational activities.',
    tech: ['React', 'ASP.NET Core Web API', 'SQL Server', 'EF Core'],
    link: 'https://farm-management-ten-woad.vercel.app/',
  },
  {
    title: 'Daily Pans — Steel Kitchenware',
    desc: 'A factory-direct e-commerce storefront for stainless steel kitchenware from Chennai, connected to a backend API with an admin panel for products and orders.',
    tech: ['React', 'Tailwind CSS', 'ASP.NET Core'],
    link: 'https://jcs-steel-products.vercel.app/',
  },
  {
    title: 'Sanjith Home Loans',
    desc: 'A lead-generation website for a Chennai home loan and property finance consultancy, with service pages, terms, and SEO content on every route.',
    tech: ['React', 'Bootstrap', 'Sass'],
    link: 'https://home-loan-site.vercel.app/',
  },
  {
    title: 'APEX Constructions',
    desc: 'A premium construction company website with 3D visuals, scroll-driven animations, and smooth scrolling to showcase landmark projects and services.',
    tech: ['Next.js', 'Three.js', 'GSAP', 'Framer Motion'],
    link: 'https://construction-demo-nine.vercel.app/',
  },
  {
    title: 'Cafe Billing System',
    desc: 'A billing and point-of-sale app for cafes — quick order entry, bill generation, and sales charts.',
    tech: ['React', 'Chart.js', 'Vite'],
    link: 'https://cafe-billing-six.vercel.app/',
  },
  {
    title: 'React Native Shopping App',
    desc: 'A cross-platform mobile shopping app with seamless browsing, secure login, order tracking, push notifications, and account management.',
    tech: ['React Native', 'REST API', 'Android'],
    link: '',
  },
  {
    title: 'Sanagan Business Website',
    desc: 'A professional consultant and business website designed to connect clients with services. Fully built and hosted on WordPress with custom design and integrations.',
    tech: ['WordPress', 'PHP', 'CSS'],
    link: 'https://sanagan.com.sg',
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'This modern developer portfolio, showcasing my skills, projects, and experience with three.js animations, smooth transitions, and a responsive design.',
    tech: ['React', 'Three.js', 'CSS'],
    link: 'https://my-portfolio-chi-nine-85.vercel.app/',
  },
]

export const education = [
  {
    score: '8.01',
    degree: 'B.E – Computer Science Engineering',
    school: 'PSN College of Engineering and Technology',
    place: 'Tirunelveli, India',
    years: '2020 – 2024',
  },
  {
    score: '68%',
    degree: 'HSC (Higher Secondary)',
    school: "St. Joseph's Matriculation Hr. Sec School",
    place: 'Thoothukudi, India',
    years: '2019 – 2020',
  },
  {
    score: '88%',
    degree: 'SSLC (Secondary School)',
    school: "St. Joseph's Matriculation Hr. Sec School",
    place: 'Thoothukudi, India',
    years: '2017 – 2018',
  },
]

export const certifications = [
  {
    role: 'Intermediate Full Stack Web Development',
    company: 'Certification · Online',
    desc: 'Completed an intermediate-level full stack web development certification covering both front-end and back-end technologies.',
  },
  {
    role: 'TCS NQT – IT Score: 61%',
    company: 'TCS National Qualifier Test · April 2023',
    desc: 'Cleared the TCS National Qualifier Test in IT with 61%, demonstrating solid foundational knowledge in computer science and programming.',
  },
]

export const availability = [
  'Freelance Projects',
  'Full-Time Opportunities',
  'Startup Collaborations',
  'Custom Software Development',
  'Mobile Application Development',
  'Web Application Development',
  'API Development',
  'Business Automation Solutions',
]

export const contacts = [
  { icon: 'phone', label: 'Phone', val: '+91 9597292413', href: 'tel:9597292413' },
  { icon: 'email', label: 'Email', val: 'sunilkumarofficial57@gmail.com', href: 'mailto:sunilkumarofficial57@gmail.com' },
  { icon: 'linkedin', label: 'LinkedIn', val: 's-sunil-kumar-058804239', href: 'https://linkedin.com/in/s-sunil-kumar-058804239' },
  { icon: 'github', label: 'GitHub', val: 'sk052002', href: 'https://github.com/sk052002' },
  { icon: 'location', label: 'Location', val: 'Tamil Nadu, India', href: '' },
]
