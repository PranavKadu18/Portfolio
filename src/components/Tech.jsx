import React from 'react'
import {BallCanvas} from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'



const Tech = () => {
  return (
    <div className='flex flex-wrap justify-between gap-10'>
      {technologies.map((tech,idx) => (
        <div key={tech.name} className='w-28 h-28'>
            <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");