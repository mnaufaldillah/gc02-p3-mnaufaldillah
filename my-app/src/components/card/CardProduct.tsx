import Link from "next/link";

export default function CardProduct() {
    return (
        <div className="m-2 card bg-base-100">
            <figure>
                <img
                    src="https://johnlewis.scene7.com/is/image/JohnLewis/112118371alt1?wid=234&hei=312"
                    style={{ 
                        height: 312,
                        width: 234,
                        objectFit: "cover"
                    }}
                    alt="Laptop" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">HP Pavilion Aero 13</h2>
                <p>HP Pavilion Aero 13 16GB RAM 512GB</p>
                <h4 className="text-xl">Rp. 14.999.999</h4>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-primary">Wishlist it!</button>
                </div>
            </div>
        </div>
    )
}