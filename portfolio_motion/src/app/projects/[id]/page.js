"use client";
import React, { useState, useEffect } from "react";
import { anticipate, delay, motion, useAnimation } from "framer-motion";
import Image1 from "../../../img/imageProject.png";
import Image2 from "../../../img/imageProject2.png";
import Image3 from "../../../img/imageProject3.png";
import Image4 from "../../../img/imageProject4.png";
import Image5 from "../../../img/imageProject5.png";

const Page = () => {
    const control = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();
    const control5 = useAnimation();

    const [boxOpen, setBoxOpen] = useState(0);

    const [video1, setVideo1] = useState(false);
    const [video2, setVideo2] = useState(false);
    const [video3, setVideo3] = useState(false);
    const [video4, setVideo4] = useState(false);
    const [video5, setVideo5] = useState(false);

    useEffect(() => {
        setVideo3(false);
        control.start("visible");
        control2.start("visible");
        control3.start("visible");
        control4.start("visible");
        control5.start("visible");
        
        if (boxOpen == 1) {
            setTimeout(() => {
                control.start("open");
                setVideo1(true);
            }, 700);
        }
        if (boxOpen == 2) {
            setTimeout(() => {
                control2.start("open");
                setVideo2(true);
            }, 700);
        }
        if (boxOpen == 3) {
            setTimeout(() => {
                control3.start("open");
            }, 700);
            setTimeout(() => {
                setVideo3(true);
            }, 2000);
        } 
        if (boxOpen == 4) {
            setTimeout(() => {
                control4.start("open");
                setVideo4(true);
            }, 700);
        }
        if (boxOpen == 5) {
            setTimeout(() => {
                control5.start("open");
                setVideo5(true);
            }, 700);
        }
      }, [control, boxOpen]);
    
    useEffect(() => {
        setTimeout(() => {
            control3.start("open");
        }, 900);
    }, []);

    const boxVariantLeft = {
        visible: { y: 0, width: "4vw", height:"90vh", transition: { duration: 0.7, ease: [1, 0.2, 0.2, 0.5], }  },
        open: { y: 0, width: "81vw", height:"90vh", transition: { duration: 0.7, ease: [0.5, 0.2, 0.2, 1], }  },
        hidden: {  y: 1800, width: "4vw", height:"90vh", },
      };

    const boxVariantLeft2 = {
        visible: { y: 0, width: "4vw", height:"90vh", transition: { duration: 0.7, ease: [1, 0.2, 0.2, 0.5], } },
        open: { y: 0, width: "81vw", height:"90vh", transition: { duration: 0.7, ease: [0.5, 0.2, 0.2, 1], } },
        hidden: {  y: 1500, width: "4vw", height:"90vh", },
      };
    
    const boxVariantMiddle = {
        visible: { y: 0, width: "4vw", height:"90vh", transition: { duration: 0.7, ease: [1, 0.2, 0.2, 0.5], } },
        open: { y: 0, width: "81vw", height:"90vh", transition: { duration: 0.7, ease: [0.5, 0.2, 0.2, 1], } },
        hidden: { y: 1200, width:"4vw", height:"90vh", },
      }; 

    const boxVariantRight = {
        visible: {  y: 0, width: "4vw", height:"90vh", transition: { duration: 0.7, ease: [1, 0.2, 0.2, 0.5], } },
        open: { y: 0, width: "81vw", height:"90vh", transition: { duration: 0.7, ease: [0.5, 0.2, 0.2, 1], } },
        hidden: { y: 1500, width: "4vw", height:"90vh", },
      }; 

    const boxVariantRight2 = {
        visible: {  y: 0, width: "4vw", height:"90vh", transition: { duration: 0.7, ease: [1, 0.2, 0.2, 0.5], } },
        open: { y: 0, width: "81vw", height:"90vh", transition: { duration: 0.7, ease: [0.5, 0.2, 0.2, 1], } },
        hidden: { y: 1800, width: "4vw", height:"90vh", },
      };   

    return (
        <div className="bg-white w-screen h-screen flex justify-center items-center space-x-2">
            <motion.div
                onClick={()=>{setBoxOpen(1)}}
                variants={boxVariantLeft}
                initial="hidden"
                animate={control}
                className="relative">
                    <img className={`object-cover hover:filter-none transition duration-300 h-full cursor-pointer ${boxOpen == 1 ? "filter-none" : "filter grayscale"}`} src={Image2.src}>
                    </img>
            </motion.div>
            <motion.div
                onClick={()=>{setBoxOpen(2)}}
                variants={boxVariantLeft2}
                initial="hidden"
                animate={control2}
                className="relative">
                    <img className={`object-cover hover:filter-none transition duration-300 h-full cursor-pointer ${boxOpen == 2 ? "filter-none" : "filter grayscale"}`} src={Image3.src}>
                    </img>
            </motion.div>

            <motion.div
                onClick={()=>{setBoxOpen(3)}}
                variants={boxVariantMiddle}
                initial="hidden"
                animate={control3}
                className=" relative flex bg-black">
                    {video3 ?
                    <video className="w-full" autoPlay loop muted>
                        <source src="/img/fomula1video.mp4" type="video/mp4" />
                    </video>
                    :
                    <img className={`object-cover hover:filter-none transition duration-300 h-full cursor-pointer ${boxOpen == 3 ? "filter-none" : "filter grayscale"}`} src={Image1.src}>
                    </img>
                    }
            </motion.div>

            <motion.div
                onClick={()=>{setBoxOpen(4)}}
                variants={boxVariantRight}
                initial="hidden"
                animate={control4}
                className="relative">
                    <img className={`object-cover hover:filter-none transition duration-300 h-full cursor-pointer ${boxOpen == 4 ? "filter-none" : "filter grayscale"}`} src={Image4.src}>
                    </img>
            </motion.div>
            <motion.div
                onClick={()=>{setBoxOpen(5)}}
                variants={boxVariantRight2}
                initial="hidden"
                animate={control5}
                className="relative">
                    <img className={`object-cover hover:filter-none transition duration-300 h-full cursor-pointer ${boxOpen == 5 ? "filter-none" : "filter grayscale"}`} src={Image5.src}>
                    </img>
            </motion.div>
        </div>
    );
}

export default Page;
