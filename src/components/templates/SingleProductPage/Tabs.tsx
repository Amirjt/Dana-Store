import Comments from "@/components/modules/Comments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTabs = ({ product }: { product: any }) => {
  return (
    <div data-aos="fade-up" className="p-5">
      <Tabs dir="rtl" defaultValue="desc" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="desc">توضیحات کامل</TabsTrigger>
          <TabsTrigger value="info">مشخصات فنی</TabsTrigger>
          <TabsTrigger value="comments">نظرات (0)</TabsTrigger>
        </TabsList>
        <TabsContent
          className="border border-muted shadow-lg p-5 rounded-lg"
          value="desc"
        >
          <p className="leading-8 text-muted-foreground text-justify">
            {product.longdesc}
          </p>
        </TabsContent>
        <TabsContent
          className="border border-muted shadow-lg p-5 rounded-lg"
          value="info"
        >
          <h2 className="font-bold text-xl my-4">ویژگی های اصلی محصول</h2>
          <ul className="list-disc p-2 flex flex-col gap-3 border-b pb-5">
            <li>برند : {product.details.brand}</li>
            <li>مدل : {product.details.model}</li>
            <li>وزن : {product.details.weight} گرم</li>
            <li>ابعاد : {product.details.size}</li>
            <li>حافظه : {product.details.storage} گیگابایت</li>
            <li>رم : {product.details.ram} گیگابایت</li>
            <li>پردازنده : {product.details.cpu}</li>
            <li>پردازنده گرافیکی: {product.details.gpu}</li>
          </ul>
          <h2 className="font-bold text-xl my-4">
            ویژگی های منحصر به فرد محصول
          </h2>
          <ul className="list-disc p-2 flex flex-col gap-3 text-primary">
            {product.details.specialOptions.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent
          className="border border-muted shadow-lg p-5 rounded-lg"
          value="comments"
        >
          <Comments />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
