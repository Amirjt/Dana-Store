import "@/app/globals.css";
import AOSInit from "@/components/modules/AOSInit";
import PhoneMenu from "@/components/modules/PhoneMenu";
import SideBar from "@/components/templates/UserPanel/SideBar";
import { Metadata } from "next";

import { UserDashboardLinks } from "@/lib/constants";
import authUser from "@/lib/authUser";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "پنل کاربری",
  description: "پنل کاربری کاربر",
};

export default async function UserPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await authUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <html lang="fa" dir="rtl">
      <body>
        <AOSInit />
        <section className="w-full flex items-stretch gap-3 p-3">
          <div
            data-aos="zoom-in-left"
            className="hidden md:block w-3/12 bg-blue-600 rounded-lg"
          >
            <SideBar />
          </div>
          <div
            data-aos="fade-up"
            className="w-full p-3 bg-slate-100 rounded-lg relative"
          >
            <PhoneMenu links={UserDashboardLinks} />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
