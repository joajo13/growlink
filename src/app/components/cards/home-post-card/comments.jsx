import { Link } from "@nextui-org/react";

export const Comments = ({comments}) => {
  return (
    <div className="lg:flex flex-col justify-center items-start mt-2 ml-12 gap-1 hidden">
      {comments.map((comment, index) => (
        <div key={index} className="flex justify-start items-center gap-1">
          <Link className="cursor-pointer" color="foreground">
            <span className="text-gray-500 text-sm hover:underline underline-offset-4">
              @{comment.user}:
            </span>
          </Link>
          <p className="text-gray-500 text-sm">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};
