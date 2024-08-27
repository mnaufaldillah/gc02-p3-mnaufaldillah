import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Menu</h6>
                <Link href="/products" className="link link-hover">Product List</Link>
                <Link href="/wishlist" className="link link-hover">Wishlist</Link>
                <Link href="/login" className="link link-hover">Login</Link>
                <Link href="/register" className="link link-hover">Register</Link>
            </nav>
        </footer>
    )
}