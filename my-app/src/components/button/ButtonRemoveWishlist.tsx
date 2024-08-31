'use client'

import { handleRemoveWishlist } from "@/actions/handleRemoveWishlist"
import { ObjectId } from "mongodb"

export default function ButtonRemoveWishlist({ wishlistId } : {wishlistId : ObjectId}) {
    const clickRemoveWishlist = () => {
        console.log(wishlistId, `<-------- wishlistId`);
        
        handleRemoveWishlist(wishlistId)
    }

    return (
        <button onClick={clickRemoveWishlist} className="btn btn-outline btn-error">Remove Wishlist</button>
    )
}