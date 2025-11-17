import React from 'react'

const custom404 = () => {
  return (
    <div className='md:min-h-[calc(100vh_-_6rem)] flex flex-col items-center justify-center text-gray gap-4 px-8'>
      <h2 className='text-4xl font-semibold text-white'>404</h2>
      <div className='bg-gray pb-0.5 w-28' />
      <p className='text-center max-w-sm'>
        Sorry, the content you are looking for could not be found.
      </p>
    </div>
  )
}

export default custom404
