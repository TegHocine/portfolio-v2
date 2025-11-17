import AboutEducation from '../components/about/AboutEducation'
import AboutExperience from '../components/about/AboutExperience'
import Aboutme from '../components/about/Aboutme'
import AboutSkills from '../components/about/AboutSkills'

type compsProps = {
  [key: string]: JSX.Element
}
export const comps: compsProps = {
  aboutme: <Aboutme />,
  skills: <AboutSkills />,
  education: <AboutEducation />,
  experience: <AboutExperience />
}
