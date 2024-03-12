import SingleProduct from "@/components/modules/SingleProduct";

const ProductsPage = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 cursor-pointer text-sm mb-2">
        <span className="font-semibold">مرتب سازی بر اساس :</span>
        <span>ارزان ترین </span>
        <span>ارزان ترین </span>
        <span>ارزان ترین </span>
        <span>ارزان ترین </span>
        <span>ارزان ترین </span>
        <span>ارزان ترین </span>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-3">
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
        <SingleProduct />
        <SingleProduct />
      </div>
    </>
  );
};

export default ProductsPage;
