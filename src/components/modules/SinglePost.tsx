import React from "react";

const SinglePost = () => {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col gap-3 rounded-lg shadow-xl"
    >
      <img
        className="rounded-t-lg"
        src="https://cdn.kalatik.com/blog_media/0/24/03/11/1j5T0p4xhrLQ.jpg"
        alt=""
      />
      <div className="flex flex-col gap-3 border-b p-2 pb-3">
        <h2 className="font-bold">جدیدترین اطلاعات گوشی پوکو X6 neo</h2>
        <p className="text-muted-foreground text-sm">
          گوشی‌های سری Poco X6 به جهت برخورداری از مشخصات فنی خوب و قیمت مناسب،
        </p>
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-2">
          <img src="/images/noavatar.png" width={30} alt="" />
          <span className="text-sm font-semibold">آنیا عباسی</span>
        </div>
        <span className="text-sm">22 اسفند 1402</span>
      </div>
    </div>
  );
};

export default SinglePost;
