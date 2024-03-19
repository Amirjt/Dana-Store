"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { errSetter, passwordRegex } from "@/lib/helpers";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CircleDashed } from "lucide-react";

const ResetPasswordForm = (id: any) => {
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const resetPasswordHandler = async () => {
    if (!pass !== !passConfirm) {
      errSetter("رمز عبور اشتباه میباشد", setErr);
      if (passwordRegex.test(pass)) {
        errSetter("رمز عبور ضعیف میباشد", setErr);
      }
    } else {
      setLoading;
      const res = await fetch(`/api/auth/reset-password/${id.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass,
        }),
      });
      if (res.status === 409) {
        toast.error("مشکلی وجود دارد");
      } else if (res.status === 500) {
        toast.error("خطای سرور");
      } else if (res.status === 201) {
        toast.success("رمز عبور با موفقیت تغییر گردید");
        router.push("/login");
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-secondary to-primary p-5">
      <div
        data-aos="fade-up"
        className="sm:w-1/4 w-full p-5 rounded-tr-lg bg-slate-50 rounded-bl-lg shadow-xl flex flex-col gap-3"
      >
        <h2 className="font-bold text-primary text-xl mb-3">
          بازیابی رمز عبور
        </h2>
        <Input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="رمز عبور جدید"
          className="bg-transparent"
        />
        <Input
          type="password"
          value={passConfirm}
          onChange={(e) => setPassConfirm(e.target.value)}
          placeholder="تکرار رمز عبور"
          className="bg-transparent"
        />
        <p className="text-red-500 px-3">{err && err}</p>
        <Button onClick={resetPasswordHandler}>
          {loading ? (
            <CircleDashed className="animate-spin" strokeWidth={1.1} />
          ) : (
            "ذخیره"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
