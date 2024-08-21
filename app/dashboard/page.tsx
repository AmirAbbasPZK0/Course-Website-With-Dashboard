import { verifyToken } from "@/configs/auth"
import { cookies } from "next/headers"
import { Course } from "@/interface/first"
import { DataBaseConnection } from "@/utils/db"
import userModel from "@/models/user"


const DashboardPage = async () => {
    
    DataBaseConnection()

    const token = cookies().get("token")?.value

    const tokenPayloadData : any = verifyToken(token!)

    const user = await userModel.findOne({
        email : tokenPayloadData?.email
    },
        "firstname lastname"
    )

    
    return (<>
       {tokenPayloadData ? (
            <div className="flex items-center flex-col gap-2 h-[100vh] justify-center">
                <p>firstname : {user.firstname} | lastname : {user.lastname}</p>
                <h1 className="text-[70px]">{user.firstname}'s Dashboard</h1>
                <div className="flex items-center flex-col justify-center">
                    <h3>Your Courses</h3>
                    <h3>Comming Soon ....</h3>
                </div>
            </div>
       ) : (
        <div>
            Your Token is Not Valid
        </div>
       )}
    </>);
}
 
export default DashboardPage;