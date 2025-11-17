import React from 'react'

import { languages, framworkAndTools } from '../../data/dataForSkills'
import Image from 'next/image'
const AboutContent = () => {
  return (
    <>
      {/* mobile */}
      <h2 className='pl-9 pt-8 pb-4 text-white md:hidden'>
        {'/// personal-info '}
        <span className='text-gray'>{'// bio '}</span>
      </h2>
      <h4 className='text-gray px-8 md:pt-6 lg:pt-10 text-base'>
        {'# skills'}
      </h4>
      <h5 className='text-gray px-8  text-sm pt-3'>{'## languages'}</h5>
      <div className='text-gray px-8  flex flex-wrap py-4 text-xs gap-4 items-center'>
        {languages.map(({ alt, src }, _i) => (
          <div
            key={_i}
            className='w-20 px-1 flex flex-col items-center justify-center gap-1'>
            <Image src={src} alt={alt} width={50} height={50} />
            <h2>{alt}</h2>
          </div>
        ))}
      </div>
      <h5 className='text-gray px-8  text-sm'>{'## framework and tools'}</h5>
      <div className='text-gray px-8  flex flex-wrap py-4 text-xs gap-4 items-center pb-10'>
        {framworkAndTools.map(({ alt, src }, _i) => (
          <div key={_i} className='w-20 px-1 flex flex-col items-center gap-1'>
            <Image src={src} alt={alt} width={50} height={50} />
            <h2>{alt}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default AboutContent
