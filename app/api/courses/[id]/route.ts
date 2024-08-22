import courseModel from "@/models/course";
import { NextResponse } from "next/server";
import { DataBaseConnection } from "@/utils/db";
import userModel from "@/models/user";


export async function GET(req : Request , {params} : {params : {id : string}}){
    
    DataBaseConnection()

    const course = await courseModel.findOne({_id : params.id})

    if(course){
        return NextResponse.json(course)
    }else{
        return NextResponse.json({message : "Failed To Fetch"})
    }

}

export async function PUT(){

}

export async function DELETE(){

}
