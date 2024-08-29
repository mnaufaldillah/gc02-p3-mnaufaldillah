import CardWishlist from "@/components/card/CardWishlist"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"

export default function Wishlist() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Navbar />
            <h1 className="text-center font-bold text-4xl">My Wishlist</h1>
            <div className="m-4 grid grid-cols-4">
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
            </div>
            <Footer />
        </main>
    )
}