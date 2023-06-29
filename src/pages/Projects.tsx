import { useEffect, useRef, useState } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import LoadingView from "../components/LoadingView";
import projectInfo from "../data/projectInfo.json"
import ViewDetectAnimation from "../animationComponents/ViewDetectAnimation";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import Header from "../components/Header";

export default function Projects() {

    const [animation, setAnimation] = useState(false);
    const parallax = useRef<IParallax>(null!)
    useEffect(() => {
        setAnimation(true);
    }, [])

    return (
        animation ? 
        (<><Header/>
        <Parallax
            pages={7}
            ref={parallax}
            className="bg-white"
            style={{ minHeight: "50rem" }}
        >
            <ParallaxLayer
                offset={0}
                speed={0.1}
                style={{
                    backgroundImage: "url(/images/projects/projects.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                 
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={0.4}
                className="flex flex-col justify-center items-center z-10"
            >
                <ViewDetectAnimation to={0} direction={"Y"} speed={1000} repeat={true} level={20} styles={""}>
                    <h1 className="underline text-white text-center xl:text-8xl  md:text-6xl text-4xl  font-serif "> From Vision to Reality</h1>
                </ViewDetectAnimation>
                <p className="my-20 text-white xl:text-4xl  md:text-3xl text-xl font-light"> Showcasing Authentic Ideas Turned Projects
                </p>
                <ScrollButton to={1} page={parallax}></ScrollButton>
            </ParallaxLayer>


            <ParallaxLayer
                offset={1}
                speed={0.1}
                style={{ height: "25vh" }}
                className="flex flex-col items-center justify-center text-black text-center "
            >
                <ViewDetectAnimation to={0} direction="X" level={-50} styles={""} speed={0} repeat={false}>
                    <h1 className="mt-5 underline xl:text-7xl md:text-5xl text-4xl text-black font-mono my-auto">Projects</h1>
                </ViewDetectAnimation>
            </ParallaxLayer>


            {
                projectInfo.map((item, index) => (
                    <ParallaxLayer
                        key={index}
                        offset={1 + index}
                        speed={0.2}
                        sticky={{ start: 1 + index, end: 1.5 + index }}
                        className="block md:hidden  "
                    >
                        <div className="flex flex-col justify-center items-center h-full text-sm font-light  ">
                            <ViewDetectAnimation to={0} direction={"Y"} styles={""} speed={0} level={0} repeat={false}>
                                <div className="space-y-4 rounded-lg shadow-2xl bg-white ">
                                    <details className="group [&_summary::-webkit-details-marker]:hidden  " >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-gray-900"
                                        >
                                            <h2 className="font-medium text-lg ">
                                                {item.title}
                                            </h2>
                                            <svg
                                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                    
                                            <p className="px-4 leading-relaxed text-gray-700 ">
                                                {item.description1}
                                            </p>
                                       
                                            <ViewDetectAnimation to={0} direction={"Y"} styles={"mt-4 px-4 leading-relaxed text-gray-700"} speed={500} level={0} repeat={false} >

                                            <p className=" ">
                                                {item.description2}
                                            </p>
                                            </ViewDetectAnimation>
                                            <ViewDetectAnimation to={0} direction={"Y"} styles={"mt-4 px-4 leading-relaxed text-gray-700 pb-5 font-semibold"} speed={800} level={0} repeat={false} >

                                            <a href={item.link} className="">
                                                {item.link}
                                            </a>

                                        </ViewDetectAnimation>

                                    </details>
                                </div>
                            </ViewDetectAnimation>
                        </div>

                    </ParallaxLayer>

                ))
            }

            {
                projectInfo.map((item, index) => (
                    <ParallaxLayer
                        key={index}
                        offset={1 + index}
                        speed={0.2}
                        style={{ width: "50%" }}
                        sticky={{ start: 1 + index, end: 1.5 + index }}

                        className=" hidden md:flex "
                    >
                        <div className=" hidden md:flex justify-start items-center h-full mr-auto pl-20 lg:text-4xl md:text-2xl  text-sm font-light ">
                            <a href={item.link} className="text-black md:p-5 p-2 text-center  bg-white rounded-lg shadow-2xl h-20 md:w-96  w-80">{item.title}</a>
                        </div>

                    </ParallaxLayer>

                ))
            }

            {
                projectInfo.map((item, index) => (

                    <ParallaxLayer key={index}
                        offset={1.5 + index}
                        speed={0.5}
                        style={{ width: "50%" }}
                        className="ml-auto  hidden md:flex z-50 justify-center "
                    >
                        <div className="flex flex-col   h-full items-start justify-center pr-20 xl:text-xl lg:text-lg text-white text-md font-light   " >
                            <ViewDetectAnimation to={0} direction="Y" speed={1000} styles={""} level={0} repeat={false}>
                                <div className="space-y-4 my-auto">
                                    <details className="group [&_summary::-webkit-details-marker]:hidden z-50 bg-white rounded-xl md:w-96 border-2 border-slate-300" >
                                        <summary
                                            className="flex cursor-pointeritems-center  gap-1.5 rounded-lg  p-4 text-gray-900 bg-white"
                                        >
                                            <h2 className="font-medium ">
                                                {item.description1}
                                            </h2>

                                            <svg
                                                className="h-7 w-7 shrink-0 transition duration-300 group-open:-rotate-180 z-50 text-yellow-400 "
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>

                                        <p className="mt-4 px-4 leading-relaxed text-gray-700 md:text-base">
                                            {item.description2}
                                        </p>

                                        <p className="mt-4 px-4 leading-relaxed text-gray-700 md:text-base pb-4">
                                            {item.description3}
                                        </p>


                                    </details>
                                </div>
                            </ViewDetectAnimation>

                            <ViewDetectAnimation to={0} direction="Y" speed={1500} styles={""} level={0} repeat={false}>
                                <div className="space-y-4 my-auto ">
                                    <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-xl shadow-xl md:w-96  border-2 border-slate-300 " >
                                        <summary
                                            className="flex cursor-pointer items-center gap-1.5   p-4 text-gray-900 "
                                        >
                                            <h1 className="font-medium">
                                                {item.link}
                                            </h1>


                                            <svg
                                            className="h-7 w-7 shrink-0 transition duration-300  group-open:-rotate-180 text-yellow-400 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                        </summary>

                                        <p className="mt-4 px-4 leading-relaxed text-gray-700 md:text-base ">
                                        {item.description4}
                                    </p>
                                    <p  className="mt-4 px-4 leading-relaxed text-gray-700  md:text-base pb-4">
                                        <a href={item.link}> Click here to view {item.link}</a>
                                    </p>
                                    </details>
                                </div>
                            </ViewDetectAnimation>
                        </div>


                    </ParallaxLayer>
                ))
            }

            <ParallaxLayer
                offset={1.4}
                speed={0.2}
                className="-z-50 "
            >
                <div
                    className=" h-full bg-cover md:bg-left-top bg-center bg-[url('../public/images/projects/virdicon.png')]"
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={2.4}
                speed={0.2}

                className="-z-50 "
            >
                <div
                    className=" h-full bg-cover md:bg-left-top bg-center  bg-[url('../public/images/projects/saveindia.png')]"
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={3.4}
                speed={0.2}

                className="-z-50  "
            >
                <div
                    className="h-full bg-cover md:bg-left-top bg-center  bg-[url('../public/images/projects/angularSparkup.png')]"
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={4.4}
                speed={0.2}
                className="-z-50 "
            >
                <div
                    className=" h-full bg-cover md:bg-left-top bg-center  bg-[url('../public/images/projects/reactSparkup.png')]"
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={5.4}
                speed={0.2}
                className="-z-50 flex flex-col my-auto "
                sticky={{ start: 5.4, end: 6 }}
                factor={1.5}
            >
                <div
                    className=" h-full bg-cover    md:bg-left-top bg-center  bg-[url('../public/images/projects/mehn.png')] "                   
                >
                </div>
                <Footer></Footer>
            </ParallaxLayer>

        </Parallax ></>) :
            (<LoadingView></LoadingView>)

    );

}