import authUser from "@/lib/authUser";
import connectToDb from "@/lib/db";
import UserModel from "@/models/User";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await authUser();

  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed to delete this Product" },
      {
        status: 405,
      }
    );
  }

  connectToDb();

  const { id } = params;

  await UserModel.findByIdAndDelete(id);

  return Response.json({ msg: "User Deleted" });
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await authUser();

  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed to delete this Product" },
      {
        status: 405,
      }
    );
  }

  connectToDb();

  const { id } = params;
  const { isbanned } = await req.json();

  await UserModel.findByIdAndUpdate(id, {
    $set: {
      isbanned,
    },
  });

  return Response.json({ msg: "User Status Changed" });
};
