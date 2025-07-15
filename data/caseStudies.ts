export interface CaseStudyData {
  title: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  description: string;
  challenge: string[];
  solution: string[];
  results: string[];
  technologies: string[];
  images: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  floral: {
    title: 'Floral E-commerce Platform',
    client: '',
    industry: '',
    duration: '',
    teamSize: '',
    description:
      'A luxurious and responsive e-commerce solution for floral brands — offering dynamic product selections, smooth checkout, and a delightful user journey from browse to bloom.',
     challenge: [
      'Managing complex product variants like bouquet sizes and seasonal availability.',
      'Enhancing checkout security to reduce abandoned carts.',
      'Optimizing cart performance for mobile and desktop users.',
    ],
    solution: [
      'Optimized database schema to support dynamic product variants and pricing.',
      'Implemented image lazy loading and mobile-first UI design with React.',
      'Integrated secure and fast checkout using Stripe with support for scheduling delivery.',
    ],
    results: [
      '40% performance boost',
      '99.9% uptime',
      'Smooth checkout process',
    ],
    technologies: ['React','TypeScript',  'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
    images: ['/images/floral.jpg'],
   metrics: [
  {
    label: 'Performance Boost',
    value: '40%',
    description: 'Significantly improved load times for faster user experience',
  },
  {
    label: 'Uptime',
    value: '99.9%',
    description: 'Ensured uninterrupted availability and smooth browsing',
  },
  {
    label: 'Checkout Conversion',
    value: '+35%',
    description: 'Enhanced checkout process leading to higher sales conversion',
  },
],

  },

  'healthcare-management': {
    title: 'Healthcare Management System',
    client: 'MedCare Hospital Network',
    industry: 'Healthcare',
    duration: '12 months',
    teamSize: '15 developers',
    description:
      'Digital transformation of healthcare operations with patient management, telemedicine features, and integrated billing systems.',
   challenge: [
      'Managing complex product variants like bouquet sizes and seasonal availability.',
      'Enhancing checkout security to reduce abandoned carts.',
      'Optimizing cart performance for mobile and desktop users.',
    ],
    solution: [
      'Optimized database schema to support dynamic product variants and pricing.',
      'Implemented image lazy loading and mobile-first UI design with React.',
      'Integrated secure and fast checkout using Stripe with support for scheduling delivery.',
    ],
    results: [
      '80% reduction in appointment scheduling time',
      '95% patient satisfaction rate',
      '60% increase in telemedicine consultations',
    ],
    technologies: [
      'React',
      'Python',
      'PostgreSQL',
      'WebRTC',
      'AWS HIPAA',
      'Docker',
    ],
    images: ['/images/2.jpg'],
    metrics: [
      {
        label: 'Time Saved',
        value: '80%',
        description: 'In appointment scheduling',
      },
      {
        label: 'Satisfaction',
        value: '95%',
        description: 'Patient satisfaction rate',
      },
      {
        label: 'Cost Reduction',
        value: '50%',
        description: 'Administrative savings',
      },
    ],
  },

  adminPanel: {
    title: 'Admin Panel',
    client: '',
    industry: '',
    duration: '',
    teamSize: '',
    description:
      'A powerful backend system engineered for control, clarity, and speed — designed to make managing complex data effortless.',
   challenge: [
      'Managing dynamic content and user permissions across multiple roles.',
      'Ensuring secure data handling for sensitive operations.',
      'Creating a scalable system that could support future feature integrations.',
      'Delivering real-time analytics without compromising performance.',
      'Maintaining a clean, intuitive UI across desktop and mobile views.',
    ],
    solution: [
      'Implemented role-based access control (RBAC) to manage permissions securely.',
      'Utilized JWT authentication and server-side validation for secure data handling.',
      'Designed a modular architecture using React and TypeScript for scalability.',
      'Integrated real-time charts and logs using WebSockets and Chart.js.',
      'Developed a responsive, component-driven UI with Tailwind CSS and reusable layouts.',
    ],
    results: [
      '80% reduction in appointment scheduling time',
      '95% patient satisfaction rate',
      '60% increase in telemedicine consultations',
    ],
    technologies: [
      'React', 'TypeScript', 'MS SQL', 'Tailwind CSS', 'Node.js', 'JWT (JSON Web Tokens)','Chart.js/Recharts',
    ],
    images: ['/images/admin-panel.jpg'],
   metrics: [
  {
    label: 'Operational Efficiency',
    value: '75%',
    description: 'Streamlined workflows and reduced manual admin tasks',
  },
  {
    label: 'User Productivity',
    value: '60%',
    description: 'Faster access to data and tools for internal users',
  },
  {
    label: 'System Reliability',
    value: '99.9%',
    description: 'Consistent platform availability for administrators',
  },
],
  },

   restuarant: {
    title: 'Restuarant',
    client: '',
    industry: '',
    duration: '',
    teamSize: '',
    description:
      'A modern, user-friendly restaurant website built on WordPress, featuring online menus, reservation booking, and seamless customer engagement. Designed for easy management and mobile responsiveness, it provides an immersive dining experience and boosts customer interaction.',
   challenge: [
        'Managing dynamic menu items with frequent updates and seasonal changes.',
        'Ensuring smooth online reservation and order placement without glitches.',
        'Optimizing site speed and performance on mobile devices to enhance user experience.',
        'Integrating third-party plugins securely without conflicts or slowdowns.',
    ],
    solution: [
      'Created custom post types and taxonomies in WordPress for flexible menu management.',
      'Implemented a reliable booking system plugin with real-time availability and confirmation emails.',
      'Optimized images, used caching, and a lightweight theme to boost load times on all devices.',
      'Carefully selected and tested plugins, and implemented security best practices to maintain site stability.',
    ],
    results: [
      '80% reduction in appointment scheduling time',
      '95% patient satisfaction rate',
      '60% increase in telemedicine consultations',
    ],
    technologies: [
      'Wordpress',
      'PHP',
      'MySQL',
      'JavaScript ',
      'Bootstrap',
    ],
    images: ['/images/restaurant.jpg'],
    metrics: [
  {
    label: 'Online Reservation Growth',
    value: '45%',
    description: 'Increase in online table bookings through the website',
  },
  {
    label: 'Website Traffic Boost',
    value: '60%',
    description: 'More visitors attracted with improved SEO and marketing',
  },
  {
    label: 'Mobile User Engagement',
    value: '75%',
    description: 'Higher interaction rates from mobile users with responsive design',
  },
  {
    label: 'Order Processing Speed',
    value: '50%',
    description: 'Faster order placements and confirmations through the platform',
  },
]
  },

'T-ShirtsDesigns': {
  title: 'Custom T-Shirt Design Platform',
  client: '',
  industry: '',
  duration: '',
  teamSize: '',
  description:
    'An innovative React.js platform empowering users to create, customize, and order personalized t-shirts with real-time previews and a seamless shopping experience powered by Tailwind CSS.',
  challenge: [
    'Building an intuitive, user-friendly design tool for real-time t-shirt customization.',
    'Ensuring responsive and smooth performance across devices.',
    'Integrating a secure payment gateway with flexible order options.',
    'Managing a scalable inventory system for custom products.',
  ],
  solution: [
    'Developed a drag-and-drop design interface using React with optimized state management.',
    'Styled the entire UI with Tailwind CSS for a modern, responsive design system.',
    'Integrated Stripe for secure and reliable payment processing.',
    'Implemented backend APIs for inventory and order management with real-time updates.',
  ],
  results: [
    '50% increase in user engagement on the design tool',
    '30% boost in online sales within the first quarter',
    'Significantly reduced page load time with Tailwind CSS optimization',
  ],
   technologies: ['React','TypeScript',  'Tailwind CSS', 'Node.js', 'MS SQL', 'Stripe'],
  images: [
    '/images/t-shirts.jpg',
  ],
  metrics: [
    {
      label: 'User Engagement',
      value: '50%',
      description: 'Increase in users interacting with the design tool',
    },
    {
      label: 'Sales Growth',
      value: '30%',
      description: 'Boost in revenue from online orders',
    },
    {
      label: 'Performance',
      value: '25%',
      description: 'Faster page loads and smoother UI responsiveness',
    },
  ],
}

};
