import mongoose from "mongoose"

export async function DataBaseConnection(){
    try{
        if(mongoose.connections[0].readyState){
            console.log("DataBase Had Been Connected Before")
            return false
        }
        await mongoose.connect('mongodb://127.0.0.1:27017/glory-of-rome')
        console.log("DataBase Connection Was Successfull")
    }catch(err){
        console.log(err)
    }
}