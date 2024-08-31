import CardProdctDetail from "@/components/card/CardProductDetail"
import { BASE_URL } from "@/constants";

async function getProductBySlug(slug: string) {
    const res = await fetch(BASE_URL + `/api/products/${slug}`, {
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();

    return data;
}

export default async function ProductDetail({ params } : {params : { slug: string} }) {
    // console.log(params);

    const data = await getProductBySlug(params.slug);

    // console.log(data, `<------------ data slug`);
    
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <div className="m-4 grid grid-cols-1">
                <CardProdctDetail productDetail={data}/>
            </div>
        </main>
    )
}