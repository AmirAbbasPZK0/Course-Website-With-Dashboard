import { Metadata } from "next";
import React from "react";



export const metadata : Metadata = {
    title : "Dashboard",
    description : "Dashboard"
}


const DashboardPage = async ({children , users} : {children : React.ReactNode , users : React.ReactNode}) => {
    return (<>
        {children}
        {users}
    </>);
}
 
export default DashboardPage;