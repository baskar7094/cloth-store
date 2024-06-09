import { Link } from "react-router-dom";
import Layout from "../layout/navbar";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Cards from "../components/card/cards/cards";
import Contact from "../components/contact/contact";
import Service from "../components/service/service";
import { Banner04, CartBanner } from "../components/card/banner/banner";
import Footer from "../components/footer/footer";
import './homeStyle.scss'

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
                            sub_content="casual & everyday!"
                            heading="effortlessly blend comfort & style"
                            contnet="Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures"
                            linktext="view collection"
                        />
                    </div>
                </section>
                {/* section 02  cards items */}
                <section>

                    <div className="my-6 ">
        <div>
            <h2 className="text-3xl font-bold p-3 text-center">woman dress's</h2>
        </div>
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
        <section className="home-section "  >
            <div className="flex flex-col gap-3  md:gap-5 justify-center  items-center w-full h-auto mt-40 2xl:-mt-60">
                <h6 className="uppercase text-sm md:text-lg 2xl:text-4xl ">{props.sub_content}</h6>
                <h1 className="text-center text-2xl md:text-4xl 2xl:text-9xl">{props.heading}</h1>
                <p className="text-center md:text-lg md:px-5 2xl:text-4xl 2xl:px-40 2xl:py-9 2xl:mb-32">{props.contnet}</p>
                <Link className="link-hover">{props.linktext}</Link>
            </div>
        </section>
    )
}