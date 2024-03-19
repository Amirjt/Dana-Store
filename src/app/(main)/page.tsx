import BestLaptops from "@/components/templates/Home/BestLaptops";
import Categories from "@/components/templates/Home/Categories";
import Hero from "@/components/templates/Home/Hero";
import LatestProducts from "@/components/templates/Home/LatestProducts";
import TopSalePhones from "@/components/templates/Home/TopSalePhones";
import WhyUs from "@/components/templates/Home/WhyUs";
import connectToDb from "@/lib/db";
import ProductModel from "@/models/Product";

const HomePage = async () => {
  connectToDb();
  const latestProducts = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(10)
    .lean();
  return (
    <>
      <Hero />
      <LatestProducts
        latestProducts={JSON.parse(JSON.stringify(latestProducts))}
      />
      {/* <BestLaptops />
      <TopSalePhones /> */}
      <Categories />
      <WhyUs />
    </>
  );
};

export default HomePage;
