import profilepic from "../assets/profile_pic.png";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/cv.pdf";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import ScrollToTop from "./ScrollToTop";

const Hero = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-40"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-5 glass p-8">
        <div className="my-auto">
          <img
            className="w-[200px] md:w-[800px] mx-auto h-auto "
            src={profilepic}
            alt="profile pic"
          />
        </div>

        <div className="my-auto ml-8  flex-col">
          <p className="text-2xl md:text-4xl font-bold text-gray-200">
            Hi! I am <br /> Balaji D <br />
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "MERN DEV", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-xl md:text-3xl font-bold text-gray-500">
            making ideas to web apps
          </p>
          <a href={CV} download>
            <button className="mt-4 px-4 py-2 text-lg font-bold text-white  bg-primary-color rounded-xl cursor-pointer z-10">
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1  md:col-span-3 gap-6">
        <div className="text-5xl p-12 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiSass className="text-pink-600" />
            <DiBootstrap className="text-purple-600" />
            <SiTailwindcss className="text-blue-500" />
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col glass relative z-10">
          <div className="text-7xl flex justify-start gap-4">
            <a href="https://www.linkedin.com/in/codewithbalaji/">
              <AiFillLinkedin className="text-gray-600 hover:text-blue-500 transform duration-150" />
            </a>
            <a href="https://github.com/codewithbalaji">
              <AiFillGithub className="text-gray-600 hover:text-white transform duration-150" />
            </a>
            <a href="https://www.youtube.com/@CodeWithBalaji">
              <AiFillYoutube className="text-gray-600 hover:text-red-500 transform duration-150" />
            </a>
          </div>
        </div>
      </div>
      <ScrollToTop />

    </div>
  );
};

export default Hero;
