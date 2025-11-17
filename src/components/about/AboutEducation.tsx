import React from 'react'

import { educations } from '../../data/dataForEducation'

const AboutEducation = () => {
  return (
    <>
      {/* mobile */}
      {/* <h2 className='pl-9 pt-8 pb-4 text-white md:hidden'>
        {'/// personal-info '}
        <span className='text-gray'>{'// resume'}</span>
      </h2>
      <h4 className='text-gray px-8 md:pt-6 lg:pt-10 text-base'>
        {'# education'}
      </h4>
      <ul className='text-gray  px-8 pl-16 md:pl-20 list-disc pb-8'>
        {educations.map(({ title, disc, date }, _i) => (
          <li key={_i} className='py-2'>
            <h3 className='font-bold'>
              {title} {date}
            </h3>
            <p>{disc}</p>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default AboutEducation
