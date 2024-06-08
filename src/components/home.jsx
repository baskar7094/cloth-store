import { Link } from "react-router-dom";
import Layout from "./navbar";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Cards from "./card/cards";
import Contact from "./contact";
import Service from "./service/service";
import { Banner04 } from "./card/banner";
import Footer from "./footer/footer";

export default function HomePage() {
    return (
        <>

            <main>
                {/* section 01 */}
                <section className="bg-img ">
                    <div>
                        <Layout />
                    </div>
                    <div className="-mt-20">
                        <Content
                            sub_content="casual & everyday"
                            heading="effortlessly blend comfort & style"
                            contnet="Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures"
                            linktext="view collection"
                        />
                    </div>
                </section>
                {/* section 02  cards items */}
                <section>

                    <div className="my-6 ">
                        <h2 className="text-3xl text-center py-4 text-black font-bold 2xl:text-8xl 2xl:py-20 ">most popular</h2>
                        <Cards />

                    </div>
                </section>
                {/* section 03 */}
                <section>
                    <div>
                        <Contact />
                        <Service />
                        <Banner04 />
                    </div>
                </section>
            </main>
            {/* footer section  */}
            <footer>
                <Footer />
            </footer>

        </>
    )
}
function Content(props) {
    return (
        <section className="home-section"  >
            <div className="flex flex-col gap-3  md:gap-5 justify-center items-center w-full h-screen 2xl:-mt-60">
                <h6 className="uppercase text-sm md:text-lg 2xl:text-4xl ">{props.sub_content}</h6>
                <h1 className="text-center text-2xl md:text-4xl 2xl:text-9xl">{props.heading}</h1>
                <p className="text-center md:text-lg md:px-5 2xl:text-4xl 2xl:px-40 2xl:py-9 2xl:mb-32">{props.contnet}</p>
                <Link className="link-hover">{props.linktext}</Link>
            </div>
        </section>
    )
}