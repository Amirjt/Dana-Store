import CommentsTable from "@/components/templates/AdminPanel/Comments/CommentsTable";
import connectToDb from "@/lib/db";
import CommentModel from "@/models/Comment";

const CommentsPage = async () => {
  connectToDb();
  const comments = await CommentModel.find({ isReply: false })
    .sort({ _id: -1 })
    .populate("product")
    .populate("user")
    .lean();
  return (
    <>
      <h2 className="font-bold text-primary text-lg p-3">لیست دیدگاه ها</h2>
      <CommentsTable comments={JSON.parse(JSON.stringify(comments))} />
    </>
  );
};

export default CommentsPage;
