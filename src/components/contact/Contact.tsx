import React, { useState } from 'react'

import Header from '../Header'
import ContactForm from './ContactForm'
import ContactSidebar from './ContactSidebar'
import ContactSuccess from './ContactSuccess'

const Contact = ({ msg }: { msg?: string }) => {
  const [form, setForm] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    message: ''
  })
  const { name, email, message } = form

  return (
    <>
      <div className='h-fit text-white w-full md:basis-1/4 lg:basis-1/5   md:min-h-[calc(100vh_-_6rem)]'>
        <Header mobile={true} />
        <ContactSidebar />
      </div>
      <div className='flex-1 md:basis-3/4 lg:basis-4/5 relative md:border-x md:border-darkgray'>
        <Header title='Contact' />
        <div className='pb-16 flex w-full'>
          <div className=' flex-1 lg:basis-1/2 flex justify-center pt-10 md:pt-16'>
            {msg === 'success' ? (
              <ContactSuccess />
            ) : (
              <ContactForm form={form} setForm={setForm} />
            )}
          </div>
          <div className='hidden lg:flex lg:basis-1/2  flex-col md:pt-16 pr-8'>
            <ol className='list-decimal 2xl:text-base xl:text-sm text-xs justify-center text-gray bg-darkblue rounded-lg py-4 px-12'>
              <li>
                <span className='text-token'>const</span>
                {' [form, setForm] '} <span className='text-token'>=</span>
                {' useState'}
                <span className='text-token'>{'<'}</span>
                {'{ [key'}
                <span className='text-token'>:</span>
                {' string]'}
                <span className='text-token'>:</span>
                {' string }'}
                <span className='text-token'>{'>'}</span>
                {'({'}
              </li>
              <li className='pl-8'>
                name <span className='text-token'>{`: '${name}'`}</span>,
              </li>
              <li className='pl-8'>
                email <span className='text-token'>{`: '${email}'`}</span>,
              </li>
              <li className='pl-8'>
                message <span className='text-token'>{`: '${message}'`}</span>,
              </li>
              <li>{'})'}</li>
              <li>
                <span className='text-token'>const</span> changeForm{' '}
                <span className='text-token'>=</span> {'('}
              </li>
              <li className='pl-8'>
                e<span className='text-token'>:</span>
              </li>
              <li className='pl-12'>
                <span className='text-token'>{'|'}</span>React.ChangeEvent{' '}
                <span className='text-token'>{'<HTMLInputElement>'}</span>
              </li>
              <li className='pl-12'>
                <span className='text-token'>{'|'}</span>React.ChangeEvent{' '}
                <span className='text-token'>{'<HTMLTextAreaElement>'}</span>
              </li>
              <li>{') => {'}</li>
              <li className='pl-8'>
                {'setForm({ '}
                <span className='text-token'>...</span>
                {'form, [e.target.name]'}
                <span className='text-token'>:</span>
                {'e.target.value })'}
              </li>
              <li>{'}'}</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
