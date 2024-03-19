import Gallery from "@/components/templates/SingleProductPage/Gallery";
import ProductDetails from "@/components/templates/SingleProductPage/ProductDetails";
import ProductTabs from "@/components/templates/SingleProductPage/Tabs";
import connectToDb from "@/lib/db";
import ProductModel from "@/models/Product";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  connectToDb();
  const product = await ProductModel.findById(id).lean();

  return (
    <div className="mt-5 flex flex-col sm:gap-20">
      <div className="flex flex-col sm:flex-row p-5 gap-12">
        <div data-aos="fade-left" className="sm:w-4/12">
          <Gallery images={JSON.parse(JSON.stringify(product.images))} />
        </div>
        <div data-aos="fade-down" className="sm:w-8/12">
          <ProductDetails product={JSON.parse(JSON.stringify(product))} />
        </div>
      </div>
      <ProductTabs product={JSON.parse(JSON.stringify(product))} />
    </div>
  );
};

export default SingleProductPage;
