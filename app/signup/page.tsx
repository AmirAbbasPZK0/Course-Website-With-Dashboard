import SignUpForm from "./SignUpForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const cookie = cookies().get("token")

    if(cookie){
        redirect("/dashboard")
    }

    return (<>
        <SignUpForm/>
    </>);
}
 
export default SignUpPage;