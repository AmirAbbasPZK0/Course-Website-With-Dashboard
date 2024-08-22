import UpdateButton from "@/app/_components/UpdateButton"
import { User } from "@/interface/first"

const AdminUserControl = async () => {

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:3000/api/users")
        const data = await res.json()
        return data
    }

    const data = await fetchUserData()

    return (<>
        <div className="flex items-center py-4">
            {data.map((item : User) => (
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h3>{item.username}</h3>
                        <h3>{item.email}</h3>
                    </div>
                    <div className="flex flex-row">
                        <UpdateButton id={item._id}>Edit</UpdateButton>
                    </div>
                </div>
            ))}
        </div>
    </>);
}
 
export default AdminUserControl;