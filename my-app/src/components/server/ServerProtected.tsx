import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface ProtectedProps {
    children: React.ReactNode
}

export default function ServerProtected({ children }: ProtectedProps) {
    const cookieStore = cookies();

    const token = cookieStore.get("Authorization");

    if(!token) {
        redirect(`/login`);
    }

    return (
        <>
            {children}
        </>
    )
}