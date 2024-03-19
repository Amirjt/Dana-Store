"use client";
import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Input } from "../ui/input";

import { headerLinks } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "sonner";
import useSession from "@/custom/useSession";

const Header = () => {
  const { session } = useSession();
  const pathName = usePathname();

  const signoutHandler = async () => {
    const res = await fetch("/api/auth/logout");
    if (res.status === 200) {
      toast.success("خروج با موفقیت انجام شد");
      location.reload();
    }
  };

  return (
    <header className="flex items-center justify-between sm:mt-3 rounded-lg shadow-lg p-4">
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu strokeWidth={1.2} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>فروشگاه دانا</SheetTitle>
              <SheetDescription>
                نهایت لذت را از خرید خود بهره مند شوید
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col items-center gap-4 py-5 font-semibold text-primary text-lg">
              {headerLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Link
        className="font-bold text-2xl text-primary hover:text-blue-400 duration-300"
        href={"/"}
      >
        فروشگاه دانا
      </Link>
      <div className="hidden sm:flex items-center gap-5 font-semibold text-primary">
        {headerLinks.map((link) => (
          <Link
            className={cn(
              "duration-200 hover:-translate-y-1 px-2 py-1 rounded-lg",
              link.path === pathName ? "bg-primary text-white" : ""
            )}
            key={link.id}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Input size={10} type="text" placeholder="جستجو" />
        </div>
        {session.status !== "" && session.status === "authenticated" ? (
          <div className="ml-3 sm:ml-6 text-primary cursor-pointer relative group">
            <div className="flex items-center gap-1">
              <Image
                width={35}
                height={35}
                alt="avatar"
                src={"/images/noavatar.png"}
              />
            </div>
            <div className="z-[1000] invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200 absolute w-[145px] top-14 left-0 bg-white p-3 shadow-lg rounded-lg flex flex-col gap-3">
              <Link href={"/p-user"}>جزئیات حساب</Link>
              <Link href={"/p-user/wishlist"}>علاقه مندی ها</Link>
              <Link href={"/p-user/cart"}>سبد خرید</Link>
              <Link href={"/p-user/comments"}>نظرات ثبت شده</Link>
              <Link href={"/p-user/tickets"}>تیکت ها</Link>
              <Button variant={"destructive"} onClick={signoutHandler}>
                خروج
              </Button>
            </div>
          </div>
        ) : (
          <>
            {session.status !== "" && (
              <Link
                className="text-primary ml-3 sm:ml-6 font-semibold"
                href={"/login"}
              >
                ثبت نام / ورود
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
