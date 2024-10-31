import { NextResponse } from "next/server";
import { DataBaseConnection } from "@/utils/db";
import { cookies } from "next/headers";
import { verifyToken } from "@/configs/auth";
import userModel from "@/models/user";

export async function GET(){

    DataBaseConnection()
    
    const token = (await cookies()).get("token")?.value
    const tokenPayload : any = verifyToken(token!)

    if(tokenPayload){
        
        const user = await userModel.findOne({
            email : tokenPayload.email
        })
    
        if(user){
            return NextResponse.json(user)
        }else{
            return NextResponse.json({message : "User is not Defined"})
        }

    }

}