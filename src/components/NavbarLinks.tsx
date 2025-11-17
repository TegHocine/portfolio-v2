import Link from 'next/link'
import React from 'react'

type NavbarLinksProps = {
  link: string[]
  title: string
  className?: string
  activeClass?: boolean
  onClick: () => void
}
const NavbarLinks = ({
  link,
  title,
  className,
  activeClass,
  onClick
}: NavbarLinksProps) => {
  const href = link[0] ? link[0] : ''
  return (
    <Link href={href}>
      <li
        className={`border-b border-darkgray py-3 px-4 hover:text-white md:border-b-0 hover:border-b-2 hover:border-b-yellow  md:border-l transition-all duration-100 ease-linear cursor-pointer  flex items-center
        ${className ? className : ''} 
        ${activeClass ? 'text-white md:border-b-2 border-b-yellow ' : ''}`}
        onClick={() => onClick()}>
        {title}
      </li>
    </Link>
  )
}

export default NavbarLinks
