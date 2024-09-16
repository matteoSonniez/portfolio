"use client";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image1 from "../../img/imageProject2.png";
import { type } from "os";

const Index = ({ num, setOneExpend, oneExpend  }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [textOut, setTextOut] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // État pour gérer l'expansion

  useEffect(() => {
    if (inView && !isExpanded) {
      control.start("visible");
    } else if (!inView && !isExpanded) {
      control.start("hidden");
    } 
  }, [control, inView, isExpanded, oneExpend]);

  const handleClick = () => {
    setTextOut(true);
    setOneExpend(true);
  };

  const boxVariant = {
    hidden: { opacity: 0, scale: 1, x: 400 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 100,
      transition: { duration: 0.5, delay: 0.4 },
    },
    expanded: { 
      width: "100vw", 
      height: "100vh", 
      x: "50%", 
      y: "50%", 
      position: "fixed", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%, -50%)", 
      zIndex: 50,  // Ajout du zIndex 50 ici
      transition: { duration: 0.2, ease: [0.7, 0.4, 0.1, 0.05], } 
    },
  };

  const textVariant = {
    visible: {  x: 0, transition: { duration: 0.5 } },
    hidden: { x: 2000, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="w-[700px] h-[400px] flex bg-blackbg relative rounded-md group"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      onClick={handleClick}
    >
      <div className="w-full h-full overflow-hidden relative">
        <img
          src={Image1.src}
          className="object-cover w-full h-full opacity-100 filter grayscale hover:filter-none transition-all duration-700"
          alt="Image"
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(19, 18, 18, 0) 0%, rgba(19, 18, 18, 0.6) 35%, rgba(19, 18, 18, 0.8) 55%, rgba(19, 18, 18, 0.9) 75%, rgba(19, 18, 18, 1) 100%)",
        }}
      />
      <div 
        className="absolute w-2/5 h-full right-0 flex justify-center items-center text-[90px] font-bold font-Title pointer-events-none">
        <text className="text-gray-300 group-hover:text-white transition-all duration-700"> Freelance</text>
      </div>
    </motion.div>
  );
};

export default Index;
