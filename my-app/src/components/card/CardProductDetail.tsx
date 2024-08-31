'use client'

import { ProductModel } from "@/db/models/product"
import ButtonAddWishlist from "../button/ButtonAddWishlist"

export default function CardProdctDetail({ productDetail} : { productDetail: ProductModel}) {

    function formatCurrency(inputNumber: number) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
            inputNumber
        )
    }

    return (
        <div className="m-2 card bg-base-100 grid grid-cols-2">
            <figure className="col-span-1">
                <img
                    src={productDetail.images[0]}
                    style={{ 
                        height: 853,
                        width: 640,
                        objectFit: "fill"
                    }}
                    alt="Laptop"  
                />
            </figure>
            <div className="card-body col-span-1">
                <h2 className="card-title">{productDetail.name}</h2>
                <p>{productDetail.description}</p>
                <h4 className="text-xl">{formatCurrency(productDetail.price)}</h4>
                {productDetail.tags.map((item, index) => {
                    return (
                        <div className="badge badge-outline" key={index}>{item}</div>
                    )
                })}
                <div className="card-actions justify-start">
                    <ButtonAddWishlist productId={productDetail._id}/>
                </div>
            </div>
        </div>
    )
}