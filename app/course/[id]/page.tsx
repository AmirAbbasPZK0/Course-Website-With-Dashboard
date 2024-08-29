const CourseDetails = async ({params} : {params : {id : string}}) => {

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/courses/${params.id}` , {cache : "no-cache"})
        const data = await res.json()
        return data
    }

    const data = await fetchData()

    console.log(data)

    return (<>
        <div className="flex items-center justify-evenly h-[88vh]">
            <div className="flex flex-col items-start ">
                <h1 className="text-[50px] gap-5">{data.title}</h1>
                <h1 className="text-[20px]">{data.description}</h1>
                <h1 className="text-[20px]">{data.teacher.username}</h1>
                <h1 className="text-slate-400">{data.price} تومان</h1>
            </div>
            <img className="w-[300px] h-[300px]" src={data.image} alt="" />
        </div>
    </>);
}
 
export default CourseDetails;