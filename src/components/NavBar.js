import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ({ href, title, className = '' }) => {
  return (<Link href={href} className={`${className}`}>{title}</Link>)
}


const NavBar = () => {
  return (
    // w-full(width) px-32(padding-left-right) py-8(padding-UpDown)
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/' title='About' className='mx-4' />
        <CustomLink href='/' title='Projects' className='mx-4' />
        <CustomLink href='/' title='Articles' className='ml-4' />
      </nav>

      <nav>
        <Link href='/' target={'_blanc'} className='mr-4'>
          Twitter
        </Link>
        <Link href='/' target={'_blanc'} className='mx-4'>
          Skype
        </Link>
        <Link href='/' target={'_blanc'} className='mx-4'>
          Telegram
        </Link>
        <Link href='/' target={'_blanc'} className='mx-4'>
          Linkedin
        </Link>
        <Link href='/' target={'_blanc'} className='mx-4'>
          Youtube
        </Link>
        <Link href='/' target={'_blanc'}  className='ml-4'>
          Twitter
        </Link>
      </nav>
      {/* left-[50%]: Sets the left property of the element to 50% of its parent element's width, top-2: Sets the top property of the element to 2 pixel */}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
