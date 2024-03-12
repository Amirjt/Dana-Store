import React from "react";

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="px-3 relative font-bold text-2xl my-5 after:h-5 after:w-5 after:bg-primary after:absolute after:-left-7 after:rounded-sm after:rotate-45 after:mt-1 w-fit">
      {title}
    </h2>
  );
};

export default Title;
