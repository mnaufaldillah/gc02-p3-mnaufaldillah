'use client'

import CardProduct from "@/components/card/CardProduct"
import Footer from "@/components/footer/Footer"
import FormSearch from "@/components/form/FormSearch"
import Navbar from "@/components/navbar/Navbar"
import { BASE_URL } from "@/constants"
import { ProductModel } from "@/db/models/product"
import InfiniteScroll from "react-infinite-scroll-component"

async function getAllProducts() {
    const res = await fetch(BASE_URL + '/api/products', {
        cache: "no-store"
    });

    const data = await res.json();


    return data;
}

export default async function Product({ searchParams }: { searchParams: { inputSearch: string } }) {
    const data = await getAllProducts()

    // console.log(data, `<---------- data produk`);
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <div>
                <FormSearch searchParams={searchParams}/>
            </div>
            <div className="m-4 grid grid-cols-4">
                {data.map((item : ProductModel, index : number) => {
                    return (
                        <CardProduct productDetail={item} key={index}/>
                    )
                })} 
            </div>
        </main>
    )
}