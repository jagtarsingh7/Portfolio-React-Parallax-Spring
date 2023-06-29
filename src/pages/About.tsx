
import ViewDetectAnimation from "../animationComponents/ViewDetectAnimation";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";


function About() {

    return (
        <div className="flex flex-col justify-center ">
                 <Header/>
            <section className=" pt-10 md:mt-20 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <ViewDetectAnimation direction={"X"} styles={""} speed={500} level={-10} to={0} repeat={false}>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am
                                <br className="block sm:hidden" />Jagtar Singh
                            </h2>
                            </ViewDetectAnimation>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                A dedicated web developer with a strong academic foundation and a passion for creating exceptional web experiences. 

                            </p>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                               With expertise in designing and developing user-friendly, efficient, and visually captivating web applications, I am committed to delivering cutting-edge solutions that leave a lasting impact.

                            </p>
                        
                        </div>

                        <div className="relative ">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <ViewDetectAnimation direction={"X"} styles={"relative xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"} speed={1000} level={10} to={0} repeat={false}>

                                <img className="" src={'/images/items/me2.png'} alt="my pic" />
                            </ViewDetectAnimation>
                        </div>

                    </div>
                </div>
            </section>
            <ContactForm />
        </div>
    )
}

export default About;
