import React from 'react'
import About from '../components/about/About'

import { AboutSidebarProvider } from '../context/aboutSidebarContext'

const about = () => {
  return (
    <AboutSidebarProvider>
      <About />
    </AboutSidebarProvider>
  )
}

export default about
