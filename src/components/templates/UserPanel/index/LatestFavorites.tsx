import SingleProduct from "@/components/modules/SingleProduct";
import { Button } from "@/components/ui/button";
import React from "react";
import { IProduct } from "../../AdminPanel/Comments/CommentsTable";

const LatestFavorites = ({ favorites }: { favorites: IProduct[] }) => {
  return (
    <div className="relative rounded-lg shadow-lg  p-5 flex flex-col gap-5 ">
      <span className="absolute -top-3 -right-3 p-2 rounded-lg text-white bg-primary">
        <h3>آخرین علاقه مندی ها</h3>
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {favorites.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
      <Button>مشاهده همه</Button>
    </div>
  );
};

export default LatestFavorites;
