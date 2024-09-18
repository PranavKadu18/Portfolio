import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const About = () => {

  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className='xs:w-[200px] w-full mt-8'> {/* Reduced width */}
        <motion.div 
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)} //direction,type,delay,duration
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] px-4 py-8 min-h-[240px] flex justify-evenly items-center flex-col" // Reduced padding and height
          >
            <img className="w-14 h-14 object-contain" src={icon} alt="" /> {/* Reduced icon size */}
            <h1 className="text-center text-white font-semibold text-[16px]">{title}</h1> {/* Adjusted text size */}
          </div>
        </motion.div>
      </Tilt>
    );
  };
  

  return (
    <>
      <motion.div className="mt-20" variants={textVariant()}>
        <h1 className={styles.sectionSubText}>Introduction</h1>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a frontend developer skilled in JavaScript, React, and GSAP, with
        experience in building responsive, interactive, and visually rich web
        applications. I'm passionate about solving challenges on LeetCode,
        continuously learning, and delivering scalable, user-friendly solutions.
        Let's collaborate to bring innovative ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-between">
        {services.map((s,i) => <ServiceCard key={i} index={i} {...s} />)}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
