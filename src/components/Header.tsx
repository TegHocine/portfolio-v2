import { useRouter } from 'next/router'
import React from 'react'

type HeaderProps = {
  mobile?: boolean
  title?: string
  className?: string
}

const Header = ({ mobile, title, className }: HeaderProps) => {
  const headerObject: { [key: string]: string } = {
    '/': '_hello',
    '/about': '_about-me',
    '/projects': '_projects',
    '/contact': '_contact-me'
  }
  const { pathname } = useRouter()
  return mobile ? (
    <h2 className='text-sm py-6 px-8 md:hidden'>{headerObject[pathname]}</h2>
  ) : (
    <div className='hidden bg-blue w-full h-12 border-b border-darkgray  md:flex items-center rounded-t-md text-gray'>
      <h2
        className={`text-base h-full  flex items-center px-4 md:min-w-[40%] lg:min-w-[25%] md:border-r md:border-darkgray  justify-between overflow-hidden break-keep ${
          className ? className : ''
        }`}>
        {title}
      </h2>
    </div>
  )
}

export default Header
