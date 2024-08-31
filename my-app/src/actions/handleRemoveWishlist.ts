"use server"

import { BASE_URL } from "@/constants";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleRemoveWishlist = async (wishlistId: ObjectId) => {
    console.log(wishlistId, `<--------- wishlist ID`)

    const res = await fetch(BASE_URL + `/api/wishlists/${wishlistId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Cookie: cookies().toString()
        }
    });

    const result = (await res.json());

    if(!res.ok) {
        // console.log(result, `<----------- result`);
        
        return redirect('/products?error=' + result.message)
    };

    return redirect('/wishlist')
}