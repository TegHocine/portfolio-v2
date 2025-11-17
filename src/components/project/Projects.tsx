import { useEffect, useState } from "react"
import { projectsList } from "../../data/reposData"
import Header from "../Header"
import ProjectCard from "./ProjectCard"
import ProjectSidebar from "./ProjectSidebar"

const Projects = () => {
  const [filter, setFilter] = useState<string[]>([""])
  const [header, setHeader] = useState("")
  const [projects, setProjects] = useState(projectsList)

  useEffect(() => {
    const filterProject = () => {
      if (filter.length <= 0) return setProjects(projectsList)
      const filteredProjects = projectsList.filter((project) => {
        return project.categories?.find((cat) => filter?.includes(cat))
      })

      setProjects(filteredProjects)
      setHeader(() => {
        return filter[0] === "react"
          ? filter.join("; ")
          : `react; ${filter.join("; ")}`
      })
      return
    }
    filterProject()
  }, [filter])

  return (
    <>
      <div className='h-fit text-white w-full md:basis-1/4 lg:basis-1/5   md:min-h-[calc(100vh_-_6rem)]'>
        <Header mobile={true} />
        <ProjectSidebar setFilter={setFilter} />
      </div>
      <div className='flex-1 md:basis-3/4 lg:basis-4/5 relative md:border-x md:border-darkgray '>
        <Header
          title={header}
          className='capitalize '
        />
        <h2 className='pl-9 pt-8 pb-4 text-white md:hidden'>
          {"// Projects "}
          <span className='text-gray'>{`/ all `}</span>
        </h2>
        <div className='py-3 hidden md:block' />
        <div className='grid grid-cols-autoGrid place-content-center gap-6 md:px-4'>
          {projects?.map((project, _i) => (
            <ProjectCard
              key={_i}
              index={_i}
              {...project}
            />
          ))}
        </div>
        <div className='py-8' />
      </div>
    </>
  )
}

export default Projects
