import { Metadata } from "next";
import React from "react";


export const metadata : Metadata = {
    title : "Sign Up",
    description : "Sign up page"
}

const SignUpLayout = ({children} : {children : React.ReactNode}) => {
    return (<>
        {children}
    </>);
}
 
export default SignUpLayout;