"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mongoose from "mongoose";
import Link from "next/link";
import swal from "sweetalert";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useSession from "@/custom/useSession";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  shortdesc: string;
  cat: string;
  off: number;
  colors: string[];
  images: string[];
  rating?: number;
  comments: mongoose.Types.ObjectId[];
  longdesc: string;
  details: {
    brand: string;
    model: string;
    weight: number;
    size: string;
    storage: string;
    ram: string;
    cpu: string;
    gpu: string;
    specialOptions?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

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

export interface IComment {
  _id: string;
  body: string;
  user: IUser;
  product: IProduct;
  reply?: IComment;
  isAccepted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CommentsTable = ({ comments }: { comments: IComment[] }) => {
  const router = useRouter();

  const { session } = useSession();

  const viewHandler = (body: string) => {
    swal({
      text: body,
    });
  };

  const acceptHandler = async (id: string) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "PUT",
    });
    if (res.status === 200) {
      toast.success("دیدگاه تایید گردید");
      router.refresh();
    }
  };

  const deleteHandler = async (id: string) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      toast.success("دیدگاه با موفقیت حذف گردید");
      router.refresh();
    }
  };

  const replyHandler = async (comment: IComment) => {
    swal({
      title: "پاسخ",
      content: "input",
      buttons: ["لغو", "ارسال"],
    }).then((value) => {
      if (value) {
        fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: value,
            product: comment.product._id,
            user: session.data?._id,
            isReply: true,
            replyFor: comment._id,
          }),
        }).then((res) => {
          if (res.ok) {
            toast.success("پاسخ با موفقیت ارسال شد");
          }
        });
      }
    });
  };

  return (
    <Table dir="rtl">
      <TableCaption>لیست دیدگاه های ثبت شده</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] text-right"></TableHead>
          <TableHead className="w-[300px] text-right">کاربر</TableHead>
          <TableHead className="text-right">امتیاز</TableHead>
          <TableHead className="text-center">محصول</TableHead>
          <TableHead className="text-center">تاریخ</TableHead>
          <TableHead className="text-center">مشاهده</TableHead>
          <TableHead className="text-center">حذف</TableHead>
          <TableHead className="text-center">وضعیت</TableHead>
          <TableHead className="text-center">پاسخ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {comments.map((comment: IComment, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-lg">{index + 1}</TableCell>
            <TableCell className="flex items-center gap-3">
              <Image
                src={
                  comment.user.profilepic
                    ? comment.user.profilepic
                    : "/images/noavatar.png"
                }
                height={25}
                width={25}
                alt="user"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">
                  {comment.user.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {comment.user.email}
                </span>
              </div>
            </TableCell>
            <TableCell className="font-bold">3</TableCell>
            <TableCell>
              <Button variant={"link"} className="w-full">
                <Link href={`/products/${comment.product._id}`}>
                  {comment.product.name}
                </Link>
              </Button>
            </TableCell>
            <TableCell>
              {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
            </TableCell>
            <TableCell>
              <Button
                onClick={() => viewHandler(comment.body)}
                className="w-full"
              >
                مشاهده
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => deleteHandler(comment._id)}
                variant={"destructive"}
                className="w-full"
              >
                حذف
              </Button>
            </TableCell>
            <TableCell className="text-center">
              <Button
                onClick={() => acceptHandler(comment._id)}
                disabled={comment.isAccepted ? true : false}
                className={`${
                  comment.isAccepted
                    ? "bg-green-500 hover:bg-green-400"
                    : "bg-red-500 hover:bg-red-500"
                }`}
              >
                {comment.isAccepted ? "تایید شده" : "تایید"}
              </Button>
            </TableCell>
            <TableCell className="text-center">
              <Button
                onClick={() => replyHandler(comment)}
                className="w-full bg-green-500 hover:bg-green-400"
              >
                پاسخ
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CommentsTable;
