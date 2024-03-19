import authUser from "@/lib/authUser";
import connectToDb from "@/lib/db";
import CategoryModel from "@/models/Category";

export const POST = async (req: Request) => {
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

  await CategoryModel.create({
    name,
  });
  return Response.json(
    { msg: "Category Created" },
    {
      status: 201,
    }
  );
};

export const GET = async () => {
  connectToDb();
  const user = await authUser();
  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed" },
      {
        status: 405,
      }
    );
  }

  const categories = await CategoryModel.find({}).sort({ _id: -1 });
  return Response.json(categories);
};
