import axios from 'axios'
import { useState, useEffect } from 'react'

const woamn_uri = 'http://localhost:3000/woman'



export default function WomanPage() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const response = await axios.get(woamn_uri)
            setdata(response.data)
        } catch (error) {
            console.log(' woman get err', error)
        }
    }
    const DEItem = async (id) => {
        const response = await axios.delete(`${woamn_uri}/${id}`)
        fetchdata()
    }
    return (
        <>
            <section>
                <h2 className='text-black text-center text-3xl font-bold'>control woman page items</h2>
                <ul className='grid grid-cols-5 text-center gap-5 '>
                    {data.map(i => (
                        <div key={i._id} className='  mx-auto flex flex-col gap-2 border-2 border-purple-500'>
                            <button type="button" onClick={() => DEItem(i._id)} className='bg-red-500 px-5 py-2 text-black '>delete</button>
                            <img src={i.img} alt={i.alt} className='w-full h-auto bg-cover object-fill  object-center' />
                            <h4>{i.name}</h4>
                            <h3>{`$ ${i.price}`}</h3>
                            <p>{i.descri}</p>

                        </div>
                    ))}
                </ul>
            </section>
        </>
    )
}