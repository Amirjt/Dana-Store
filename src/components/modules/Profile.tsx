import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User } from "lucide-react";
import mongoose from "mongoose";
import Image from "next/image";

interface IUser {
  name: string;
  username: string;
  email: string;
  number: string;
  password: string;
  profilepic?: string;
  role: string;
  address?: string;
  isbanned: boolean;
  comments: mongoose.Types.ObjectId[];
  tickets: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const Profile = ({ user }: { user: IUser }) => {
  return (
    <div className="w-full sm:w-1/2 mx-auto flex flex-col items-center gap-5">
      <Image
        width={160}
        height={160}
        alt="profilepic"
        src={user.profilepic ? user.profilepic : "/images/noavatar.png"}
      />
      <div className="w-full flex items-center gap-3">
        <Input placeholder="نام و نام خانوادگی" />
        <Input placeholder="نام کاربری" />
      </div>
      <div className="w-full flex items-center gap-3">
        <Input placeholder="آدرس ایمیل" />
        <Input placeholder="رمز عبور" />
      </div>
      <Textarea placeholder="آدرس" />
      <div className="w-full flex flex-col sm:flex-row gap-3 items-center justify-between">
        <span className="text-sm text-muted-foreground">
          تاریخ عضویت : {new Date(user.createdAt).toLocaleDateString("fa-IR")}
        </span>
        <Button>ذخیره تغییرات</Button>
        <Button variant={"destructive"} className="flex items-center gap-1">
          حذف حساب کاربری
          <User strokeWidth={1.1} size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
