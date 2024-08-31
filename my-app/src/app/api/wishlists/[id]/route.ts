import { removeWishlist } from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const removedWishlist = await removeWishlist(params.id);

        return NextResponse.json(removedWishlist, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json(
            {
                message: `Internal Servel Error`
            }, 
            {
                status: 500
            }
        );
    }
}