import CardWishlist from "@/components/card/CardWishlist"
import { BASE_URL } from "@/constants";
import { WishlistModelOutput } from "@/db/models/wishlist";
import { cookies } from "next/headers";

async function getAllWishlist() {
    const res = await fetch(BASE_URL + '/api/wishlists', {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()
        }
    });

    const data = await res.json();

    return data;
}

export default async function Wishlist() {
    const data = await getAllWishlist();

    // console.log(data, `<------- data wishlist`);
    
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <h1 className="text-center font-bold text-4xl">My Wishlist</h1>
            <div className="m-4 grid grid-cols-4">
            {data.map((item : WishlistModelOutput, index : number) => {
                return (
                    <CardWishlist productDetail={item.product} wishlistId={item._id} key={index}/>
                )
            })}
            </div>
        </main>
    )
}