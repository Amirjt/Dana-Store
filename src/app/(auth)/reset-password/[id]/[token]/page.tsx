import { verify, JwtPayload } from "jsonwebtoken";
import connectToDb from "@/lib/db";
import UserModel from "@/models/User";
import { redirect } from "next/navigation";
import ResetPasswordForm from "@/components/templates/ResetPassword/ResetPasswordForm";
import { Metadata } from "next";
import { isValidObjectId } from "mongoose";

export const metadata: Metadata = {
  title: "بازیابی رمز عبور",
  description: "بازیابی رمز عبور کاربر",
};

type Props = {
  params: {
    id: string;
    token: string;
  };
};

const ResetPasswordPage: React.FC<Props> = async ({ params }) => {
  let user = null;
  const { token, id } = params;
  const isValid = isValidObjectId(id);
  try {
    const decoded = verify(token, process.env.SECRET_KEY || "");
    connectToDb();
    user = await UserModel.findOne({
      email: (decoded as JwtPayload)?.email,
      _id: id,
    });
  } catch (err) {
    console.log(err);
  }

  if (!user || !isValid) return redirect("/");

  return <ResetPasswordForm id={id} />;
};

export default ResetPasswordPage;
