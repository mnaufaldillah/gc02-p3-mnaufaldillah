import ServerProtected from "@/components/server/ServerProtected"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ServerProtected>
            {children}
        </ServerProtected>
    )
}