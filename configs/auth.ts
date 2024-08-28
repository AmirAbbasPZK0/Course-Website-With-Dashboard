import { hash , compare} from 'bcryptjs'
import { sign , verify } from "jsonwebtoken";

export const hashPassword = async (password : string) => {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}

interface Data {
    email : string
}

export const generateToken = (data : Data) => {
    const token = sign({...data} , process.env.PRIVATE_KEY! , {
        expiresIn : "24h",
    })
    return token
}

export const verifyPass = async (password : string , hashedPassword : string) => {
    const isValid = await compare(password , hashedPassword)
    return isValid
}

export const verifyToken = (token : string) => {
    try{
        const isTokenValid = verify(token, process.env.PRIVATE_KEY!)
        return isTokenValid
    }catch(err){
        console.log(err)
    }
}