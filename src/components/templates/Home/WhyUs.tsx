import React from "react";

const WhyUs = () => {
  return (
    <div className="rounded-lg shadow-xl flex justify-center mt-48 p-5 h-[360px] sm:h-[180px] border border-muted relative">
      <div className="h-52 w-52 bg-primary rounded-lg rotate-45 -mt-32 flex items-center justify-center">
        <h4 className="-rotate-45 text-white font-bold text-xl">
          چرا فروشگاه دانا ؟
        </h4>
      </div>
      <div className="absolute left-20 top-1/2">
        <p className="text-lg font-semibold">
          دارای بیش از 10 سال سابقه در خرید و فروش محصولات دیجیتال{" "}
        </p>
      </div>
      <div className="absolute sm:right-20 left-20 bottom-5 sm:top-1/2">
        <p className="text-lg font-semibold">
          دارای چندین مشتری فعال و فروش بیش از هزار محصول به مردم عزیز
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
