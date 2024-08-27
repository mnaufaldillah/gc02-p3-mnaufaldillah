import FormLogin from "@/components/form/FormLogin"

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-3xl">Login User</h1>
            <FormLogin />
        </main>
    )
}