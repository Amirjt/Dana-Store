import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  count: number;
  icon?: React.ReactNode;
};

const ReviewBox: React.FC<Props> = ({ title, count, icon }) => {
  return (
    <div
      className={cn(
        "text-white rounded-lg shadow-lg font-bold flex flex-col gap-5 relative p-3 w-40 h-40",
        count === 0 ? "bg-rose-700" : "bg-blue-700"
      )}
    >
      <h3 className="text-lg">{title} :</h3>
      <span className="self-center text-xl">{count}</span>
      <div className="self-end">{icon}</div>
    </div>
  );
};

export default ReviewBox;
