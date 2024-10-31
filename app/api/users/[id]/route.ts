import { DataBaseConnection } from "@/utils/db";
import userModel from "@/models/user";
import { NextResponse } from "next/server";


export async function GET(req : Request, props: {params : Promise<{id : string}>}) {
    const params = await props.params;

    DataBaseConnection()

    const user = await userModel.findOne({_id : params.id})

    if(user){
        return NextResponse.json(user)
    }else{
        return NextResponse.json({message : "Failed To Fetch"})
    }
}

export async function PUT(req : Request, props: {params : Promise<{id : string}>}) {
    const params = await props.params;

    DataBaseConnection()

    const {username , email , role} = await req.json()

    const user = await userModel.findOneAndUpdate(
        {
            _id : params.id
        },
        {
            username,
            email,
            role
        }
    )

    if(user){
        return NextResponse.json({message : "User Updated Successfully"})
    }else{
        return NextResponse.json({message : "Failed To Update"})
    }
}

export async function DELETE(req : Request, props: {params : Promise<{id : string}>}) {
    const params = await props.params;

    DataBaseConnection()

    const deleteUser = await userModel.findOneAndDelete({_id : params.id})

    if(deleteUser){
        return NextResponse.json({message : "User Has been deleted Successfully"})
    }else{
        return NextResponse.json({message : "Failed To Operate"})
    }
}