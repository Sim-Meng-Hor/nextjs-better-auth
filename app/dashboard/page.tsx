import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {getAdminData} from "@/lib/admin-auth";

export default async function DashboardPage(){
    const cookieStore = await cookies()
    const authToken = cookieStore.get("better-auth.session_data")
    if (!authToken){
        redirect("/login")
    }

    const token = authToken?.value
    const response = getAdminData(token)

    // if (response.role !== "admin"){
    //     redirect("/")
    // }
    return (
        <>
            {/*<h1>Welcome{response.name}</h1>*/}
            {/*<h2>Role : {response.role}</h2>*/}
        </>
    );
}