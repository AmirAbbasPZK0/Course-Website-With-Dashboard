import { Course } from "@/interface/first"
import Link from "next/link"

const AdminUserControl = async () => {

    const fetchCourseData = async () => {
        const res = await fetch("http://localhost:3000/api/courses")
        const data = await res.json()
        return data
    }

    const data = await fetchCourseData()

    return (<>
        <div className="flex flex-col items-center gap-2 py-4">
            <div>
                <Link href="/course-incr">Add Couse +</Link>
            </div>
            <div className="flex items-center justfy-center gap-2 flex-row">
            {data.map((item : Course) => (
                <div className="flex flex-col items-center border-2 rounded-md border-md border-slate-200 p-3 justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img src={item.image} width={200} height={200} alt="" />
                        <h3>{item.title}</h3>
                        <h3>{item.description}</h3>
                    </div>
                    <div className="flex flex-row">
                        
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    </>);
}
 
export default AdminUserControl;