/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si"

type ProjectCardProps = {
  index: number
  name: string
  desc: string
  repo: string | null
  demo: string | null
  img: string
  img2: string | null
  categories: string[]
}

const projectCard = ({
  index,
  name,
  desc,
  repo,
  demo,
  img,
  img2,
  categories,
}: ProjectCardProps) => {
  return (
    <div className='py-4 w-80 grid gap-2'>
      <h1 className='text-base '>
        <span className='text-purpel font-semibold'>{`Project_${
          index + 1
        }`}</span>
        <span className='text-gray'>{` / _${name}`}</span>
      </h1>
      <div className='border border-darkgray rounded-2xl grid gap-4 pb-4 min-h-[15rem] relative '>
        <div className='h-28 relative border-b border-darkgray group'>
          <Image
            src={img}
            alt='project preview'
            layout='fill'
            loading='lazy'
            objectFit='cover'
            objectPosition={"top"}
            quality={10}
            className={`w-full aspect-video  object-cover  object-top rounded-t-2xl 
            ${
              img2
                ? " group-hover:origin-top-left group-hover:opacity-0 transition-all duration-500"
                : ""
            } `}
          />
          {img2 && (
            <Image
              src={img2}
              alt='project preview'
              layout='fill'
              objectFit='cover'
              objectPosition={"top"}
              quality={100}
              className='w-full aspect-video  object-cover  object-top rounded-t-2xl absolute top-0 opacity-0 group-hover:opacity-100 delay-100 transition-all duration-500'
            />
          )}

          <div className='absolute w-fit py-1 px-2 bottom-2 right-2 flex justify-end gap-2 bg-blue/80 rounded-full'>
            {categories?.map((cat) => categoriesObj[cat])}
          </div>
        </div>
        <div className='flex flex-col gap-4 px-4'>
          <p className='text-gray text-xs'>{desc}</p>
          <div className='flex gap-2'>
            {repo && (
              <a
                href={repo}
                className='text-white text-xs px-4 py-1.5 bg-darkgray rounded-lg w-fit'
                target={"_blank"}
                rel='noreferrer'>
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                className='text-white text-xs px-4 py-1.5 bg-darkgray rounded-lg w-fit'
                target={"_blank"}
                rel='noreferrer'>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const categoriesObj: { [key: string]: JSX.Element } = {
  ts: <SiTypescript className='w-5 h-5 text-ts rounded-sm' />,
  sass: <SiSass className='w-5 h-5 text-sass' />,
  tailwind: <SiTailwindcss className='w-5 h-5 text-tailwind' />,
  vite: <SiVite className='w-5 h-5 text-vite' />,
  firebase: <SiFirebase className='w-5 h-5 text-firebase' />,
  react: <SiReact className='w-5 h-5 text-react' />,
  redux: <SiRedux className='w-5 h-5 text-redux' />,
}

export default projectCard
