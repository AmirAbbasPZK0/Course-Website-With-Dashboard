import SignUpForm from "./SignUpForm";
import { cookies, type UnsafeUnwrappedCookies } from "next/headers";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const cookie = (cookies() as unknown as UnsafeUnwrappedCookies).get("token")

    if(cookie){
        redirect("/dashboard")
    }

    return (<>
        <SignUpForm/>
    </>);
}
 
export default SignUpPage;