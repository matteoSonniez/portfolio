"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Laptop2 from "../../img/laptop2.webp";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const wraper = useRef(null);
    const box1Ref = useRef(null);
    const box1InnerRef = useRef(null); // Référence pour la box

  useEffect(() => {
    const box = box1Ref.current;
    const boxInner = box1InnerRef.current; 
    const boxWrapper = wraper.current; // Cibler la box

    // Créer une timeline avec ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: box, // Utiliser box comme trigger
        start: "top bottom", // Début de l'animation (quand la box entre dans la vue)
        end: "bottom top", // Fin de l'animation (quand la box sort de la vue)
        markers: true, // Afficher les marqueurs pour le debug
        scrub: true, // Animation liée au scroll
      },
    });

    // Animation de la box
    timeline
      .set(boxWrapper, { 
        perspective: 800 
       })
      .set(box, { 
        transformStyle: "preserve-3d" 
       })
       .to(box, {    
        rotationY: 50, // Rotation sur l'axe Y
      })
      .to(box, {
        xPercent: 50, // Rotation sur l'axe Y
      }, 0)
      
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "lightgray" }}>
        Intro Content
      </div>

      {/* Box avec animation 3D */}
      <div ref={wraper}>
        <div ref={box1Ref}>
          <div
            ref={box1InnerRef}
            className="h-[100px] w-[200px] bg-red-500"
            style={{
              perspective: "1000px", // Perspective appliquée ici
            }}
          >
            <img src={Laptop2.src} alt="Laptop Image" />
          </div>
        </div>
      </div>

      <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
        Another Content Section
      </div>
    </div>
  );
};

export default Page;
