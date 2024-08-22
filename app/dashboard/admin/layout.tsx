import { Metadata } from "next";
import { ReactNode } from "react";


const AdminLayout = ({children , users} : {children : ReactNode , users : ReactNode}) => {
    return (<>
        <div className="flex flex-col items-center h-[50vh] justify-center">
            {children}
            <div>
                <h1 className="flex flex-col">Users</h1>
                <div className="flex flex-col items-center">
                    {users}
                </div>
            </div>
        </div>
    </>);
}
 
export default AdminLayout;