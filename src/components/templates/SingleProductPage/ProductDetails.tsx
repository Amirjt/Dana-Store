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

const ProductDetails = () => {
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
            <BreadcrumbPage>گوشی موبایل Iphone 13 پرومکس</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="font-bold text-2xl">گوشی موبایل Iphone 13 پرومکس</h2>
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
      <span className="font-bold text-green-700 text-2xl">312,000 تومان</span>
      <p className="leading-7 text-muted-foreground">
        گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید
        و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super
        Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این
        نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش،
        حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در
        این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است
        که در آیفون جدید اپل به کار گرفته شده است.{" "}
      </p>
      <div className="flex items-center gap-2">
        <h5 className="ml-1 font-bold text-lg">رنگ ها :</h5>
        <span className="w-7 h-7 rounded-full bg-yellow-500"></span>
        <span className="w-7 h-7 rounded-full bg-blue-500"></span>
        <span className="w-7 h-7 rounded-full bg-red-500"></span>
      </div>
      <div className="flex items-center gap-2">
        <h5 className="ml-1 font-semibold">دسته بندی :</h5>
        <span>موبایل</span>
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
