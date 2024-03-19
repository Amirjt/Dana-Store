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

export interface IUser {
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

export interface ITicket {
  _id: string;
  title: string;
  body: string;
  dep: string;
  user: IUser;
  isAnswer: boolean;
  for: object;
  createdAt: Date;
}

const TicketsTable = ({ tickets }: { tickets: ITicket[] }) => {
  return (
    <Table dir="rtl">
      <TableCaption>لیست تیکت های ثبت شده</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] text-right"></TableHead>
          <TableHead className="w-[300px] text-right">کاربر</TableHead>
          <TableHead className="text-center">تاریخ</TableHead>
          <TableHead className="text-center">عنوان</TableHead>
          <TableHead className="text-center">دپارتمان</TableHead>
          <TableHead className="text-center">مشاهده</TableHead>
          <TableHead className="text-center">حذف</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-lg">1</TableCell>
            <TableCell className="flex items-center gap-3">
              <Image
                src={
                  ticket?.user?.profilepic
                    ? ticket?.user?.profilepic
                    : "/images/noavatar.png"
                }
                height={25}
                width={25}
                alt="user"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">
                  {ticket?.user?.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {ticket?.user?.email}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-center">
              {new Date(ticket?.createdAt).toLocaleDateString("fa-IR")}
            </TableCell>
            <TableCell className="text-center font-bold">
              {ticket?.title}
            </TableCell>
            <TableCell className="text-center font-bold text-primary">
              {ticket?.dep}
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-full">
                <Link href={`/p-admin/tickets/${ticket._id}`}>
                  مشاهده و پاسخ
                </Link>
              </Button>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-full" variant={"destructive"}>
                حذف
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TicketsTable;
