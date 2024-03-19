import ReviewBox from "@/components/modules/ReviewBox";
import Chart from "@/components/templates/AdminPanel/index/Chart";
import connectToDb from "@/lib/db";
import ProductModel from "@/models/Product";
import UserModel from "@/models/User";
import { CircleCheck, ShoppingCart, Ticket, UsersIcon } from "lucide-react";

const AdminPanel = async () => {
  connectToDb();
  const users = await UserModel.find({});
  const products = await ProductModel.find({});

  return (
    <div className="flex flex-col gap-7 relative">
      <span className="absolute -left-3 -top-10 sm:top-0 font-bold">
        امروز : {new Date().toLocaleDateString("fa-IR")}
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-8 gap-6">
        <ReviewBox title="کاربران" icon={<UsersIcon />} count={users.length} />
        <ReviewBox
          title="محصولات"
          icon={<ShoppingCart />}
          count={products.length}
        />
        <ReviewBox title="فروش های موفق" icon={<CircleCheck />} count={320} />
        <ReviewBox title="مجموع تیکت ها" icon={<Ticket />} count={538} />
      </div>
      <Chart />
    </div>
  );
};

export default AdminPanel;
