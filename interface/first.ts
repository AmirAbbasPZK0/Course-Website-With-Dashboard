export interface Course {
    title : string,
    description : string,
    price : number,
    _id : string,
    image : string,
    teacher : {
        username : string
    }
}