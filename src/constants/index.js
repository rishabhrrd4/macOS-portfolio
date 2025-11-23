const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  // {
  //   category: "Mobile",
  //   items: ["React Native", "Expo"],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/rishabhsharma33",
  },
  {
    id: 2,
    text: "Leetcode",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/rishabhrrd4/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/rishabhrrd4?t=uPtP-R-n5A-xFUrkH0Bztg&s=09",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/rishabh-sharma33",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    // {
    //   id: 5,
    //   name: "Nike Ecommerce Website Application",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-5", // icon position inside Finder
    //   windowPosition: "top-[5vh] left-5", // optional: Finder window position
    //   children: [
    //     {
    //       id: 1,
    //       name: "Nike Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
    //         "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
    //         "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
    //         "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "nike.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "nike.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-1.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },

    // ▶ Project 2
    // {
    //   id: 6,
    //   name: "AI Resume Analyzer",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[20vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "AI Resume Analyzer Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "ai-resume-analyzer.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "ai-resume-analyzer.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // ▶ Project 3
    // {
    //   id: 7,
    //   name: "Food Delivery App",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-80",
    //   windowPosition: "top-[33vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Food Delivery App Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
    //         "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
    //         "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
    //         "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "food-delivery-app.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "food-delivery-app.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
    {
      id: 8,
      name: "Zentry Website Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[15vh] left-100",

      children: [
        {
          id: 1,
          name: "Zentry Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is a fully responsive clone of the Zentry website built for learning and exploration.",
            "It recreates the original site's animations, visuals, and modern layout using React.js, TailwindCSS, and GSAP.",
            "The project focuses on smooth page transitions, scroll-based animations, and polished UI interactions.",
            "It showcases frontend engineering skills through clean code, animations, and pixel-perfect UI reproduction.",
          ],
        },

        {
          id: 2,
          name: "zentry-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://zentry-rishabhrrd4.netlify.app/",
          position: "top-10 right-20",
        },

        {
          id: 4,
          name: "zentry.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-zentry.png", // <-- put your screenshot path here
        },
      ],
    },
    // {
    //   id: 9,
    //   name: "Food Reels App",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 left-80",
    //   windowPosition: "top-[25vh] left-67",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Food Reels Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Food Reels is a short-video app focused on food content, inspired by Instagram Reels but built for food lovers.",
    //         "Users browse food-related videos, discover restaurants, upload their own content, and engage with a vibrant community.",
    //         "Built with a MERN stack: React for the frontend, Node.js + Express + MongoDB for the backend — ensuring rapid responses, scalability, and a rich interactive UI.",
    //         "The backend supports user authentication, video uploads, comments/likes, and feed generation; the frontend offers modern design, responsive layout and smooth interactions.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "food-reels.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://github.com/rishabhsharma33/food-reels-frontend", // you may want to link the frontend live demo instead
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "food-reels.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-food-reels.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com", // replace with your design link if any
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
    {
      id: 10,
      name: "GSAP Cocktails",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[35vh] left-7",

      children: [
        {
          id: 1,
          name: "GSAP Cocktails Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern interactive website showcasing cocktail content, built with fullscreen animations and scroll-driven effects.",
            "Using React.js + Tailwind CSS for UI and layout, and GSAP (GreenSock Animation Platform) for advanced animations like SplitText, ScrollTrigger, parallax, and pinned sections. :contentReference[oaicite:4]{index=4}",
            "Designed to give a high-impact visual experience rather than a typical static site; animations are key part of the user journey.",
            "Great example of combining UI framework with a powerful animation library to create engaging web experiences.",
          ],
        },
        {
          id: 2,
          name: "gsap-cocktails.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://rishabh-cocktails.netlify.app/", // replace with actual deployed link if available
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "gsap-cocktails.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-gsap-cocktails.png", // replace path per your repo
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/MByXaI8pcleIbgTvsDat1X/Cocktail-GSAP-Website?node-id=2-2&p=f&t=RBriaYYMbdsMrXdm-0", // add actual Figma link if you have
          position: "top-60 right-20",
        },
      ],
    },
    {
      id: 11,
      name: "GTA VI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-55 left-10",
      windowPosition: "top-[65vh] left-107",
      children: [
        {
          id: 1,
          name: "GTA VI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A fan-built interactive clone inspired by the upcoming GTA VI aesthetic, showcasing dynamic animations and immersive UI.",
            "It uses React (or whichever stack you used) alongside modern CSS/Tailwind to emulate a high-fidelity open-world game landing experience.",
            "Features include fullscreen hero sections, scroll-triggered animations, and responsive layout targeting both desktop and mobile.",
            "Deployed on Netlify for real-time demo with no build barriers—viewers can explore the look & feel of a major game site draft.",
          ],
        },
        {
          id: 2,
          name: "gta-vi-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://gta-vi-rishabhrrd4.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "gta-vi-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-gta-vi.png", // ← replace with your actual screenshot path
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com", // ← replace with your Figma/design link if available
        //   position: "top-60 right-20",
        // },
      ],
    },
    {
      id: 12,
      name: "Chat App (Next.js)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-80",
      windowPosition: "top-[3vh] left-7",
      children: [
        {
          id: 1,
          name: "Chat App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A real-time chat application built with Next.js and WebSockets.",
            "Users can join chat rooms, send and receive messages instantly, and see who's online.",
            "It’s designed for speed, simplicity, and a clean UI, leveraging modern React features.",
            "Built to handle real-time updates efficiently, with proper WebSocket lifecycle management.",
          ],
        },
        {
          id: 2,
          name: "chat-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/rishabhsharma33/chat-app-nextjs",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   name: "chat-app.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-chat-app.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com", // replace with your actual Figma link if available
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/rishabh-3.jpg",
    },
    {
      id: 2,
      name: "kid-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/rishabh-1.jpg",
    },
    {
      id: 3,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/rishabh-2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/rishabh.jpg",
      description: [
        "Hey! I’m Rishabh 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
