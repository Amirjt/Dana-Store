import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className="relative">
      <div className="shadow-md border border-muted rounded-lg flex flex-col p-5 gap-4 mt-5 relative ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/images/noavatar.png"}
              height={35}
              width={35}
              alt="avatar"
            />
            <span className="text-sm font-semibold">امیرحسین عسگری</span>
          </div>
          <div>
            <span>1402.11.12</span>
          </div>
        </div>
        <div>
          <p className="leading-8">
            سلام و عرض ادب و احترام ، واقعا محصول فوق العاده ای بود و به موقع به
            دستم رسید ، ممنونم ❤️
          </p>
        </div>
        <div className="absolute left-3 bottom-3 flex items-center gap-[2px]">
          <Star strokeWidth={1.1} size={19} />
          <Star strokeWidth={1.1} size={19} />
          <Star strokeWidth={1.1} size={19} />
          <Star strokeWidth={1.1} size={19} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
