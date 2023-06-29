
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useRef } from "react"
import ScrollButton from "../components/ScrollButton"
import ViewDetectAnimation from "../animationComponents/ViewDetectAnimation"
import { Link } from "react-router-dom"

export default function Home() {

  const parallax = useRef<IParallax>(null!)

  return (

    <Parallax ref={parallax} pages={4} className="bg-black " style={{minHeight:"50rem"}}>

      <ParallaxLayer speed={0.1} offset={0} factor={2}>
        <div className=" h-full bg-cover bg-center bg-[url('../public/images/nature/moon3.jpg')]" >

        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} offset={0} factor={1} >
        <div className="flex flex-col h-full justify-center items-center">
          <h1
            className="mb-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl "
          >
            Hi there.
          </h1>

        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1} offset={0} factor={1} className="z-40" sticky={{ start: 0, end: 0 }}>
        <div className="flex flex-col h-full justify-center items-center">
          <ScrollButton to={3} page={parallax}></ScrollButton>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.1} factor={2} offset={2} className="z-20 md:mt-96" >

        <div className="h-full md:mt-96 max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24 ">
          <div className="md:mt-20 max-w-2xl mx-auto text-center relative">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-200 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Welcome to my portfolio
            </h1>
            <ViewDetectAnimation direction={"X"} styles={"absolute -top-72 h-fit"} speed={2400} level={200} repeat={false} to={-200}>
              <img className="" src={'/images/nature/birds.gif'} alt={"birds"} />
            </ViewDetectAnimation>
          </div>
          <ViewDetectAnimation direction={"Y"} styles={"grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 "} speed={1000} level={50} repeat={true} to={0}>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                Projects
              </h3>
              <p className="text-lg font-normal text-white  h-28 ">
                Transforming Ideas into Stunning Online Realities: Explore My Web Development Portfolio
              </p>
              <Link to="/projects" title=""
                className="bg-gradient-to-r from-green-200 via-blue-300 to-purple-800 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                View Projects
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                Resume
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-white  h-28">
                Take a Closer Look at My Skills and Experience - View My Resume to Explore Further
              </p>
              <a className="bg-gradient-to-r from-green-200 via-blue-300 to-purple-800 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                href="images/projects/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                About me
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-white h-28">
                Feel free to reach out! I'm always open to new opportunities and collaborations.
              </p>
              <Link to="about"
                className="bg-gradient-to-r from-green-200 via-blue-300 to-purple-800 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button">
                Contact me
              </Link>
            </div>
          </ViewDetectAnimation>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1} offset={2} factor={3} className=" bg-center bg-no-repeat bg-[url('../public/images/nature/night2.jpeg')] ">
      </ParallaxLayer >

    </Parallax>
  )
}
