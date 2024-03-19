import {
  Headset,
  ShieldCheck,
  ShoppingBasket,
  Slash,
  Truck,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Box from "./Box";
import { IProduct } from "../AdminPanel/Comments/CommentsTable";

const ProductDetails: FC<IProduct> = ({ product }) => {
  return (
    <div className="flex flex-col gap-7">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">خانه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">محصولات</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{product?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="font-bold text-2xl">{product?.name}</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <MessageCircle color="#64748B" strokeWidth={1.1} />
          <span className="text-muted-foreground">تعداد نظرات : 24</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <Star strokeWidth={1.1} size={18} color="#E9BE12" fill="#E9BE12" />
          <Star strokeWidth={1.1} size={18} color="#E9BE12" fill="#E9BE12" />
          <Star strokeWidth={1.1} size={18} color="#E9BE12" fill="#E9BE12" />
          <Star strokeWidth={1.1} size={18} color="#E9BE12" fill="#E9BE12" />
          <Star strokeWidth={1.1} size={18} color="#E9BE12" fill="#E9BE12" />
        </div>
      </div>
      <span className="font-bold text-green-700 text-2xl">
        {product.price.toLocaleString()}
      </span>
      <p className="leading-7 text-muted-foreground">{product.shortdesc}</p>
      <div className="flex items-center gap-2">
        <h5 className="ml-1 font-bold text-lg">رنگ ها :</h5>
        {product.colors.map((color: string) => (
          <span
            style={{
              backgroundColor: color,
            }}
            key={color}
            className={`w-7 h-7 rounded-full`}
          ></span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <h5 className="ml-1 font-semibold">دسته بندی :</h5>
        <span>{product.cat}</span>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row items-center justify-between mt-5">
        <div className="flex items-center gap-3">
          <Box>
            <ShieldCheck strokeWidth={1.2} size={27} />
            <span className="text-xs sm:text-base">خرید مطمئن</span>
          </Box>
          <Box>
            <Truck strokeWidth={1.2} size={27} />
            <span className="text-xs sm:text-base">تحویل سریع</span>
          </Box>
          <Box>
            <Headset strokeWidth={1.2} size={27} />
            <span className="text-xs sm:text-base">پشتیبانی 24 ساعته</span>
          </Box>
        </div>
        <Button className="flex items-center gap-2 self-start">
          افزودن به سبد خرید
          <ShoppingBasket size={20} strokeWidth={1.1} />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
