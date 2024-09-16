"use client";

import "../../app/styles.css";
import React, { useRef, useState } from 'react';
import { easeIn, easeInOut, motion } from "framer-motion";
import Croix from '../../img/croix.png';

const squareVariants = {
  open: {
    width: "45vw",   // Expanded square width
    height: "100vh", // Expanded square height
    top: 0,       // Move the square up
    left: 0,      // Move the square to the left
    transition: {
      duration: 0.7,
      ease: [1, 0, 0, 1],  // Slow start, then accelerating smoothly
    },
    borderRadius: "0%"  // Border radius for rounded corners
  },
  closed: {
    width: 100,    // Initial square width
    height: 100,   // Initial square height
    top: 20,      // Original position
    left: 20,     // Original position
    transition: {
      duration: 0.6,
      ease: [1, 0, 0, 1],  // Smooth and natural closing transition
    },
    borderRadius: "10%"  // Border radius for completely rounded corners when closed
  },
};

const NavBar = ({navIsOpen, setHoverNavText}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false); // State to manage if nav is open
  const containerRef = useRef(null);

  
const showNavText = () => {
  setTimeout(() => {
    setShowText(true);
  }, 600);
};

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onHoverStart={() => {navIsOpen(true) ; setIsOpen(true); showNavText()}}
      onHoverEnd={() => {navIsOpen(false) ; setIsOpen(false); setShowText(false)}}
      ref={containerRef}
      className="fixed z-40"
      style={{ top: 0, left: 0 }} // Set initial top and left position of the nav
    >
      {/* Square animation */}
      <motion.div
        className="bg-blackmenu rounded-lg"
        variants={squareVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ position: "absolute", overflow: "hidden" }}  // Removed the fixed borderRadius to let variants control it
      >
        <div className={`flex flex-col font-Title text-[130px] absolute leading-none bottom-0 p-12 ${showText ? "opacity-100 transition-opacity duration-500" : "opacity-0 translate-x-24"}`}>
          <span 
          onMouseEnter={() => setHoverNavText(1)} 
          onMouseLeave={() => setHoverNavText(0)} 
          className="cursor-pointer text-white hover:text-textmenu transition-colors duration-300">
            PROJECTS
          </span>
          <span
          onMouseEnter={() => setHoverNavText(2)} 
          onMouseLeave={() => setHoverNavText(0)} 
          className="cursor-pointer text-white hover:text-textmenu transition-colors duration-300">
            ABOUT
            </span>
          <span 
          onMouseEnter={() => setHoverNavText(3)} 
          onMouseLeave={() => setHoverNavText(0)} 
          className="cursor-pointer text-white hover:text-textmenu transition-colors duration-300">
            CONTACT
          </span>
          <span 
          onMouseEnter={() => setHoverNavText(4)} 
          onMouseLeave={() => setHoverNavText(0)} 
          className="cursor-pointer text-white hover:text-textmenu transition-colors duration-300">
            PROJECTS
          </span>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
