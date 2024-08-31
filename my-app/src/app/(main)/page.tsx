import HeroBanner from "@/components/hero/HeroBanner";
import HeroInfo from "@/components/hero/HeroInfo";
import CardFeatured from "@/components/card/CardFeatured";
import { BASE_URL } from "@/constants";
import { ProductModel } from "@/db/models/product";

async function getAllProductsFeatured() {
  const res = await fetch(BASE_URL + '/api/products/featured', {
      cache: "no-store"
  });

  const data = await res.json();


  return data
}

export default async function Home() {
  const data = await getAllProductsFeatured()

  // console.log(data, `<---------- data produk`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBanner />
      <HeroInfo />
      <h1 className="m-4 text-4xl font-bold">The Best of 2024 so Far</h1>
      <div className="m-4 grid grid-cols-5">
        {data.map((item : ProductModel, index : number) => {
          return (
            <CardFeatured productDetail={item} key={index}/>
          )
        })}
      </div>
    </main>
  );
}
