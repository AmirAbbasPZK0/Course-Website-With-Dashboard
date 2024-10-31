"use client"

import { Course } from "@/interface/first";
import { useEffect, useState, use } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const UpdateUserPage = (props: {params : Promise<{id : string}>}) => {
    const params = use(props.params);


    const router = useRouter()
    const [loading , setLoading] = useState(false)
    const [data , setData] = useState<Course | null>(null)

    useEffect(()=>{
        fetch(`http://localhost:3000/api/courses/${params.id}` , {method : "GET"})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
        })
    },[])

    const { handleSubmit } = useForm()

    const onSubmit = (e : FieldValues) =>{
        setLoading(true)
        fetch(`http://localhost:3000/api/courses/${params.id}` , {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(e)
        })
        .then(res => {
            return res.json()
        })
        .then(() => {
            setLoading(false)
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
                            Are you sure you want to delete {data?.title}
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? "Pending..." : "Delete"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
 
export default UpdateUserPage;