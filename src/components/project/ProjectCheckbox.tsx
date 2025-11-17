import React from 'react'
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri'

type ProjectCheckboxProps = {
  onClick?: () => void
  isChecked: boolean
  children: JSX.Element
}

const ProjectCheckbox = ({
  onClick,
  isChecked = false,
  children
}: ProjectCheckboxProps) => {
  return (
    <button
      className='flex items-center justify-center cursor-pointer gap-2'
      onClick={() => onClick?.()}>
      {isChecked ? <RiCheckboxFill /> : <RiCheckboxBlankLine />} {children}
    </button>
  )
}

export default ProjectCheckbox
