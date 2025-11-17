import React from 'react'
import { 
  // RiTwitterFill,
  RiGithubFill, 
  // RiLinkedinFill
} from 'react-icons/ri'

const Footer = ({ mobile }: { mobile?: boolean }) => {
  return (
    <footer
      className={`bg-blue mt-auto w-full h-12 border-y items-center  border-darkgray
       text-gray z-50 ${
         mobile
           ? 'flex md:hidden'
           : 'hidden md:flex justify-between fixed bottom-0 left-0'
       }`}>
      <div
        className={`flex items-center text-base h-full ${
          mobile ? 'flex-1' : ''
        }`}>
{/*         <span className={`flex flex-1  ${mobile ? 'pl-4' : 'px-4'}`}>
          find me in :
        </span> */}
{/*         <a
          href={'https://www.linkedin.com/in/hocine-tegmount/'}
          target='_blank'
          rel='noreferrer'>
          <div
            className={`flex items-center border-l border-darkgray  hover:text-white 
            hover:border-b-2 hover:border-b-yellow  transition-all duration-100 
            ease-linear w-fit h-full cursor-pointer`}>
            <RiLinkedinFill className='w-12 h-full  p-3' />
          </div>
        </a> */}
        {/* <a
          href={'https://twitter.com/arcou98'}
          target='_blank'
          rel='noreferrer'>
          <div
            className={`flex items-center border-l border-darkgray  hover:text-white
             hover:border-b-2 hover:border-b-yellow  transition-all 
             duration-100 ease-linear w-fit h-full cursor-pointer ${
               mobile ? 'border-l' : 'border-x'
             }`}>
            <RiTwitterFill className='w-12 h-full  p-3' />
          </div>
        </a> */}
      </div>
      <a href={'https://github.com/TegHocine'} target='_blank' rel='noreferrer'>
        <div
          className={`flex items-center border-l border-darkgray  hover:text-white hover:border-b-2 hover:border-b-yellow  transition-all duration-100 ease-linear w-fit h-full cursor-pointer`}>
          {!mobile && <span className='pl-3 text-sm'> @TegHocine </span>}
          <RiGithubFill className='w-12 h-full  p-3' />
        </div>
      </a>
    </footer>
  )
}

export default Footer
