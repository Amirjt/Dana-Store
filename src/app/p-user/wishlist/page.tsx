import SingleProduct from "@/components/modules/SingleProduct";

const WishListPage = () => {
  return (
    <div className="p-2">
      <h2 className="font-bold text-xl mb-3 mr-10 sm:mr-0">
        لیست علاقه مندی ها{" "}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
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
        <SingleProduct />
      </div>
    </div>
  );
};

export default WishListPage;
