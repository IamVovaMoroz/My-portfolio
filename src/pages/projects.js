import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/Calendar-image-min.jpg'
import project2 from '../../public/images/projects/films-min.jpg'
import project3 from '../../public/images/projects/ice-cream_11-min.jpg'
import project4 from '../../public/images/projects/web2-min.jpg'
import project5 from '../../public/images/projects/crypto-screener-cover-image-min.jpg'
import project6 from '../../public/images/projects/toystore-min.jpg'
import project7 from '../../public/images/projects/marta-min.jpg'
import project8 from '../../public/images/projects/smartartedit.png'
import project9 from '../../public/images/projects/web13.jpg'

import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article
      className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark 
shadow-2xl p-12 relative rounded-br-2xl   dark:border-light 
lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl  xs:p-4
'
    >
      {/* shadow */}
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl  dark:bg-light xs:-right-2
       sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'
      />

      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='my-2 flex items-center'>
          <Link href={githubLink} target='_blank' className='w-10'>
            {' '}
            <GithubIcon />{' '}
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 text-lg font-semibold  dark:bg-light  dark:text-dark
            sm:px-4 sm:text-base
            '
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, githubLink }) => {
  return (
    <>
      <Head>
        <title>Projects page | Moroz Volodymyr</title>
        <meta
          name='description'
          content="Explore Moroz Volodymyr's portfolio of web development projects, including web applications, front-end and back-end development, and more. Discover a range of projects built using technologies like React, Next.js, Node.js, and more."
        />
      </Head>
      <article
        className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative dark:border-light  dark:bg-dark xs:p-4'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl  dark:bg-light 
      md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem]
      '
        />

        <Link
          href={link}
          target='_blank'
          className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
          <FramerImage
            src={img}
            alt={title}
            className='w-full h-auto'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
          />
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4 '>
          <span className='text-primary font-medium text-xl  dark:text-primaryDark lg:text-lg md:text-base'>
            {type}
          </span>
          <Link
            href={link}
            target='_blank'
            className='hover:underline underline-offset-2'
          >
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>
              {title}
            </h2>
          </Link>

          <div className='w-full my-2 flex items-center justify-between'>
            <Link
              href={link}
              target='_blank'
              className=' text-lg font-semibold underline md:text-base'
            >
              {' '}
              Visit{' '}
            </Link>
            <Link href={githubLink} target='_blank' className='w-8 md:w-6'>
              {' '}
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

function projects () {
  return (
    <>
      <Head>
        {/* title on a web page for SEO  */}
        <title>Projects page</title>
        <meta name='description' content='any description for SEO' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center  dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge! '
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='AI-driven photo editing App'
                img={project8}
                summary='A full-stack project utilizing artificial intelligence functions for photo processing. It modifies photos, enhances quality, removes backgrounds, and integrates a payment system. Built with React, Next.js, TailwindCSS, TypeScript, Clerk, MongoDB, Cloudinary AI, Stripe, and other libraries.'
                link='https://smartartedit.vercel.app/'
                githubLink='https://github.com/IamVovaMoroz/smartartedit'
                type='Featured Project'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title='Responsive sales and support tracking platform.'
                img={project9}
                summary='Crafted with precision and finesse, our frontend project offers seamless responsiveness across all devices, from mobile to laptop. Featuring intuitive sales monitoring, personalized customer support, and comprehensive growth tracking, it stands as a testament to innovation in web development. Integrated with Stripe for effortless payments, this project showcases my expertise in Next.js, TypeScript, and Tailwind CSS, Radix-ui setting new standards in user experience and functionality.'
                link='https://next-ts-pro.vercel.app/'
                githubLink='https://github.com/IamVovaMoroz/next-ts-pro'
                type='Featured Project'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title='ToyJoy Project'
                img={project6}
                summary='WordPress website with an admin panel for a store catering to children, offering a diverse range of products and user-friendly purchasing options. My expertise encompasses HTML5, CSS/SASS, JavaScript, and PHP for crafting stylish and functional designs. Additionally, I integrated Cloudinary for efficient media content management and utilized REST APIs to enhance functionality and interact with external services. The outcome is an appealing and intuitive interface, providing convenient conditions for purchasing products designed for kids.'
                link='http://toyjoy.great-site.net/?i=2'
                githubLink='https://github.com/IamVovaMoroz/childhood'
                type='Featured Project'
                priority
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='GooseTrack-Calendar Backend Project'
                img={project1}
                summary='In the GooseTrack-Calendar project, I played a dual role as Scrum Master and Back-End Developer. 
                Our team built a robust backend API using modern technologies like Node.js, Express, MongoDB, and more. 
                This API formed the foundation for seamless task and review management, user registration, and login,
                 while incorporating NoSQL database management for enhanced performance and security.'
                link='https://kharkivska-kurkuma.github.io/GooseTrack/'
                githubLink='https://github.com/IvanRuskevych/GooseTrack-backend'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Ice Cream Website Development Project'
                img={project3}
                summary='In the Ice Cream Website Development Team Project, I played the dual role of Scrum Master and Front-End Developer, leading the development of the website`s visually appealing and functional footer using HTML and CSS. My optimization efforts ensured a seamless user experience on mobile devices, and I collaborated closely with the team to deliver outstanding results, utilizing technologies like Parcel, SASS, JS, HTML5, and CSS3.'
                link='https://tetyana8222.github.io/comand-project-icecream/?product-user-name=&product-user-tel=&product-user-comment=#home'
                githubLink='https://github.com/Tetyana8222/comand-project-icecream'
                priority
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              {' '}
              <Project
                title='Web Studio: Innovative Creative Business Solutions'
                img={project4}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
               It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                link='https://iamvovamoroz.github.io/web-08/'
                githubLink='https://github.com/IamVovaMoroz/web-08'
                priority
                type='Featured Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='The city of goodness'
                img={project7}
                summary='Participated as a volunteer in a social project, leading the backend team while also developing the frontend. Designed and implemented an admin panel using Strapi, utilizing CSS/SASS, JavaScript, Rest API, Next.js, and Strapi technologies.'
                link='https://martha-house.vercel.app/en-US'
                githubLink='https://github.com/IamVovaMoroz/marta_backend_strapi'
                type='Featured Project'
                priority
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title='
                Film Search Engine Project'
                img={project2}
                summary='In the Film Search Engine Project, I played a dual role as Scrum Master and Front-End Developer. I oversaw agile development processes and took charge of designing and implementing a responsive movie search bar with real-time suggestions and dynamic results. My contributions improved the user experience and utilized technologies such as HTML5, CSS/SASS, JavaScript, API, REST, AJAX, and Parse.'
                link='https://ivanruskevych.github.io/code-wizards-team-project-js/'
                githubLink='https://github.com/IvanRuskevych/code-wizards-team-project-js'
                type='Featured Project'
                priority
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              {' '}
              <Project
                title='Crypto Screener Application'
                img={project5}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
                link='/'
                githubLink='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              {' '}
              <Project
                title='Crypto Screener Application'
                img={project5}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
                link='/'
                githubLink='/'
                type='Featured Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
