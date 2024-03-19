"use client";
import Image from "next/image";
import Link from "next/link";

import { UserDashboardLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="h-screen bg-primary p-4 rounded-lg flex flex-col gap-14 relative ">
      <div className="flex items-center gap-3 p-2 rounded-lg">
        <Image
          alt="profile"
          src={"/images/noavatar.png"}
          height={30}
          width={30}
        />
        <h2 className="text-white font-bold text-sm">
          خوش آمدید امیرحسین عزیز
        </h2>
      </div>
      <ul className="h-full flex flex-col gap-3 text-white">
        {UserDashboardLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1",
                pathName === link.path && "bg-blue-500"
              )}
            >
              <link.icon strokeWidth={1.1} />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="absolute bottom-5 left-5 flex items-center gap-3 bg-blue-800 hover:bg-blue-900">
        <LogOut size={18} strokeWidth={1.1} />
        خروج
      </Button>
    </div>
  );
};

export default SideBar;
