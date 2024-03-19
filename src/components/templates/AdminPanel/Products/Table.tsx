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
import { useEffect, useState } from "react";
import mongoose from "mongoose";

import swal from "sweetalert";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price?: number;
  shortdesc: string;
  cat: string;
  off?: number;
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
}

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const removeHandler = (id: string) => {
    swal({
      title: "آیا اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`/api/products/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            getProducts();
          }
        });
      }
    });
  };

  return (
    <Table dir="rtl">
      <TableCaption>
        {products.length === 0
          ? "هیچ محصولی وجود ندارد"
          : "لیست محصولات فروشگاه"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] text-right"></TableHead>
          <TableHead className="w-[300px] text-right">محصول</TableHead>
          <TableHead className="text-right">قیمت</TableHead>
          <TableHead className="text-right">امتیاز</TableHead>
          <TableHead className="text-center">ویرایش</TableHead>
          <TableHead className="text-center">حذف</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length !== 0 &&
          products.map((product: Product, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">{index + 1}</TableCell>
              <TableCell className="font-bold">{product.name}</TableCell>
              <TableCell className="font-bold text-green-600">
                {product.price?.toLocaleString()}
              </TableCell>
              <TableCell className="text-yellow-600">
                {product.rating}
              </TableCell>
              <TableCell>
                <Button className="w-full">
                  <Link href={`/p-admin/products/${product._id}`}>ویرایش</Link>
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  onClick={() => removeHandler(product._id)}
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
  );
};

export default ProductsTable;
