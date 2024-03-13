"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

import ReactStars from "react-stars";
import Comment from "./Comment";

const Comments = () => {
  const isLogin = true;
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">دیدگاه کاربران</h2>
      {isLogin ? (
        <div className="flex flex-col gap-3">
          <ul className="list-disc p-2 flex flex-col gap-3 text-primary">
            <li>
              کاربر گرامی در صورت وجود هرگونه مشکل ابتدا بخش سوالات متداول را
              مطالعه نمایید در صورتی که پاسخی برای مشکل خود پیدا نکردید از بخش
              تیکت‌ها درخواست پشتیبانی نمایید.
            </li>
            <li>
              نظر خود را بصورت فارسی تایپ نمایید. از به کار بردن کلمات رکیک یا
              توهین آمیز خودداری نمایید. در صورت مشاهده، نظر تایید نخواهد شد.
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <ReactStars
              count={5}
              size={35}
              onChange={(newRating) => console.log(newRating)}
            />
            <Textarea
              className="bg-slate-50"
              rows={15}
              placeholder="دیدگاه خود را وارد نمایید"
            />
            <Button size={"lg"} className="self-end">
              ارسال دیدگاه
            </Button>
          </div>
        </div>
      ) : (
        <div className="my-5 flex flex-col items-center gap-3">
          <h4 className="font-bold text-lg">
            برای انتشار دیدگاه خود ابتدا باید وارد پنل کاربری خود شوید
          </h4>
          <Button>
            <Link href={"/login"}>ورود</Link>
          </Button>
        </div>
      )}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
