import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import 'remixicon/fonts/remixicon.css'

const Works = () => {

  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    host_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-4 rounded-2xl sm:w-[300px] w-full mt-8" // Reduced width and padding
        >
          <div className="relative w-full h-[180px]"> {/* Reduced height */}
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
  
            {/* GitHub Link 1 */}
            <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
  
            {/* Optional second GitHub link */}
            <div className="absolute right-10 top-0 flex justify-end m-2 card-img_hover">
              <div
                onClick={() => window.open(host_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <i class=" text-2xl ri-arrow-down-circle-fill"></i>
              </div>
            </div>
          </div>
  
          <div className="mt-4">
            <h3 className="text-white font-bold text-[20px]">{name}</h3> {/* Reduced font size */}
            <p className="mt-2 text-secondary text-[12px]">{description}</p> {/* Reduced font size */}
          </div>
  
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[12px] ${tag.color}`}> {/* Reduced tag font size */}
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };
  

  return (
    <>
        <motion.div variants={textVariant}>
          <h1 className={styles.sectionSubText}>My Work</h1>
          <h1 className={styles.sectionHeadText}>Projects.</h1>
        </motion.div>

        <div className='w-full flex'>
          <motion.p variants={fadeIn("","",0.1,1)} className='mt-3 text-secondary leading-[30px] text-[17px] max-w-3xl'>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap justify-between'>
          {projects.map((project,idx) => <ProjectCard key={idx} index={idx} {...project} />)}
        </div>
    </>
  )
}

export default SectionWrapper(Works,"");