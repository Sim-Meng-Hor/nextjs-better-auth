import {LoginForm} from "@/components/form/login-form";

export default function LoginPage() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#141414] px-4 py-10">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.34),transparent_24%),linear-gradient(180deg,#18121d_0%,#141414_32%,#141414_100%)]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(217,70,239,0.16),transparent_16%),radial-gradient(circle_at_31%_5%,rgba(255,255,255,0.7),transparent_0.45%),radial-gradient(circle_at_35%_9%,rgba(255,255,255,0.75),transparent_0.42%),radial-gradient(circle_at_41%_6%,rgba(255,255,255,0.7),transparent_0.45%),radial-gradient(circle_at_45%_11%,rgba(255,255,255,0.75),transparent_0.42%),radial-gradient(circle_at_49%_4%,rgba(255,255,255,0.75),transparent_0.42%),radial-gradient(circle_at_53%_9%,rgba(255,255,255,0.72),transparent_0.45%),radial-gradient(circle_at_57%_5%,rgba(255,255,255,0.78),transparent_0.42%),radial-gradient(circle_at_61%_10%,rgba(255,255,255,0.75),transparent_0.42%),radial-gradient(circle_at_65%_7%,rgba(255,255,255,0.72),transparent_0.45%),radial-gradient(circle_at_42%_15%,rgba(255,255,255,0.62),transparent_0.38%),radial-gradient(circle_at_48%_18%,rgba(255,255,255,0.62),transparent_0.38%),radial-gradient(circle_at_55%_16%,rgba(255,255,255,0.62),transparent_0.38%),radial-gradient(circle_at_60%_19%,rgba(255,255,255,0.58),transparent_0.38%)] opacity-75"
            />
            <div className="relative z-10 w-full max-w-md">
                <LoginForm/>
            </div>
        </main>
    )
}
