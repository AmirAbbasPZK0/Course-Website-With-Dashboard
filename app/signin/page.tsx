import { cookies, type UnsafeUnwrappedCookies } from "next/headers";
import SignInForm from "./SignInForm";
import { redirect } from "next/navigation";

const SignIn = () => {

    const cookie = (cookies() as unknown as UnsafeUnwrappedCookies).get("token")

    if(cookie){
        redirect("/dashboard")
    }

    return (<>
        <SignInForm/>
    </>);
}
 
export default SignIn;