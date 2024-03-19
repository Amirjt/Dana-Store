import { Button } from "@/components/ui/button";
import { IComment } from "../../AdminPanel/Comments/CommentsTable";

const LatestComments = ({ comments }: { comments: IComment[] }) => {
  return (
    <div className="relative rounded-lg shadow-lg  p-5 flex flex-col gap-3 w-1/2">
      <span className="absolute -top-3 -right-3 p-2 rounded-lg text-white bg-primary">
        <h3>آخرین دیدگاه ها</h3>
      </span>
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="flex flex-col gap-3 bg-slate-200 p-2 rounded-lg"
        >
          <span className="text-xs mt-4">
            {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
          </span>
          <p className="text-sm">{comment.body}</p>
          <span
            className={`${
              comment.isAccepted
                ? "bg-green-500 text-green-800"
                : "bg-red-500 text-red-800"
            } p-2 rounded-lg self-end font-bold text-sm`}
          >
            {comment.isAccepted ? "تایید شده" : "تاییده نشده"}
          </span>
        </div>
      ))}
      <Button>مشاهده همه</Button>
    </div>
  );
};

export default LatestComments;
