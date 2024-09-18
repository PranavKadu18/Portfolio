import {
    obys,
    refokus,
    watchit,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Prompt Engineer",
      icon: backend,
    },
    {
      title: "Compitative Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
//   const experiences = [
//     {
//       title: "React.js Developer",
//       company_name: "Starbucks",
//       icon: starbucks,
//       iconBg: "#383E56",
//       date: "March 2020 - April 2021",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "React Native Developer",
//       company_name: "Tesla",
//       icon: tesla,
//       iconBg: "#E6DEDD",
//       date: "Jan 2021 - Feb 2022",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Web Developer",
//       company_name: "Shopify",
//       icon: shopify,
//       iconBg: "#383E56",
//       date: "Jan 2022 - Jan 2023",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Full stack Developer",
//       company_name: "Meta",
//       icon: meta,
//       iconBg: "#E6DEDD",
//       date: "Jan 2023 - Present",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//   ];

const experiences = [
    {
      title: "Cricket Game Project",
      company_name: "Prangan Project Competition 2023",
      date: "2023",
      icon: "path/to/your/icon.png", // Replace with your actual icon path
      iconBg: "#FF5733", // Example background color for the icon
      points: [
        "Developed a cricket game using basic Python with graphics.",
        "Awarded 2nd prize in the Prangan Project Competition 2023."
      ]
    },
    {
      title: "Refokus Website",
      company_name: "Personal Project",
      date: "2024",
      icon: "path/to/your/icon.png", // Replace with your actual icon path
      iconBg: "#33C3F0", // Example background color for the icon
      points: [
        "Created a modern website with smooth scrolling and animations using Vite and ReactJS.",
        "Focused on enhancing user experience and design."
      ]
    },
    {
      title: "Obsey Agency Website",
      company_name: "Personal Project",
      date: "2024",
      icon: "path/to/your/icon.png", // Replace with your actual icon path
      iconBg: "#F0F033", // Example background color for the icon
      points: [
        "Developed a stylish and functional website clone.",
        "Emphasized user experience and design."
      ]
    },
    {
      title: "Watch It Website",
      company_name: "Personal Project",
      date: "2024",
      icon: "path/to/your/icon.png", // Replace with your actual icon path
      iconBg: "#33F0A8", // Example background color for the icon
      points: [
        "Designed and built a website similar to IMDb with improved UI/UX.",
        "Utilized Redux for state management and TMDB APIs for data integration."
      ]
    },
    
    {
      title: "DSA and LeetCode Experience",
      company_name: "Personal Development",
      date: "2024",
      icon: "path/to/your/icon.png", // Replace with your actual icon path
      iconBg: "#33A8F0", // Example background color for the icon
      points: [
        "Actively engaged in solving daily problems on LeetCode.",
        "Completed 100 Days of LeetCode, demonstrating consistent practice and improvement."
      ]
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Refokus",
      description:
        "A modern, visually appealing website featuring smooth scrolling and interactive animations. Built with React, Vite, and Framer Motion, it showcases seamless transitions and a refined user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "purple-text-gradient",
        },
        {
          name: "framer-motion",
          color: "red-text-gradient",
        },
      ],
      image: refokus, // Replace with actual image variable
      source_code_link: "https://github.com/PranavKadu18/refokus",
      host_link: "https://pranavkadu18.github.io/refokus/"
    },
    {
      name: "Obey Agency (Obsy)",
      description:
        "A stylish and modern website clone showcasing dynamic layouts and user interactions. Developed using React, this project highlights advanced CSS techniques and responsive design to create a visually engaging experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "purple-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
      ],
      image: obys, // Replace with actual image variable
      source_code_link: "https://github.com/PranavKadu18/final-project",
      host_link: "https://pranavkadu18.github.io/final-project/"
    },
    {
      name: "Watch It",
      description:
        "An IMDb-like platform for browsing and discovering movies. Built with React, Redux, and TMDB APIs, this project features comprehensive movie listings, detailed views, and user-friendly navigation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        {
          name: "tmdb",
          color: "yellow-text-gradient",
        },
      ],
      image: watchit, // Replace with actual image variable
      source_code_link: "https://github.com/PranavKadu18/Watch-it",
      host_link: "https://watch-it-woad.vercel.app/"
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };