"use server"

import { verifyToken } from "@/configs/auth"

import { cookies } from "next/headers"

const tokenHandler = () => {
    
    if(cookies().has("token")){
        let token = cookies().get('token')?.value
        return verifyToken(token!)
    }

}

 
export default tokenHandler;