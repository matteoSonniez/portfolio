import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x:0 , transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x:400 }
};

const Index = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="w-[300px] h-[200px] bg-white m-8"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
    </motion.div>
  );
};

export default Index;
