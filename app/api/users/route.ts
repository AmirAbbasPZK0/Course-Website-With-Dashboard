import userModel from "@/models/user";
import { DataBaseConnection } from "@/utils/db";
import { NextResponse } from "next/server";
import { hashPassword } from "@/configs/auth";

export async function GET(){

    DataBaseConnection()

    const users = await userModel.find({})
    if(users){
        return NextResponse.json(users)
    }else{
        return NextResponse.json({message :"Error" , status : 409})
    }
}

export async function POST(req : Request){

    DataBaseConnection()

    const {username , email , firstname , lastname , password} = await req.json()

    const isUserExists = await userModel.findOne({
        $or : [{username} , {email}]
    })

    if(isUserExists){
        return NextResponse.json({message : "This Username or Email has been takne"})
    }

    const hashePassword = await hashPassword(password)

    const createUser = await userModel.create({
        username,
        email,
        password : hashePassword,
        firstname,
        lastname,
        role : "USER"
    })

    if(createUser){
        return NextResponse.json({message : "User Added Successfully"})
    }else{
        return NextResponse.json({message : "Failed to Add User"})
    }

}