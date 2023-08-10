import { HomeFeatureList } from "@/components/HomeFeatureList";
import { HomeHero } from "@/components/HomeHero";
import { HomeTestimonials } from "@/components/HomeTestimonials";

export default function Home() {
  return (
    <main>
      <HomeHero />

      <HomeFeatureList />
    </main>
  );
}
