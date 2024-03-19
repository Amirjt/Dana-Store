import { emailRegex } from "@/lib/helpers";
import UserModel from "@/models/User";
import connectToDb from "@/lib/db";
import { sign } from "jsonwebtoken";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    connectToDb();
    const { email } = await req.json();

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          msg: "Invalid Email Address",
        },
        {
          status: 403,
        }
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json(
        {
          msg: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const token = sign({ email: user.email }, process.env.SECRET_KEY || "", {
      expiresIn: "1h",
    });

    let config = {
      service: "gmail",
      auth: {
        user: "emirhossein1383@gmail.com",
        pass: "zyohdqtcsxevnvjt",
      },
    };

    let transporter = nodemailer.createTransport(config);

    let message = {
      from: "emirhossein1383@gmail.com",
      to: user.email,
      subject: "Reset your password",
      text: `localhost:3000/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(message);

    return Response.json({
      msg: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
