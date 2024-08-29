import Footer from "@/components/footer/Footer"
import FormSearch from "@/components/form/FormSearch"
import Navbar from "@/components/navbar/Navbar"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}