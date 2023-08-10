import { HomeFeatureList } from "@/components/HomeFeatureList";
import { HomeHero } from "@/components/HomeHero";
import { HomeTestimonials } from "@/components/HomeTestimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-28 gap-y-16">
      {/* <div className="flex items-center justify-between"> */}
      <HomeHero />
      <HomeFeatureList />
      <HomeTestimonials />
      {/* <HomeFeatureList /> */}
    </main>
  );
}
