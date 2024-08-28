"use client"

import Link from 'next/link'
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
                    <div className='flex items-start p-3 border-2 justfiy-start justify-between border-slate-400'>
                        <div className='flex items-start justify-start flex-col'>
                            <h2 className='text-[20px]'>Username : {data?.username}</h2>
                            <h2 className='text-[20px]'>Email : {data?.email}</h2>
                            <h2 className='text-[20px]'>Firstname : {data?.firstname}</h2>
                            <h2 className='text-[20px]'>Lastname : {data?.lastname}</h2>
                        </div>
                        <Link className='p-2 bg-orange-400 rounded-md' href={`/user-edit/${data?._id}`}>Edit</Link>
                    </div>
                    {
                        data?.role === "ADMIN" && (
                            <div className='p-4'>
                                <Link href={"/dashboard/admin"} className='p-3 m-2 rounded-md bg-blue-500'>Go To Admin Panel</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>);
}
 
export default DashboardPage;