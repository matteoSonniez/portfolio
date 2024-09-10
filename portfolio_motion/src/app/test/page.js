"use client";
import React, { useState, useEffect } from "react";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import Boxs from '../../components/Box';
import BoxsBis from '../../components/BoxBis';
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!router) return; // Vérifie si le routeur existe

    const handleRouteChange = () => {
      console.log('Route a changé');
      // Ajoute ici le code pour gérer le changement de route
    };

  }, [router]); 

  const textVariant = {
    left_hidden: {
      x: -2000,
    },
    right_hidden: {
      x: 2000,
    },
    left_scroll: {
      x: scrollY * 0.4, // Déplace le texte blanc vers la droite en fonction du scroll
      transition: {
        stiffness: 50,
      },
    },
    right_scroll: {
      x: -scrollY * 0.4, // Déplace le texte rouge vers la gauche en fonction du scroll
      transition: {
        stiffness: 50,
      },
    },
  };

  return (
    <div className="">
      {/* Conteneur de la hauteur de l'écran */}
      <div className="w-screen h-screen px-14 flex flex-col justify-center">
        <motion.div
          variants={textVariant}
          initial="left_hidden"
          animate="left_scroll"
          className="font-Title text-[280px] text-white place-self-start leading-none"
        >
          JOBS &
        </motion.div>
        <motion.div
          variants={textVariant}
          initial="right_hidden"
          animate="right_scroll"
          className="font-Title text-[280px] text-redbutt leading-none place-self-end"
        >
          PROJECT
        </motion.div>
      </div>
      <div className="flex flex-col w-screen items-center">
        <Boxs></Boxs>
        <BoxsBis></BoxsBis>
        <Boxs></Boxs>
        <BoxsBis></BoxsBis>
        <Boxs></Boxs>
        <BoxsBis></BoxsBis>
      </div>
    </div>
  );
};

export default Page;
