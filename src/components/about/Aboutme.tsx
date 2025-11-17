import CodeBlock from "../CodeBlock"

const Aboutme = () => {
  return (
    <>
      {/* mobile */}
      <h2 className='pl-9 pt-8 pb-4 text-white md:hidden'>
        {"// personal-info "}
        <span className='text-gray'>{"/ bio "}</span>
      </h2>
      <h4 className='text-gray px-8 md:hidden'>{"# about-me"}</h4>
      <p className='text-gray px-8 pb-8 md:hidden'>
        Full-Stack Developer with 3 years of experience, working with Spring
        Boot for back-end development and Angular/React for front-end
        applications. I have contributed to ERP, POS, and LMS systems,
        delivering scalable and user-friendly solutions. Whether improving
        existing platforms or building new applications from scratch, I focus on
        high-quality results.
      </p>

      {/* desktop */}
      <div className='hidden text-gray lg:px-8 md:flex'>
        <CodeBlock className='bg-blue text-xs md:text-base lg:text-lg md:pt-2 '>
          {`/**
* about me
* Full-Stack Developer with 3 years of experience.
* Skilled in Spring Boot for back-end development,
* and Angular/React for front-end applications.
* Worked on ERP, POS, and LMS systems.
* Focused on delivering scalable, user-friendly,
* and high-quality solutions.
*/`}
        </CodeBlock>
      </div>
    </>
  )
}

export default Aboutme
