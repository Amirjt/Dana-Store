import ReviewBox from "@/components/modules/ReviewBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TicketsPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row justify-between items-center p-2">
        <div className="flex items-center gap-3 mt-8 sm:mt-0">
          <ReviewBox title="همه تیکت ها" count={5} />
          <ReviewBox title="پاسخ داده شده" count={5} />
          <ReviewBox title="پاسخ داده نشده" count={0} />
        </div>
        <Button size={"lg"}>ثبت تیکت جدید</Button>
      </div>
      <div className="bg-slate-200 rounded-lg p-4 mt-8 flex flex-col gap-4">
        <h3 className="font-bold text-xl">تیکت ها</h3>
        <div className="bg-slate-300 rounded-lg p-4 flex flex-col gap-2 sm:flex-row items-center justify-between">
          <Link className="text-primary flex items-center gap-1" href={"/"}>
            1. مشکل خرید
          </Link>
          <div className="flex items-center gap-3">
            <Button size={"sm"}>مشاهده جزئیات</Button>
            <span className="bg-green-500 text-green-800 p-2 rounded-lg font-bold text-sm ">
              پاسخ داده شده
            </span>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg p-4 flex items-center justify-between">
          <Link className="text-primary flex items-center gap-1" href={"/"}>
            1. مشکل خرید
          </Link>
          <div className="flex items-center gap-3">
            <Button size={"sm"}>مشاهده جزئیات</Button>
            <span className="bg-green-500 text-green-800 p-2 rounded-lg font-bold text-sm ">
              پاسخ داده شده
            </span>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg p-4 flex items-center justify-between">
          <Link className="text-primary flex items-center gap-1" href={"/"}>
            1. مشکل خرید
          </Link>
          <div className="flex items-center gap-3">
            <Button size={"sm"}>مشاهده جزئیات</Button>
            <span className="bg-green-500 text-green-800 p-2 rounded-lg font-bold text-sm ">
              پاسخ داده شده
            </span>
          </div>
        </div>{" "}
        <div className="bg-slate-300 rounded-lg p-4 flex items-center justify-between">
          <Link className="text-primary flex items-center gap-1" href={"/"}>
            1. مشکل خرید
          </Link>
          <div className="flex items-center gap-3">
            <Button size={"sm"}>مشاهده جزئیات</Button>
            <span className="bg-green-500 text-green-800 p-2 rounded-lg font-bold text-sm ">
              پاسخ داده شده
            </span>
          </div>
        </div>{" "}
        <div className="bg-slate-300 rounded-lg p-4 flex items-center justify-between">
          <Link className="text-primary flex items-center gap-1" href={"/"}>
            1. مشکل خرید
          </Link>
          <div className="flex items-center gap-3">
            <Button size={"sm"}>مشاهده جزئیات</Button>
            <span className="bg-green-500 text-green-800 p-2 rounded-lg font-bold text-sm ">
              پاسخ داده شده
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
