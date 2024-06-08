import { Link } from "react-router-dom";
import LogoImg from '../../public/logo-01.svg'
import { useState } from "react";

export default function Layout() {
    const [val, setval] = useState('')



    return (
        <section className="layout-section">

            <nav className=" md:w-full flex justify-between items-center bg-transparent   py-5 px-4 xl:px-10 2xl:py-14 ">

                <Link to={'/'} className="w-20 mx-auto md:mx-0 md:w-40 lg:w-60   ">
                    <img src={LogoImg} alt="...." className=" object-cover xl:w-32 2xl:w-60" />
                </Link>

                <button className="pr-4 md:hidden"><span><i className="bi bi-list font-bold text-2xl hover:scale-150 "></i></span></button>

                <div className="hidden md:flex md:w-11/12  response-div xl:justify-center">
                    <ul className="md:flex md:justify-start md:gap-6 lg:pl-10 lg:gap-6 2xl:gap-20 ">
                        <li><Link to={'/'}>home</Link></li>
                        <li><Link to={'/shop'}>shop</Link></li>
                        <li><Link to={'/about'}>about us</Link></li>
                        <li><Link to={'/contact'}>contact us</Link></li>
                    </ul>
                    <ul className="md:flex  md:justify-end md:items-center md:w-60 2xl:gap-10 2xl:ml-40 lg:ml-40 items-center 2xl:w-80 md:gap-5 2xl:hidden">
                        <div className="flex gap-4">
                            <form className="flex gap-4">

                                <input list="browsers" placeholder="search items" value={val} onChange={(e) => setval(e.target.value)} className=" text-black border-none px-1 py-2" />
                                <datalist id="browsers">
                                    <option value='boys dress' />
                                    <option value='woman dress' />
                                    <option value='kids dress' />
                                    <option value='jawallary' />
                                    <option value='toys' />
                                    <option value='frame' />

                                </datalist>

                                <button type="submit"><span><i className="bi bi-search text-2xl"></i></span></button>
                            </form>
                        </div>
                        <li><Link to={'/cart'}><i className="bi bi-cart"></i></Link></li>
                    </ul>
                </div>
                <ul className=" 2xl:flex hidden  2xl:gap-10 ">

                    <div>

                        <i className="bi bi-search text-xl 2xl:text-6xl"></i></div>
                    <li><Link to={'/cart'}><i className="bi bi-cart 2xl:text-6xl"></i></Link></li>
                </ul>

            </nav>

        </section>
    )
}