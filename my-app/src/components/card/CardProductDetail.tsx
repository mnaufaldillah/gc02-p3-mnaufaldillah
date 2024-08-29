'use client'

import ButtonAddWishlist from "../button/ButtonAddWishlist"

export default function CardProdctDetail() {
    return (
        <div className="m-2 card bg-base-100 grid grid-cols-2">
            <figure className="col-span-1">
                <img
                    src="https://johnlewis.scene7.com/is/image/JohnLewis/112118377?wid=640&hei=853"
                    style={{ 
                        height: 853,
                        width: 640,
                        objectFit: "fill"
                    }}
                    alt="Laptop"  
                />
            </figure>
            <div className="card-body col-span-1">
                <h2 className="card-title">HP Pavilion Aero 13</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque autem, cumque eos quo soluta deleniti doloribus eligendi officiis. Minus cum ab itaque odio quibusdam architecto in aliquid ipsa ducimus officia!</p>
                <h4 className="text-xl">Rp. 14.999.999</h4>
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Wishlist It!</button>
                    <ButtonAddWishlist />
                </div>
            </div>
        </div>
    )
}