import { useContext, useEffect, useState } from "react"
import {
  RiArrowDropRightFill,
  RiArrowRightSLine,
  // RiMailFill,
  // RiPhoneFill,
  RiFile2Fill,
  RiFolder3Fill,
} from "react-icons/ri"
import { aboutSidebarContext } from "../../context/aboutSidebarContext"

const AboutSidebar = () => {
  const context = useContext(aboutSidebarContext)
  const { componentToShow, setComponent } = context

  const [isPersonalOpen, setIsPersonalOpen] = useState(false)
  // const [isContactOpen, setIsContactOpen] = useState(false)
  const [isBioOpen, setIsBioOpen] = useState(false)
  const [isExpOpen, setIsExpOpen] = useState(false)

  useEffect(() => {
    switch (componentToShow) {
      case "skills":
      case "aboutme":
        setIsPersonalOpen(true)
        setIsBioOpen(true)
        return
      case "education":
      case "experience":
        setIsPersonalOpen(true)
        setIsExpOpen(true)
        return
      default:
        return
    }
  }, [componentToShow])

  return (
    <>
      {/* personl infos */}
      <div className='isolate'>
        <button
          className='pl-6 h-9 bg-darkgray w-full flex gap-1 items-center md:bg-blue md:border-b md:border-b-darkgray md:pl-2 md:h-12'
          onClick={() => setIsPersonalOpen((prev) => !prev)}>
          <RiArrowDropRightFill
            size={30}
            className={`transition-all duration-200 ease-linear ${
              isPersonalOpen ? "rotate-90 transform" : ""
            }`}
          />
          personal-info
        </button>
        <ul
          className={` transition-all duration-200 ease-in-out text-gray ${
            isPersonalOpen ? "block" : "hidden"
          }`}>
          {/* bio */}
          <li>
            <div className='isolate'>
              <button
                className={`pl-8 md:pl-4 h-9 w-full flex gap-2 items-center ${
                  isBioOpen && "text-white"
                }`}
                onClick={() => setIsBioOpen((prev) => !prev)}>
                <RiArrowRightSLine
                  className={`transition-all duration-200 ease-linear ${
                    isBioOpen ? "rotate-90 transform" : ""
                  }`}
                />
                <span className='text-orange'>
                  <RiFolder3Fill />
                </span>
                bio
              </button>
              <ul
                className={` transition-all duration-200 ease-in-out ${
                  isBioOpen ? "block" : "hidden"
                }`}>
                <li
                  className={`cursor-pointer pl-14 md:pl-12 h-9 w-full flex gap-2 items-center ${
                    componentToShow === "aboutme" && "text-white"
                  }`}
                  onClick={() => setComponent?.("aboutme")}>
                  <RiFile2Fill />
                  about-me
                </li>
                <li
                  className={`cursor-pointer pl-14 md:pl-12 h-9 w-full flex gap-2 items-center ${
                    componentToShow === "skills" && "text-white"
                  }`}
                  onClick={() => setComponent?.("skills")}>
                  <RiFile2Fill />
                  skills
                </li>
              </ul>
            </div>
          </li>
          {/* experience */}
          <li>
            <div className='isolate'>
              <button
                className={`pl-8 md:pl-4 h-9 w-full flex gap-2 items-center ${
                  isExpOpen && "text-white"
                }`}
                onClick={() => setIsExpOpen((prev) => !prev)}>
                <RiArrowRightSLine
                  className={`transition-all duration-200 ease-linear ${
                    isExpOpen ? "rotate-90 transform" : ""
                  }`}
                />
                <span className='text-purpel'>
                  <RiFolder3Fill />
                </span>
                resume
              </button>
              <ul
                className={` transition-all duration-200 ease-in-out ${
                  isExpOpen ? "block" : "hidden"
                }`}>
                <li
                  className={`cursor-pointer pl-14 md:pl-12 h-9 w-full flex gap-2 items-center ${
                    componentToShow === "experience" && "text-white"
                  } `}
                  onClick={() => setComponent?.("experience")}>
                  <RiFile2Fill />
                  experience
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`${isPersonalOpen ? "hidden md:block md:py-3" : "hidden"} `}
      />
    </>
  )
}

export default AboutSidebar
