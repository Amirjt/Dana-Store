import connectToDb from "@/lib/db";
import UserModel from "@/models/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const POST = async (req: Request) => {
  try {
    connectToDb();
    const { identifier, password } = await req.json();

    if (!identifier.trim() || !password.trim()) {
      return Response.json(
        { msg: "Invalid Credentials" },
        {
          status: 409,
        }
      );
    }

    const user = await UserModel.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user) {
      return Response.json(
        { msg: "User not found" },
        {
          status: 404,
        }
      );
    }

    if (user.isbanned) {
      return Response.json(
        { msg: "User is Banned" },
        {
          status: 403,
        }
      );
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return Response.json(
        { msg: "Email or Password is not valid" },
        {
          status: 422,
        }
      );
    }

    const token = sign({ email: user.email }, process.env.SECRET_KEY || "");

    return Response.json(
      { msg: "User Loged in Successfully" },
      {
        headers: {
          "Set-Cookie": `token=${token};httpOnly=true;path=/`,
        },
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { msg: error },
      {
        status: 500,
      }
    );
  }
};
