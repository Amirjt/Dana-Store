import "@/app/globals.css";
import AOSInit from "@/components/modules/AOSInit";
import PhoneMenu from "@/components/modules/PhoneMenu";
import SideBar from "@/components/templates/AdminPanel/SideBar";
import authUser from "@/lib/authUser";
import { AdminDashboardLinks } from "@/lib/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "داشبورد ادمین",
  description: "پنل ادمین",
};

export default async function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await authUser();

  if (!user || user.role !== "ADMIN") {
    return redirect("/");
  }

  return (
    <html lang="fa" dir="rtl">
      <body>
        <AOSInit />
        <Toaster
          dir="rtl"
          theme="light"
          richColors
          position="top-right"
          style={{
            fontFamily: "Dana",
          }}
        />
        <section className="w-full flex gap-3 p-3">
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
            <PhoneMenu links={AdminDashboardLinks} />
            <div className="mt-8 p-4 sm:mt-0 sm:p-2">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
