import authUser from "@/lib/authUser";
import connectToDb from "@/lib/db";
import CategoryModel from "@/models/Category";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await authUser();
  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed" },
      {
        status: 405,
      }
    );
  }

  connectToDb();

  const { name } = await req.json();

  await CategoryModel.findByIdAndUpdate(params.id, {
    $set: {
      name,
    },
  });

  return Response.json({ msg: "Category Edited" });
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await authUser();
  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed" },
      {
        status: 405,
      }
    );
  }

  connectToDb();

  await CategoryModel.findByIdAndDelete(params.id);

  return Response.json({ msg: "Category Deleted" });
};
