import { NextResponse } from "next/server";
import { DataBaseConnection } from "@/utils/db";
import userModel from "@/models/user";
import { generateToken, hashPassword } from "@/configs/auth";
import { cookies } from "next/headers";



export async function POST(req : Request){

    DataBaseConnection()
    
    const {firstname , lastname , email , password ,username} = await req.json()

    const isUserExists = await userModel.findOne({
        $or : [{username} , {email}]
    })

    if(isUserExists){
        return NextResponse.json({message : "This Username or Email has been takne"})
    }

    const hashePassword = await hashPassword(password)

    const token = generateToken({email})

    const user = await userModel.create({
        username,
        email,
        password : hashePassword,
        firstname,
        lastname,
        role : "USER"
    })

    if(user){
        (await cookies()).set("token" , token , {httpOnly : true , maxAge : 60 * 60 * 24 , path : "/"})
        return NextResponse.json({message : "User Added"})
    }else{
        return NextResponse.json({message : "Failed to Sign up"})
    }

}