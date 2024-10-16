"use client"
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Laptop2 from "../../img/laptop2.webp";
import Lenis from "@studio-freight/lenis"; // Importation de Lenis

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const gridRef = useRef(null);
  const gridWrapRef = useRef(null);
  const gridItemsRef = useRef([]); // Pour stocker les références des items de la grille

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
      .set(gridWrap, {transformStyle:"preserve-3d"})
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
        gridItems.map((item) => item.querySelector('.grid__item-inner')),
        {
          scale: 1,
        },
        {
          scale: 2.5,
        },
        0
      );

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "lightgray" }}>
        Intro Content
      </div>

      <section className="">
        <div className="grid w-full" ref={gridRef}>
          <div className="grid-wrap grid grid-cols-3 gap-x-4 gap-y-1" ref={gridWrapRef}>
            {Array.from({ length: 44 }).map((_, index) => (
              <div className="grid__item w-[300px] h-[200px]" ref={(el) => (gridItemsRef.current[index] = el)} key={index}>
                <div className="grid__item-inner rounded-xl overflow-hidden">
                  <img src={Laptop2.src} alt={`Laptop ${index}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
        Another Content Section
      </div>
    </div>
  );
};

export default Page;
