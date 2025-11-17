import type { NextPage } from "next"
import CodeBlock from "../components/CodeBlock"
import useType from "../utils/useType"

const Home: NextPage = () => {
  const [type] = useType(" Front-end developer")

  return (
    <>
      {/* left part of the landing page with the name and github */}
      <div className='hidden lg:block absolute w-48 h-48 bg-white rounded-full blur-[90px] opacity-20  -right-14' />
      <div className='hidden lg:block absolute w-64 h-56 bg-teal rounded-full  blur-[90px] opacity-25 top-20 right-[40%] ' />
      <div className='min-h-[calc(100vh_-_3rem)] w-full text-white px-8 flex flex-col justify-around overflow-x-hidden md:items-center lg:justify-center lg:gap-20 lg:w-1/2 transition-all duration-200 ease-linear'>
        <div className='relative'>
          <div className=' absolute w-64 h-56 bg-teal rounded-full  blur-[90px] opacity-25 -left-14 lg:hidden' />
          <p className='text-lg'>Hi all. I am</p>
          <h2 className='text-[3rem]'>J.Doe</h2>
          <p className='text-xl text-teal after:content-["|"]  after:animate-blink'>
            {">"}
            {type}
          </p>
          <div className='absolute w-48 h-48 bg-white rounded-full blur-[90px] opacity-20 -right-14 lg:hidden' />
        </div>
        <div className='text-sm'>
          <p className='text-gray '>{"//"} find my profile on Github</p>
          <div className='p-2' />

          <p>
            <span className='text-purpel'>const</span>{" "}
            <span className='text-teal'>githubLink</span> {" = "}
            <a
              href='https://github.com/j.doe'
              target='_blank'
              rel='noopener noreferrer'>
              <span className='text-orange break-all cursor-pointer'>
                https://github.com/j.doe
              </span>
            </a>
          </p>
          <p>
            <span className='text-purpel'>const</span>{" "}
            <span className='text-teal'>email</span> {" = "}
            <a
              href='mailto:J.Doe.dev@gmail.com'
              target='_blank'
              rel='noopener noreferrer'>
              <span className='text-orange break-all cursor-pointer'>
                j.doe.dev@gmail.com
              </span>
            </a>
          </p>
        </div>
      </div>
      {/* right part of the landing page with the code blocks */}
      <div className='hidden w-full text-white px-8  flex-col justify-around overflow-hidden  lg:items-center lg:w-1/2   lg:flex relative'>
        <div className='fixed overflow-hidden flex flex-col justify-center items-center gap-8 '>
          <CodeBlock className='opacity-60 text-xs'>
            {`
 case 'deleting':
  const nextTodelete = whatToType.slice(0, typed.length - 1)
  if (nextTodelete === '') {
    setphase('typing')
    return
  }
  const deletingTime = setTimeout(() => {
    setTyped(nextTodelete)
  }, DELETING_INTERVAL)
  return () => clearTimeout(deletingTime)
  `}
          </CodeBlock>
          <CodeBlock className='text-xs'>
            {`
case 'typing':
  const nextToType = whatToType.slice(0, typed.length + 1)
  if (nextToType === typed) {
    setphase('pause')
    return
  }
  const typingTime = setTimeout(() => {
    setTyped(nextToType)
  }, TYPING_INTERVAL)
  return () => clearTimeout(typingTime)
  `}
          </CodeBlock>
          <CodeBlock className='opacity-60 text-xs'>
            {`
 case 'deleting':
  const nextTodelete = whatToType.slice(0, typed.length - 1)
  if (nextTodelete === '') {
    setphase('typing')
    return
  }
  const deletingTime = setTimeout(() => {
    setTyped(nextTodelete)
  }, DELETING_INTERVAL)
  return () => clearTimeout(deletingTime)
  `}
          </CodeBlock>
        </div>
      </div>
    </>
  )
}

export default Home
