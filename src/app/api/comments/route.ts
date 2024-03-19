import connectToDb from "@/lib/db";
import CommentModel from "@/models/Comment";

export const POST = async (req: Request) => {
  const { body, user, product, rating, isReply, replyFor } = await req.json();

  connectToDb();

  await CommentModel.create({
    body,
    product,
    user,
    isReply,
    replyFor,
    rating,
  });

  return Response.json(
    { msg: "Comment Created" },
    {
      status: 201,
    }
  );
};
