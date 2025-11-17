import { useState } from 'react'

const useComponent = () => {
  const [compToUse, setCompToUse] = useState<string>('aboutme')
  console.log(compToUse)
  return [compToUse, setCompToUse]
}

export default useComponent
