import { ReactNode } from "react";


const AdminLayout = ({children , users , courses} : {children : ReactNode , users : ReactNode , courses : ReactNode}) => {
    return (<>
        <div className="flex flex-col items-center py-[10px] justify-center">
            {children}
            <div>
                <h1 className="flex flex-col">Users</h1>
                <div className="flex flex-col items-center">
                    {users}
                </div>
            </div>
            <div>
                <h1 className="flex flex-col">Courses</h1>
                <div className="flex flex-col items-center">
                    {courses}
                </div>
            </div>
        </div>
    </>);
}
 
export default AdminLayout;