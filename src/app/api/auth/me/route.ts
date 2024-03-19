import connectToDb from "@/lib/db";
import userModel from "@/models/User";
import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const GET = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return Response.json(
      { message: "Invalid token" },
      {
        status: 404,
      }
    );
  }

  try {
    if (token) {
      connectToDb();
      const verified = verify(token, process.env.SECRET_KEY || "");

      if (!verified) {
        return Response.json(
          { message: "unauthenticated" },
          {
            status: 401,
          }
        );
      }

      const user = await userModel.findOne({
        email: (verified as JwtPayload)?.email,
      });

      return Response.json(user, {
        status: 200,
      });
    }
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "An error occurred" },
      {
        status: 500,
      }
    );
  }
};
