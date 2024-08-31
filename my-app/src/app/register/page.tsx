import FormRegister from "@/components/form/FormRegister";

export default function Register({ searchParams }: { searchParams: { error: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-3xl">Register User</h1>
            <FormRegister searchParams={searchParams}/>
        </main>
    )
}