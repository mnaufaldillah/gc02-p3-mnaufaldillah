import { addWishlist, getAllWishlist } from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const Wishlist = z.object({
    productId: z.string()
});

interface WishlistAdd {
    productId: string
}

export async function GET(request: NextRequest) {
    try {
        const currentUserId : any = request.headers.get('x-user-id');

        const allWishlists = await getAllWishlist(currentUserId);

        return NextResponse.json(allWishlists, {
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

export async function POST(request: NextRequest) {
    try {
        // console.log(request.headers, `<---------- request`);
        // console.log(headerList, `<---------- request`);
        
        const body : WishlistAdd = await request.json();

        const parsedData = Wishlist.safeParse(body);

        if(!parsedData.success) {
            throw parsedData.error
        };

        const currentUserId : any = request.headers.get('x-user-id');

        // console.log(currentUserId, `<---------- userId`);

        const newWishlist = await addWishlist(currentUserId, body.productId);

        return NextResponse.json(newWishlist, {
            status: 201
        });
    } catch (error) {
        // console.log(error, `<--------- error`);
        if(error instanceof z.ZodError) {
            // console.log(error.issues);
            
            const errorPath = error.issues[0].path[0];
            const errorMessage = error.issues[0].message;

            return NextResponse.json(
                {
                    message: `${errorPath} ${errorMessage}`
                }, 
                {
                    status: 400
                }
            );
        }

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

export async function DELETE(request: NextRequest) {
    try {
        
    } catch (error) {
        
    }
}