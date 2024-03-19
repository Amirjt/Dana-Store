import { Metadata } from "next";
import ProductsTable from "@/components/templates/AdminPanel/Products/Table";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "محصولات",
};

const ProductsPage = async () => {
  return (
    <div className="relative">
      <Link
        className="absolute left-0"
        href={"/p-admin/products/add-new-product"}
      >
        <PlusCircle className="text-primary" strokeWidth={1.1} />
      </Link>
      <h2 className="font-bold text-primary text-lg p-3">لیست محصولات</h2>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
