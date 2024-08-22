import { User } from "@/interface/first"

const DashboardUserPage = async () => {

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/api/users")
        const data = await res.json()
        return data
    }

    const result = await fetchData()

    return (<>
        <div className="flex flex-wrap gap-2">
            {result.map((item : User , index : number) => (
                <div key={index} className="flex p-2 border-2 rounded-md border-slate-200 items-center">
                    {item.username}
                </div>
            ))}
        </div>
    </>);
}
 
export default DashboardUserPage;