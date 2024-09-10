"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../components/NavBar";
import Croix from '../img/croix.png';
import "./globals.css";

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // Contrôle pour rendre l'overlay visible
  const [isFadingOut, setIsFadingOut] = useState(false); // Contrôle l'animation de disparition

  useEffect(() => {
    if (navOpen) {
      setShowOverlay(true); // Afficher l'overlay lorsque le menu est ouvert
    } else if (showOverlay) {
      // Si le menu se ferme, lancer l'animation fadeOut avant de retirer l'overlay
      setIsFadingOut(true);
      setTimeout(() => {
        setShowOverlay(false); // Retirer l'overlay du DOM après l'animation
        setIsFadingOut(false);
      }, 300); // Durée correspondant à celle de l'animation CSS
    }
  }, [navOpen, showOverlay]);

  const crossVariants = {
    open: {
      rotate: 180,   // Rotation croix
      scale: 2.5,   // Augmentation taille
      transition: {
        duration: 0.6,
        ease: [0.7, 0.4, 0.1, 0.05],  
      },
    },
    closed: {
      rotate: 45,    // Aucune rotation
      scale: 1,     // Taille originale
      transition: {
        duration: 0.6,
        ease: [0.05, 0.1 ,0.4 , 0.7],  
      },
    },
  };

  return (
    <html lang="en">
      <body className="bg-blackbg relative">
        {/* Croix animée */}
        <motion.img
          src={Croix.src}
          alt="Croix"
          variants={crossVariants}
          initial="closed"
          animate={navOpen ? "open" : "closed"}
          className="w-[30px] h-[30px] m-[53px] absolute z-50 top-0 left-0"
          style={{ transformOrigin: "center", pointerEvents: "none" }}  
        />

        {/* Navigation */}
        <Nav navIsOpen={setNavOpen} />

        {/* Overlay avec animation */}
        {showOverlay && (
          <div className={`overlay ${isFadingOut ? 'fadeOut' : ''}`}></div>
        )}

        {children}
      </body>
    </html>
  );
}
