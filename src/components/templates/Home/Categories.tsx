import Title from "@/components/modules/Title";

const Categories = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-4 items-center cursor-pointer"
    >
      <Title title="پربازدید ترین دسته بندی ها" />
      <div className="sm:flex grid grid-cols-2 items-center gap-10 shadow-xl shadow-primary/5 border border-muted rounded-lg p-3">
        <div className="flex flex-col gap-4 items-center  px-5">
          <img
            className=""
            width={100}
            src="https://dkstatics-public.digikala.com/digikala-products/e5dfffed0fe58135b9787887394f4db17be8c5dc_1693397601.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
            alt=""
          />
          <span className="font-semibold">لپتاپ</span>
        </div>
        <div className="flex flex-col gap-4 items-center  px-5">
          <img
            className=""
            width={100}
            src="https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
            alt=""
          />
          <span className="font-semibold">موبایل</span>
        </div>
        <div className="flex flex-col gap-4 items-center  px-5">
          <img
            className=""
            width={100}
            src="https://dkstatics-public.digikala.com/digikala-products/7f0c6c207a3c72b266fc96466ff2011b48bad06f_1703511082.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
            alt=""
          />
          <span className="font-semibold">کنسول</span>
        </div>
        <div className="flex flex-col gap-4 items-center px-5">
          <img
            className=""
            width={100}
            src="https://dkstatics-public.digikala.com/digikala-products/0d959cfe63ed2740e1a2684ef60d55ba854b2adf_1705166001.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
            alt=""
          />
          <span className="font-semibold">تبلت</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
