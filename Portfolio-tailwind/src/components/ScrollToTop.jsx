import { FaArrowCircleUp } from "react-icons/fa";
import { useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTopBtn = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    window.addEventListener("scroll", toggleVisibility);
  
    return (
      <div className="fixed bottom-10 right-10 z-50">
        {isVisible && (
          <div onClick={scrollToTopBtn} className="cursor-pointer">
            <FaArrowCircleUp className="text-5xl text-gray-600 " />
          </div>
        )}
      </div>
    );
  };
  
  export default ScrollToTop;