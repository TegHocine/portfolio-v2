import { useRouter } from "next/router"
import { useState } from "react"
import Footer from "./Footer"
import NavbarLinks from "./NavbarLinks"

const links = [
  { title: "_hello", link: ["/"] },
  { title: "_about-me", link: ["/about"] },
  { title: "_projects", link: ["/projects"], className: "md:border-r" },
  //   {
  //     title: '_contact-me',
  //     link: ['/contact', '/contact/success'],
  //     className: 'md:border-r md:ml-auto'
  //   }
]

const Navbar = () => {
  const { pathname } = useRouter()

  const [show, setShow] = useState(false)

  const showSidebar = () => {
    setShow((prev) => !prev)
  }
  const hideSidebar = () => {
    setShow(false)
  }

  return (
    <nav className='h-12 fixed w-full border-b border-darkgray bg-blue z-50  overflow-x-hidden'>
      <div className='w-full h-full  flex items-center justify-between relative'>
        <h3 className='text-base h-full text-gray flex items-center pl-4 md:basis-1/4 lg:basis-1/5 md:border-l md:border-darkgray'>
          J.Doe
        </h3>
        <ul
          className={`w-full fixed bg-blue left-0 top-12 text-gray text-base flex flex-col  h-[calc(100vh_-_3rem)]  md:opacity-100  transition-all duration-300 ease-linear ${
            show ? "translate-x-0 opacity-100" : "opacity-0 translate-x-full "
          }  md:static md:h-full md:flex md:translate-x-0 md:flex-row md:basis-3/4 lg:basis-4/5`}>
          {links.map((link, _i) => (
            <NavbarLinks
              key={_i}
              {...link}
              activeClass={link.link.includes(pathname)}
              onClick={hideSidebar}
            />
          ))}

          <Footer mobile />
        </ul>
        <button
          className={`pr-4 flex flex-col md:hidden`}
          onClick={showSidebar}>
          <span
            className={`pb-0.5 my-0.5 w-5 bg-gray transition-all duration-300 ease-linear ${
              show && "rotate-45 "
            }`}></span>
          <span
            className={`pb-0.5 my-0.5 w-5 bg-gray transition-all duration-300 ease-linear ${
              show && "hidden"
            }`}></span>
          <span
            className={`pb-0.5 my-0.5 w-5 bg-gray transition-all duration-300 ease-linear ${
              show && "-rotate-45 -mt-1"
            } `}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
