import React from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target='_blank'
            className='text-primary  dark:text-primaryDark capitalize '
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  )
}

function Experience () {
  const { scrollYProgress } = useScroll()

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Junior Full-Stack Developer'
            company='Vixdev'
            companyLink='https://www.linkedin.com/company/vixdev/'
            time='12.2023 - present'
            address='Ukraine'
            work='Currently engaged in both front-end and back-end development at a software development company, contributing to all stages of website creation.'
          />

          <Details
            position='Junior Full-Stack Developer'
            company='Baza-trainee'
            companyLink='https://baza-trainee.tech/en'
            time='09.2023 - 12.2023'
            address='Ukraine'
            work=' I volunteered as a Full Stack Developer on social impact projects, collaborating with a team of front-end and back-end developers, designers, and testers. I focused on creating websites for various social causes and actively participated in both front-end and back-end development, contributing to all aspects of the website creation process.'
          />
          <Details
            position='Founder and director'
            company='Navigator'
            companyLink='/'
            time='2013-2023'
            address='Odessa, Ukraine'
            work='I ventured into the world of e-commerce by launching multiple online stores specializing in electronics and health products. Through meticulous design, effective online marketing, and a strong commitment to customer satisfaction, I achieved remarkable success with my flagship store, serving more than 30,000 delighted customers. This experience not only solidified my expertise in e-commerce but also honed my skills in web design and digital marketing, which continue to be valuable assets in my career'
          />
          <Details
            position='Deputy director of the newspaper'
            company='Vechernie Vesti'
            companyLink='https://gazetavv.com/'
            time='2008-2013'
            address='Odessa, Ukraine'
            work='I organized sales through a dealer network, oversaw distribution, and managed the publication of one of the largest newspapers in Ukraine in Odessa, Odessa region, and the southern part of Ukraine. This experience greatly contributed to my skills in logistics, distribution, and managing large-scale operations, which I continue to apply to my future endeavors.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
