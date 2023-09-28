import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import profilePic from '../../public/images/profile/Photo.png'
import Image from 'next/image'

function about () {
  return (
    <>
      <Head>
        {/* title on a web page for SEO  */}
        <title>About page </title>
        <meta name='description' content='any description for SEO' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                Biography
              </h2>
              <p className='font-medium'>
                - Hello, I'm Volodymyr Moroz, a Junior Full Stack Developer specializing in Node.js. My journey into the world of technology began with a strong engineering background, providing me with a solid foundation for creative problem-solving. I have a wealth of experience managing websites on a platform akin to WordPress, and this experience has been instrumental in shaping my approach to web development.
              </p>

              <p className='my-4 font-medium'>
                - My passion for technology eventually led me to a pivotal decision – to transition from website management to programming, aligning my career with my true passion. I embarked on an intensive course in cutting-edge technologies, successfully earning a diploma as a Full-Stack Developer specializing in Node.js.
              </p>
              <p className='font-medium'>
                - My proficiency spans a wide range of technologies crucial for modern development, including HTML5, CSS3, SASS, JavaScript, React, Redux, Node.js, Git, Next.js, Tailwind CSS, and Framer-motion. My portfolio, meticulously crafted using Next.js, Tailwind CSS, and Framer-motion, showcases my capabilities. Here, you can explore my projects, access my resume, and find links to my social profiles, including GitHub. I'm excited about the prospect of collaborating on innovative projects and contributing my expertise to your team.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark'>

                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark'/>
              <Image
                src={profilePic}
                alt='Volodymyr Moroz'
                className='w-full h-auto rounded-2xl bg-light p-8'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
