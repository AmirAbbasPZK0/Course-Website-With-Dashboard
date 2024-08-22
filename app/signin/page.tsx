"use client"

import { useState , useEffect} from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import tokenHandler from "@/actions/action";

const SignInPage = () => {

    const router = useRouter()

    const isAuthenticate = async () : Promise<any> => {
        const result = tokenHandler()
        return result
    }

    useEffect(()=>{
        isAuthenticate().then(res => {
            if(res){
                router.push("/dashboard")
            }
        }).catch(err => {
            console.log(err)
        })
    },[])
    

    const {register , handleSubmit} = useForm()
    const [loading , setLoading] = useState(false)

    const onSubmit = (e : FieldValues) => {
        setLoading(true)
        fetch("/api/auth/signin" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(e)
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setLoading(false)
            router.push("/dashboard")
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
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username | Email</label>
                                <input type="text" {...register("connector")} placeholder="Username | Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="text" {...register("password")} placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? "Pending..." : "Login"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>);
}
 
export default SignInPage;