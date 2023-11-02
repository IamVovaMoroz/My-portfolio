import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/foto1-bg.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)

  const springValue = useSpring(motionValue, { duration: 3000 })

  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

function about () {
  return (
    <>
      <Head>
        {/* title on a web page for SEO */}
        <title>About page | Moroz Volodymyr </title>
        <meta name="description" content="Meet Volodymyr Moroz, a Full Stack Developer specializing in Node.js. Learn about his journey and skills in web development." />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light '>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium'>
                - Hello, I&apos;m Volodymyr Moroz, a Junior Full Stack Developer
                specializing in Node.js. My journey into the world of technology
                began with a strong engineering background, providing me with a
                solid foundation for creative problem-solving. I have a wealth
                of experience managing websites on a platform akin to WordPress,
                and this experience has been instrumental in shaping my approach
                to web development.
              </p>

              <p className='my-4 font-medium'>
                - My passion for technology eventually led me to a pivotal
                decision - to transition from website management to programming,
                aligning my career with my true passion. I embarked on an
                intensive course in cutting-edge technologies, successfully
                earning a diploma as a Full-Stack Developer specializing in
                Node.js.
              </p>
              <p className='font-medium'>
                - My proficiency spans a wide range of technologies crucial for
                modern development, including HTML5, CSS3, SASS, JavaScript, TypeScript,

                React, Redux, Node.js, Git, Next.js, MongoDB, Tailwind CSS, and
                Framer-motion. My portfolio, meticulously crafted using Next.js,
                Tailwind CSS, and Framer-motion, showcases my capabilities.
                Here, you can explore my projects, access my resume, and find
                links to my social profiles, including GitHub. I&apos;m excited
                about the prospect of collaborating on innovative projects and
                contributing my expertise to your team.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8  dark:bg-dark dark:border-light
             xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' />
              <Image
                src={profilePic}
                alt='Volodymyr Moroz'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={6} />
                  {/* 4 */}
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  project completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={1} />+
                  {/* 1+ */}
                  </span>
                <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  year of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
