import mongoose from "mongoose";
const user = require('./user')

interface Course {
    title : string
    description : string
    price : number
    image : string,
    teacher ?: mongoose.Types.ObjectId
}

const courseSchema = new mongoose.Schema<Course>({
    title : {
        type : String,
        required : true,
        minlength : 6
    },
    description : {
        type : String,
        required : true,
        minlength : 10
    },
    price : {
        type : Number,
        min : 200_000,
        required : true
    },
    teacher : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    image : {
        data : Buffer,
        type : String,
    }
},
{
    timestamps : true
}
)

const courseModel = mongoose.models.Course || mongoose.model("Course" , courseSchema)
export default courseModel