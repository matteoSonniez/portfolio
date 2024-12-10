"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Afacad } from "next/font/google";
import Fleche from "../../img/fleche.png";
import ReactImg from "../../img/react.jpg";

const afacad = Afacad({ subsets: ["latin"], weight: "400" });

const Index = ({ isSlide }) => {
  const theMainRef = useRef(null);
  const svgAllRectRef = useRef(null);

  const divRef = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  const animationRefs = useRef([]);
  const animationRefs2 = useRef([]);
  const animationRefs3 = useRef([]);
  const animationRefs4 = useRef([]);

  const svgRef = useRef(null);
  const svg2Ref = useRef(null);
  const svg3Ref = useRef(null);
  const svg4Ref = useRef(null);

  const recRef = useRef(null);
  const rec2Ref = useRef(null);
  const rec3Ref = useRef(null);
  const rec4Ref = useRef(null);

  const titleDescRef = useRef(null);
  const titleDesc2Ref = useRef(null);
  const titleDesc3Ref = useRef(null);
  const titleDesc4Ref = useRef(null);

  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const imgMainRef = useRef(null);
  const imgMain2Ref = useRef(null);
  const imgMain3Ref = useRef(null);
  const imgMain4Ref = useRef(null);

  // Animations d'ouverture
  const fillRectanglesTop = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      })
      .to(
        rect,
        {
          duration: 0.1,
          ease: "power4.in",
          attr: { d: "M 0 100 V 95 Q 50 80 100 95 V 100 z" },
        },
        0
      )
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      });
  };

  const closeRectanglesTop = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(rect, {
        duration: 0.1,
        ease: "power4.in",
        attr: { d: "M 0 100 V 5 Q 50 20 100 5 V 100 z" },
      })
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });
  };

  const fillRectanglesLeft = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 100 100 H 100 Q 100 50 100 0 H 100 z" },
      })
      .to(
        rect,
        {
          duration: 0.1,
          ease: "power4.in",
          attr: { d: "M 100 100 H 95 Q 70 50 95 0 H 100 z" },
        },
        0
      )
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 100 100 H 0 Q 0 50 0 0 H 100 z" },
      });
  };

  const fillRectanglesRight = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 0 100 H 0 Q 0 50 0 0 H 0 z" },
      })
      .to(
        rect,
        {
          duration: 0.1,
          ease: "power4.in",
          attr: { d: "M 0 100 H 5 Q 30 50 5 0 H 0 z" },
        },
        0
      )
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 0 100 H 100 Q 100 50 100 0 H 0 z" },
      });
  };

  const fillRectanglesBottom = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .to(
        rect,
        {
          duration: 0.1,
          ease: "power4.in",
          attr: { d: "M 0 0 V 5 Q 50 30 100 5 V 0 z" },
        },
        0
      )
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
      });
  };

  // Animations de fermeture dans le sens invers

  const closeRectanglesLeft = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 100 100 H 0 Q 0 50 0 0 H 100 z" },
      })
      .to(rect, {
        duration: 0.1,
        ease: "power4.in",
        attr: { d: "M 100 100 H 5 Q 20 50 5 0 H 100 z" },
      })
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 100 100 H 100 Q 100 50 100 0 H 100 z" },
      });
  };

  const closeRectanglesRight = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 0 100 H 100 Q 100 50 100 0 H 0 z" },
      })
      .to(rect, {
        duration: 0.1,
        ease: "power4.in",
        attr: { d: "M 0 100 H 95 Q 70 50 95 0 H 0 z" },
      })
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 0 100 H 0 Q 0 50 0 0 H 0 z" },
      });
  };

  const closeRectanglesBottom = (rect) => {
    gsap
      .timeline({})
      .set(rect, {
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
      })
      .to(
        rect,
        {
          duration: 0.1,
          ease: "power4.in",
          attr: { d: "M 0 0 V 95 Q 50 70 100 95 V 0 z" },
        },
        0
      )
      .to(rect, {
        duration: 0.5,
        ease: "power2",
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      });
  };

  const stopAnimationAndReset = (theAnimationRef) => {
    // Arrêter toutes les animations stockées
    theAnimationRef.current.forEach((anim) => {
      anim.kill();
    });

    if (theAnimationRef === animationRefs) {
      const paths = svgRef.current.querySelectorAll(".react-path");
      paths.forEach((path) => {
        gsap.set(path, {
          stroke: "#61dafb",
          strokeDashoffset: 0,
        });
      });

      const circle = svgRef.current.querySelector("circle");
      gsap.set(circle, {
        fill: "#61dafb",
        attr: { r: 2.05 },
      });
    }

    if (theAnimationRef === animationRefs2) {
      const paths = svg2Ref.current.querySelectorAll(".gsap-path");
      paths.forEach((path) => {
        gsap.set(path, {
          stroke: "#88ce02",
          strokeDashoffset: 0,
        });
      });
    }

    if (theAnimationRef === animationRefs3) {
      const path = svg3Ref.current.querySelector("path");
      gsap.set(path, {
        strokeDashoffset: 0,
      });
    }

    if (theAnimationRef === animationRefs4) {
      const paths = svg4Ref.current.querySelectorAll(".node-path");
      paths.forEach((path) => {
        gsap.set(path, {
          strokeDashoffset: 0,
          stroke: "#21a366",
        });
      });
    }
  };

  const handleMouseEnter = (event, rect, theDivRef) => {
    const div = theDivRef.current;
    const img = imgRef.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const img4 = img4Ref.current;

    const titleDesc = titleDescRef.current;
    const titleDesc2 = titleDesc2Ref.current;
    const titleDesc3 = titleDesc3Ref.current;
    const titleDesc4 = titleDesc4Ref.current;

    const svg3 = svg3Ref.current;

    // Animation pour la première div (divRef)
    if (theDivRef === divRef) {
      const paths = svgRef.current.querySelectorAll(".react-path");
      animationRefs.current = []; // Réinitialiser les animations précédentes

      paths.forEach((path) => {
        const length = path.getTotalLength();

        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          stroke: "black",
          strokeDasharray: length,
          strokeDashoffset: 0, // Chemin totalement dessiné au départ
        });

        // Animation GSAP pour dé-dessiner puis dessiner les ellipses
        const anim = gsap.to(path, {
          strokeDashoffset: length, // Commence par dé-dessiner
          duration: 1,
          ease: "power1.in",
          repeat: -1, // Répétition infinie
          yoyo: true, // Délai après le dessin complet
        });

        // Stocker l'instance d'animation dans un tableau pour la contrôler
        animationRefs.current.push(anim);
      });

      // Animer le cercle central
      const circle = svgRef.current.querySelector("circle");

      gsap.set(circle, {
        fill: "black", // Chemin totalement dessiné au départ
      });
      const circleAnim = gsap.to(circle, {
        attr: { r: 0.5 }, // Rétrécit le cercle
        duration: 1,
        ease: "power2.inOut",
        repeat: -1, // Répétition infinie
        yoyo: true,
        repeatDelay: 0.5, // L'animation va revenir à l'état initial (regrossir)
      });

      animationRefs.current.push(circleAnim);
    }

    // Animation pour la deuxième div (div2Ref)
    if (theDivRef === div2Ref) {
      const paths2 = svg2Ref.current.querySelectorAll(".gsap-path");
      animationRefs2.current = []; // Réinitialiser les animations précédentes

      paths2.forEach((path) => {
        const length = path.getTotalLength();

        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          stroke: "black",
          strokeDasharray: length,
          strokeDashoffset: 0,
        });

        // Animation GSAP pour dessiner et dé-dessiner l'éclair
        const anim = gsap.to(path, {
          strokeDashoffset: length,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1, // Répétition infinie
          yoyo: true, // L'animation va revenir à l'état initial (dé-dessiner)
          repeatDelay: 0.5, // Délai avant de refaire l'animation inverse
        });

        // Stocker l'instance d'animation dans un tableau pour la contrôler
        animationRefs2.current.push(anim);
      });
    }

    // Animation pour la troisième div (div3Ref)
    if (theDivRef === div3Ref) {
      const svg3Path = svg3Ref.current.querySelector("path");
      animationRefs3.current = []; // Réinitialiser les animations précédentes

      gsap.set(svg3Path, {
        strokeDasharray: svg3Path.getTotalLength(),
        strokeDashoffset: svg3Path.getTotalLength(),
      });

      // Créer l'animation GSAP et la stocker dans un tableau
      const anim = gsap.timeline({ repeat: -1, yoyo: true }).to(svg3Path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.in",
      });

      animationRefs3.current.push(anim);
    }

    if (theDivRef === div4Ref) {
      const paths4 = svg4Ref.current.querySelectorAll(".node-path");
      animationRefs4.current = []; // Réinitialiser les animations précédentes

      paths4.forEach((path) => {
        const length = path.getTotalLength();

        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          stroke: "black",
          strokeDasharray: length,
          strokeDashoffset: 0,
        });

        // Animation GSAP pour dessiner et dé-dessiner l'éclair
        const anim = gsap.to(path, {
          strokeDashoffset: length,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1, // Répétition infinie
          yoyo: true, // L'animation va revenir à l'état initial (dé-dessiner)
          repeatDelay: 0.5, // Délai avant de refaire l'animation inverse
        });

        // Stocker l'instance d'animation dans un tableau pour la contrôler
        animationRefs4.current.push(anim);
      });
    }

    if (theDivRef == divRef) {
      gsap.to(titleDesc, {
        x: 6,
        delay: 0.2,
        duration: 0.3,
      });
    }
    if (theDivRef == div2Ref) {
      gsap.to(titleDesc2, {
        x: 6,
        delay: 0.2,
        duration: 0.3,
      });
    }
    if (theDivRef == div3Ref) {
      gsap.to(titleDesc3, {
        x: 6,
        delay: 0.2,
        duration: 0.3,
      });
    }
    if (theDivRef == div4Ref) {
      gsap.to(titleDesc4, {
        x: 6,
        delay: 0.2,
        duration: 0.3,
      });
    }

    if (theDivRef == divRef) {
      gsap.to(img, {
        rotate: -45,
        delay: 0.2,
        duration: 0.3,
      });
    }
    if (theDivRef == div2Ref) {
      gsap.to(img2, {
        rotate: -45,
        delay: 0.2,
        duration: 0.3,
      });
    }
    if (theDivRef == div3Ref) {
      gsap.to(img3, {
        rotate: -45,
        delay: 0.2,
        duration: 0.3,
      });
    }
    if (theDivRef == div4Ref) {
      gsap.to(img4, {
        rotate: -45,
        delay: 0.2,
        duration: 0.3,
      });
    }
    const { top, left, width, height } = div.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const fromTop = y <= height / 4;
    const fromBottom = y >= (3 * height) / 4;
    const fromLeft = x <= width / 4;
    const fromRight = x >= (3 * width) / 4;

    if (fromTop) {
      fillRectanglesBottom(rect);
    } else if (fromBottom) {
      fillRectanglesTop(rect);
    } else if (fromLeft) {
      fillRectanglesRight(rect);
    } else if (fromRight) {
      fillRectanglesLeft(rect);
    }
  };

  const handleMouseLeave = (event, rect, theDivRef) => {
    const div = theDivRef.current;
    const img = imgRef.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const img4 = img4Ref.current;

    const titleDesc = titleDescRef.current;
    const titleDesc2 = titleDesc2Ref.current;
    const titleDesc3 = titleDesc3Ref.current;
    const titleDesc4 = titleDesc4Ref.current;

    if (theDivRef == divRef) {
      stopAnimationAndReset(animationRefs);
      gsap.to(titleDesc, {
        x: 0,
        duration: 0.3,
      });
      gsap.to(img, {
        rotate: 0,
        duration: 0.3,
      });
    }
    if (theDivRef == div2Ref) {
      stopAnimationAndReset(animationRefs2);
      gsap.to(titleDesc2, {
        x: 0,
        duration: 0.3,
      });
      gsap.to(img2, {
        rotate: 0,
        duration: 0.3,
      });
    }
    if (theDivRef == div3Ref) {
      stopAnimationAndReset(animationRefs3);
      gsap.to(titleDesc3, {
        x: 0,
        duration: 0.3,
      });
      gsap.to(img3, {
        rotate: 0,
        duration: 0.3,
      });
    }
    if (theDivRef == div4Ref) {
      stopAnimationAndReset(animationRefs4);
      gsap.to(titleDesc4, {
        x: 0,
        duration: 0.3,
      });
      gsap.to(img4, {
        rotate: 0,
        duration: 0.3,
      });
    }

    const { top, left, width, height } = div.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const fromTop = y <= height / 4;
    const fromBottom = y >= (3 * height) / 4;
    const fromLeft = x <= width / 4;
    const fromRight = x >= (3 * width) / 4;

    if (fromTop) {
      closeRectanglesBottom(rect);
    } else if (fromBottom) {
      closeRectanglesTop(rect);
    } else if (fromLeft) {
      closeRectanglesRight(rect);
    } else if (fromRight) {
      closeRectanglesLeft(rect);
    }
  };

  useEffect(() => {
    const mainRef = theMainRef.current;
    const allRectRef = svgAllRectRef.current;
    const paths = svgAllRectRef.current.querySelectorAll("path");
    const pathSvg1 = svgRef.current.querySelectorAll(".react-path");
    const pathSvg2 = svg2Ref.current.querySelectorAll(".gsap-path");
    const pathSvg3 = svg3Ref.current.querySelector("path");
    const pathSvg4 = svg4Ref.current.querySelectorAll(".node-path");
    gsap.to(mainRef, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: mainRef,
        // markers: true,
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
      },
    });

    if (isSlide) {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length, // Chemin totalement dessiné au départ
        });

        // Animation GSAP pour dé-dessiner puis dessiner les ellipses
        gsap.to(path, {
          strokeDashoffset: 0, // Commence par dé-dessiner
          duration: 0.5,
          ease: "power1",
          delay: 3,
        });
      });

      pathSvg1.forEach((path) => {
        const length = path.getTotalLength();
        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length, // Chemin totalement dessiné au départ
        });

        // Animation GSAP pour dé-dessiner puis dessiner les ellipses
        gsap.to(path, {
          strokeDashoffset: 0, // Commence par dé-dessiner
          duration: 0.5,
          ease: "power1",
          delay: 3,
        });
      });

      const circle = svgRef.current.querySelector("circle");

      // gsap.set(circle, {
      //   opacity: 0, // Définir le rayon à une valeur minuscule
      // });
      gsap.set(circle, {
        opacity: 0,
      });
    
      // Animer l'opacité du cercle vers 1
      gsap.to(circle, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      });

      pathSvg2.forEach((path) => {
        const length = path.getTotalLength();
        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length, // Chemin totalement dessiné au départ
        });

        // Animation GSAP pour dé-dessiner puis dessiner les ellipses
        gsap.to(path, {
          strokeDashoffset: 0, // Commence par dé-dessiner
          duration: 0.5,
          ease: "power1",
          delay: 3,
        });
      });

      const length = pathSvg3.getTotalLength();
      // Initialise les propriétés strokeDasharray et strokeDashoffset
      gsap.set(pathSvg3, {
        strokeDasharray: length,
        strokeDashoffset: length, // Chemin totalement dessiné au départ
      });

      // Animation GSAP pour dé-dessiner puis dessiner les ellipses
      gsap.to(pathSvg3, {
        strokeDashoffset: 0, // Commence par dé-dessiner
        duration: 0.5,
        ease: "power1",
        delay: 3,
      });

      pathSvg4.forEach((path) => {
        const length = path.getTotalLength();
        // Initialise les propriétés strokeDasharray et strokeDashoffset
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length, // Chemin totalement dessiné au départ
        });

        // Animation GSAP pour dé-dessiner puis dessiner les ellipses
        gsap.to(path, {
          strokeDashoffset: 0, // Commence par dé-dessiner
          duration: 0.5,
          ease: "power1",
          delay: 3,
        });
      });
    }
  }, [isSlide]);

  return (
    <div
      ref={theMainRef}
      className="flex h-[100vh] w-[100vw] bg-black absolute justify-center items-center"
    >
      <div className=" absolute z-50 w-[90vw] h-[60vh] flex self-center">
        <div
          className=" w-1/4 h-full cursor-pointer relative"
          ref={divRef}
          onMouseEnter={(e) => handleMouseEnter(e, recRef.current, divRef)}
          onMouseLeave={(e) => handleMouseLeave(e, recRef.current, divRef)}
        >
          {/* <div
            ref={imgMainRef}
            className="absolute z-50 rounded-xl overflow-hidden  mix-blend-normal left-1/2 transform -translate-x-1/2 bg-red-400 w-0 h-1/2 top-[10%]"
          >
            <img
              className="w-full h-full object-cover mix-blend-normal relative"
              src={ReactImg.src}
            ></img>
          </div> */}
          <svg
            className="absolute z-50 left-1/2 transform -translate-x-1/2 top-[15%]"
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
            width="200"
            height="200"
          >
            <circle className="circle" cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="0.3" fill="none">
              <ellipse className="react-path" rx="11" ry="4.2" />
              <ellipse
                className="react-path"
                rx="11"
                ry="4.2"
                transform="rotate(60)"
              />
              <ellipse
                className="react-path"
                rx="11"
                ry="4.2"
                transform="rotate(120)"
              />
            </g>
          </svg>
          <div className="absolute bottom-0 left-0 p-7 flex flex-col space-y-4">
            <div className="flex space-x-3 items-center">
              <img ref={imgRef} src={Fleche.src} className="w-7 h-6"></img>
              <span
                ref={titleDescRef}
                className={`${afacad.className} text-gray-300 text-[26px]`}
              >
                Traditional development
              </span>
            </div>
            <span className={`${afacad.className} text-gray-300 text-[20px]`}>
              Traditional development leaves you with an unfair disadvantage and
              keeps your team constantly under pressure?
            </span>
          </div>
          <svg
            className="absolute z-40 top-0 cursor-pointer mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              ref={recRef}
              vector-effect="non-scaling-stroke"
              d="M 10 90 V 90 Q 50 90 30 90 V 90 z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className=" w-1/4 h-full cursor-pointer relative"
          ref={div2Ref}
          onMouseEnter={(e) => handleMouseEnter(e, rec2Ref.current, div2Ref)}
          onMouseLeave={(e) => handleMouseLeave(e, rec2Ref.current, div2Ref)}
        >
          <svg
            ref={svg2Ref}
            className="absolute z-50 left-1/2 transform -translate-x-1/2 top-[15%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="200"
            height="200"
          >
            <g
              fill="none"
              stroke="#88ce02"
              strokeWidth="1"
              strokeLinejoin="round"
            >
              {/* Bordure de l'éclair */}
              <path
                className="gsap-path"
                d="M 30 5 L 50 5 L 40 35 L 70 35 L 35 95 L 45 55 L 15 55 Z"
              />
            </g>
          </svg>
          <div className="absolute bottom-0 left-0 p-7 flex flex-col space-y-4">
            <div className="flex space-x-3 items-center">
              <img ref={img2Ref} src={Fleche.src} className="w-7 h-6"></img>
              <span
                ref={titleDesc2Ref}
                className={`${afacad.className} text-gray-300 text-[26px]`}
              >
                Traditional development
              </span>
            </div>
            <span className={`${afacad.className} text-gray-300 text-[20px]`}>
              Traditional development leaves you with an unfair disadvantage and
              keeps your team constantly under pressure?
            </span>
          </div>
          <svg
            className="absolute top-0 cursor-pointer mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              ref={rec2Ref}
              vector-effect="non-scaling-stroke"
              d="M 10 90 V 90 Q 50 90 30 90 V 90 z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="w-1/4 h-full cursor-pointer relative"
          ref={div3Ref}
          onMouseEnter={(e) => handleMouseEnter(e, rec3Ref.current, div3Ref)}
          onMouseLeave={(e) => handleMouseLeave(e, rec3Ref.current, div3Ref)}
        >
          <svg
            ref={svg3Ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            className="absolute z-30 left-1/2 transform -translate-x-1/2 top-[15%]"
            viewBox="0 0 296.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="none"
              stroke="white"
              stroke-width="20"
            >
              <path
                d="M1135 2985 c-203 -55 -362 -173 -468 -347 -21 -35 -45 -84 -54 -109
      -16 -44 -20 -47 -67 -58 -77 -18 -187 -75 -269 -140 -121 -96 -214 -239 -257
      -393 -25 -92 -28 -302 -5 -393 20 -78 82 -207 129 -269 l38 -49 -16 -78 c-82
      -409 161 -793 569 -899 66 -18 103 -21 211 -18 l130 3 65 -58 c74 -68 209
      -138 309 -161 99 -24 297 -21 388 4 149 41 294 134 389 249 50 61 133 207 133
      235 0 7 23 18 52 25 77 20 215 93 280 148 119 101 219 261 252 403 23 95 21
      287 -3 382 -23 90 -74 195 -128 263 l-39 50 14 45 c7 25 16 90 19 145 21 370
      -216 690 -582 785 -66 18 -103 21 -211 18 l-130 -3 -61 55 c-74 67 -193 132
      -293 159 -90 25 -312 28 -395 6z m375 -223 c31 -12 79 -36 107 -54 l51 -33
      -307 -177 c-169 -98 -316 -187 -327 -199 -18 -20 -19 -44 -24 -455 l-5 -434
      -117 67 -118 68 0 380 c0 300 3 393 15 443 46 196 196 351 395 408 72 21 262
      13 330 -14z m658 -217 c242 -57 421 -277 426 -524 0 -43 -2 -82 -5 -85 -3 -4
      -143 73 -310 170 -167 96 -318 178 -336 181 -28 5 -76 -20 -375 -192 -189
      -109 -358 -206 -375 -217 l-33 -20 0 139 0 139 333 192 c268 154 348 196 408
      211 89 24 182 26 267 6z m-1608 -664 c0 -369 0 -370 23 -395 12 -14 180 -116
      372 -226 193 -111 354 -205 358 -209 8 -8 -221 -144 -233 -139 -4 2 -149 84
      -321 183 -276 158 -322 188 -384 250 -114 113 -165 234 -165 390 0 147 48 270
      149 377 50 54 168 138 193 138 5 0 8 -166 8 -369z m1641 24 c276 -158 322
      -188 384 -250 114 -113 165 -234 165 -388 0 -157 -52 -280 -165 -392 -39 -38
      -95 -82 -125 -98 l-55 -28 -5 377 -5 376 -25 21 c-14 12 -186 114 -381 227
      l-356 205 116 67 c64 37 121 66 127 65 6 -1 153 -83 325 -182z m-559 -134
      l153 -88 0 -183 0 -182 -154 -89 c-85 -49 -158 -89 -162 -89 -4 0 -77 40 -161
      89 l-153 89 0 183 0 183 150 87 c83 48 155 88 162 88 6 1 81 -39 165 -88z
      m485 -280 l63 -36 0 -376 c0 -342 -2 -383 -20 -453 -11 -43 -32 -101 -47 -129
      -43 -80 -143 -179 -221 -220 -108 -57 -169 -70 -291 -65 -117 6 -180 25 -268
      80 l-52 33 310 179 c170 99 319 190 329 204 19 24 20 43 20 454 l0 430 58 -32
      c31 -18 85 -49 119 -69z m-327 -488 l0 -138 -324 -187 c-178 -103 -351 -196
      -384 -207 -315 -107 -649 88 -718 419 -14 67 -15 162 -2 175 3 3 131 -67 284
      -156 347 -200 351 -202 384 -196 14 3 190 101 391 216 200 116 365 211 367
      211 1 0 2 -62 2 -137z"
              />
            </g>
          </svg>

          <div className="absolute bottom-0 left-0 p-7 flex flex-col space-y-4">
            <div className="flex space-x-3 items-center">
              <img ref={img3Ref} src={Fleche.src} className="w-7 h-6"></img>
              <span
                ref={titleDesc3Ref}
                className={`${afacad.className} text-gray-300 text-[26px]`}
              >
                Traditional development
              </span>
            </div>
            <span className={`${afacad.className} text-gray-300 text-[20px]`}>
              Traditional development leaves you with an unfair disadvantage and
              keeps your team constantly under pressure?
            </span>
          </div>
          <svg
            className="absolute z-40 top-0 cursor-pointer mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              ref={rec3Ref}
              vector-effect="non-scaling-stroke"
              d="M 10 90 V 90 Q 50 90 30 90 V 90 z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="w-1/4 h-full cursor-pointer relative"
          ref={div4Ref}
          onMouseEnter={(e) => handleMouseEnter(e, rec4Ref.current, div4Ref)}
          onMouseLeave={(e) => handleMouseLeave(e, rec4Ref.current, div4Ref)}
        >
          <svg
            className="absolute z-50 left-1/2 transform -translate-x-1/2 top-[15%]"
            ref={svg4Ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="200"
            height="200"
            baseProfile="basic"
          >
            <path
              className="node-path"
              fill="none"
              stroke="#21a366"
              stroke-width="0.5"
              d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
            />
            <path
              className="node-path"
              fill="none"
              stroke="#21a366"
              stroke-width="0.5"
              d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
            />
          </svg>

          <div className="absolute bottom-0 left-0 p-7 flex flex-col space-y-4">
            <div className="flex space-x-3 items-center">
              <img ref={img4Ref} src={Fleche.src} className="w-7 h-6"></img>
              <span
                ref={titleDesc4Ref}
                className={`${afacad.className} text-gray-300 text-[26px]`}
              >
                Traditional development
              </span>
            </div>
            <span className={`${afacad.className} text-gray-300 text-[20px]`}>
              Traditional development leaves you with an unfair disadvantage and
              keeps your team constantly under pressure?
            </span>
          </div>
          <svg
            className="absolute top-0 cursor-pointer mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              ref={rec4Ref}
              vector-effect="non-scaling-stroke"
              d="M 10 90 V 90 Q 50 90 30 90 V 90 z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <svg
        ref={svgAllRectRef}
        className="w-[90vw] h-[60vh] absolute z-40 cursor-pointer"
        onClick={() => {
          fillRectanglesBottom();
        }}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* top lines */}
        <path d="M 0 0 L 25 0" stroke="white" strokeWidth="0.1" fill="none" />
        <path d="M 25 0 L 50 0" stroke="white" strokeWidth="0.1" fill="none" />
        <path d="M 50 0 L 75 0" stroke="white" strokeWidth="0.1" fill="none" />
        <path d="M 75 0 L 100 0" stroke="white" strokeWidth="0.1" fill="none" />

        {/* bottom lines */}
        <path
          d="M 0 100 L 25 100"
          stroke="white"
          strokeWidth="0.1"
          fill="none"
        />
        <path
          d="M 25 100 L 50 100"
          stroke="white"
          strokeWidth="0.1"
          fill="none"
        />
        <path
          d="M 50 100 L 75 100"
          stroke="white"
          strokeWidth="0.1"
          fill="none"
        />
        <path
          d="M 75 100 L 100 100"
          stroke="white"
          strokeWidth="0.1"
          fill="none"
        />

        {/* vertical lines */}
        <path d="M 0 100 L 0 0" stroke="white" strokeWidth="0.05" fill="none" />
        <path
          d="M 25 100 L 25 0"
          stroke="white"
          strokeWidth="0.02"
          fill="none"
        />
        <path
          d="M 50 100 L 50 0"
          stroke="white"
          strokeWidth="0.02"
          fill="none"
        />
        <path
          d="M 75 100 L 75 0"
          stroke="white"
          strokeWidth="0.02"
          fill="none"
        />
        <path
          d="M 100 100 L 100 0"
          stroke="white"
          strokeWidth="0.05"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Index;
