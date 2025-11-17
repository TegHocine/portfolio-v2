import React, { useEffect, useState } from 'react'

import ProjectCheckbox from './ProjectCheckbox'

import { RiArrowDropRightFill } from 'react-icons/ri'

import {
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiVite,
  SiFirebase,
  SiRedux
} from 'react-icons/si'

type ProjectSidebarProps = {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>
}

const ProjectSidebar = ({ setFilter }: ProjectSidebarProps) => {
  const [isProjectOpen, setIsProjectOpen] = useState(true)
  const [checks, setChecks] = useState<{ [key: string]: boolean }>({
    vite: false,
    ts: false,
    sass: false,
    tailwind: false,
    redux: false,
    firebase: false
  })

  useEffect(() => {
    const setFilters = () => {
      const filters = Object.keys(checks).filter((key) => checks[key] === true)
      if (filters.length <= 0) return setFilter(['react'])
      setFilter(filters)
      console.log(filters)
    }
    setFilters()
  }, [checks, setFilter])

  return (
    <div className='isolate'>
      <button
        className={`pl-6 md:pl-2 md:h-12 h-9 bg-darkgray w-full flex gap-1 items-center md:bg-blue 
    md:border-b md:border-b-darkgray `}
        onClick={() => setIsProjectOpen(!isProjectOpen)}>
        <RiArrowDropRightFill
          size={30}
          className={`transition-all duration-200 ease-linear ${
            isProjectOpen ? 'rotate-90 transform' : ''
          }`}
        />
        projects
      </button>
      <ul
        className={`text-gray transition-all duration-200 ease-linear ${
          isProjectOpen ? 'block' : 'hidden'
        }`}>
        <li
          className={`pl-12 md:pl-4 h-9 w-full flex gap-2 items-center select-none ${
            checks.ts && 'text-ts'
          }`}>
          <ProjectCheckbox
            isChecked={checks.ts || false}
            onClick={() =>
              setChecks((prev) => {
                return { ...prev, ts: !prev.ts }
              })
            }>
            <>
              <SiTypescript /> TypeScript
            </>
          </ProjectCheckbox>
        </li>
        <li
          className={`pl-12 md:pl-4 h-9 w-full flex gap-2 items-center select-none ${
            checks.sass && 'text-sass'
          }`}>
          <ProjectCheckbox
            isChecked={checks.sass || false}
            onClick={() =>
              setChecks((prev) => {
                return { ...prev, sass: !prev.sass }
              })
            }>
            <>
              <SiSass /> Sass
            </>
          </ProjectCheckbox>
        </li>
        <li
          className={`pl-12 md:pl-4 h-9 w-full flex gap-2 items-center select-none ${
            checks.tailwind && 'text-tailwind'
          }`}>
          <ProjectCheckbox
            isChecked={checks.tailwind || false}
            onClick={() =>
              setChecks((prev) => {
                return { ...prev, tailwind: !prev.tailwind }
              })
            }>
            <>
              <SiTailwindcss /> Tailwindcss
            </>
          </ProjectCheckbox>
        </li>
        <li
          className={`pl-12 md:pl-4 h-9 w-full flex gap-2 items-center select-none ${
            checks.vite && 'text-vite'
          }`}>
          <ProjectCheckbox
            isChecked={checks.vite || false}
            onClick={() =>
              setChecks((prev) => {
                return { ...prev, vite: !prev.vite }
              })
            }>
            <>
              <SiVite /> Vite
            </>
          </ProjectCheckbox>
        </li>
        <li
          className={`pl-12 md:pl-4 h-9 w-full flex gap-2 items-center select-none ${
            checks.redux && 'text-redux'
          }`}>
          <ProjectCheckbox
            isChecked={checks.redux || false}
            onClick={() =>
              setChecks((prev) => {
                return { ...prev, redux: !prev.redux }
              })
            }>
            <>
              <SiRedux /> Redux
            </>
          </ProjectCheckbox>
        </li>
        <li
          className={`pl-12 md:pl-4 h-9 w-full flex gap-2 items-center select-none ${
            checks.firebase && 'text-firebase'
          }`}>
          <ProjectCheckbox
            isChecked={checks.firebase || false}
            onClick={() =>
              setChecks((prev) => {
                return { ...prev, firebase: !prev.firebase }
              })
            }>
            <>
              <SiFirebase /> Firebase
            </>
          </ProjectCheckbox>
        </li>
      </ul>
    </div>
  )
}

export default React.memo(ProjectSidebar)
