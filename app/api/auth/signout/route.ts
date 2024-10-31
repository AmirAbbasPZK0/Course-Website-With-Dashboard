import { DataBaseConnection } from "@/utils/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(){

    await DataBaseConnection();

    (await cookies()).set("token" , "" , {
        path : "/",
        maxAge : 0
    })

    return NextResponse.json({message : "Log out has been successfull"})
}