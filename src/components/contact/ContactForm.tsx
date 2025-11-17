import React from 'react'

type ContactFormProps = {
  form: { [key: string]: string }
  setForm: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
}

const ContactForm = ({ form, setForm }: ContactFormProps) => {
  const { name, email, message } = form

  const changeForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form
      className='bg-inherit flex flex-col gap-4 w-full md:max-w-lg px-8 md:pl-8'
      name='contact'
      method='POST'
      action='/contact/success'
      data-netlify='true'>
      <input type='hidden' name='form-name' value='contact' />
      <label htmlFor='name' className='text-gray w-full'>
        <h2>_name:</h2>
        <div className='pb-1' />
        <input
          type='text'
          name='name'
          value={name}
          className='w-full bg-darkblue h-10 border border-darkgray rounded-lg indent-2  focus:outline-none  focus:outline-gray focus:outline-offset-0 focus:bg-darkblue transition-all duration-75 ease-linear'
          onChange={changeForm}
          required
        />
      </label>
      <label htmlFor='email' className='text-gray w-full'>
        <h2>_email:</h2>
        <div className='pb-1' />
        <input
          type='email'
          name='email'
          value={email}
          className='w-full bg-darkblue h-10 border border-darkgray rounded-lg indent-2  focus:outline-none  focus:outline-gray focus:outline-offset-0 transition-all duration-75 ease-linear'
          onChange={changeForm}
          required
        />
      </label>
      <label htmlFor='message' className='text-gray w-full'>
        <h2>_message:</h2>
        <div className='pb-1' />
        <textarea
          name='message'
          value={message}
          className='w-full bg-darkblue h-28 border border-darkgray rounded-lg indent-2  px-2 focus:outline-none  focus:outline-gray focus:outline-offset-0 transition-all duration-75 ease-linear resize-none'
          onChange={changeForm}
          required
        />
      </label>
      <button
        type='submit'
        className='text-white text-xs px-4 py-1.5 md:py-3 md:px-6 bg-darkgray rounded-lg w-fit'>
        submit-message
      </button>
    </form>
  )
}

export default ContactForm
