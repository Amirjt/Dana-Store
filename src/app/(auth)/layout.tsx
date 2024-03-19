import "@/app/globals.css";
import AOSInit from "@/components/modules/AOSInit";
import authUser from "@/lib/authUser";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await authUser();

  if (user) {
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
        {children}
      </body>
    </html>
  );
}
