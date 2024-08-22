'use client'

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props{
    children : ReactNode,
    id : string
    
}

const UpdateButton = ({children , id} : Props) => {
 
    const router = useRouter()
 
    return (<>
        <button onClick={()=>{
            router.push(`/user-edit/${id}`)
        }} className="p-2 m-2 rounded-sm">{children}</button>
    </>);
}
 
export default UpdateButton;