import { Course } from "@/interface/first"

const Home = async () => {

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:3000/api/courses")
    const data = await res.json()
    return data
  }

  const result = await fetchCourses()

  return (<>
    <div className="flex gap-2 justify-center items-center flex-col">
      <h1 className="text-[40px]">Courses</h1>
      <div className="flex flex-wrap gap-2">
          {result.map((item : Course , index : number) => (
            <div key={index} className="flex flex-col items-center bg-slate-700 rounded-md w-[200px] h-[300px] justify-between">
              <img src={item.image} className="w-[100%] h-[200px] rounded-t-md" alt="" />
              <div className="flex items-center flex-col py-3 justify-center">
                <h1 className="text-[20px]">{item.title}</h1>
                <h4>{item.price} تومان</h4>
                <p>{item?.teacher?.username}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  </>);
}
 
export default Home;