import React from 'react'
import {motion} from "framer-motion"
import {styles} from "../styles"
import { ComputersCanvas } from './canvas'
import { style } from 'framer-motion/client'

const Hero = () => {
  return (
    <section className='w-full h-screen relative mx-auto'>
      <div className={`${styles.paddingX} flex items-start absolute inset-0 top-[120px] max-w-7xl mx-auto gap-5`}>

        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>

        <div className='mb-8'>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Pranav</span></h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            I develop sleek and modern websites with animations. <br />
            I am leetcoder.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='relative xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-4'>
        <a  href="#about">
          <div className='w-[30px] h-[60px] border-2 rounded-full flex items-start justify-center p-2'>
            <motion.div
              className='w-3 h-2.5 rounded-full bg-white-100'
              animate={{ y:[0,24,0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero