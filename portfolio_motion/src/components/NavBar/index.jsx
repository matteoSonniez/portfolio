"use client";

import "../../app/styles.css";
import React, { useRef, useState } from 'react';
import { easeIn, easeInOut, motion } from "framer-motion";
import Croix from '../../img/croix.png';
import { useDimensions } from "../../app/use-dimensions";

// Variants for the square animation (square expanding on hover)
const squareVariants = {
  open: {
    width: 700,   // Expanded square width
    height: 1000, // Expanded square height
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

const NavBar = ({navIsOpen}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage if nav is open
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onHoverStart={() => {navIsOpen(true) ; setIsOpen(true)}}
      onHoverEnd={() => {navIsOpen(false) ; setIsOpen(false)}}
      custom={height}
      ref={containerRef}
      className="absolute z-40"
      style={{ top: 0, left: 0 }} // Set initial top and left position of the nav
    >
      {/* Square animation */}
      <motion.div
        className="bg-blackmenu rounded-lg cursor-pointer"
        variants={squareVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ position: "absolute", overflow: "hidden" }}  // Removed the fixed borderRadius to let variants control it
      >
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
