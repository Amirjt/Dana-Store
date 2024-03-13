import Comments from "@/components/modules/Comments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTabs = () => {
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
            گوشی‌های هوشمند خانواده آیفون 13 در قالب چهار گوشی هوشمند آیفون 13
            پرو مکس، آیفون 13 پرو، آیفون 13‌ و آیفون 13 مینی معرفی شدند.
            پرچمداران جدید اپل این بار قدرتمند‌تر از همیشه پا به عرصه رقابت
            گذاشته اند تا در رقابتی بسیار جذاب، عملکردی بهتر به نسبت پرچمداران
            اندرویدی به نمایش بگذارد. از جمله اصلی‌ترین تغییرات در نظر گرفته شده
            برای این گوشی های هوشمند در مقایسه با پرچمداران خانواده آیفون 12
            می‌توانیم به سنسور‌های دوربین قدرتمند‌تر، پردازنده فوق العاده با
            عملکرد بهتر و خیره کننده به نسبت نسل قبلی، تنوع رنگی بالا، صفحه
            نمایش به‌مراتب با‌کیفیت‌تراشاره کنیم. در این بررسی به‌سراغ آیفون 13
            پرو مکس به عنوان گل سرسبد گوشی های هوشمند این خانواده رفته ایم تا
            ببینیم چه مشخصاتی را با خودش به همراه داشته و به نسبت آیفون 12 پرو
            مکس چه تغییرات در مشخصات فنی در نظر گرفته شده دارد.
          </p>
        </TabsContent>
        <TabsContent
          className="border border-muted shadow-lg p-5 rounded-lg"
          value="info"
        >
          <h2 className="font-bold text-xl my-4">ویژگی های اصلی محصول</h2>
          <ul className="list-disc p-2 flex flex-col gap-3 border-b pb-5">
            <li>رم : 6</li>
            <li>گرافیک : 2 گیگ</li>
            <li>رم : 6</li>
            <li>رم : 6</li>
          </ul>
          <h2 className="font-bold text-xl my-4">
            ویژگی های منحصر به فرد محصول
          </h2>
          <ul className="list-disc p-2 flex flex-col gap-3 text-primary">
            <li>کیفیت بسیار بالا</li>
            <li>قدرت بسیار بالا</li>
            <li>نمیدانم خیخی</li>
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
