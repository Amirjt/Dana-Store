import ReviewBox from "@/components/modules/ReviewBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CommentsPage = () => {
  return (
    <div>
      <div className="bg-slate-200 rounded-lg p-4 mt-14 sm:mt-8 flex flex-col gap-4">
        <h3 className="font-bold text-xl">دیدگاه های ثبت شده </h3>
        <div className="bg-slate-300 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="text-primary flex items-center gap-1" href={"/"}>
              1. محصول : آیفون 12 پرومکس
            </Link>
            <p className="text-sm text-muted-foreground">
              سلام و عرض ادب محصول فوق العاده بود واقعا
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-green-500 text-green-800 p-2 rounded-lg font-bold text-sm ">
              تایید شده
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;
