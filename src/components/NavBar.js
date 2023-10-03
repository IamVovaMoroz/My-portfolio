
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {
  TelegramIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  MoonIcon,
  SunIcon
} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* router.asPath - текущий URL в браузере */}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }  dark:bg-light`}
       
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {

const [mode,setMode] = useThemeSwitcher()

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
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

        <button onClick={() => { setMode(mode === "light" ? "dark" : "light") }} 
        className={`ml-3 flex items-center justify-center rounded-full p-1  
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
  {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
</button>

      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
