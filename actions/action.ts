"use server"

import { verifyToken } from "@/configs/auth"

import { cookies, type UnsafeUnwrappedCookies } from "next/headers";

const tokenHandler = () => {
    
    if((cookies() as unknown as UnsafeUnwrappedCookies).has("token")){
        let token = (cookies() as unknown as UnsafeUnwrappedCookies).get('token')?.value
        let isVerified = verifyToken(token!)
        return isVerified
    }

}

 
export default tokenHandler;