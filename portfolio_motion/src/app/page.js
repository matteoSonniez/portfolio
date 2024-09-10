"use client";
import React, { useState, useEffect } from "react";
import { anticipate, delay, motion } from "framer-motion";
import Nav from "../components/NavBar";
import TextAnim from "../components/TextAnim";
import Image1 from "../img/img1.jpg";
import Fleche from "../img/fleche-droitee.png";
import Link from "next/link";
import { useRef } from "react";
import { Fira_Mono } from "next/font/google";
import "./globals.css";
import { useFollowPointer } from "./use-follow-pointer";
import styles2 from "./styles2.css";

const sofia = Fira_Mono({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false); // État pour gérer l'animation de sortie
  const [showText, setShowText] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const [showButton, setShowButton] = useState(false); // État pour afficher le texte après l'animation des rectangles

  // Fonction pour mettre à jour la position de la souris
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Fonction pour gérer le clic et démarrer l'animation de sortie
  const handleLinkClick = (e) => {
    e.preventDefault(); // Empêcher la navigation immédiate
    setIsExiting(true); // Déclencher l'animation de sortie

    // Attendre la fin de l'animation avant de naviguer (durée de 800ms ici)
    setTimeout(() => {
      document.querySelector('a[href="/test"]').click(); // Déclencher la navigation en utilisant <Link>
    }, 800); // Durée en millisecondes qui correspond à l'animation
  };

  // Délai pour afficher le texte "projects" après l'animation des rectangles
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
      setShowText(true);
    }, 1200);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Afficher le texte après l'animation des rectangles
    }, 400);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, []);

  // Animation avec Framer Motion pour chaque ligne de rectangles
  const lineVariants = {
    hidden: { opacity: 0, x: -2500 }, // Lignes apparaissent de la gauche
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: [0.05, 0.1, 0.1, 0.9],
      }, // Applique un délai progressif pour chaque ligne
    }),
    exit: (i) => ({
      opacity: 0,
      x: -2500, // Lignes disparaissent vers la gauche (même direction que l'apparition)
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.9, 0.6, 0.4, 0.2] }, // Délai et durée pour la disparition
    }),
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      width: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05],
      },
    },
    hover: {
      opacity: 1,
      width: 300, // Largeur à 300px lorsqu'open
      height: 300,
      scale: 1.1,
      transition: {
        duration: 0.6, // Temps pour la couleur blanche de descendre du haut vers le bas
        type: "spring",
      },
    },
    nothover: {
      opacity: 1,
      width: 300, // Largeur à 300px lorsqu'open
      height: 300,
      scale: 1,
      transition: {
        duration: 0.8, // Temps pour la couleur blanche de descendre du haut vers le bas
        type: "spring",
      },
    },
    exit: {
      scale: 0.2,
      width: 300, // Largeur à 300px lorsqu'open
      height: 300,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05],
      },
    },
  };

  // Animation pour le texte "projects" (lettre par lettre) apparaissant du bas et disparaissant de l'écran vers la gauche
  const letterVariants = {
    hidden: { opacity: 0, x: -2500 }, // Les lettres partent de la gauche
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.5 }, // Apparition progressive lettre par lettre
    }),
    exit: (i) => ({
      opacity: 0,
      x: -2500, // Disparition vers la gauche (comme les rectangles)
      transition: { delay: i * 0.05, duration: 1 }, // Disparition progressive lettre par lettre
    }),
  };
  const textVariant = {
    hidden: { opacity: 0, x: -2500 }, // Les lettres partent de la gauche
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.5 }, // Apparition progressive lettre par lettre
    }),
    exit: (i) => ({
      opacity: 0,
      x: -2500, // Disparition vers la gauche (comme les rectangles)
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.9, 0.6, 0.4, 0.2],
      }, // Disparition progressive lettre par lettre
    }),
  };

  // Fonction pour calculer l'animation des rectangles en fonction de la position de la souris
  const rectangleVariants = (rectPosition) => ({
    initial: { scale: 1, rotate: 0, x: 0 }, // Position initiale
    animate: () => {
      const dx = mousePosition.x - rectPosition.x;
      const dy = mousePosition.y - rectPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 500;
      const distanceFactor = Math.max(
        0,
        Math.min(1, 1 - distance / maxDistance)
      );
      const maxTranslation = 150;
      const translateX =
        (mousePosition.x / window.innerWidth) * maxTranslation -
        maxTranslation / 2;

      return {
        scale: 1 + 0.02 * distanceFactor,
        x: translateX,
        transition: { duration: 0.6, ease: "easeOut" },
      };
    },
  });

  const rectangles = Array.from({ length: 15 }, (_, index) => {
    const rectPosition = {
      x: (index % 5) * 520 + 260,
      y: Math.floor(index / 5) * 320 + 160,
    };

    return (
      <motion.div
        key={index}
        className="overflow-hidden opacity-65"
        style={{
          borderRadius: "5px",
          width: "450px",
          height: "300px",
          margin: "10px",
        }}
        initial="initial"
        animate={rectangleVariants(rectPosition).animate}
      >
        <img src={Image1.src} />
      </motion.div>
    );
  });

  const line1 = rectangles.slice(0, 5);
  const line2 = rectangles.slice(5, 10);
  const line3 = rectangles.slice(10, 15);
  const items = ["P", "R", "O", "J", "E", "T", "S"];

  // Texte "projects" avec animation lettre par lettre
  const text = "PROJECTS";
  const textLetters = text.split("").map((letter, index) => (
    <motion.span
      key={index}
      custom={index}
      variants={letterVariants}
      initial="hidden"
      animate={showText ? "visible" : "hidden"}
      exit="exit"
      className="inline-block text-shadow-custom" // Ajoute la classe pour l'ombre
    >
      {letter}
    </motion.span>
  ));

  const letterVariant = {
    hidden: {
      x: 0,
      y: 500,
    },
    opening: (index) => ({
      y: 0,
      x: 0,
      transition: {
        delay: index * 0.03, // 0.02 seconde de délai entre chaque élément
        duration: 0.5,
        ease: [1, 0, 0, 0.4],
      },
    }),
    hoverEffect: (index) => ({
      y: [0, -50, 0],
      x: 0, // Monte de 50px et redescend
      transition: {
        delay: index * 0.02, // Délai entre chaque élément
        duration: 0.4, // Durée du mouvement
        ease: "easeInOut", // Animation fluide
      },
    }),
    notHoverEffect: (index) => ({
      y: [0, -50, 0],
      x: 0, // Monte de 50px et redescend
      transition: {
        delay: index * 0.02, // Délai entre chaque élément
        duration: 0.4, // Durée du mouvement
        ease: "easeInOut", // Animation fluide
      },
    }),
    exit: (index) => ({
      x: -2000,
      y: 0, // Lignes disparaissent vers la droite
      transition: {
        delay: index * 0.05, // 0.05 seconde de délai entre chaque élément
        duration: 0.6,
        ease: [0.7, 0.4, 0.1, 0.05], // Slow start, then accelerating smoothly
      },
    }),
  };

  const fleche_variants = {
    fleche1_hidden: {
      scale: 1.6,
      x: 65,
      transition: {
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05], // Slow start, then accelerating smoothly
      },
    },
    fleche2_hidden: {
      scale: 1.6,
      x: -65,
      transition: {
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05], // Slow start, then accelerating smoothly
      },
    },
    fleche1_open: {
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05], // Slow start, then accelerating smoothly
      },
    },
    fleche2_open: {
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.7, 0.4, 0.1, 0.05], // Slow start, then accelerating smoothly
      },
    },
  };

  return (
    <div className="w-screen" onMouseMove={handleMouseMove}>
      <div className="h-screen w-screen">
        {!isExiting && (
          <motion.div
            ref={ref}
            className="box absolute opacity-10 z-30 mix-blend-luminosity"
            style={{ x, y }}
          />
        )}

        <div className="flex flex-col justify-center items-center">
          {/* Lien avec gestion du clic pour animation de sortie */}

          <motion.div
            className="flex justify-center"
            custom={0}
            initial="hidden"
            exit="exit" // Appliquer l'animation de disparition
            variants={lineVariants}
            animate={isExiting ? "exit" : "visible"} // Animation en fonction de l'état de sortie
          >
            {line1}
          </motion.div>
          <motion.div
            className="flex justify-center"
            custom={1}
            initial="hidden"
            exit="exit"
            variants={lineVariants}
            animate={isExiting ? "exit" : "visible"}
          >
            {line2}
          </motion.div>
          <motion.div
            className="flex justify-center"
            custom={2}
            initial="hidden"
            exit="exit"
            variants={lineVariants}
            animate={isExiting ? "exit" : "visible"}
          >
            {line3}
          </motion.div>

          {/* Texte "projects" avec animation lettre par lettre */}
          {showText && (
            <motion.div
              className={`font-Title w-screen h-[360px] absolute flex justify-center bottom-0 left-0 text-white text-[330px]`} // Animation de sortie lorsque l'état de sortie est déclenché
            >
              {items.map((item, index) => (
                <motion.div
                  className="self-center p-0 m-0 leading-none scale-150"
                  key={index}
                  custom={index} // Passe l'index ici
                  variants={letterVariant}
                  initial="hidden"
                  animate={
                    isExiting ? "exit" : hoverButton ? "hoverEffect" : "opening"
                  } // Ajoute la logique pour hover
                >
                  {item}
                </motion.div>
              ))}

              <Link href="/test" passHref>
                <a className="hidden"></a>{" "}
                {/* Lien caché qui permet la navigation */}
              </Link>
              {showButton && (
                <motion.div
                  onHoverStart={() => setHoverButton(true)}
                  onHoverEnd={() => setHoverButton(false)}
                  variants={buttonVariants}
                  initial="hidden"
                  animate={
                    isExiting ? "exit" : hoverButton ? "hover" : "nothover"
                  }
                  onClick={(e) => handleLinkClick(e)}
                  className="bg-redbutt mb-4 cursor-pointer rounded-full ml-10 relative z-30 self-center"
                >
                  <div className="w-16 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <motion.img
                      className="w-8 h-8 place-self-center"
                      variants={fleche_variants}
                      initial="fleche1_open"
                      animate={hoverButton ? "fleche1_hidden" : "fleche1_open"}
                      src={Fleche.src}
                    />
                    <motion.img
                      className="w-8 h-8 place-self-center"
                      variants={fleche_variants}
                      initial="fleche2_hidden"
                      animate={hoverButton ? "fleche2_open" : "fleche2_hidden"}
                      src={Fleche.src}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div> //<img src={Fleche.src} className="w-8 h-8 absolute place-self-center"/>
          )}
        </div>
      </div>
    </div>
  );
}
