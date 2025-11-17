import Link from 'next/link'
import React from 'react'

const ContactSuccess = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-3'>
      <h2 className='text-white font-semibold text-xl'>Thank you! 🤘</h2>
      <p className='max-w-xs text-center text-gray'>
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <Link href={'/contact'}>
        <button className='text-white text-xs px-4 py-1.5 md:py-3 md:px-6 bg-darkgray rounded-lg w-fit'>
          send-new-message
        </button>
      </Link>
    </div>
  )
}

export default ContactSuccess
