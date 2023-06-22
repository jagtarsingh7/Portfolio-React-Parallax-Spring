import moon from "../Assests/moon3.jpg"
import land from "../Assests/night2.jpeg"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import birds from "../Assests/birds.gif"

export default function Home() {
    return (

        <Parallax pages={4} className="bg-black h-full">

            <ParallaxLayer speed={1} offset={0} factor={2.5}  >
                <div className="bg-cover h-full bg-center" style={{ backgroundImage: `url(${moon})`, backgroundPosition: "cover" }} >

                </div>
            </ParallaxLayer>

            <ParallaxLayer speed={1} offset={0} factor={1} sticky={{ start: 0, end: 1.5 }}>
                <div className="flex h-full justify-center items-center">
                    <h1
                        className="mb-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl "
                    >
                        Hi there.
                    </h1>

                </div>


            </ParallaxLayer>

            <ParallaxLayer speed={1} offset={2} factor={1} className="z-40">
                <div className="flex h-full justify-center items-center">
                   
           

                </div>


            </ParallaxLayer>

            <ParallaxLayer speed={1} offset={2} sticky={{ start: 1.5, end: 3 }} >
                <div className="flex h-full  justify-center items-center">
                    <div className="mx-auto mb-10  max-w-3xl text-center">

                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Welcome to my portfolio
                        </h1>

                    </div>


                </div>


            </ParallaxLayer>

            <ParallaxLayer speed={1} offset={3} sticky={{ start: 3, end: 3 }} >

                <div className="flex  flex-col justify-center items-center h-full ">

                    <img className=" mt-10" src={birds}/>
                    <div className="mt-20 flex flex-wrap justify-center gap-4 mb-auto">
                        <a
                            className="block w-full rounded  bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/get-started"
                        >
                            Projects
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="/about"
                        >
                            About me
                        </a>
                    </div>

                </div>

            </ParallaxLayer>


            <ParallaxLayer speed={1} offset={2} factor={3} className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${land})` }}>


            </ParallaxLayer>




        </Parallax>



    )
}