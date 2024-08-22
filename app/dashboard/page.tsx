"use client"

import {User} from '../../interface/first'
import { useEffect, useState } from "react"

const DashboardPage = () => {
    
    const [data , setData] = useState<User | null>(null)
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch("http://localhost:3000/api/auth/getme" , {method : "GET"})
        .then(res => {
            return res.json() 
        })
        .then(data => {
            setData(data)
            setLoading(false)
            // Redux Update
        })
    },[])

    if(loading)
        return <div>Loading...</div>

    return (<>
        <div className="flex align-center text-center justify-center flex-col p-4">
            <h1 className="p-3 text-[50px]">
                Dashboard
            </h1>
                <h2 className={`${data?.role === "USER" ? "bg-green-400" : "bg-blue-500"} p-2 text-[20px]  rounded-md`}>{data?.role}</h2>
                <div className="p-3"> 
                <div className='gap-5'>
                    <h2 className='text-[20px]'>Username : {data?.username}</h2>
                    <h2 className='text-[20px]'>Email : {data?.email}</h2>
                </div>
            </div>
        </div>
    </>);
}
 
export default DashboardPage;