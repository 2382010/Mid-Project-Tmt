import { Textarea } from '@headlessui/react';
import { UseMutateFunction } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface postFormFields {
  title: string;
  body: string;
  tags: string;
  reactions: reactionType;
  views: number;
  userId: number;
}

interface postDat {
  title: string;
  body: string;
  tags: string[];
  reactions: reactionType;
  views: number;
  userId: number;
}

interface reactionType {
  likes: number,
  dislikes: number
}

interface PostFormElementProps {
  isEdit: boolean;
  mutateFn: UseMutateFunction<any, Error, postDat, unknown>;
  defaultInputData?: postDat;
}

const ArrStringToTextLine = (arrString: string[]) => {
  return arrString.join("\n");
}

const TextLineToArrString = (TextLine: string) => {
  return TextLine.split("\n");
}

const reformatPostFormFields = (postFieldsData: postFormFields) => {
  const reformatedPostDat: postDat = {
    title: postFieldsData.title,
    body: postFieldsData.body,
    tags: TextLineToArrString(postFieldsData.tags),
    reactions: postFieldsData.reactions,
    views: postFieldsData.views,
    userId: postFieldsData.userId
  }
  return reformatedPostDat;
}

const PostForm: React.FC<PostFormElementProps> = (props) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<postFormFields>();

  useEffect(() => {
    if (props.defaultInputData) {
      setValue("title", props.defaultInputData.title);
      setValue("body", props.defaultInputData.body);
      setValue("tags", ArrStringToTextLine(props.defaultInputData.tags));
      setValue("userId", props.defaultInputData.userId);
    }
  }, [props.defaultInputData]);

  const submitHandler = (data: postFormFields) => {
    if (props.isEdit) {
      if (!confirm("Are you sure want to update post data?")) return;

      if (props.defaultInputData?.reactions) {
        data.reactions = {
          likes: props.defaultInputData.reactions.likes,
          dislikes: props.defaultInputData.reactions.dislikes
        }
      }

      if (props.defaultInputData?.views) {
        data.views = props.defaultInputData.views;
      }
    } else {
      data.reactions = {
        likes: 0,
        dislikes: 0
      }
      data.views = 1;
    }

    const reformatedPostDat = reformatPostFormFields(data);
    console.log(reformatedPostDat);
    props.mutateFn(reformatedPostDat);
  }

  return (
    <form className="flex flex-col space-y-5 mx-auto max-w-lg p-5 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-gray-700" htmlFor="userId">User  ID</label>
        <input className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" id="userId" {...register('userId', { required: "User  ID is required." })} />
        {errors.userId && <p className="text-red-500 italic">{errors.userId.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-gray-700" htmlFor="title">Post Title</label>
        <input className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="title" {...register('title', { required: "Post title is required." })} />
        {errors.title && <p className="text-red-500 italic">{errors.title.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-gray-700" htmlFor="body">Post Body</label>
        <Textarea className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[10rem]" id="body" {...register('body', { required: "Post body is required." })} />
        {errors.body && <p className="text-red-500 italic">{errors.body.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-gray-700" htmlFor="tags">Post Tags</label>
        <Textarea className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[10rem]" id="tags" {...register('tags', { required: "Post tags are required." })} />
        {errors.tags && <p className="text-red-500 italic">{errors.tags.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${props.isEdit ? 'bg-blue-500 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-700'}`}
        >
          {props.isEdit ? 'Save Post' : 'Add Post'}
        </button>
      </div>
    </form>
  );
}

export default PostForm;