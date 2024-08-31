import { getAllProductsFeatured } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // console.log(request.headers, `<------------ request`);
        
        const allProducts = await getAllProductsFeatured();

        return NextResponse.json(allProducts, {
            status: 200
        });
    } catch (error: any) {
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