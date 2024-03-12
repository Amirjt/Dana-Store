import SingleProduct from "@/components/modules/SingleProduct";
import Title from "@/components/modules/Title";

const LatestProducts = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="600">
      <Title title="آخرین محصولات" />
      <div className="grid grid-cols-2 p-3 sm:grid-cols-5 gap-3">
        <SingleProduct />
        <SingleProduct />
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

export default LatestProducts;
