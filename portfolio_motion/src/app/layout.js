"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../components/NavBar";
import Croix from '../img/croix.png';
import "./globals.css";

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [hoverNavText, setHoverNavText] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false); // Contrôle pour rendre l'overlay visible
  const [isFadingOut, setIsFadingOut] = useState(false); // Contrôle l'animation de disparition

  useEffect(() => {
    console.log(showOverlay, "uuuuuuuuuuuu")
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
    open5: {
      rotate: 585,   // Rotation croix
      scale: 4.5,
      x: 45,
      y: 45,   // Augmentation taille
      transition: {
        duration: 0.3,
        ease: [0.7, 0.4, 0.1, 0.05],  
      },
    },
    open4: {
      rotate: 495,   // Rotation croix
      scale: 4.5,
      x: 45,
      y: 45,   // Augmentation taille
      transition: {
        duration: 0.3,
        ease: [0.7, 0.4, 0.1, 0.05],  
      },
    },
    open3: {
      rotate: 405,   // Rotation croix
      scale: 4.5,
      x: 45,
      y: 45,   // Augmentation taille
      transition: {
        duration: 0.3,
        ease: [0.7, 0.4, 0.1, 0.05],  
      },
    },
    open2: {
      rotate: 315,   // Rotation croix
      scale: 4.5,
      x: 45,
      y: 45,   // Augmentation taille
      transition: {
        duration: 0.3,
        ease: [0.7, 0.4, 0.1, 0.05],  
      },
    },
    open: {
      rotate: 225,   // Rotation croix
      scale: 4.5,
      x: 45,
      y: 45,   // Augmentation taille
      transition: {
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05],  
      },
    },
    closed: {
      rotate: 45, 
      x: 0,
      y: 0,   // Aucune rotation
      scale: 1,     // Taille originale
      transition: {
        duration: 0.6,
        ease: [0.05, 0.1 ,0.4 , 0.7],  
      },
    },
  };

  // Détermine l'animation à utiliser en fonction de navOpen et hoverNavText
  const determineAnimation = () => {
    if (navOpen) {
      if (hoverNavText === 1) {
        return "open2";
      } else if (hoverNavText === 2) {
        return "open3";
      } else if (hoverNavText === 3) {
        return "open4";
      } else if (hoverNavText === 4) {
        return "open5";
      }
      return "open";
    }
    return "closed";
  };

  return (
    <html lang="en">
      <body className="bg-blackbg relative">
        {/* <motion.img
          src={Croix.src}
          alt="Croix"
          variants={crossVariants}
          initial="closed"
          animate={determineAnimation()} // Utilise la fonction pour déterminer l'animation
          className="w-[30px] h-[30px] m-[53px] fixed z-50 top-0 left-0"
          style={{ transformOrigin: "center", pointerEvents: "none" }}  
        />

        <Nav navIsOpen={setNavOpen} setHoverNavText={setHoverNavText}  /> */}

        {/* Overlay avec animation */}
        {showOverlay && (
          <div className={`overlay ${isFadingOut ? 'fadeOut' : ''}`}></div>
        )}

        {children}
      </body>
    </html>
  );
}
