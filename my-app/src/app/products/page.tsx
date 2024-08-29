import CardProduct from "@/components/card/CardProduct"
import Footer from "@/components/footer/Footer"
import FormSearch from "@/components/form/FormSearch"
import Navbar from "@/components/navbar/Navbar"

export default function Product() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Navbar />
            <div>
                <FormSearch />
            </div>
            <div className="m-4 grid grid-cols-4">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <Footer />
        </main>
    )
}