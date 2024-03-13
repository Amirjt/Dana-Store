import Gallery from "@/components/templates/SingleProductPage/Gallery";
import ProductDetails from "@/components/templates/SingleProductPage/ProductDetails";
import ProductTabs from "@/components/templates/SingleProductPage/Tabs";

const SingleProductPage = () => {
  return (
    <div className="mt-5 flex flex-col sm:gap-20">
      <div className="flex flex-col sm:flex-row p-5 gap-12">
        <div data-aos="fade-left" className="sm:w-4/12">
          <Gallery />
        </div>
        <div data-aos="fade-down" className="sm:w-8/12">
          <ProductDetails />
        </div>
      </div>
      <ProductTabs />
    </div>
  );
};

export default SingleProductPage;
