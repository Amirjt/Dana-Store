import UserModel from "@/models/User";
import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import connectToDb from "./db";

const authUser = async () => {
  const token = cookies().get("token")?.value;
  let user = null;
  if (token) {
    const tokenPayLoad = verify(
      token,
      process.env.SECRET_KEY || ""
    ) as JwtPayload;
    if (tokenPayLoad) {
      connectToDb();
      user = await UserModel.findOne({ email: tokenPayLoad.email });
    }
  }
  return user;
};

export default authUser;
