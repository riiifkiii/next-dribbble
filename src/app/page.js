import Navigation from "@/components/Navigations";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export const metadata = {
  title:
    "Dribbble - Discover the World's Top Designer & Creative Professionals",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Marquee />
    </>
  );
}
