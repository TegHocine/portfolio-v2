import { useState } from "react"
import { RiArrowDropRightFill, RiMailFill, RiPhoneFill } from "react-icons/ri"

const ContactSidebar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <div className='isolate'>
        <button
          className={`text-white pl-6 md:pl-2 md:h-12 h-9 bg-darkgray w-full flex gap-1 items-center md:bg-blue md:border-b md:border-darkgray`}
          onClick={() => setIsContactOpen(!isContactOpen)}>
          <RiArrowDropRightFill
            size={30}
            className={`transition-all duration-200 ease-linear ${
              isContactOpen ? "rotate-90 transform" : ""
            }`}
          />
          contacts
        </button>
        <div
          className={`text-gray transition-all duration-200 ease-linear ${
            isContactOpen ? "block" : "hidden"
          }`}>
          <p className='pl-8 md:pl-4 h-9 w-full flex gap-2 items-center'>
            <RiMailFill /> j.doe@gmail.com
          </p>
          <p className='pl-8 md:pl-4 h-9 w-full flex gap-2 items-center'>
            <RiPhoneFill /> +213 123123123123
          </p>
        </div>
      </div>
    </>
  )
}

export default ContactSidebar
