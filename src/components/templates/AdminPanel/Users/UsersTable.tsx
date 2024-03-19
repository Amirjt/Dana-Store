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
import swal from "sweetalert";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  number: string;
  password: string;
  profilepic?: string;
  role?: string;
  address?: string;
  isbanned: boolean;
}

const UsersTable = ({ users }: { users: User[] }) => {
  const router = useRouter();
  const removeHandler = (id: string) => {
    swal({
      title: "آیا اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`/api/users/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            toast.success("کاربر با موفقیت پاک شد");
            router.refresh();
          }
        });
      }
    });
  };

  const banHandler = async (user: User) => {
    swal({
      title: "آیا اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`/api/users/${user._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isbanned: !user.isbanned,
          }),
        }).then((res) => {
          if (res.ok) {
            toast.success("با موفقیت انجام شد");
            router.refresh();
          }
        });
      }
    });
  };

  return (
    <Table dir="rtl">
      <TableCaption>لیست کاربرای سایت</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] text-right"></TableHead>
          <TableHead className="w-[300px] text-right">کاربر</TableHead>
          <TableHead className="text-right">نقش</TableHead>
          <TableHead className="text-center">حذف</TableHead>
          <TableHead className="text-center">بن</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length !== 0 &&
          users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">{index + 1}</TableCell>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={
                    user.profilepic ? user.profilepic : "/images/noavatar.png"
                  }
                  height={25}
                  width={25}
                  alt="user"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">
                    {user.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </TableCell>
              <TableCell className="font-bold">
                {user.role === "ADMIN" ? "مدیر" : "کاربر عادی"}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => removeHandler(user._id)}
                  className="w-full"
                >
                  حذف
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  onClick={() => banHandler(user)}
                  className={`w-full ${
                    user.isbanned
                      ? "bg-green-500 hover:bg-green-400"
                      : "bg-red-500 hover:bg-red-400"
                  }`}
                >
                  {user.isbanned ? "آن بن" : "بن"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
