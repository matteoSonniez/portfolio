"use client";
import React, { useState, useEffect } from "react";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import Boxs from "../../components/Box";
import BoxsBis from "../../components/BoxBis";
import { useRouter } from "next/navigation";
import { on } from "events";

const Page = () => {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);
  const [bgChange, setbgChange] = useState(false);
  const [showText, setShowText] = useState(false);
  const [oneExpend, setOneExpend] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => {
      setShowText(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setbgChange(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
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

  const textVariantContainer = {
    left_hidden: {
      x: -2000,
    },
    right_hidden: {
      x: 2000,
    },
    left_scroll: {
      x: 0, // Déplace le texte blanc vers la droite en fonction du scroll
      transition: { duration: 0.9, ease: [1, 0, 0, 0.5], } 
    },
    right_scroll: {
      x: 0, // Déplace le texte rouge vers la gauche en fonction du scroll
      transition: { duration: 0.9, ease: [1, 0, 0, 0.5], } 
    },
  };

  const conteneurVariantTop = {
    visible: {
      y: 0,
    },
    hidden: {
      y: -2000,
      transition: { duration: 0.1 } 
    }
  };

  const conteneurVariantLeft = {
    visible: {
      x: 0,
    },
    hidden: {
      x: -2000,
      transition: { duration: 1.1, ease: [1, 0, 0, 0.5], } 
    }
  };

  const conteneurVariantRight = {
    visible: {
      x: 0,
    },
    hidden: {
      x: 2000,
      transition: { duration: 1.1, ease: [1, 0, 0, 0.5], } 
    }
  };

  return (
    <div className={`${bgChange ? "bg-white" : "bg-blackbg"} relative`}>
      {/* Conteneur de la hauteur de l'écran */}
      <motion.div 
        variants={conteneurVariantTop}
        initial="visible"
        animate={oneExpend ? "hidden" : "visible"}
        className="w-screen h-screen flex flex-col fixed top-0">
        <motion.div
          variants={textVariantContainer}
          initial="left_hidden"
          animate={showText ? "left_scroll" : "left_hidden"}
          className="font-Title text-[280px]  bg-white w-full h-[50vh] leading-none flex items-end pl-10"
        >

          <motion.div
          variants={textVariant}
          initial="left_hidden"
          animate={showText ? "left_scroll" : "left_hidden"}
          className="font-Title text-[280px] text-blackmenu leading-none"
          >
            JOBS &
          </motion.div>
        </motion.div>
        <motion.div
          variants={textVariantContainer}
          initial="right_hidden"
          animate={showText ? "right_scroll" : "right_hidden"}
          className="font-Title text-[280px] bg-blackmenu w-full h-[50vh] leading-none flex items-start justify-end pr-10 pt-10"
        >

          <motion.div
          variants={textVariant}
          initial="right_hidden"
          animate={showText ? "right_scroll" : "right_hidden"}
          className="font-Title text-[280px] text-white leading-none"
          >
            PROJECT
          </motion.div>
        </motion.div>
        {/* <motion.div
          variants={textVariant}
          initial="right_hidden"
          animate={showText ? "right_scroll" : "right_hidden"}
          className="font-Title text-[280px] text-blackmenu leading-none place-self-end"
        >
          PROJECT
        </motion.div> */}
      </motion.div>
      <div className="flex flex-col w-screen items-center mt-[100vh]">
        <div className="w-screen h-screen bg-white mix-blend-difference"></div>
        <motion.div
          variants={conteneurVariantLeft}
          initial="visible"
          animate={oneExpend ? "hidden" : "visible"}
          className="w-screen flex bg-blackbg justify-center py-[80px]">
          <Boxs setOneExpend={setOneExpend} oneExpend={oneExpend}></Boxs>
        </motion.div>

        <motion.div
          variants={conteneurVariantRight}
          initial="visible"
          animate={oneExpend ? "hidden" : "visible"}
          className="w-screen bg-blackbg flex justify-center py-[80px]">
          <BoxsBis setOneExpend={setOneExpend} oneExpend={oneExpend}></BoxsBis>
        </motion.div>

        <motion.div
          variants={conteneurVariantLeft}
          initial="visible"
          animate={oneExpend ? "hidden" : "visible"}
          className="w-screen bg-blackbg flex justify-center py-[80px]">
          <Boxs setOneExpend={setOneExpend} oneExpend={oneExpend}></Boxs>
        </motion.div>

        <motion.div
          variants={conteneurVariantRight}
          initial="visible"
          animate={oneExpend ? "hidden" : "visible"}
          className="w-screen bg-blackbg flex justify-center py-[80px]">
          <BoxsBis setOneExpend={setOneExpend} oneExpend={oneExpend}></BoxsBis>
        </motion.div>

        <motion.div
          variants={conteneurVariantLeft}
          initial="visible"
          animate={oneExpend ? "hidden" : "visible"}
          className="w-screen bg-blackbg flex justify-center py-[80px]">
          <Boxs setOneExpend={setOneExpend} oneExpend={oneExpend}></Boxs>
        </motion.div>

        <motion.div
          variants={conteneurVariantRight}
          initial="visible"
          animate={oneExpend ? "hidden" : "visible"}
          className="w-screen bg-blackbg flex justify-center py-[80px]">
          <BoxsBis setOneExpend={setOneExpend} oneExpend={oneExpend}></BoxsBis>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
