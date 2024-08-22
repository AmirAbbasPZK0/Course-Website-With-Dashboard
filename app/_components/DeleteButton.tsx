'use client'

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props{
    children : ReactNode,
    id : string
    
}

const DeleteButton = ({children , id} : Props) => {

    const router = useRouter()

    return (<>
        <button onClick={()=>{
            fetch(`http://localhost:3000/api/users/${id}` , {method : "DELETE"})
            .then(res => {
                return res.json()
            })
            .then(data => {
                router.refresh()
            })
        }} className="p-2 m-2 bg-red-500 rounded-sm">{children}</button>
    </>);

}
 
export default DeleteButton;