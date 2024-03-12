import BestLaptops from "@/components/templates/Home/BestLaptops";
import Categories from "@/components/templates/Home/Categories";
import Hero from "@/components/templates/Home/Hero";
import LatestProducts from "@/components/templates/Home/LatestProducts";
import TopSalePhones from "@/components/templates/Home/TopSalePhones";
import WhyUs from "@/components/templates/Home/WhyUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
      <BestLaptops />
      <TopSalePhones />
      <Categories />
      <WhyUs />
    </>
  );
};

export default HomePage;
