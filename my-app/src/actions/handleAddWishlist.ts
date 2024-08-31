"use server"

import { BASE_URL } from "@/constants";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleAddWishlist = async (productId: ObjectId) => {
    // console.log(productId)

    const res = await fetch(BASE_URL + "/api/wishlists", {
        method: "POST",
        body: JSON.stringify({productId}),
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