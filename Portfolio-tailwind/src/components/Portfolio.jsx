import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";


const projects = [
  {
    img: project1,
    title: "Hunger Free #1",
    description: "A sophisticated user interface for frontend development, crafted using ReactJS and Bootstrap 5.",
    links: {
      site: "https://hungerfree.vercel.app/",
      github: "https://github.com/codewithbalaji/Hunger-Free-Webiste",
    },
  },
  {
    img: project2,
    title: "Hunger Free App #2",
    description: "A progressive web application (PWA) built with ReactJS and Firebase, delivering seamless performance and offline capabilities.",
    links: {
      site: "https://hungerfree-app.vercel.app/",
      github: "https://github.com/codewithbalaji/hunger-free-web-app",
    },
  },
  {
    img: project3,
    title: "Fruit Shop #3",
    description: "A modern, responsive e-commerce website developed with ReactJS and Tailwind CSS for optimal user experience across all devices.",
    links: {
      site: "https://fruitshop-tailwind.vercel.app/",
      github: "https://github.com/codewithbalaji/fruit-shop-tailwind-css",
    },
  },
  {
    img: project4,
    title: "Landing Page #4",
    description: "A professional business showcase website designed with React and Bootstrap 5, highlighting key features and services.",
    links: {
      site: "https://sribalajiprinters.vercel.app/",
      github: "https://github.com/codewithbalaji/SriBalajiPrinters",
    },
  },
  {
    img: project5,
    title: "Spotify Clone #5",
    description: "A fully responsive Spotify+ clone, meticulously developed using ReactJS and Tailwind CSS for a seamless and immersive user experience.",
    links: {
      site: "https://spotify-codewithbalaji.vercel.app/",
      github: "https://github.com/codewithbalaji/Spotify-Clone",
    },
  },
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
