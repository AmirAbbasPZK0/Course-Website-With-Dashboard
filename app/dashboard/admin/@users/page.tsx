
import DeleteButton from "@/app/_components/DeleteButton"
import UpdateButton from "@/app/_components/UpdateButton"
import { User } from "@/interface/first"
import Link from "next/link"

const AdminUserControl = async () => {

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/api/users" , {cache : "no-cache"})
        const data = await res.json()
        return data
    }

    const data = await fetchData()

    return (<>
        <div className="flex flex-col items-center gap-2 py-4">
            <div>
                <Link href="/user-incr">Add User +</Link>
            </div>
            <div className="flex items-center justfy-center gap-2 flex-row">
            {data.map((item : User) => (
                <div key={item?._id} className="flex flex-col items-center border-2 rounded-md border-md border-slate-200 p-3 justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h3>{item?.username}</h3>
                        <h3>{item?.email}</h3>
                        <span className={`${item.role === "USER" ? "bg-green-600" : "bg-blue-600"} p-4 rounded-md `}>{item?.role}</span>
                    </div>
                    {item?.role === "USER" && (
                        <div className="flex flex-row">
                            <UpdateButton id={item?._id}>Edit</UpdateButton>
                            <DeleteButton id={item?._id}>Delete</DeleteButton>
                        </div>
                    )}
                </div>
            ))}
            </div>
            
        </div>
    </>);
}
 
export default AdminUserControl;