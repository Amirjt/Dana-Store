import SingleProduct from "@/components/modules/SingleProduct";
import Title from "@/components/modules/Title";

const TopSalePhones = () => {
  return (
    <div data-aos="fade-down">
      <Title title="پر فروش ترین گوشی ها" />
      <div className="grid grid-cols-2 p-3 sm:grid-cols-4 gap-3">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default TopSalePhones;
