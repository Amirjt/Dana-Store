"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailRegex } from "@/lib/helpers";
import { errSetter } from "@/lib/helpers";
import { CircleDashed } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const forgotPasswordHandler = async () => {
    if (!emailRegex.test(email)) {
      return errSetter("آدرس ایمیل نامعتبر میباشد", setErr);
    }

    setLoading(true);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (res.status === 404) {
      toast.error("کاربری یافت نشد");
    } else if (res.status === 200) {
      toast.success("ایمیل بازنشانی پسورد برای شما ارسال گردید");
      setEmail("");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
          className="bg-transparent"
        />
        <p className="text-sm text-red-500 px-3">{err && err}</p>
        <Button onClick={forgotPasswordHandler}>
          {loading ? (
            <CircleDashed className="animate-spin" strokeWidth={1.1} />
          ) : (
            "بازیابی رمز عبور"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
