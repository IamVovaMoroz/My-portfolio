import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';


const Details = ({ type, time, place, info, certificate }) => {

const ref = useRef(null)

    return (
      <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
          <h3 className='capitalize font-bold text-2xl'>
            {type}
          </h3>
          <span className='capitalize font-medium text-dark/75'>
            {time} | {place}
          </span>
          <p className='font-medium w-full'>{info}</p>
        </motion.div>
      </li>
    );
  };

function Education() {

    const ref = useRef(null)

const {scrollYProgress} = useScroll(
    {target: ref, offset: ["start end", "center start"]}
)

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
          
            type="Full-Stack Developer Node.js"
            time="2022-2023"
            place="GoIT.global"
            info="This course offers a comprehensive curriculum, including fundamental programming languages (HTML5, CSS3, SASS, JavaScript, React, Redux, Node.js) and key concepts like data structures and algorithms. Additionally, it features a year-long IT English course for industry-specific communication enhancement and provides valuable hands-on experience through collaborative team projects in web application development."
            certificate="https://drive.google.com/file/d/1_Lg-RBGhA2KUQ-RDg79NidxBtIA1DDvr/view"       
           
          />
        
          
        </ul>
      </div>
    </div>
  );
}

export default Education;
