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
import { useEffect, useState } from "react";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { toast } from "sonner";

const AddnewProductPage = () => {
  const [file, setFile] = useState<File>();
  const [images, setImages] = useState<ItemInterface[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [category, setCategory] = useState("");
  const [off, setOff] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [longDescription, setLongDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [storage, setStorage] = useState("");
  const [ram, setRam] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [specialOptions, setSpecialOptions] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const addNewProductHandler = async () => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        images,
        name,
        price,
        shortDescription,
        category,
        off,
        colors,
        longDescription,
        brand,
        model,
        weight,
        size,
        storage,
        ram,
        cpu,
        gpu,
        specialOptions: specialOptions.split(","),
      }),
    });

    if (res.status === 201) {
      setImages([]);
      setName("");
      setPrice("");
      setShortDescription("");
      setCategory("");
      setOff("");
      setColors([]);
      setLongDescription("");
      setBrand("");
      setModel("");
      setWeight("");
      setSize("");
      setStorage("");
      setRam("");
      setCpu("");
      setGpu("");
      setSpecialOptions("");
      toast.success("محصول با موفقیت اضافه گردید");
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
            setImages((prev) => [...prev, data]);
          }
        });
    } catch (e: any) {
      console.error(e);
    }
  }, [file]);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-lg">اضافه کردن محصول جدید</h2>
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
          list={images}
          direction={"horizontal"}
          setList={(newImages) => setImages(newImages)}
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
            onChange={(e) => setName(e.target.value)}
            placeholder="نام محصول"
          />
          <Input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="قیمت محصول به تومان"
            type="number"
          />
        </div>
        <Textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          rows={13}
          placeholder="توضیحات کوتاه محصول"
        />
        <div className="flex items-center gap-3">
          <Select
            defaultValue={category}
            onValueChange={(value) => setCategory(value)}
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
            onChange={(e) => setOff(e.target.value)}
            placeholder="میزان تخفیف"
            type="number"
          />
        </div>
        <div className="w-full flex items-center gap-3 mx-auto">
          <Input
            value={colors}
            disabled
            onChange={(e) => setColors((prev) => [...prev, e.target.value])}
            placeholder="رنگ های محصول"
          />
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
            {productColors.map((col) => (
              <span
                onClick={() => setColors((prev) => [...prev, col.color])}
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
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          rows={20}
          placeholder="توضیحات کامل محصول"
        />
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="برند"
          />
          <Input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="مدل"
          />
          <Input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="وزن محصول"
          />
          <Input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="اندازه محصول"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Input
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            placeholder="مقدار حافظه"
          />
          <Input
            value={ram}
            onChange={(e) => setRam(e.target.value)}
            placeholder="میزان رم"
          />
          <Input
            value={cpu}
            onChange={(e) => setCpu(e.target.value)}
            placeholder="پردازنده"
          />
          <Input
            value={gpu}
            onChange={(e) => setGpu(e.target.value)}
            placeholder="GPU"
          />
        </div>
        <Textarea
          rows={8}
          placeholder="ویژگی های منحصر به فرد (با , از هم جدا کنید)"
          value={specialOptions}
          onChange={(e) => setSpecialOptions(e.target.value)}
        />
        <Button
          onClick={addNewProductHandler}
          className="flex items-center gap-3"
        >
          اضافه کردن محصول جدید
          <CirclePlus strokeWidth={1.2} />
        </Button>
      </div>
    </div>
  );
};

export default AddnewProductPage;
