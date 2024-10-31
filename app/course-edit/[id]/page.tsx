"use client"

import { User } from "@/interface/first";
import { useState, useEffect, use } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const EditCourse = (props: {params : Promise<{id : string}>}) => {
    const params = use(props.params);

    const [usersData , setUsersData] = useState<User[]>([])
    const [loading , setLoading] = useState(false)
    const {register , handleSubmit , setValue} = useForm()

    const router = useRouter()

    useEffect(()=>{
        fetch("http://localhost:3000/api/users")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setUsersData(data)
        })
    },[])

    useEffect(()=>{
        fetch(`http://localhost:3000/api/courses/${params.id}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setValue("title" , data.title)
            setValue("description" , data.description)
            setValue("teacher" , data.teacher._id)
            setValue("image" , data.image)
            setValue("price" , data.price)
        })
    },[])


    const onSubmit = (e : FieldValues) => {

        fetch(`http://localhost:3000/api/courses/${params.id}` , {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(e)
        }).then(res => {
            return res.json()
        }).then(data => {
            router.refresh()
            router.replace("/dashboard/admin")
            setLoading(false)
        })
    }

    return (<>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Course
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" {...register("title")} placeholder="Title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input type="text" {...register("description")} placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" {...register("price")} placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                                <input type="text"  {...register('image')} placeholder="Image Url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teacher</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="selectmethod"
                                defaultValue=""
                                {...register("teacher", { required: true })}
                                >
                                {usersData.filter(item => item.role === "ADMIN").map((item) => (
                                    <option value={item._id} key={item._id}>{item.username}</option>
                                ))}
                                </select>
                            </div>

                            <button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? "Pending..." : "Add Course"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
 
export default EditCourse;