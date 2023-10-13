import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePicture from '../../public/images/profile/developer-pic-1-min.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home () {
  return (
    <>
      {/* Meta-data  */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Moroz Volodymyr's portfolio as a Full-Stack Developer using Next.js, Tailwind CSS, and Framer-motion." />

      </Head>
<TransitionEffect/>
      {/* Main content */}
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            {/* Left part with image */}
            <div className='w-1/2 md:w-full'>
            <Image
        src={profilePicture}
        alt='Profile Picture' 
        className='w-full h-auto lg:hidden md:inline-block md:w-full'
        priority // Optionally, set 'priority' for faster loading
        sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
      />
             
            </div>

            {/* Right part witn text */}
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              {/* animated text */}
              <AnimatedText
                text='Transforming Ideas Into Real Web Solutions with Code and Design Excellence'
                className='!text-6xl !text-left xl:!text-5xl lg:text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />

              {/* Text */}
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As an aspiring full-stack developer, I am enthusiastic about
                learning and dedicated to turning creative ideas into innovative
                web applications. My passion for web development drives me to
                explore and expand my skills in both front-end and back-end
                technologies. Explore my latest projects and articles,
                showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                {/* target={'_blank'} - open in the new tab,, /dummy.pdf - place for resume */}
                <Link
                  href='/myPortfolio.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
               dark:bg-light dark:text-dark 
               hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light
               md:p-2  md:px-4 md:text-base
              '
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>

                <Link
                  href='https://www.linkedin.com/in/volodymyr-moroz1/'
                  target={'_blank'}
                  className='flex items-center  ml-4 p-2.5 px-6 
              rounded-lg text-lg font-semibold 
              border-2 border-solid border-transparent hover:border-dark underline dark:text-light
              md:text-base
              '
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      <HireMe />
      <div className='absolute right-6  bottom-1 inline-block w-24 md:hidden'>
        <Image
          src={lightBulb}
          alt='Volodymyr Moroz'
          className='w-full h-auto'
        />
      </div>
    </>
  )
}
