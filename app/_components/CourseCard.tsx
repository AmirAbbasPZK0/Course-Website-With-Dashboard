"use client"

import { Course, User } from "@/interface/first";
import Link from "next/link";
import { useEffect, useState } from "react";


interface Props{
    data : Course
}


const CourseCard = ({data} : Props) => {

    const [teacherData , setTeacherData] = useState<User | null>(null)

    useEffect(()=>{
        fetch("http://localhost:3000/api/auth/getme")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setTeacherData(data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return (<>
        <div key={data._id} className="flex flex-row w-[100%] items-center border-2 rounded-md border-md border-slate-200 p-3 justify-center">
            <div className="flex flex-row gap-8 items-center justify-center">
            <img src={data?.image} className="w-[120px] h-[120px]" alt="" />
            <div className="gap-5">
                <h3 className="text-[30px]">{data?.title}</h3>
                <h3>{data?.description}</h3>
                <h3 className="text-slate-400">{data?.teacher?.username}</h3>
            </div>
        </div>
            {data.teacher._id === teacherData?._id && (
                <div className="flex flex-row">
                    <Link className="p-2 m-2 bg-orange-400 rounded-sm" href={`/course-edit/${data?._id}`}>Edit</Link>
                    <Link className="p-2 m-2 bg-red-500 rounded-sm" href={`/course-del/${data?._id}`}>Delete</Link>
                </div>
            )}
        </div>
    </>);
}
 
export default CourseCard;