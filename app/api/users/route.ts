import userModel from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(){
    const users = await userModel.find({})
    if(users){
        return NextResponse.json(users)
    }else{
        return NextResponse.json({message :"Error" , status : 409})
    }
}