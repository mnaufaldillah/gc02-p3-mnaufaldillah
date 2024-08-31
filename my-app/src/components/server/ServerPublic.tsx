import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface ProtectedProps {
    children: React.ReactNode
}

export default function ServerPublic({ children }: ProtectedProps) {
    const cookieStore = cookies();

    const token = cookieStore.get("Authorization");

    if(token) {
        redirect(`/`);
    }

    return (
        <>
            {children}
        </>
    )
}