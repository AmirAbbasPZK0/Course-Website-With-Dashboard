import { NextResponse } from "next/server";
import { DataBaseConnection } from "@/utils/db";
import userModel from "@/models/user";
import { generateToken, verifyPass } from "@/configs/auth";
import { cookies } from "next/headers";


export async function POST(req : Request){

    DataBaseConnection()

    const {connector , password} = await req.json()

    const user = await userModel.findOne({
        $or : [{email : connector} , {username : connector}]
    })

    if(!user){
        return NextResponse.json({message : "User Does't Exists"})
    }

    const verifiedPassword = await verifyPass(password , user.password)

    const token = generateToken({email : user.email})

    if(verifiedPassword){
        cookies().set("token" , token , {httpOnly : true , maxAge : 60 * 60 * 24 , path : "/"})
        return NextResponse.json({message : `Welcome Back ${user.username}`})
    }else{
        return NextResponse.json({message : "UserName or Email or Password is Not Correct"})
    }

}