"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  emailRegex,
  errSetter,
  numberRegex,
  passwordRegex,
  usernameRegex,
} from "@/lib/helpers";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CircleDashed } from "lucide-react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const registerHandler = async () => {
    if (!name || !userName || !email || !number || !password) {
      return errSetter("فیلد هارا پر کنید", setErr);
    }

    if (name.length < 7) {
      return errSetter("نام و نام خانوادگی نامعتبر میباشد", setErr);
    }

    if (!usernameRegex.test(userName)) {
      return errSetter("نام کاربری نامعتبر است", setErr);
    }

    if (!emailRegex.test(email)) {
      return errSetter("ایمیل نامعتبر است", setErr);
    }

    if (!numberRegex.test(number)) {
      return errSetter("شماره تلفن نامعتبر است", setErr);
    }

    if (!passwordRegex.test(password)) {
      return errSetter("رمز عبور ضعیف است", setErr);
    }

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        userName,
        email,
        number,
        password,
      }),
    });

    if (res.status === 201) {
      toast.success("ثبت نام با موفقیت انجام شد ");
      router.push("/");
    } else if (res.status === 409) {
      toast.error("نام کاربری ، ایمیل یا شماره تلفن قبلا استفاده شده است ! ");
    } else if (res.status === 400) {
      toast.warning("لطفا در وارد کردن اطلاعات دقت فرمایید ! ");
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-primary to-secondary p-5">
      <div
        data-aos="fade-down"
        className="sm:w-1/4 w-full p-5 rounded-tr-lg bg-slate-50 rounded-bl-lg shadow-xl flex flex-col gap-3"
      >
        <h2 className="font-bold text-primary text-2xl">فروشگاه دانا</h2>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام و نام خانوادگی"
          className="bg-transparent"
        />
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="نام کاربری"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
        />
        <Input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="شماره موبایل"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز عبور"
        />
        <p className="text-sm text-red-500 px-3">{err && err}</p>
        <Button onClick={registerHandler}>
          {loading ? (
            <CircleDashed className="animate-spin" strokeWidth={1.1} />
          ) : (
            "ثبت نام"
          )}
        </Button>
        <Button variant={"link"}>
          <Link href={"/login"}>ورود</Link>
        </Button>
        <p className="text-center leading-7 text-sm text-muted-foreground">
          با عضویت در سایت تمامی قوانین فروشگاه دانا را پذیرفته اید.
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
