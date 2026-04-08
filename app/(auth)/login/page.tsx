import {FormLogin} from "@/components/form/login-form";

export default function LoginPage() {
    return(
        <main className="container mx-auto flex min-h-svh items-center justify-center px-4 py-8">
            <section className="flex w-full justify-center">
                <FormLogin/>
            </section>
        </main>
    );
}
