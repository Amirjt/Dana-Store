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
import Image from "next/image";

const RequestsPage = () => {
  return (
    <>
      <h2 className="font-bold text-primary text-lg p-3">لیست درخواست ها</h2>
      <Table dir="rtl">
        <TableCaption>لیست درخواست ها</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-right"></TableHead>
            <TableHead className="w-[300px] text-right">عنوان</TableHead>
            <TableHead className="text-center">تاریخ</TableHead>
            <TableHead className="text-center">مشاهده</TableHead>
            <TableHead className="text-center">حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-lg">1</TableCell>
            <TableCell className="text-right font-bold">
              همکاری در فروش
            </TableCell>
            <TableCell className="text-center">
              <span>1402/10/10</span>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-fit">مشاهده</Button>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-fit" variant={"destructive"}>
                حذف
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-lg">1</TableCell>
            <TableCell className="text-right font-bold">
              همکاری در فروش
            </TableCell>
            <TableCell className="text-center">
              <span>1402/10/10</span>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-fit">مشاهده</Button>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-fit" variant={"destructive"}>
                حذف
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-lg">1</TableCell>
            <TableCell className="text-right font-bold">
              همکاری در فروش
            </TableCell>
            <TableCell className="text-center">
              <span>1402/10/10</span>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-fit">مشاهده</Button>
            </TableCell>
            <TableCell className="text-center">
              <Button className="w-fit" variant={"destructive"}>
                حذف
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default RequestsPage;
