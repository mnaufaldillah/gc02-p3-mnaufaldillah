'use client'

import { handleAddWishlist } from "@/actions/handleAddWishlist"
import { ObjectId } from "mongodb"

export default function ButtonAddWishlist({ productId } : {productId : ObjectId}) {
    const clickAddWishlist = () => {
        handleAddWishlist(productId)
    }
    
    return (
        <button onClick={clickAddWishlist} className="btn btn-outline btn-primary">Wishlist it!</button>
    )
}