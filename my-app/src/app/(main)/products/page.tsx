'use client'

import CardProduct from "@/components/card/CardProduct"
import Footer from "@/components/footer/Footer"
import FormSearch from "@/components/form/FormSearch"
import Navbar from "@/components/navbar/Navbar"
import { BASE_URL } from "@/constants"
import { ProductModel } from "@/db/models/product"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useDebounce } from "use-debounce"



export default function Product() {
    const [inputSearch, setInputSearch] = useState<string>("");
    const [page, setPage] = useState<number>(0);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [debouncedInputSearch] = useDebounce(inputSearch, 4000);
    // let data = await getAllProducts();
   
    async function getAllProducts(inputSearch? : string) {
        let address = '/api/products'

        if(inputSearch) {
            address += `?search=${inputSearch}`
        }
        const res = await fetch(BASE_URL + address, {
            cache: "no-store"
        });
    
        const data = await res.json();
        
        setProducts(data)
    }

    async function getMoreProducts(inputSearch? : string) {
        setPage(page + 1);

        let address = '/api/products';

        if(inputSearch) {
            address += `?search=${inputSearch}`;
            setPage(0)
        }

        if(address.includes("?")) {
            address += `&page=${page}`;
        } else {
            address += `?page=${page}`;
        }
        

        const res = await fetch(BASE_URL + address, {
            cache: "no-store"
        });

        const data = await res.json();

        setProducts(products.concat(data));
    }

    useEffect(() => {
        getAllProducts(inputSearch)
    }, [debouncedInputSearch])

    // console.log(data, `<---------- data produk`);
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <FormSearch inputSearch={inputSearch} setInputSearch={setInputSearch} />
            <div id="parentScrollDiv" className="m-4">
                <InfiniteScroll
                    dataLength={products.length}
                    next={getMoreProducts}
                    hasMore={true}
                    loader={<span className="loading loading-bars loading-lg"></span>}
                    scrollableTarget="arentScrollDiv"
                    endMessage={<p>That's all!</p>}
                >
                    {products.map((item : ProductModel, index : number) => {
                        return (
                            <div className="">
                                <CardProduct productDetail={item} key={index}/>
                            </div>
                        )
                    })} 
                </InfiniteScroll>
            </div>
        </main>
    )
}