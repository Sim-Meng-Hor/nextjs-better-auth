"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {loginAdmin} from "@/lib/admin-auth";
import {redirect} from "next/navigation";

const formSchema = z.object({
    email: z
        .string(),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters.")
})

export function LoginForm() {
    const [rememberMe, setRememberMe] = React.useState(true)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        let isSuccess = false;
        try{
            const res = await loginAdmin(data)
            isSuccess = true;
            console.log("res after login", res)
        }catch(error){
            console.log("login form", error)
        }

        if(isSuccess){
            redirect("/dashboard")
        }

    }

    return (
        <Card className="w-full max-w-107.5 border-0 bg-transparent text-white shadow-none ring-0 pb-10">
            <CardHeader className="items-center px-0 pt-2 pb-8 text-center">
                <div className="mb-3 text-5xl font-black italic tracking-tight text-white">
                    Event Booking
                </div>
                <CardDescription className="max-w-sm text-center text-xs text-white/45">
                    Please enter your phone number to login
                </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-5">
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FieldGroup className="gap-4">
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-email" className="text-xs font-medium text-white/35">
                                        Email
                                    </FieldLabel>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/30">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                                                <path d="M4 7.5h16v9H4z" />
                                                <path d="m5 8 7 5 7-5" />
                                            </svg>
                                        </span>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder=""
                                            autoComplete="off"
                                            className="h-11 rounded-lg border-white/6 bg-white/7 pl-10 text-sm text-white placeholder:text-white/20 focus-visible:border-fuchsia-400/40 focus-visible:ring-2 focus-visible:ring-fuchsia-500/15"
                                        />
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError className="text-xs" errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-password" className="text-xs font-medium text-white/35">
                                        Password
                                    </FieldLabel>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/30">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                                                <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                                                <path d="M6 11h12v9H6z" />
                                            </svg>
                                        </span>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-password"
                                            type="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder=""
                                            autoComplete="off"
                                            className="h-11 rounded-lg border-white/6 bg-white/7 pl-10 pr-10 text-sm text-white placeholder:text-white/20 focus-visible:border-fuchsia-400/40 focus-visible:ring-2 focus-visible:ring-fuchsia-500/15"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/30">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                                                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                                                <circle cx="12" cy="12" r="2.5" />
                                            </svg>
                                        </span>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError className="text-xs" errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>

                    <div className="flex items-center justify-between gap-4 text-xs">
                        <label className="flex cursor-pointer items-center gap-2 text-white/55">
                            <input
                                type="checkbox"
                                // checked={rememberMe}
                                onChange={() => setRememberMe((value) => !value)}
                                className="size-3.5 rounded-sm border border-white/15 bg-white/5 accent-fuchsia-500"
                            />
                            <span>Remember me</span>
                        </label>
                        <button type="button" className="text-white/35 transition hover:text-fuchsia-400">
                            Forgot Password?
                        </button>
                    </div>

                    <Button
                        type="submit"
                        form="form-rhf-demo"
                        className="h-11 w-full rounded-lg bg-white/8 text-sm font-medium text-white/45 hover:bg-white/10"
                    >
                        Log in
                    </Button>

                    <p className="text-center text-xs text-white/28">
                        New to Event Booking?{" "}
                        <button type="button" className="font-medium text-fuchsia-400 transition hover:text-fuchsia-300">
                            Create account
                        </button>
                    </p>

                    <div className="relative text-center text-[11px] text-white/18">
                        <span className="relative z-10 bg-transparent px-3">Or continue with</span>
                        <div className="absolute inset-x-0 top-1/2 z-0 h-px -translate-y-1/2 bg-white/10" />
                    </div>

                </form>
            </CardContent>
        </Card>
    )
}
