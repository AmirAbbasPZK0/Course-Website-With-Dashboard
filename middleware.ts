import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export default function middleware(req : NextRequest){

    // const cookie = (await cookies()).get("token");

    // console.log(cookie , "This message is from middleware");

    if(!req.cookies.has("token")){
        return NextResponse.redirect(new URL("/" , req.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher : ['/dashboard' , "/dashboard/admin"]
}