import React from 'react'
import IMg01 from '../../../../public/img-08-a-400x488.jpg'
import IMg02 from '../../../../public/img-05-a-white-300x366.jpg'
import IMg03 from '../../../../public/img-06-a-black-300x366.jpg'
import IMg04 from '../../../../public/img-05-a-white-246x300.jpg'
import IMg05 from '../../../../public/img-03-a-400x488.jpg'
import BannerImg, { Banner02, Banner03 } from '../banner/banner'
import Bannerimg02 from '../../../../public/img-05-a-white-300x366.jpg'
import { Link } from 'react-router-dom'
import './cardStyle.scss'


export default function Cards() {
    return (
        <div>
            <section>
                <div>
                    <FristCard />

                </div>
                {/* banner 01 */}
                <div className='bannerimg my-10'>
                    <BannerImg />

                </div>
                {/* banner 02 */}
                <div className='bannerimg-02 -mt-20 md:-mt-10 md:py-16'>
                    <Banner02 work_name="work & office attire" heading="professional prinstripe blazers collection" para="elevate your workwear with our professional pintstripe with our professioal pristiripe balxers collection, where tailored sophhisitification meets modern conffidence for a powerfully polished office look." />
                </div>
                {/* banner 03 */}
                <div className='bannerimg-03'>
                    <div className='-mt-16'>

                        <Banner03 img={Bannerimg02} heading="discover the allure of fashion reinvented!" alt="..." para="dive into world of style with ourlatest collection! shop now and readfine your wardrobe narrative!" />
                    </div>
                </div>

            </section>

            <section className='lg:my-40'>
                <h2 className='text-black text-2xl py-5 text-center font-bold lg:text-3xl 2xl:text-6xl'>newest dress's </h2>
                <SecondCard />
            </section>
        </div>
    )
}

function FristCard() {

    return (<>
        <div className='grid grid-cols-1  gap-10  md:grid-cols-3 md:px-7 md:gap-14 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5'>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress"
                    brand_name="minnight gala maxi dress"
                    price="$175.90"
                    img={IMg01}
                    alt="..."
                />

                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress"
                    brand_name="minnight gala maxi dress"
                    price="$175.90"
                    img={IMg02}
                    alt="..."
                />

                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress"
                    brand_name="minnight gala maxi dress"
                    price="$175.90"
                    img={IMg03}
                    alt="..."
                />

                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress"
                    brand_name="minnight gala maxi dress"
                    price="$175.90"
                    img={IMg04}
                    alt="..."
                />

                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress" brand_name="minnight gala maxi dress" price="$175.90" img={IMg05} alt="..." />
                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress" brand_name="minnight gala maxi dress" price="$175.90" img={IMg02} alt="..." />
                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress" brand_name="minnight gala maxi dress" price="$175.90" img={IMg01} alt="..." />
                <Card_Content />
            </Link>

            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem work_name="evening dress" brand_name="minnight gala maxi dress" price="$175.90" img={IMg01} alt="..." />
                <Card_Content />
            </Link>

        </div>
    </>)
}

function SecondCard() {
    return (
        <div className='grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-4 '>
            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem img={IMg01} alt="..." work_name="activewear" brand_name="professional pinscripe blazer" price="$109.99" />
            </Link>
            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem img={IMg02} alt="..." work_name="activewear" brand_name="professional pinscripe blazer" price="$109.99" />
            </Link>
            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem img={IMg03} alt="..." work_name="activewear" brand_name="professional pinscripe blazer" price="$109.99" />
            </Link>
            <Link to={'/products'} className='hover:scale-105  duration-500'>
                <CardItem img={IMg04} alt="..." work_name="activewear" brand_name="professional pinscripe blazer" price="$109.99" />
            </Link>

        </div>
    )
}



export const CardItem = (props) => {
    return (
        <section className="card-section">
        <div className='text-center'>
            <img src={props.img} alt={props.alt}
                className=' size-80  mx-auto md:w-4/5 object-contain object-center'
            />
            <p className=' font-bold capitalize text-md 2xl:text-3xl 2xl:py-3'>{props.work_name}</p>
            <h5 className='  text-2xl 2xl:text-4xl 2xl:py-3 '>{props.brand_name}</h5>
            <p className='text-xl 2xl:text-3xl '>{props.price}</p>
        </div>
        </section>

    )
}

const Card_Content = () => {
    return (
        <div>
            <ul className=' grid justify-around uppercase font-bold  py-5 md:mx-10 mx-5 grid-flow-col-dense md:grid-flow-row hidden'>
                <li className='text-lg 2xl:text-3xl text-black border-2 px-3  border-gray-500 rounded-md hover:scale-125'>xl</li>
                <li className='text-lg 2xl:text-3xl text-black border-2 px-3  border-gray-500 rounded-md hover:scale-125'>l</li>
                <li className='text-lg 2xl:text-3xl text-black border-2 px-3  border-gray-500 rounded-md hover:scale-125'>m</li>
                <li className='text-lg 2xl:text-3xl text-black border-2 px-3  border-gray-500 rounded-md hover:scale-125'>s</li>
                <li className='text-lg 2xl:text-3xl text-black border-2 px-3  border-gray-500 rounded-md hover:scale-125'>xs</li>
            </ul>
            <div className='flex justify-center items-center gap-5 list-none md:gap-3 2xl:gap-5     hidden'>
                <li className='bg-black     w-6 h-6 2xl:w-9 2xl:h-9 rounded-full ring-2 hover:ring-2 hover:ring-black'></li>
                <li className='bg-red-500   w-6 h-6 2xl:w-9 2xl:h-9 rounded-full ring-2 hover:ring-2 hover:ring-red-800'></li>
                <li className='bg-green-500 w-6 h-6 2xl:w-9 2xl:h-9 rounded-full ring-2 hover:ring-2 hover:ring-green-800'></li>
                <li className='bg-gray-800  w-6 h-6 2xl:w-9 2xl:h-9 rounded-full ring-2 hover:ring-2 hover:ring-gray-900'></li>
            </div>
        </div>
    )
}
