import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 shadow-md flex flex-col gap-2 items-center rounded-lg">
      {children}
    </div>
  );
};

export default Box;
