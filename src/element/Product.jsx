import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Product(props) {
    const params = useParams()
    return (
    <div >
        <Link to={'/'}>home</Link>
      <h2 className='text-5xl'>{params.id}</h2>
    </div>
  )
}
