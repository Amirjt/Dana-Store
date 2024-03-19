"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { productColors } from "@/lib/constants";
import { CirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { toast } from "sonner";

const EditProductPage = ({ params }: { params: { id: string } }) => {
  const [productData, setProductData] = useState<any>({
    images: [],
    name: "",
    price: "",
    shortdesc: "",
    cat: "",
    off: "",
    colors: [],
    longdesc: "",
    details: {
      brand: "",
      model: "",
      weight: "",
      size: "",
      storage: "",
      ram: "",
      cpu: "",
      gpu: "",
      specialOptions: "",
    },
  });

  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState<File>();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        if (res.ok) {
          const product = await res.json();
          setProductData(product);
        } else {
          throw new Error("Failed to fetch product data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const {
    images,
    name,
    price,
    shortdesc,
    cat,
    off,
    colors,
    longdesc,
    details: {
      brand,
      model,
      weight,
      size,
      storage,
      ram,
      cpu,
      gpu,
      specialOptions,
    },
  } = productData;

  const editProductHandler = async () => {
    try {
      const res = await fetch(`/api/products/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          images,
          name,
          price,
          shortdesc,
          cat,
          off,
          colors,
          longdesc,
          brand,
          model,
          weight,
          size,
          storage,
          ram,
          cpu,
          gpu,
          specialOptions: Array.isArray(specialOptions)
            ? specialOptions.join(",").split(",")
            : specialOptions.split(","),
        }),
      });

      if (res.ok) {
        setProductData({
          images: [],
          name: "",
          price: "",
          shortDescription: "",
          cat: "",
          off: "",
          colors: [],
          longDescription: "",
          details: {
            brand: "",
            model: "",
            weight: "",
            size: "",
            storage: "",
            ram: "",
            cpu: "",
            gpu: "",
            specialOptions: "",
          },
        });
        toast.success("محصول با موفقیت ویرایش گردید");
        router.push("/p-admin/products");
      } else {
        throw new Error("Failed to edit product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      fetch("/api/uploader", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setProductData((prevProductData: any) => ({
              ...prevProductData,
              images: [...prevProductData.images, data],
            }));
          }
        });
    } catch (e: any) {
      console.error(e);
    }
  }, [file]);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-lg">ویرایش محصول</h2>
      <div className="flex items-center gap-3 mx-auto">
        <div className="p-10 rounded-lg border border-muted-foreground w-fit mt-5">
          <label htmlFor="image">
            <CirclePlus strokeWidth={1} opacity={0.8} cursor={"pointer"} />
          </label>
          <Input
            id="image"
            className="hidden"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </div>
        <ReactSortable
          className="flex gap-3 mt-4 w-full"
          list={productData.images}
          direction={"horizontal"}
          setList={(newImages) =>
            setProductData((prevProductData: any) => ({
              ...prevProductData,
              images: newImages,
            }))
          }
        >
          {images?.length &&
            images?.map((image: any, index: any) => (
              <div key={index}>
                <img
                  className="h-24 w-24 rounded-lg"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
        </ReactSortable>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Input
            value={name}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                name: e.target.value,
              }))
            }
            placeholder="نام محصول"
          />
          <Input
            value={price}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                price: e.target.value,
              }))
            }
            placeholder="قیمت محصول به تومان"
            type="number"
          />
        </div>
        <Textarea
          value={shortdesc}
          onChange={(e) =>
            setProductData((prevProductData: any) => ({
              ...prevProductData,
              shortdesc: e.target.value,
            }))
          }
          rows={13}
          placeholder="توضیحات کوتاه محصول"
        />
        <div className="flex items-center gap-3">
          <Select
            defaultValue={cat}
            onValueChange={(value) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                off: value,
              }))
            }
          >
            <SelectTrigger dir="rtl">
              <SelectValue placeholder="دسته بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup dir="rtl">
                {categories.map((cat: { name: string }) => (
                  <SelectItem value={cat.name}>{cat.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            value={off}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                off: e.target.value,
              }))
            }
            placeholder="میزان تخفیف"
            type="number"
          />
        </div>
        <div className="w-full flex items-center gap-3 mx-auto">
          <Input
            value={colors}
            disabled
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                colors: [...prevProductData.colors, e.target.value],
              }))
            }
            placeholder="رنگ های محصول"
          />
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
            {productColors.map((col) => (
              <span
                onClick={() =>
                  setProductData((prevProductData: any) => ({
                    ...prevProductData,
                    colors: [...prevProductData.colors, col.color],
                  }))
                }
                key={col.color}
                style={{
                  backgroundColor: col.color,
                }}
                className={`w-8 h-8 rounded-full cursor-pointer`}
              ></span>
            ))}
          </div>
        </div>
        <Textarea
          value={longdesc}
          onChange={(e) =>
            setProductData((prevProductData: any) => ({
              ...prevProductData,
              longdesc: e.target.value,
            }))
          }
          rows={20}
          placeholder="توضیحات کامل محصول"
        />
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Input
            value={brand}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  brand: e.target.value,
                },
              }))
            }
            placeholder="برند"
          />
          <Input
            value={model}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  model: e.target.value,
                },
              }))
            }
            placeholder="مدل"
          />
          <Input
            value={weight}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  weight: e.target.value,
                },
              }))
            }
            placeholder="وزن محصول"
          />
          <Input
            value={size}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  size: e.target.value,
                },
              }))
            }
            placeholder="اندازه محصول"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Input
            value={storage}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  storage: e.target.value,
                },
              }))
            }
            placeholder="مقدار حافظه"
          />
          <Input
            value={ram}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  ram: e.target.value,
                },
              }))
            }
            placeholder="میزان رم"
          />
          <Input
            value={cpu}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  cpu: e.target.value,
                },
              }))
            }
            placeholder="پردازنده"
          />
          <Input
            value={gpu}
            onChange={(e) =>
              setProductData((prevProductData: any) => ({
                ...prevProductData,
                details: {
                  ...prevProductData.details,
                  gpu: e.target.value,
                },
              }))
            }
            placeholder="GPU"
          />
        </div>
        <Textarea
          rows={8}
          placeholder="ویژگی های منحصر به فرد (با , از هم جدا کنید)"
          value={specialOptions}
          onChange={(e) =>
            setProductData((prevProductData: any) => ({
              ...prevProductData,
              details: {
                ...prevProductData.details,
                specialOptions: e.target.value,
              },
            }))
          }
        />
        <Button onClick={editProductHandler}>ویرایش</Button>
      </div>
    </div>
  );
};

export default EditProductPage;
