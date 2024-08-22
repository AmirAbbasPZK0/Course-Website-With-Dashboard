"use client"

import { useRouter } from "next/navigation";


const Logout = () => {

    const router = useRouter()

    return (<>
        <button onClick={()=>{
            fetch("http://localhost:3000/api/auth/signout" , {method :"POST"})
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                router.push('/')
                router.refresh()
            })
        }}>Log out</button>
    </>);
}
 
export default Logout;