import courseModel from "@/models/course";
import { NextResponse } from "next/server";
import { DataBaseConnection } from "@/utils/db";

export async function GET(req : Request , {params} : {params : {id : string}}){
    
    DataBaseConnection()

    const course = await courseModel.findOne({_id : params.id}).populate("teacher")

    if(course){
        return NextResponse.json(course)
    }else{
        return NextResponse.json({message : "Failed To Fetch"})
    }

}

export async function PUT(req : Request , {params} : {params : {id : string}}){

    DataBaseConnection()

    const {title , description , teacher , price , image} = await req.json()

    const course = await courseModel.findOneAndUpdate({_id : params.id} , {
        title,
        description,
        teacher,
        price,
        image
    })

    if(course){
        return NextResponse.json({message : "Course Edited Successfully"})
    }else{
        return NextResponse.json({message : "Failed To Edit Course"})
    }

}

export async function DELETE(_ : any , {params} : {params : {id : string}}){
    
    DataBaseConnection()

    const deleteCourse = await courseModel.findOneAndDelete({_id : params.id})

    if(deleteCourse){
        return NextResponse.json({message : "Course has been deleted"})
    }else{
        return NextResponse.json({message : 'Faild to delete course'})
    }

}
