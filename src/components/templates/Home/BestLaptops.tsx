import SingleProduct from "@/components/modules/SingleProduct";
import Title from "@/components/modules/Title";

const BestLaptops = () => {
  return (
    <div data-aos="fade-up">
      <Title title="بهترین لپ تاپ ها" />
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

export default BestLaptops;
