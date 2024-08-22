import { Metadata } from "next";
import React from "react";

export const metadata : Metadata = {
    title : "Dashboard",
    description : "Dashboard"
}


const DashboardPage = async ({children } : {children : React.ReactNode}) => {
    return (<>
        {children}
    </>);
}
 
export default DashboardPage;