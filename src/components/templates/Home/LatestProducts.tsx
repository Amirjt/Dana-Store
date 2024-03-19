import SingleProduct from "@/components/modules/SingleProduct";
import Title from "@/components/modules/Title";
import { IProduct } from "../AdminPanel/Comments/CommentsTable";

const LatestProducts = ({ latestProducts }: { latestProducts: IProduct[] }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="600">
      <Title title="آخرین محصولات" />
      <div className="grid grid-cols-2 p-3 sm:grid-cols-5 gap-3">
        {latestProducts.map((product) => (
          <SingleProduct item={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
