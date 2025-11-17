import { createContext, useState } from 'react'

type AppContextInterface = {
  componentToShow: string
  setComponent?: (arg0: string) => void
}
export const aboutSidebarContext = createContext<AppContextInterface>({
  componentToShow: 'aboutme'
})

export const AboutSidebarProvider = ({
  children
}: {
  children: JSX.Element
}) => {
  const [componentToShow, setComponentToShow] = useState<string>('aboutme')
  const setComponent = (componentName: string) => {
    setComponentToShow(componentName)
  }
  return (
    <aboutSidebarContext.Provider value={{ componentToShow, setComponent }}>
      {children}
    </aboutSidebarContext.Provider>
  )
}
