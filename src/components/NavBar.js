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

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* router.asPath - текущий URL в браузере */}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
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

      <nav>
        <Link href='https://twitter.com' target={'_blank'} className='mr-4'>
          Twitter
        </Link>
        <Link href='https://www.skype.com' target={'_blank'} className='mx-4'>
          Skype
        </Link>
        <Link href='https://telegram.org' target={'_blank'} className='mx-4'>
          Telegram
        </Link>
        <Link href='https://www.linkedin.com' target={'_blank'} className='mx-4'>
          Linkedin
        </Link>
        <Link href='https://www.youtube.com' target={'_blank'} className='mx-4'>
          Youtube
        </Link>
        <Link href='https://twitter.com' target={'_blank'} className='ml-4'>
          Twitter
        </Link>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
