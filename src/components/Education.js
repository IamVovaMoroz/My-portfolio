
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info, certificate }) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const { scrollYProgress } = useScroll();

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4  xs:ml-2'>
        <Details
            type='Full-Stack Developer Node.js'
            time='2022-2023'
            place='GoIT.global'
            info='This course offers a comprehensive curriculum, including fundamental programming languages (HTML5, CSS3, SASS, JavaScript, React, Redux, Node.js) and key concepts like data structures and algorithms. Additionally, it features a year-long IT English course for industry-specific communication enhancement and provides valuable hands-on experience through collaborative team projects in web application development.'
          
          />
          <Details
            type='Training in product promotion and personal growth.'
            time='2003-2013'
            place='Morinda inc'
            info='My regular attendance at business training sessions in Ukraine and the United States has nurtured a diverse range of valuable qualities within me. These experiences have fostered a high level of self-discipline, effective communication skills, goal setting and achievement, determination, and the ability to work seamlessly within a team, among many others. Moreover, they have played a pivotal role in my journey to establish my online business, including the successful launch of multiple e-commerce ventures.'
         
          />
        <Details
            type='Engineer in the Construction of Marine Structures'
            time='1997-2000'
            place='Odessa Nautical College of the Technical Fleet'
            info='My education at the Odessa Nautical College of the Technical Fleet, where I graduated with a degree in Marine Structures Engineering, has equipped me with an engineering mindset, a keen attention to detail, and the ability to tackle complex tasks. These qualities have been pivotal in successfully executing my portfolio projects.'
           
          />
                    
        </ul>
      </div>
    </div>
  );
}

export default Education;
