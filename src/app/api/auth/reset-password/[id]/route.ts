import connectToDb from "@/lib/db";
import UserModel from "@/models/User";
import { hash } from "bcryptjs";
import { isValidObjectId } from "mongoose";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { pass } = await req.json();
    const isValid = isValidObjectId(id);
    if (!isValid) {
      return Response.json(
        { msg: "Invalid Id" },
        {
          status: 409,
        }
      );
    }

    connectToDb();

    const hashedPass = await hash(pass, 12);

    await UserModel.findByIdAndUpdate(id, {
      $set: {
        password: hashedPass,
      },
    });

    return Response.json(
      { msg: "Password Updated Successfully" },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { msg: "server error" },
      {
        status: 500,
      }
    );
  }
};
