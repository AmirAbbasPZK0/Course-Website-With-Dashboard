"use client"

import { User } from "@/interface/first";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const UpdateUserPage = ({params} : {params : {id : string}}) => {


    const router = useRouter()
    const [data , setData] = useState<User | null>(null)
    const [loading , setLoading] = useState<boolean>(false)

    useEffect(()=>{
        fetch(`http://localhost:3000/api/users/${params.id}` , {method : "GET"})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setValue("username" , data.username)
            setValue("email" , data.email)
            setValue("role" , data.role)
        })
    },[])
    
    const {register , handleSubmit , setValue} = useForm()

    const onSubmit = (e : FieldValues) =>{
        fetch(`http://localhost:3000/api/users/${params.id}` , {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(e)
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            router.replace("/dashboard/admin")
            router.refresh()
        })
    }

    return (<>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input  type="text" {...register("username")} placeholder="Username | Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" {...register("email")} placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                            <select
                                className="text-slate-900"
                                id="selectmethod"
                                defaultValue=""
                                {...register("role", { required: true })}
                                >
                                <option value="" disabled>Select Option</option>
                                <option className="text-slate-900" value="USER">USER</option>
                                <option className="text-slate-900" value="ADMIN">ADMIN</option>
                                </select>
                            </div>
                            <button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? "Pending..." : "Edit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
 
export default UpdateUserPage;