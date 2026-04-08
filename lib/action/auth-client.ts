
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";

export async function signInSocial (provider: "google" | "github" ){
        const { url } = await auth.api.signInSocial({
            body: {
                provider,
                callbackURL: "/dashboard",
            },
        });

        if (url) {
            redirect(url);
        }


}
