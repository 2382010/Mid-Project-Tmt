import { UseMutateFunction } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Comment {
  body: string;
  postId: number;
  user: {
    id: number;
  };
}

interface CommentFormFields {
  body: string;
  postId: number;
  userId: number;
}

interface CommentFormProps {
  isEdit: boolean;
  mutateFn: UseMutateFunction<any, Error, Comment, unknown>;
  defaultInputData?: Comment;
}

const CommentForm: React.FC<CommentFormProps> = ({ isEdit, mutateFn, defaultInputData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CommentFormFields>();

  useEffect(() => {
    if (defaultInputData) {
      setValue("userId", defaultInputData.user.id);
      setValue("postId", defaultInputData.postId);
      setValue("body", defaultInputData.body);
    }
  }, [defaultInputData, setValue]);

  const submitHandler = (data: CommentFormFields) => {
    if (isEdit && !confirm("Are you sure you want to update this comment?")) return;

    const newComment: Comment = {
      body: data.body,
      postId: data.postId,
      user: {
        id: data.userId,
      },
    };
    mutateFn(newComment);
  };

  return (
    <form className="flex flex-col space-y-6 p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-col">
        <label className="text-lg font-semibold text-gray-700" htmlFor="userId">User ID</label>
        <input type="number" id="userId" {...register("userId", { required: "User ID is required." })} className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
        {errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId.message}</p>}
      </div>
      
      <div className="flex flex-col">
        <label className="text-lg font-semibold text-gray-700" htmlFor="postId">Post ID</label>
        <input type="number" id="postId" {...register("postId", { required: "Post ID is required." })} className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
        {errors.postId && <p className="text-red-500 text-sm mt-1">{errors.postId.message}</p>}
      </div>
      
      <div className="flex flex-col">
        <label className="text-lg font-semibold text-gray-700" htmlFor="body">Comment</label>
        <textarea id="body" {...register("body", { required: "Comment body is required." })} className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 resize-none" rows={4}></textarea>
        {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>}
      </div>
      
      <button type="submit" className={`py-2 px-4 font-bold text-white rounded-lg ${isEdit ? 'bg-blue-500 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-700'}`}>
        {isEdit ? "Save Comment" : "Add Comment"}
      </button>
    </form>
  );
};

export default CommentForm;
