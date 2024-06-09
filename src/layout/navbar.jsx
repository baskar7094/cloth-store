import { Link } from "react-router-dom";
import LogoImg from '../../public/logo-01.svg'
import { useState } from "react";
import './layoutStyle.scss'

export default function Layout() {
    const [val, setval] = useState('')

    const OnToggle = () => {
        const navabrtoggle = document.getElementById('toggle')
        navabrtoggle.classList.toggle('toggleshow')
        const navbarhidden = document.getElementById('hidden')
        navbarhidden.classList.toggle('hiddenitem')
    }

    return (
        <section className="layout-section">

            <nav className=" md:w-full flex justify-between items-center w-screen    py-5 px-4 xl:px-10 2xl:py-14 ">

                <Link to={'/'} id="hidden" className="   mx-auto md:mx-0 md:w-40 lg:w-60   ">
                    <img src={LogoImg} alt="...." className=" object-cover xl:w-full 2xl:w-60" />
                </Link>

                <button className="pr-8  md:hidden" onClick={OnToggle} ><span><i className="bi bi-list font-bold text-3xl text-white font-bold hover:scale-150 "></i></span></button>

                <div className=" md:flex   response-div xl:justify-center " id="toggle">
                    <ul className="md:flex md:items-center md:gap-3 lg:pl-10 lg:gap-6 2xl:gap-20  hidden " >
                        <li><Link to={'/'}>home</Link></li>
                        <li><Link to={'/shop'}>shop</Link></li>
                        <li><Link to={'/about'}>about us</Link></li>
                        <li><Link to={'/contact'}>contact us</Link></li>
                    </ul>
                    <ul className="md:flex mr-10 w-screen  md:justify-end md:items-center md:w-60 2xl:gap-10 2xl:ml-40 lg:ml-40 items-center 2xl:w-80 md:gap-5 2xl:hidden">
                        <div className="flex flex-row w-full  items-center gap-5">
                            <form className="flex gap-3 md:gap-2  ">

                                <input list="browsers" placeholder="search items" value={val} onChange={(e) => setval(e.target.value)} className=" text-black border-none px-5 py-2 w-48 float-left " />
                                <datalist id="browsers">
                                    <option value='boys dress' />
                                    <option value='woman dress' />
                                    <option value='kids dress' />
                                    <option value='jawallary' />
                                    <option value='toys' />
                                    <option value='frame' />

                                </datalist>

                                <button type="submit" className=""><span><i className="bi bi-search text-2xl border py-1 px-2 "></i></span></button>
                            </form>
                        <li><Link to={'/cart'}><i className="bi bi-cart text-3xl md:text-2xl "></i></Link></li>
                        </div>
                    </ul>
                <ul className=" 2xl:flex hidden  2xl:gap-10 ">

                    <div>

                        <i className="bi bi-search text-xl 2xl:text-6xl"></i></div>
                    <li><Link to={'/cart'}><i className="bi bi-cart 2xl:text-6xl"></i></Link></li>
                </ul>
                </div>
              

            </nav>

        </section>
    )
}