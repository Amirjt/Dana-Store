import React from "react";
import { Button } from "../ui/button";

import { ShoppingBasket, View, Heart, Star } from "lucide-react";

type Props = {};

const SingleProduct = (props: Props) => {
  return (
    <div className="border border-muted rounded-lg shadow-lg p-5 group cursor-pointer flex flex-col gap-5 relative my-2 group">
      <span className="absolute -top-3 -left-2 -rotate-45 bg-rose-500 h-7 w-7 rounded-sm text-white flex justify-center items-center text-sm animate-pulse">
        2%
      </span>
      <View
        className="absolute top-3 right-3 z-50 invisible opacity-0 translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 duration-200"
        strokeWidth={1.1}
      />
      <Heart
        className="absolute top-11 right-3 z-50 invisible opacity-0 translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 duration-500"
        strokeWidth={1.1}
      />
      <div>
        <img
          className="group-hover:scale-105 duration-300"
          src="https://cdn.kalatik.com/media/0/23/04/20/YBjWon15Abc2_t1.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-sm leading-6">
          گوشی موبایل اپل مدل iPhone 13 CH/A Not Active{" "}
        </h3>
        <div className="flex items-center flex-row-reverse justify-between">
          <span className="font-semibold text-lg text-primary">10,520,000</span>
          <div className="text-sm flex items-center gap-1">
            <span className="mt-[1px]">3</span>
            <Star strokeWidth={1.1} size={17} fill="#EABE12" color="#EABE12" />
          </div>
        </div>
        <div className="flex items-center flex-row-reverse justify-between">
          <span className="font-semibold text-lg text-green-700 line-through opacity-50">
            11,000,000
          </span>
          <Button
            className="font-semibold flex items-center gap-1 transition-all duration-200 hover:-translate-y-1"
            size={"sm"}
            variant={"secondary"}
          >
            خرید
            <ShoppingBasket strokeWidth={1.3} size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
