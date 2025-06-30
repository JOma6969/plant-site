import MainHero from "./MainHero";
import Navbar from "./Navbar";
import TrendingPlants from "./TrendingPlants";

const Hero = () => {
  return (
    <div className="relative text-white pb-[54px]">
      {/* <img src="/imgs/hero-bg.webp" className="object-cover absolute top-0 -z-1 h-full w-full" loading="lazy" alt="" /> */}
      <Navbar />
      <MainHero />
      <TrendingPlants />
    </div>
  );
};

export default Hero;
