import React, { useContext } from 'react'

import { aboutSidebarContext } from '../../context/aboutSidebarContext'
import { comps } from '../../data/compSwitcher'
import Header from '../Header'
import AboutSidebar from './AboutSidebar'

const Aboutme = () => {
  const context = useContext(aboutSidebarContext)
  const { componentToShow } = context

  return (
    <>
      <div className='h-fit text-white w-full md:basis-1/4 lg:basis-1/5 md:min-h-[calc(100vh_-_6rem)]'>
        <Header mobile={true} />
        <AboutSidebar />
      </div>
      <div className='flex-1 md:basis-3/4 lg:basis-4/5 relative md:border-x md:border-darkgray'>
        <Header title='personal-info' />
        {comps?.[componentToShow]}
      </div>
    </>
  )
}

export default Aboutme
