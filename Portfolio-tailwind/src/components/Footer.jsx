import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-10 text-sm md:text-lg mt-12">
      <div className="space-y-4">
      
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
        <a href="https://www.linkedin.com/in/codewithbalaji/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/codewithbalaji">
            <FaGithubSquare />
          </a>
          <a href="https://www.youtube.com/@CodeWithBalaji">
            <FaYoutube />
          </a>
        </div>
      </div>
      <p className="text-gray-400">@ 2024 codewithbalaji</p>
    </div>
  );
};

export default Footer;
