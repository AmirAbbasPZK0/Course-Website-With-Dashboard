import CourseCard from "@/app/_components/CourseCard"
import { Course } from "@/interface/first"
import Link from "next/link"


const AdminUserControl = async () => {

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/api/courses" , {cache : "no-cache"})
        const data = await res.json()
        return data
    }

    const data = await fetchData()


    return (<>
        <div className="flex flex-col w-[100%] items-center gap-2 py-4">
            <div>
                <Link href="/course-incr">Add Course +</Link>
            </div>
            <div className="flex items-center justfy-center w-[100%] gap-2 flex-col">
            {data.map((item : Course) => (
               <CourseCard data={item} key={item._id}/>
            ))}
            </div>
            
        </div>
    </>);
}
 
export default AdminUserControl;