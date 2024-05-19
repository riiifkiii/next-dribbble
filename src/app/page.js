import Navigation from "@/components/Navigations";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Explore from "@/components/Explore";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

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
      <Explore />
      <Offer />
      <Footer />
    </>
  );
}
