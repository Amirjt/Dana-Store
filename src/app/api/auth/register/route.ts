import connectToDb from "@/lib/db";
import {
  emailRegex,
  numberRegex,
  passwordRegex,
  usernameRegex,
} from "@/lib/helpers";
import UserModel from "@/models/User";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const POST = async (req: Request, res: Response) => {
  try {
    connectToDb();
    const { name, userName, email, number, password } = await req.json();

    if (!usernameRegex.test(userName)) {
      return Response.json(
        { msg: "Invalid username" },
        {
          status: 400,
        }
      );
    } else if (!emailRegex.test(email)) {
      return Response.json(
        { msg: "Invalid username" },
        {
          status: 400,
        }
      );
    } else if (!numberRegex.test(number)) {
      return Response.json(
        { msg: "Invalid username" },
        {
          status: 400,
        }
      );
    } else if (!passwordRegex.test(password)) {
      return Response.json(
        { msg: "Invalid username" },
        {
          status: 400,
        }
      );
    }

    const exisitingUser = await UserModel.findOne({
      $or: [{ username: userName }, { email }, { number }],
    });

    if (exisitingUser) {
      return Response.json(
        { msg: "User already exists" },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await hash(password, 12);
    const token = sign({ email }, process.env.SECRET_KEY || "");

    await UserModel.create({
      name,
      username: userName,
      email,
      number,
      password: hashedPassword,
    });

    return Response.json(
      { msg: "User Created Successfully" },
      {
        headers: {
          "Set-Cookie": `token=${token};httpOnly=true;path=/`,
        },
        status: 201,
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
