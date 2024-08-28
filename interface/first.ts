export interface Course {
    title : string,
    description : string,
    price : number,
    _id : string,
    image : string,
    teacher : {
        username : string
        _id : string
    }
}

export interface User{
    username : string
    password : string
    _id : string
    firstname : string
    lastname : string
    email : string
    role : "USER" | "ADMIN"
}