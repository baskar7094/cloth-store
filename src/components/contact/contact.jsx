import React from 'react'
import './contactStyle.scss'
export default function Contact() {
  return (
    // contact banner card
    <div className='contact-bg text-center pt-9  lg:pt-32 xl:pt-48 2xl:pt-60'>
      <div className='flex flex-row gap-5 justify-center font-bold'>
        <i className='bi bi-star text-yellow-500 font-semibold 2xl:text-5xl'></i>
        <i className='bi bi-star text-yellow-500 font-semibold 2xl:text-5xl'></i>
        <i className='bi bi-star text-yellow-500 font-semibold 2xl:text-5xl'></i>
        <i className='bi bi-star text-yellow-500 font-semibold 2xl:text-5xl'></i>
        <i className='bi bi-star text-yellow-500 font-semibold 2xl:text-5xl'></i>
      </div>
      <div className='py-10 2xl:py-20 mx-5 '>

      <q className='md:text-xl 2xl:text-3xl'>femme wardrobe is my fashion santuary! the curated collection effortlessely blends chic trands with timeless elegance, making every purchase a delightful discovery. the quality of their pices is unmatched, and i apprciate the brand's commintient to substainable fashion. what truly seets femme wardroeb apart is their customer~centric approch.</q>
      <p className='uppercase md:py-4 md:text-xl py-5 2xl:text-5xl 2xl:py-10'>saram m. DEOTED FEMMEWARDROBE FAN</p>
      </div>
    </div>
  )
}
