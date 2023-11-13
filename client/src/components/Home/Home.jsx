import HeroSection from "../HeroSection/HeroSection";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import OurPride from "../OurPride/OurPride";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div
      style={{
        background: "url(/images/hero-img.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroSection />
      <WhoAreWe />
      <OurPride />
      <Contact />
    </div>
  );
}
