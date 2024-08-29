import HeroBanner from "@/components/hero/HeroBanner";
import HeroInfo from "@/components/hero/HeroInfo";
import CardFeatured from "@/components/card/CardFeatured";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBanner />
      <HeroInfo />
      <h1 className="m-4 text-4xl font-bold">The Best of 2024 so Far</h1>
      <div className="m-4 grid grid-cols-5">
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
        <CardFeatured />
      </div>
    </main>
  );
}
