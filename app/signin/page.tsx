import { cookies } from "next/headers";
import SignInForm from "./SignInForm";
import { redirect } from "next/navigation";

const SignIn = () => {

    const cookie = cookies().get("token")

    if(cookie){
        redirect("/dashboard")
    }

    return (<>
        <SignInForm/>
    </>);
}
 
export default SignIn;