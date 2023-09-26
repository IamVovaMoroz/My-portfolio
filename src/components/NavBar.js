// import Link from 'next/link'
// import React from 'react'
// import Logo from './Logo'
// import { useRouter } from 'next/router'

// const CustomLink = ({ href, title, className = '' }) => {
//   const router = useRouter()

//   return (
//     <Link href={href} className={`${className} relative group`}>
//       {title}
//       {/* router.asPath - current url in browser */}
//       <span
//         className={`h-[1px] inline-block bg-dark
//         absolute left-0 -bottom-0.5
//          group-hover:w-full translate-[width] easy duration-300
//          ${router.asPath === href ? 'w-full' : 'w-0'}`}
//       >
//         &nbsp;
//       </span>
//     </Link>
//   )
// }

// const NavBar = () => {
//   return (
//     // w-full(width) px-32(padding-left-right) py-8(padding-UpDown)
//     <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
//       <nav>
//         <CustomLink href='/' title='Home' className='mr-4' />
//         <CustomLink href='/' title='About' className='mx-4' />
//         <CustomLink href='/' title='Projects' className='mx-4' />
//         <CustomLink href='/' title='Articles' className='ml-4' />
//       </nav>

//       <nav>
//         <Link href='/' target={'_blanc'} className='mr-4'>
//           Twitter
//         </Link>
//         <Link href='/' target={'_blanc'} className='mx-4'>
//           Skype
//         </Link>
//         <Link href='/' target={'_blanc'} className='mx-4'>
//           Telegram
//         </Link>
//         <Link href='/' target={'_blanc'} className='mx-4'>
//           Linkedin
//         </Link>
//         <Link href='/' target={'_blanc'} className='mx-4'>
//           Youtube
//         </Link>
//         <Link href='/' target={'_blanc'} className='ml-4'>
//           Twitter
//         </Link>
//       </nav>
//       {/* left-[50%]: Sets the left property of the element to 50% of its parent element's width, top-2: Sets the top property of the element to 2 pixel */}
//       <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
//         <Logo />
//       </div>
//     </header>
//   )
// }

// export default NavBar
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {
  TelegramIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon
} from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* router.asPath - текущий URL в браузере */}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>

      <nav className='flex items-center justify-items-center flex-wrap'>
        <motion.a
          href=''
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mr-3 w-6'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href='https://twitter.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href='https://github.com/'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://www.pinterest.com/'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6'
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href='https://telegram.org/'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='ml-3 w-6'
        >
          <TelegramIcon />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
