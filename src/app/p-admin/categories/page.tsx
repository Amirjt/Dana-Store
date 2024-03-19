"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import swal from "sweetalert";

interface Item {
  _id: string;
  name: string;
}

const CategoriesPage = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const removeHandler = async (id: string) => {
    const res = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("دسته بندی با موفقیت پاک شد");
      getData();
    }
  };

  const addHandler = async () => {
    swal({
      title: "اضافه کردن دسته بندی جدید",
      content: "input",
      buttons: ["لغو", "اضافه کردن"],
    }).then((value) => {
      if (value) {
        fetch("/api/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: value,
          }),
        }).then((res) => {
          if (res.status === 201) {
            toast.success("دسته بندی اضافه شد");
            getData();
          }
        });
      }
    });
  };

  const editHandler = async (id: string) => {
    swal({
      title: "ویرایش دسته بندی",
      content: "input",
      buttons: ["لغو", "ویرایش"],
    }).then((value) => {
      if (value) {
        fetch(`/api/categories/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: value,
          }),
        }).then((res) => {
          if (res.status === 200) {
            toast.success("ویرایش گردید");
            getData();
          }
        });
      }
    });
  };

  return (
    <div className="relative">
      <CirclePlus
        cursor={"pointer"}
        onClick={addHandler}
        className="absolute top-3 left-3"
        strokeWidth={1}
      />
      <h2 className="font-bold text-lg">دسته بندی ها</h2>
      <Table dir="rtl" className="mt-5">
        <TableCaption>لیست دسته بندی های فروشگاه</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-right"></TableHead>
            <TableHead className="w-[300px] text-right">نام</TableHead>
            <TableHead className="text-center">ویرایش</TableHead>
            <TableHead className="text-center">حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: Item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">{index + 1}</TableCell>
              <TableCell className="font-bold">{item.name}</TableCell>

              <TableCell>
                <Button
                  onClick={() => editHandler(item._id)}
                  className="w-full"
                >
                  ویرایش
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  onClick={() => removeHandler(item._id)}
                  className="w-full"
                  variant={"destructive"}
                >
                  حذف
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesPage;
