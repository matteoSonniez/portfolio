import "./styles.css";
import { useRef } from "react";
import { Rowdies } from "next/font/google";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import PropTypes from 'prop-types';

const sofia = Rowdies({ subsets: ["latin"], weight: "400" });

function ParallaxText({ children, baseVelocity = 100, className }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`parallax ${className}`}>
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

ParallaxText.propTypes = {
  children: PropTypes.string.isRequired,
  baseVelocity: PropTypes.number,
  className: PropTypes.string
};

export default function App() {
  return (
    <section className="bottom-8 absolute">
      <ParallaxText className={`${sofia.className}`} baseVelocity={-5}>
        Framer Motion Framer Motion
      </ParallaxText>
      <ParallaxText className={`${sofia.className} text-red-500`} baseVelocity={5}>
        Scroll velocity Framer Motion
      </ParallaxText>
    </section>
  );
}
