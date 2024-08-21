import mongoose from "mongoose";

interface User{
    firstname : string
    lastname : string
    email : string
    username : string
    password : string
    role : "USER" | "ADMIN"
}


const userSchema = new mongoose.Schema<User>({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
})


const userModel = mongoose.models.User || mongoose.model("User" , userSchema)
export default userModel