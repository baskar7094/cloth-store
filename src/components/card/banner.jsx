import React from 'react'
import { Link } from 'react-router-dom'
import Bannerimg from '../../../public/bg-03-b-400x504.jpg'



export default function BannerImg() {
    return (
        <article className='  text-center md:flex  '>
            <img src={Bannerimg} alt="..." className='w-3/4 h-max pt-10  ml-10 md:w-1/2 2xl:h-1/2  ' />
            <div className=' w-3/4 ml-10 md:py-40 md:px-10 md:ml-0 2xl:py-0 2xl:pt-96 2xl:px-40 lg:pt-60 xl:pt-72'>

                <h2 className='text-2xl font-bold py-3 mb-5 2xl:text-7xl'>explore our exquisite bag colection now! </h2>
                <Link className='link-hover'>view collection</Link>
            </div>
        </article>
    )
}

export function Banner02(props) {
    return (
        <>
            <article className='text-center bg-white  p-5 mr-20 md:p-16 md:mr-60  lg:mr-96 xl:mt-24 2xl:w-3/4 2xl:mt-44 '>
                <p className='text-black font-bold md:text-xl 2xl:text-5xl 2xl:py-10'>{props.work_name}</p>
                <h2 className='text-black font-bold text-xl md:text-2xl md:py-3  2xl:text-6xl 2xl:py-10'>{props.heading}</h2>
                <p className='text-black mb-5 md:mb-7 md:text-xl 2xl:py-10 2xl:text-4xl'>{props.para}</p>
                <Link className=' text-black border-2 border-black link-hover'>shop now</Link>
            </article>

        </>
    )
}

export function Banner03(props) {
    return (
        <article className='text-center md:flex  justify-center items-center xl:justify-start xl:items-start 2xl:justify-center 2xl:items-center '>
            <img src={props.img} alt={props.alt}
                className='w-auto mx-auto shadow-xl md:w-1/2 md:mt-10  object-cover bg-cover object-center xl:w-auto xl:h-96 2xl:w-6/12 2xl:mx-auto 2xl:h-1/2' />
           <div className='md:pt-32 2xl:pt-32  '>

            <h2 className='text-xl font-bold py-3 md:text-2xl text-red-400 2xl:text-6xl'>{props.heading}</h2>
            <p className='mb-5 w-9/12 mx-auto md:py-2 2xl:text-6xl 2xl:py-10 '>{props.para}</p>
            <Link className='link-hover'>shop now</Link>
           </div>

        </article>
    )
}

export function Banner04(props) {
    return (
        <div className='banner04'>
            <article className='text-center pt-40 px-5 xl:pt-48 2xl:pt-96'>
                <p className='font-bold md:text-xl 2xl:text-8xl'>{props.sub_name} </p>
                <h1 className='font-bold text-xl md:text-2xl 2xl:text-7xl'>levate your wardrobe, embreace timless style!</h1>
                <p className='mb-5 py-3 md:text-xl 2xl:text-5xl 2xl:mb-20'>explore our collections today and experinace the joy of fashion. shop now for the epitome of chic soaphitication!</p>
                <Link className='link-hover'>shop now</Link>
            </article>

        </div>)
}