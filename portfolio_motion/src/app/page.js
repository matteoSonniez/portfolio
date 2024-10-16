"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  delay,
} from "framer-motion";
import { Oswald } from "next/font/google";
import { Afacad } from "next/font/google";
import { Anton } from "next/font/google";
import { Noto_Serif_Oriya } from "next/font/google";
import "./globals.css";
import Croix from "../img/croix.png";
import Croix2 from "../img/croix2.png";
import ImageProfile from "../img/selfie.jpg";
import Laptop from "../img/laptop.jpg";
import Laptop2 from "../img/laptop2.webp";
import Laptop3 from "../img/laptop3.jpg";
import Down from "../img/down2.png";
import Bg from "../img/bg2.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const sofia = Oswald({ subsets: ["latin"], weight: "600" });
const sofia2 = Oswald({ subsets: ["latin"], weight: "400" });
const afacad = Afacad({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
const noto = Noto_Serif_Oriya({ subsets: ["latin"], weight: "600" });

export default function Home() {
  const whiteDivRef = useRef(null);
  const firstSpanRef = useRef(null);
  const titleMainRef = useRef(null);
  const overlayPathRef = useRef(null);
  const imageRef = useRef(null);
  const [titleMain, setTitle] = useState(document.querySelector(".title_main"));
  const [isReveal, setIsReveal] = useState(false);
  const [isStartAnimate, setIsStartAnimate] = useState(false);

  const gridRef = useRef(null);
  const gridWrapRef = useRef(null);
  const imagesRef = useRef(null);
  const gridItemsRef = useRef([]);

  const finalDivRef = useRef(null);
  const projects1Ref = useRef(null);
  const projects2Ref = useRef(null);
  const projects3Ref = useRef(null);
  const textProjectsRef = useRef(null);
  const circleRef = useRef(null);
  let isAnimating = false;

  const [hasScrolled, setHasScrolled] = useState(false);

  const [loadCroix, setLoadCroix] = useState(false);

  const [imageProfileSticky, setimageProfileSticky] = useState(false);
  const [imageProfileStickyValue, setimageProfileStickyValue] = useState(0);

  const [textSticky, setTextSticky] = useState(false);
  const [textStickyValue, setTextStickyValue] = useState(0);

  const [project1Sticky, setproject1Sticky] = useState(false);
  const [project1StickyValue, setproject1StickyValue] = useState(0);

  const [project2Sticky, setproject2Sticky] = useState(false);
  const [project2StickyValue, setproject2StickyValue] = useState(0);

  const [project3Sticky, setproject3Sticky] = useState(false);
  const [project3StickyValue, setproject3StickyValue] = useState(0);

  const [circleSticky, setCircleSticky] = useState(false);
  const [circleStickyValue, setCircleStickyValue] = useState(0);

  const control = useAnimation();
  const controlCroix = useAnimation();
  const [isExiting, setIsExiting] = useState(false); // État pour gérer l'animation de sortie
  const [showInfo, setShowInfo] = useState(false);
  const [divWidth, setDivWidth] = useState(100); // État pour gérer la largeur de la div (en pourcentage)
  const [isFixed, setIsFixed] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false); // État pour vérifier si l'image est fixée
  const [imagePosition, setImagePosition] = useState();
  const [isScrollYCaptured, setIsScrollYCaptured] = useState(false);
  const [scrollMax, setScrollMax] = useState(0);

  const { scrollY } = useScroll();

  const { scrollYProgress: scrollYText } = useScroll({
    target: textProjectsRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProject1 } = useScroll({
    target: projects1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProject2 } = useScroll({
    target: projects2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProject3 } = useScroll({
    target: projects3Ref,
    offset: ["start end", "end start"],
  });

  const windowHeight = window.innerHeight;

  const rotate = useTransform(scrollY, [0, 600], [45, 360], { clamp: false });

  const x = useTransform(scrollY, [0, 200], [0, 200], { clamp: false });
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5], { clamp: false });
  // Ajout de la transformation pour le déplacement horizontal une fois fixée
  const imageX = useTransform(
    scrollY,
    [windowHeight, 2000], // Définir la plage de scroll après laquelle la div se déplace vers la droite
    [0, scrollMax / 2 - 200]
  );

  const croixVariant = {
    hidden: {
      scale: 1.5,
      x: -1000,
    },
    initial: {
      scale: 1.5,
      x: 0,
      rotate: 405,
      transition: {
        ease: "circOut",
        duration: 1.5,
      },
    },
    big: {
      rotate: 610,
      scale: 100,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    animate: {
      x: 0,
      scale: 1.5,
      rotate: 855,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    controlCroix.start("hidden");
    setTimeout(() => {
      controlCroix.start("initial");
    }, 500);
    setTimeout(() => {
      controlCroix.start("big");
    }, 2000);
    setTimeout(() => {
      setIsStartAnimate(true);
      controlCroix.start("animate");
    }, 2900);
  }, []);

  const spanVariantsLeft = {
    hidden: { x: -2000, transition: { duration: 0.5, ease: "circIn" } }, // Disparaître vers la droite
    visible: { x: 0 },
  };

  const spanVariantsRight = {
    hidden: { x: 2000, transition: { duration: 0.5, ease: "circIn" } }, // Disparaître vers la droite
    visible: { x: 0 },
  };

  const imageVariants = {
    hidden: { height: 0, filter: "grayscale(0%)" },
    visible: {
      height: "100vh",
      transition: { delay: 1, duration: 0.9, ease: "easeIn" },
    },
  };

  const textScale = useTransform(scrollYText, [0, 0.5], [3.5, 2]);
  const spacingText = useTransform(scrollYText, [0, 0.5], ["0.5em", "0.2em"]);
  const textScale2 = useTransform(
    scrollY,
    [textStickyValue, textStickyValue + 1000],
    [1, 0.7]
  );
  const textBlur = useTransform(
    scrollY,
    [textStickyValue, textStickyValue + 1000],
    ["blur(0px)", "blur(15px)"]
  );
  const textOpacity = useTransform(
    scrollY,
    [textStickyValue, textStickyValue + 1500],
    [1, 0]
  );

  //PROJECT 1
  const project1Width = useTransform(
    scrollYProject1,
    [0, 0.4],
    ["90vw", "75vw"]
  );
  const project1Scale = useTransform(
    scrollY,
    [project1StickyValue, project1StickyValue + 1200],
    [1, 0.6]
  );
  const project1ImageScale = useTransform(scrollYProject1, [0, 0.4], [1.3, 1], {
    clamp: true,
  });
  const project1Blur = useTransform(
    scrollY,
    [project1StickyValue, project1StickyValue + 1000],
    ["blur(0px)", "blur(15px)"]
  );

  //PROJECT 2
  const project2Width = useTransform(
    scrollYProject2,
    [0, 0.4],
    ["90vw", "75vw"]
  );
  const project2Scale = useTransform(
    scrollY,
    [project2StickyValue, project2StickyValue + 1000],
    [1, 0.7]
  );
  const project2ImageScale = useTransform(scrollYProject2, [0, 0.4], [1.3, 1], {
    clamp: true,
  });
  const project2Blur = useTransform(
    scrollY,
    [project2StickyValue, project2StickyValue + 1000],
    ["blur(0px)", "blur(15px)"]
  );

  //PROJECT 3
  const project3Width = useTransform(
    scrollYProject3,
    [0, 0.4],
    ["90vw", "75vw"]
  );
  const project3Scale = useTransform(
    scrollY,
    [project3StickyValue, project3StickyValue + 1000],
    [1, 0.7]
  );
  const project3ImageScale = useTransform(scrollYProject3, [0, 0.4], [1.3, 1], {
    clamp: true,
  });
  const project3Blur = useTransform(
    scrollY,
    [project3StickyValue, project3StickyValue + 1000],
    ["blur(0px)", "blur(15px)"]
  );

  const circleScale = useTransform(
    scrollY,
    [circleStickyValue, circleStickyValue + 2000],
    [1, 100]
  );
  const contactDivOpacity = useTransform(
    scrollY,
    [circleStickyValue, circleStickyValue + 2000],
    [0, 1]
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // const newWidth = Math.min(100, 70 + scrollPosition / 20); // Limite la largeur à 100%
    // setDivWidth(newWidth);
    const imageWidth = imageRef.current.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    setScrollMax(windowWidth - imageWidth / 2);

    if (textProjectsRef.current) {
      const textProjectsTop =
        textProjectsRef.current.getBoundingClientRect().top;

      if (textProjectsTop <= windowHeight * 0.35 && !textSticky) {
        setTextStickyValue(scrollPosition);
        setTextSticky(true);
      }
    }
    if (projects1Ref.current) {
      const project1Top = projects1Ref.current.getBoundingClientRect().top;

      if (project1Top <= windowHeight * 0.25 && !project1Sticky) {
        setproject1StickyValue(scrollPosition);
        setproject1Sticky(true);
      }
    }

    if (projects2Ref.current) {
      const project2Top = projects2Ref.current.getBoundingClientRect().top;

      if (project2Top <= windowHeight * 0.25 && !project2Sticky) {
        setproject2StickyValue(scrollPosition);
        setproject2Sticky(true);
      }
    }

    if (projects3Ref.current) {
      const project3Top = projects3Ref.current.getBoundingClientRect().top;

      if (project3Top <= windowHeight * 0.25 && !project3Sticky) {
        setproject3StickyValue(scrollPosition);
        setproject3Sticky(true);
      }
    }

    if (circleRef.current) {
      const circleTop = circleRef.current.getBoundingClientRect().top;

      if (circleTop <= windowHeight * 0.5 && !circleSticky) {
        setCircleStickyValue(scrollPosition);
        setCircleSticky(true);
      }
    }

    if (imageRef.current) {
      const imageTop = imageRef.current.getBoundingClientRect().top;

      if (imageTop <= windowHeight * 0.1 && !imageProfileSticky) {
        setimageProfileStickyValue(scrollPosition);
        setimageProfileSticky(true);
      }
    }

    if (whiteDivRef.current && firstSpanRef.current && imageRef.current) {
      const whiteDivTop = whiteDivRef.current.getBoundingClientRect().top;
      const imageTop = imageRef.current.getBoundingClientRect().top;
      const imageBottom = imageRef.current.getBoundingClientRect().bottom;
      const finalDivTop = finalDivRef.current.getBoundingClientRect().top;

      if (whiteDivTop <= windowHeight / 3) {
        setIsExiting(true); // Déclenche l'animation de sortie
      } else {
        setIsExiting(false); // Réinitialise l'animation
      }

      if (whiteDivTop <= windowHeight / 3 - 50) {
        setShowInfo(true); // Déclenche l'affichage d'informations
      } else {
        setShowInfo(false);
      }

      // Si la div blanche atteint le haut, fixer l'image
      if (whiteDivTop <= 0 && !isAbsolute) {
        setImagePosition(imageTop);
        setIsFixed(true); // Fixer la position de l'image
      }
      if (finalDivTop <= imageBottom + 50) {
        setImagePosition(imageTop);
        //setIsFixed(false);
        setIsAbsolute(true); // Fixer la position de l'image
      }
    }
  };

  const openMenu = () => {
    const overlayPath = overlayPathRef.current;
    const titleMain = titleMainRef.current;
    setTimeout(() => {
      setIsReveal(true);
    }, 1100);
    console.log("zzzzzz");
    if (isAnimating) return;
    isAnimating = true;
    gsap
      .timeline({
        onComplete: () => (isAnimating = false),
      })
      .set(overlayPath, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(
        titleMain,
        {
          duration: 0.8,
          ease: "power3.in",
          scaleY: 0.5,
          // y: -200,
          stagger: 0.05,
        },
        0.2
      )
      //

      .set(overlayPath, {
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
      })
      .to(overlayPath, {
        duration: 0.8,
        ease: "power4",
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      });
  };

  // closes the menu
  const closeMenu = () => {
    if (isAnimating) return;
    isAnimating = true;
    gsap
      .timeline({
        onComplete: () => (isAnimating = false),
      })
      .set(overlayPath, {
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        onComplete: () => {
          frame.classList.remove("frame--menu-open");
          menuWrap.classList.remove("menu-wrap--open");
        },
      })

      // now reveal
      .set(overlayPath, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
      });
  };

  // Ajoute un écouteur d'événements pour le scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoyage lors du démontage du composant
    };
  }, [
    project1Sticky,
    project2Sticky,
    project3Sticky,
    textSticky,
    circleSticky,
    imageProfileSticky,
  ]);

  useEffect(() => {
    if (isFixed) {
      control.start("top");
    } else if (showInfo && !isFixed) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [showInfo, isFixed]);

  useEffect(() => {
    // Initialiser Lenis pour un défilement fluide
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing pour un effet doux
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const grid = gridRef.current;
    const gridWrap = gridWrapRef.current;
    const gridItems = gridItemsRef.current;
    const image = imagesRef.current;

    // Appliquer la perspective directement avec style.setProperty
    // grid.style.setProperty('--perspective', '1000px');
    // grid.style.setProperty('--grid-inner-scale', '0.5');

    // Créer une timeline avec ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap,
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
      },
    });

    timeline
      .set(grid, {
        perspective: 1000,
      })
      .set(gridWrap, { transformStyle: "preserve-3d" })
      .set(gridWrap, {
        rotationY: 15,
      })
      .set(gridItems, {
        z: () => gsap.utils.random(-1200, 200),
      })
      .fromTo(
        gridItems,
        {
          xPercent: () => gsap.utils.random(-1500, -600),
        },
        {
          xPercent: () => gsap.utils.random(800, 1800),
        },
        0
      )
      .fromTo(
        gridItems.map((item) => item.querySelector(".grid__item-inner")),
        {
          scale: 1,
        },
        {
          scale: 2.5,
        },
        0
      )
      .fromTo(
        gridItems.map((item) => item.querySelector(".grid__item-inner")),
        {
          filter: "brightness(1)",
        },
        {
          filter: "brightness(0.1)",
        },
        0
      );

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  // Animation de disparition des spans

  return (
    <div className="relative flex flex-col">
      <div
        onClick={openMenu}
        className={`w-16 h-16 fixed z-50 bottom-10 right-20 cursor-pointer hover:pt-2 transition-all duration-200 
          ${!isStartAnimate && "opacity-0"} ${isReveal && "opacity-0"}`}
      >
        <img className="object-cover h-full w-full invert" src={Down.src}></img>
      </div>
      {!isReveal && (
        <div className="text-white fixed h-[100vh] z-30 bg-black top-0 w-screen justify-center text-[400px] flex flex-col leading-none">
          <img
            style={{ filter: "brightness(0.4)" }}
            src={Bg.src}
            className="absolute z-10 w-1/2 right-[10vw]"
          ></img>
          <div
            ref={titleMainRef}
            className="flex flex-col absolute z-20 ml-[5vw]"
          >
            <div className="flex items-center space-x-4">
              <motion.span
                // Référence du premier span
                onClick={() => console.log(scrollY)}
                className={`${sofia.className} ${
                  !isStartAnimate && "opacity-0"
                }`}
                style={{
                  scaleY: 1.2,
                }}
                initial="visible"
                animate={isExiting ? "hidden" : "visible"}
                variants={spanVariantsLeft}
                transition={{ duration: 0.5 }}
              >
                WEB
              </motion.span>
              {loadCroix ? (
                <motion.img
                  src={Croix.src}
                  className="w-28"
                  style={{ rotate, x, scale }}
                ></motion.img>
              ) : (
                <motion.img
                  src={Croix2.src}
                  className="w-28 z-50"
                  variants={croixVariant}
                  initial="hidden"
                  animate={controlCroix}
                />
              )}
            </div>
            <motion.span
              className={`${sofia.className} ${!isStartAnimate && "opacity-0"}`}
              style={{
                scaleY: 1.2,
              }}
              initial="visible"
              animate={isExiting ? "hidden" : "visible"}
              variants={spanVariantsRight}
              transition={{ duration: 0.5 }}
            >
              DESIGN
            </motion.span>
          </div>
        </div>
      )}

      <div
        ref={finalDivRef}
        className="w-screen h-[1050vh] z-20 flex flex-col items-center absolute"
      >
        <div className="flex h-[100vh]">
          <span className={`${anton.className} text-white text-[100px]`}>
            ABOUT ME
          </span>

          <motion.div
            ref={imageRef}
            className="w-[50vw] h-[100vh] left-0 absolute overflow-hidden z-10"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              x: imageX,
            }}
          >
            <img
              // style={{
              //   filter: "brightness(0.3)"
              // }}
              className="object-cover w-full h-full"
              src={ImageProfile.src}
            ></img>
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.1) 55%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 1) 100%)",
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.4) 55%, rgba(0, 0, 0, 0.8) 75%, rgba(0, 0, 0, 1) 100%)",
              }}
            />
          </motion.div>
          <div
            className={`${afacad.className} w-[30vw] h-[50vh] overflow-hidden mt-[10vh] sticky text-white top-[10vh] z-10 text-[26px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit
            elit.
          </div>
        </div>
        <section className="mt-[40vh] relative w-screen">
          <div className="grid w-full" ref={gridRef}>
            <div
              className="grid-wrap grid grid-cols-3 gap-x-4 gap-y-1"
              ref={gridWrapRef}
            >
              {Array.from({ length: 39 }).map((_, index) => (
                <div
                  className="grid__item w-[300px] h-[200px] bg-black"
                  ref={(el) => (gridItemsRef.current[index] = el)}
                  key={index}
                >
                  <div className="grid__item-inner rounded-xl overflow-hidden bg-black">
                    <img
                      ref={imagesRef}
                      src={Laptop2.src}
                      alt={`Laptop ${index}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span
            className={`${noto.className} text-[70px] leading-tight scale-y-125 text-white absolute right-[10vw] inset-y-1/2 transform -translate-y-1/2 text-right `}
          >
            Dream of a project ,<br></br>I will make it real.
          </span>
        </section>

        <motion.span
          ref={textProjectsRef}
          className={`${sofia2.className} sticky top-[35vh] mt-[60vh] my-[40vh] text-[200px] text-white`}
          style={{
            scaleY: textScale,
            scale: textSticky ? textScale2 : 1,
            letterSpacing: spacingText,
            filter: textSticky ? textBlur : "none",
            opacity: textSticky ? textOpacity : 1,
          }}
        >
          PROJECTS
        </motion.span>
        <motion.div
          ref={projects1Ref}
          style={{
            scale: project1Sticky ? project1Scale : 1,
            width: project1Width,
            filter: project1Sticky ? project1Blur : "none",
          }}
          className={`rounded-2xl overflow-hidden h-[90vh] mt-[35vh] z-10 sticky top-[25vh]`}
        >
          <motion.img
            style={{
              scale: project1ImageScale,
              transition: "filter 0.7s",
              filter: project1Sticky ? "grayscale(100%)" : "none",
            }}
            className={`object-cover w-full`}
            src={Laptop.src}
          ></motion.img>
        </motion.div>

        <motion.div
          ref={projects2Ref}
          style={{
            scale: project2Sticky ? project2Scale : 1,
            width: project2Width,
            filter: project2Sticky ? project2Blur : "none",
          }}
          className={`rounded-2xl overflow-hidden h-[90vh] mt-[50vh] z-20 sticky top-[25vh]`}
        >
          <motion.img
            style={{
              scale: project2ImageScale,
              transition: "filter 0.7s",
              filter: project2Sticky ? "grayscale(100%)" : "none",
            }}
            className={`object-cover w-full`}
            src={Laptop2.src}
          ></motion.img>
        </motion.div>

        <motion.div
          ref={projects3Ref}
          style={{
            scale: project3Sticky ? project3Scale : 1,
            width: project3Width,
            filter: project3Sticky ? project3Blur : "none",
          }}
          className={`rounded-2xl overflow-hidden h-[90vh] mt-[50vh] z-20 sticky top-[25vh]`}
        >
          <motion.img
            style={{
              scale: project3ImageScale,
              transition: "filter 0.7s",
              filter: project3Sticky ? "grayscale(100%)" : "none",
            }}
            className={`object-cover w-full`}
            src={Laptop3.src}
          ></motion.img>
        </motion.div>
      </div>
      {/* <div className="h-[300vh]">
        <motion.div
          ref={circleRef}
          style={{
            scale: circleSticky ? circleScale : 1,
          }}
          className="rounded-full bg-white w-8 h-8 sticky top-[50vh] z-30 mt-[50vh] mix-blend-difference"
        ></motion.div>
      </div> */}
      {/* {circleSticky && (
        <motion.div
          style={{
            opacity: circleSticky ? contactDivOpacity : 0,
          }}
          className="w-screen h-screen fixed top-0 z-20 flex justify-center items-center overflow-hidden"
        >
          <div
            style={{ rotate: "-8deg" }}
            className={`${sofia2.className} absolute border-y-[1px] py-6 border-black top-0 w-full whitespace-nowrap overflow-hidden`}
          >
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }} // Va de 0% à -50% pour un défilement fluide
              transition={{
                repeat: Infinity, // Répéter à l'infini
                duration: 40, // Ajuste selon la vitesse désirée
                ease: "linear", // Mouvement fluide sans accroc
              }}
              style={{ scaleY: 2 }}
            >
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME? CONTACT ME? CONTACT ME?
              </span>
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME? CONTACT ME? CONTACT ME?
              </span>
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME CONTACT ME CONTACT ME
              </span>
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME CONTACT ME CONTACT ME
              </span>
            </motion.div>
          </div>
          <div
            style={{ rotate: "-8deg" }}
            className={`${sofia2.className} absolute border-y-[1px] py-6 border-black bottom-0 w-full whitespace-nowrap overflow-hidden`}
          >
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }} // Va de 0% à -50% pour un défilement fluide
              transition={{
                repeat: Infinity, // Répéter à l'infini
                duration: 40, // Ajuste selon la vitesse désirée
                ease: "linear", // Mouvement fluide sans accroc
              }}
              style={{ scaleY: 2 }}
            >
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME? CONTACT ME? CONTACT ME?
              </span>
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME? CONTACT ME? CONTACT ME?
              </span>
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME CONTACT ME CONTACT ME
              </span>
              <span className="text-[40px] mx-1 inline-block">
                CONTACT ME CONTACT ME CONTACT ME
              </span>
            </motion.div>
          </div>
          <div>
            <span className="text-[60px] scale-y-150 text-black">
              WANNA COLLABORATE WITH ME ?
            </span>
          </div>
        </motion.div>
      )} */}
      <svg
        class="overlay"
        className="z-40 h-[100vh] w-[100vw]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={overlayPathRef}
          vector-effect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          fill="#131212"
        />
      </svg>
    </div>
  );
}
