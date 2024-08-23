import { ReactNode } from "react";


const AdminLayout = ({children , users , courses} : {children : ReactNode , users : ReactNode , courses : ReactNode}) => {
    return (<>
        <div className="flex flex-col items-center py-[10px] justify-center">
            {children}
            <div>
                <h1 className="flex text-[20px] flex-col">Users -&gt;</h1>
                <div className="flex flex-col items-center">
                    {users}
                </div>
            </div>
            <div>
                <h1 className="flex text-[20px] flex-col">Courses -&gt;</h1>
                <div className="flex flex-col items-center">
                    {courses}
                </div>
            </div>
        </div>
    </>);
}
 
export default AdminLayout;