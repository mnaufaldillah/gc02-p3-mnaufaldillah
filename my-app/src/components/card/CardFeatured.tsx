import { ProductModel } from "@/db/models/product";
import Link from "next/link";

export default function CardFeatured({ productDetail} : { productDetail: ProductModel}) {
    function formatCurrency(inputNumber: number) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
            inputNumber
        )
    }

    return (
        <div className="m-2 card bg-base-100">
            <figure>
                <img
                    src={productDetail.thumbnail}
                    style={{ 
                        height: 312,
                        width: 234,
                        objectFit: "cover"
                    }}
                    alt="Laptop" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productDetail.name}</h2>
                <p>{productDetail.excerpt}</p>
                <h4 className="text-xl">{formatCurrency(productDetail.price)}</h4>
                <div className="card-actions justify-start">
                    <Link href={`/products/${productDetail.slug}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    )
}