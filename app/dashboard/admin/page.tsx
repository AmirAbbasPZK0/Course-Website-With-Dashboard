"use client"

import { User } from "@/interface/first"
import { redirect } from "next/navigation"
import { useState , useEffect } from "react"


const AdminPage = () => {

    const [data , setData] = useState<User | null>(null)

    useEffect(()=>{
        fetch("http://localhost:3000/api/auth/getme")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
        })
    },[])

    if(data?.role === "USER"){
        redirect('/dashboard')
    }
    
    return (<>
        <div>
            <h1 className="text-blue-300 text-[50px]">Admin Panel</h1>
        </div>
    </>);
}
 
export default AdminPage;