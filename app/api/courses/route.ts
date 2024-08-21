import { NextResponse } from "next/server";
import courseModel from "@/models/course";
import { DataBaseConnection } from "@/utils/db";


export async function GET(req : Request){

    DataBaseConnection()

    const courses = await courseModel.find({}).populate("teacher" , "username")

    if(courses){
        return NextResponse.json(courses)
    }else{
        return NextResponse.json({message : "Failed to load courses"})
    }
}

export async function POST(req : Request){
    
    DataBaseConnection()
    
    const {title , description , price , teacher , image} = await req.json()

    const createCourse = await courseModel.create({
        title , description , price , teacher , image
    })

    if(createCourse){
        return NextResponse.json({message : "Course Has Been Added Successfully"})
    }else{
        return NextResponse.json({message : "Error"})
    }

}