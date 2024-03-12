import Products from "@/components/templates/Products/Products";
import SideBar from "@/components/templates/Products/SideBar";

const ProductsPage = () => {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-5 sm:items-start p-3"
    >
      <div className="sm:w-2/12 shadow-xl border border-muted rounded-sm sm:sticky top-2">
        <SideBar />
      </div>
      <div className="sm:w-10/12 shadow-xl border border-muted rounded-sm p-4 flex flex-col gap-2">
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
