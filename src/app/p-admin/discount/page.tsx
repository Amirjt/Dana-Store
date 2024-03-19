"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DiscountPage = () => {
  const [name, setName] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/discounts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const addDiscount = async () => {
    const res = await fetch("/api/discounts", {
      method: "POST",
      headers: {
        "Content-Type": "applicaton/json",
      },
      body: JSON.stringify({
        name,
        percent,
        maxuse: maxUse,
      }),
    });

    if (res.status === 201) {
      toast.success("کد تخفیف با موفقیت ساخته شد");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-lg text-primary sm:mb-11">
        افزودن کد تخفیف جدید
      </h2>
      <div className="flex items-center gap-3">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="شناسه کد تخفیف"
        />
        <Input
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          placeholder="درصد تخفیف"
        />
      </div>
      <div className="flex items-center gap-3">
        <Input
          value={maxUse}
          onChange={(e) => setMaxUse(e.target.value)}
          placeholder="حداکثر استفاده"
        />
        <Button onClick={addDiscount} className="w-fit">
          اضافه کردن
        </Button>
      </div>
      <Table dir="rtl">
        <TableCaption>لیست کد های تخفیف فروشگاه</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-right"></TableHead>
            <TableHead className="w-[300px] text-right">کد</TableHead>
            <TableHead className="text-right">درصد</TableHead>
            <TableHead className="text-center">حداکثر استفاده</TableHead>
            <TableHead className="text-center">دفعات استفاده شده</TableHead>
            <TableHead className="text-center">حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any, index) => (
            <TableRow>
              <TableCell className="font-medium text-lg">{index + 1}</TableCell>
              <TableCell className="font-bold">{item.name}</TableCell>
              <TableCell className="font-bold text-green-600">
                {item.percent}
              </TableCell>
              <TableCell className="text-yellow-600 text-center">
                {item.maxuse}
              </TableCell>
              <TableCell className="text-center">{item.uses}</TableCell>
              <TableCell className="text-center">
                <Button className="w-full" variant={"destructive"}>
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

export default DiscountPage;
