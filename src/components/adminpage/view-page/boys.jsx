import axios from 'axios'
import React, { useState, useEffect } from 'react'


const boys_uri = 'http://localhost:3000/boys'
 

export default function Boys() {
   const [data,setdata] = useState([])
   useEffect(()=>{
fetchdata()
   },[])
    const fetchdata = async () => {
        try {
            const response = await axios.get(boys_uri) 
            setdata(response.data)
        } catch (error) {
                console.log(' boys get err',error)
        }
    }

    const DElItem = async(id) =>{
      const response =   await axios.delete(`${boys_uri}/${id}`)
      fetchdata()
    }

  return (
    <div>
      <ul className='grid grid-cols-5 gap-5 text-center border'>
        {data.map(i=>(
            <div key={i._id} className='flex flex-col gap-2 border-2 border-red-400'>
                <button onClick={()=>DElItem(i._id)} className='bg-red-500 px-4 py-2 '>delete</button>
                <img src={i.img} alt={i.alt} />
                <h4>{i.name}</h4>
                <h4><strong>{i.price}</strong></h4>
                <p>{i.descri}</p>
            </div>
        ))}
      </ul>
    </div>
  )
}
