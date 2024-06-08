import React from 'react'
import ShippingImg from '../../../public/shipping.png'
import Lockimg from '../../../public/lock.png'
import Returnimg from '../../../public/returns.png'
import Trackimg from '../../../public/trackking.png'
export default function Service() {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-10 md:py-10 lg:grid-cols-4 2xl:my-10'>
      <ServiceCard img={ShippingImg} alt="" proprity_name="easy returns" proprity_para="with our hassle-free easy returns, changing your mind has never been more convenient."/>
      <ServiceCard img={Lockimg} alt="" proprity_name="easy returns" proprity_para="with our hassle-free easy returns, changing your mind has never been more convenient."/>
      <ServiceCard img={Returnimg} alt="" proprity_name="easy returns" proprity_para="with our hassle-free easy returns, changing your mind has never been more convenient."/>
      <ServiceCard img={Trackimg} alt="" proprity_name="easy returns" proprity_para="with our hassle-free easy returns, changing your mind has never been more convenient."/>
    </div>
  )
}


export function ServiceCard(props){
    return(
        <>
        <div className='text-center grid grid-cols-1 justify-center items-center gap-2 2xl:gap-5 my-4'>
            <img src={props.img} alt={props.alt}  className='w-20 mx-auto 2xl:w-32  '  />
            <h3 className='text-black 2xl:text-3xl'>{props.proprity_name}</h3>
            <p className='text-black 2xl:text-2xl'>{props.proprity_para}</p>
        </div>
        
        </>
    )
}
