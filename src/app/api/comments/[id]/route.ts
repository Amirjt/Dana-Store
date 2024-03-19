import authUser from "@/lib/authUser";
import connectToDb from "@/lib/db";
import CommentModel from "@/models/Comment";

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

  await CommentModel.findByIdAndUpdate(id, {
    $set: {
      isAccepted: true,
    },
  });

  return Response.json({ msg: "Comment Accepted" });
};

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

  await CommentModel.findByIdAndDelete(id);

  return Response.json({ msg: "Comment Deleted" });
};
