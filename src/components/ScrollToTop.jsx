import React, {useState, useEffect} from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import '../App.css'
const ScrollToTop = () => {
  const [showScrollTopButton, setScrollTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      setScrollTopButton(true);
    }
    else{
      setScrollTopButton(false);
    }
  }); 
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
        {showScrollTopButton && (
            <FaArrowAltCircleUp  className='top-btn fixed bottom-[15px] right-[20px] h-[50px] w-[50px] rounded-[50%] border-[2px] border-[#fff] bg-white z-[999]' onClick={scrollTop}/>
        )}
    </div>
  );
};

export default ScrollToTop;