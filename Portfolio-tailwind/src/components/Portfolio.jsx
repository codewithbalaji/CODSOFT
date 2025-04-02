import { useState } from "react";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";


const projects = [
  {
    img: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743583638/codeblog-min_dcpxkm.png",
    title: "Code Blog Hub",
    description: "A Full-Stack Blogging Platform with Next.js, MongoDB, and Auth.js. Features secure authentication and user-friendly blog post management.",
    links: {
      site: "https://codebloghub.vercel.app/",
      github: "https://github.com/codewithbalaji/codebloghub",
    },
  },
  {
    img: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743583637/tespa-min_htfnp6.png",
    title: "Tespa Metrology",
    description: "A MERN Landing Page for the tespa metrology.",
    links: {
      site: "https://tespaindia.vercel.app/",
      github: "https://github.com/codewithbalaji/tespa-frontend",
    },
  },

  {
    img: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743583634/virtual_assitant-min_hope0y.png",
    title: "Virtual Assist",
    description: "AI-powered assistant using MERN stack with Gemini API integration for enhanced task automation and user interaction.",
    links: {
      site: "https://virtualassist.vercel.app/",
      github: "https://github.com/codewithbalaji/virtual-assist",
    },
  },
  {
    img: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743583635/harimidhu-min_v6iehg.png",
    title: "Harimidhu Organic",
    description: "Organic products e-commerce website built with Next.js and Tailwind CSS, powered by Firebase backend with Hostinger and Netlify hosting.",
    links: {
      site: "https://harimidhuorganic.com/",
      github: "https://github.com/codewithbalaji/harimidhu-organic",
    },
  },
  {
    img: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743583637/sribalajiprinters-min_a9xv5i.png",
    title: "Sri Balaji Printers",
    description: "Modern printing shop website with WhatsApp integration and Web3 forms, built using Next.js and ShadCN for optimal SEO and performance.",
    links: {
      site: "https://www.sribalajiprinters.studio",
      github: "https://github.com/codewithbalaji/sri-balaji-printers",
    },
  },
  {
    img: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743583636/freshdel-min_wefctf.png",
    title: "FreshDel",
    description: "MERN-based e-commerce platform for fresh produce delivery with Razorpay integration and comprehensive admin panel for order management.",
    links: {
      site: "https://res.cloudinary.com/dyj3rywju/image/upload/v1743578478/freshdel_exsked.png",
      github: "https://github.com/codewithbalaji/freshdel",
    },
  }
];


const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="my-6 max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-8 gap-6 md:py-40"
      id="portfolio"
    >
      <div className="z-10 col-span-3 grid place-items-center grid-cols-1 relative">
        <p className="text-gray-200 font-bold text-4xl -skew-y-2 mb-5 md:mb-0 ">
          Select Project
        </p>
        <img
          src={arrow}
          className="absolute w-[50px] top-1 right-1 md:top-10 md:right-12"
        />

        <ul
          className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
    md:space-y-4 text-2xl"
        >
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600
         transition duration-300 ${
           currentProject === index ? "active-project" : ""
         }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 glass  w-full border-2 col-span-5 ">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <div className="p-6">
          <p className="text-gray-200 my-4">
            {projects[currentProject].description}
          </p>
          <div className="flex space-x-4">
            <a
              href={projects[currentProject].links.site}
              className="px-4 py-2 bg-slate-600
                   text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              View Site
            </a>
            <a
              href={projects[currentProject].links.github}
              className="px-4 py-2 bg-gray-800
                   text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

