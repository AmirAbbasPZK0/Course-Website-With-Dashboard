"use client"

import { Course } from "@/interface/first"
import Link from "next/link"
import { useEffect, useState } from "react"


const AdminUserControl =  () => {

    const [data , setData] = useState<Course[]>([])
    const [loading , setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        fetch("http://localhost:3000/api/courses")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setLoading(false)
            setData(data)
        })
    },[])

    if(loading)
        return <div>Loading...</div>

    return (<>
        <div className="flex flex-col items-center gap-2 py-4">
            <div>
                <Link href="/course-incr">Add Course +</Link>
            </div>
            <div className="flex items-center justfy-center gap-2 flex-row">
            {data.map((item : Course) => (
                <div className="flex flex-col h-[200px] items-center border-2 rounded-md border-md border-slate-200 p-3 justify-center">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <img src={item.image} className="w-[120px] h-[120px]" alt="" />
                        <div>
                            <h3>{item.title}</h3>
                            <h3>{item.description}</h3>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <Link className="p-2 m-2 bg-orange-400 rounded-sm" href={`/course-edit/${item._id}`}>Edit</Link>
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    </>);
}
 
export default AdminUserControl;