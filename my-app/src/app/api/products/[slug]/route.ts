import { getProductBySlug } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string}}) {
    try {
        const foundProduct = await getProductBySlug(params.slug);

        if(!foundProduct) {
            throw { name: `ProductNotFound`}
        }

        return NextResponse.json(foundProduct, {
            status: 200
        });
    } catch (error: any) {
        console.log(error, `<-------- eror`);
        
        if (error.name === `ProductNotFound`) {
            return NextResponse.json(
                {
                    message: `Email must be unique`
                },
                {
                    status: 400
                }
            )
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