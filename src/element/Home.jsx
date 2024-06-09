import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    const Navigate = useNavigate()
    return (
        <div onClick={()=>Navigate(`/product/${props.id}`)}>
         <h2 className='text-4xl'>   welcome home page   </h2>
         <p>{props.id}{props.name}{props.rank}{props.adress}</p>
        </div>
    )
}
