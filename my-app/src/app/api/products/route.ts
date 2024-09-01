import { getAllProducts, getAllProductsByName } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { searchParams }: { searchParams: { search: string } }) {
    try {
        // console.log(request, `<------------ request`);
        // console.log(searchParams, `<------------ request`);

        const search = request.url.split("http://localhost:3000/api/products")[1];

        // console.log(search, `<-------- search Input`);

        const inputSearch = search.split("?search=")[1];

        const inputPage = parseInt(search.split("page=")[1], 10) || 0;

        let allProducts;

        if(inputSearch) {
            allProducts = await getAllProductsByName(inputSearch, inputPage)
        } else {
            allProducts = await getAllProducts(inputPage)
        }
        
        // const allProducts = await getAllProducts();

        return NextResponse.json(allProducts, {
            status: 200
        });
    } catch (error: any) {
        console.log(error, `<------------ eror`);
        
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