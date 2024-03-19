import RegisterForm from "@/components/templates/Register/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام در فروشگاه دانا",
  description: "ثبت نام در فروشگاه دانا",
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
