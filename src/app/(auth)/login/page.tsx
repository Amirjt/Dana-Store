import LoginForm from "@/components/templates/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود به حساب کاربری",
  description: "ورود به حساب کاربری",
};

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
