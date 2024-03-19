"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { errSetter } from "@/lib/helpers";
import { CircleDashed } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const loginHandler = async () => {
    if (!identifier || !password) {
      return errSetter("لطفا فیلد هارا پر کنید", setErr);
    }

    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    if (res.status === 200) {
      toast.success("ورود با موفقیت انجام شد");
      router.push("/");
    } else if (res.status === 409) {
      toast.error("اطلاعات نامعتبر میباشد");
    } else if (res.status === 404) {
      toast.error("کاربر یافت نشد");
    } else if (res.status === 422) {
      toast.error("نام کاربری ، ایمیل یا پسورد درست نمیباشد");
    } else if (res.status === 403) {
      toast.error("کاربر بن شده است.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-secondary to-primary p-5">
      <div
        data-aos="fade-up"
        className="sm:w-1/4 w-full p-5 rounded-tr-lg bg-slate-50 rounded-bl-lg shadow-xl flex flex-col gap-3"
      >
        <h2 className="font-bold text-primary text-2xl">فروشگاه دانا</h2>
        <Input
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="نام کاربری یا آدرس ایمیل"
          className="bg-transparent"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز عبور"
        />
        <p className="text-sm text-red-500 px-3">{err && err}</p>
        <Button onClick={loginHandler}>
          {loading ? (
            <CircleDashed className="animate-spin" strokeWidth={1.1} />
          ) : (
            "ورود"
          )}
        </Button>
        <div className="flex items-center justify-between">
          <Button variant={"link"}>
            <Link href={"/register"}>ثبت نام</Link>
          </Button>
          <Button variant={"link"}>
            <Link href={"/forgot-password"}>فراموشی رمز عبور</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
