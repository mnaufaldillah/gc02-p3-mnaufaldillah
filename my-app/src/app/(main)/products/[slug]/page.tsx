import CardProdctDetail from "@/components/card/CardProductDetail"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"

export default function ProductDetail() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <div className="m-4 grid grid-cols-1">
                <CardProdctDetail />
            </div>
        </main>
    )
}