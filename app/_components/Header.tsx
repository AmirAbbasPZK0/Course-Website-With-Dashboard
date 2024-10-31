import Link from "next/link";
import Logout from "./Logout";
import { cookies } from "next/headers";


const Header = async () => {

    const token = (await cookies()).has("token")

    console.log(token)

    return (<>
        <nav className="flex items-center justify-center h-[70px] top-0">
            <div className="flex items-center w-[100%] fixed bg-blue-500 z-999 max-w-[1500px] justify-around h-[70px]">
                <Link href={"/"}>LOGO</Link>
                {!token ? (
                    <ul className="flex items-center justify-center list-none text-center">
                        <li className="px-4">
                            <Link href={"/signin"}>Log in</Link>
                                    </li>
                        <li className="px-4">
                            <Link href={"/signup"}>Sign up</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex items-center justify-center list-none text-center">
                        <li className="px-2">
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li className="px-2">
                            <Logout/>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    </>);
}
 
export default Header;