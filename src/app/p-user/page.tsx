import ReviewBox from "@/components/modules/ReviewBox";
import LatestComments from "@/components/templates/UserPanel/index/LatestComments";
import LatestFavorites from "@/components/templates/UserPanel/index/LatestFavorites";
import LatestOrders from "@/components/templates/UserPanel/index/LatestOrders";
import LatestTickets from "@/components/templates/UserPanel/index/LatestTickets";
import authUser from "@/lib/authUser";
import ProductModel from "@/models/Product";
import CommentModel from "@/models/Comment";
import {
  Bell,
  Heart,
  MessageCircleIcon,
  ShoppingCart,
  Ticket,
} from "lucide-react";
import React from "react";
import TicketModel from "@/models/Ticket";
import FavoritesModel from "@/models/Favorites";

const UserPanelHome = async () => {
  const user = await authUser();
  const comments = await CommentModel.find({ user: user._id })
    .sort({ _id: -1 })
    .limit(4);

  const tickets = await TicketModel.find({ user: user._id })
    .sort({ _id: -1 })
    .limit(4);

  const favorites = await FavoritesModel.find({ user: user._id })
    .populate("product")
    .sort({ _id: -1 })
    .limit(4);

  return (
    <div className="w-full p-2">
      <div className="flex items-center justify-between h-fit mb-5 pr-9 sm:pr-0">
        <span className="relative">
          <Bell strokeWidth={1.1} />
          <span className="animate-pulse absolute h-5 w-5 -top-3 -right-1 bg-rose-500 flex justify-center items-center text-white text-sm rounded-full">
            2
          </span>
        </span>
        <span className="font-bold">امروز : 1402/11/12</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-7">
        <div className="w-full sm:w-1/2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <ReviewBox
              title="تعداد نظرات"
              count={23}
              icon={<MessageCircleIcon />}
            />
            <ReviewBox title="سفارش ها" count={0} icon={<ShoppingCart />} />
            <ReviewBox title="علاقه مندی ها" count={13} icon={<Heart />} />
            <ReviewBox
              title="تیکت ها"
              count={user.tickets.length}
              icon={<Ticket />}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-4 mt-7">
            <LatestComments comments={JSON.parse(JSON.stringify(comments))} />
            <LatestTickets tickets={JSON.parse(JSON.stringify(tickets))} />
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-10">
          <LatestFavorites favorites={JSON.parse(JSON.stringify(favorites))} />
          <LatestOrders />
        </div>
      </div>
    </div>
  );
};

export default UserPanelHome;
