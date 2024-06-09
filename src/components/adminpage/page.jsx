import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const woamn_uri = 'http://localhost:3000/woman'
const boys_uri = 'http://localhost:3000/boys'



export default function AdminPage() {
    return (
        <div className='grid grid-cols-2 gap-5 '>
<WomanFecth/>
<BoysFecth/>

<Link to={'/view-woman-page'}>woman-page</Link>
<Link to={'/view-boys-page'}>boys-page</Link>
        </div>
    )
}

export function WomanFecth() {
    const [data, setdata] = useState([])
    const [img, setimg] = useState()
    const [name, setname] = useState()
    const [alt, setalt] = useState()
    const [describtion, setdescribtion] = useState()
    const [price, setprice] = useState()

    useEffect(() => {
        fetchwoman()
    }, [])

    const fetchwoman = async () => {
        try {
            const response = await axios.get(woamn_uri) 
            setdata(response.data)
        } catch (error) {
                console.log(' woman get err',error)
        }
    }

    const postdata =async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(woamn_uri,{img:img,name:name,price:price,descri:describtion,alt:alt})
            console.log(response.data)
        } catch (error) {
            console.log('woman post err',error)
        }

        fetchwoman()
        }
       
return(
    <section className='bg-black w-60 woman-section'>
        <form className='flex flex-col p-10 gap-5' onSubmit={postdata}>
            <h2>woman controls </h2>
<label htmlFor="img"> enter img</label>
<input type="text" value={img} onChange={(e)=>setimg(e.target.value)} placeholder='enter img url ' />
<label htmlFor="img"> enter alt</label>
<input type="text" value={alt} onChange={(e)=>setalt(e.target.value)} placeholder='enter alt name ' />
<label htmlFor="img"> enter name</label>
<input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='enter brand name ' />
<label htmlFor="img"> enter describtion</label>
<input type="text" value={describtion} onChange={(e)=>setdescribtion(e.target.value)} placeholder='enter describtion ' />
<label htmlFor="img"> enter price</label>
<input type="number" value={price} onChange={(e)=>setprice(e.target.value)} placeholder='enter prive RS : ' />
        <input type="submit" value="submit" className='bg-red-500' />
        </form>
    </section>
)


}
export function BoysFecth() {
    const [data, setdata] = useState([])
    const [img, setimg] = useState()
    const [name, setname] = useState()
    const [alt, setalt] = useState()
    const [describtion, setdescribtion] = useState()
    const [price, setprice] = useState()


    useEffect(() => {
        fetchboys()
    }, [])


const fetchboys = async ()=>{
    const response = axios.get(boys_uri)
    setdata(response.data)

}
const postdata =async (e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(boys_uri,{img:img,name:name,price:price,descri:describtion,alt:alt})
        console.log(response.data)
    } catch (error) {
        console.log('woman post err',error)
    }

    fetchboys()
    }
return(
    <section className='bg-black w-60 woman-section'>
    <form className='flex flex-col p-10 gap-5' onSubmit={postdata}>
        <h2 className=''>boys controls </h2>
<label htmlFor="img"> enter img</label>
<input type="text" value={img} onChange={(e)=>setimg(e.target.value)} placeholder='enter img url ' />
<label htmlFor="img"> enter alt</label>
<input type="text" value={alt} onChange={(e)=>setalt(e.target.value)} placeholder='enter alt name ' />
<label htmlFor="img"> enter name</label>
<input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='enter brand name ' />
<label htmlFor="img"> enter describtion</label>
<input type="text" value={describtion} onChange={(e)=>setdescribtion(e.target.value)} placeholder='enter describtion ' />
<label htmlFor="img"> enter price</label>
<input type="number" value={price} onChange={(e)=>setprice(e.target.value)} placeholder='enter prive RS : ' />
    <input type="submit" value="submit" className='bg-red-500' />
    </form>
</section>
)
}
