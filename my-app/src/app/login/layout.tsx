import ServerPublic from "@/components/server/ServerPublic"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ServerPublic>
            {children}
        </ServerPublic>
    )
}