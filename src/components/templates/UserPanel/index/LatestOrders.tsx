import { Button } from "@/components/ui/button";
import React from "react";

const LatestOrders = () => {
  return (
    <div className="relative rounded-lg shadow-lg  p-8 flex flex-col gap-5 justify-center items-center">
      <span className="absolute -top-3 -right-3 p-2 rounded-lg text-white bg-primary">
        <h3>آخرین سفارش ها</h3>
      </span>
      <h5 className="font-bold text-lg text-red-500">هنوز سفارشی موجود نیست</h5>
      <div>
        هم اکنون <Button variant={"link"}>خرید</Button> کنید
      </div>
    </div>
  );
};

export default LatestOrders;
