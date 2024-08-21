import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req : NextRequest){

    if(!req.cookies.has("token")){
        return NextResponse.redirect(new URL("/" , req.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher : ['/dashboard']
}