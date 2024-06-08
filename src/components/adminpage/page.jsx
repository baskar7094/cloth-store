import { useEffect, useState } from "react"
import axios from 'axios'


export default function Adminpage() {
    return (
        <div className="text-black">

            admin page welcome you!....

            sooo i love you this website
            <StateMangement/>
        </div>
    )
}

export const StateMangement = (props) => {
    const [data, setdata] = useState([])
    const [name,setname] = useState('')
    const [img,setimg] = useState('')
    const [price,setprice] = useState()

    useEffect(() => {
        fecthdata()
    },[])

    const fecthdata = async () => {
        const response = await axios.get('http://localhost:3000/woman')
        setdata(response.data)
        console.log(response.data)
    }

const postdata =async  (event)=>{
    event.preventDefault()
    const response = await axios.post('http://localhost:3000/woman',{brandname:name,img:img,price:price})
    console.log(response.data)
     fecthdata()
}
const deleteitem =async  (id)=>{
    const response = await axios.delete(`http://localhost:3000/woman/${id}`)
    console.log(response.data)
    fecthdata()
}

    return (
        <>

        {data.flatMap((i)=>(
<li className="bg-black text-white ">{i._id}</li>
        ))}
            <h4>data as show successfully! </h4>
            {data.map((i,n) => (
                <div key={n} className="flex flex-col justify-center items-center mx-40 ">
<img src={i.img} alt="..." className="w-20 h-auto" />
<p className="text-black">{i.price}</p>
<p className="text-black">{i.brandname}</p>
<button type="button" className="px-5 py-3 bg-red-500  shadow-2xl shadow-black" onClick={()=>deleteitem(i._id)}>delete item </button>
                
                </div>
            ))}

<form onSubmit={postdata} className="flex flex-col w-60 mx-auto text-center gap-5">
    <label htmlFor="" className="text-xl font-bold text-green-500">img label</label>
    <input type="text" value={img}  onChange={(e)=>setimg(e.target.value)} className="text-black bg-gray-400 px-5 py-3 ring-2 ring-gray-900 " placeholder="enter img string"  required />
    <label htmlFor="" className="text-xl font-bold text-green-500">price label</label>
    <input type="text" value={price} onChange={(e)=>setprice(e.target.value)} className="text-black bg-gray-400 px-5 py-3 ring-2 ring-gray-900" placeholder="enter prive value" required/>
    <label htmlFor="" className="text-xl font-bold text-green-500">name label</label>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="text-black bg-gray-400 px-5 py-3 ring-2 ring-gray-900" placeholder="enter name " required/>
    <input type="submit" value={'submit'} className="text-black ring-2 ring-gray-600" />
</form>



        </>
    )


}


