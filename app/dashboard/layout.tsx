import { Metadata } from "next";
import React from "react";

export const metadata : Metadata = {
    title : "Dashboard",
    description : "Dahboard"
}


const DashboardPage = ({children} : {children : React.ReactNode}) => {
    return (<>
        {children}
    </>);
}
 
export default DashboardPage;