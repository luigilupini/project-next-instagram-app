import Image from "next/image";
import { useSession } from "next-auth/react";

import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  return (
    <div className="bg-white border rounded shadow-sm my-7">
      {/* header */}
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          width={100}
          height={100}
          alt="user"
          className="object-contain w-12 h-12 p-1 mr-3 bg-white border rounded-full"
        />
        <p className="flex-1 text-sm font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* center/image */}
      <Image
        src={img}
        width={500}
        height={500}
        alt="background"
        className="object-cover w-full h-full"
      />
      {/* controls/buttons */}
      {session && (
        <div className="flex justify-between p-2 py-4">
          <div className="flex gap-4">
            <HeartIcon className="controlBtn" />
            <ChatBubbleOvalLeftEllipsisIcon className="controlBtn" />
            <PaperAirplaneIcon className="h-6 -rotate-45 controlBtn" />
          </div>
          <BookmarkIcon className="controlBtn" />
        </div>
      )}
      {/* caption */}
      <p className="p-5 text-sm truncate">
        <span className="mr-1 font-bold">{username}:</span>
        {caption}
      </p>
      {/* comments (from firebase) */}
      {/* inputBox */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a comment here!"
            className="flex-1 mx-2 placeholder-gray-500 border-none rounded outline-none placeholder:text-sm focus:ring-0 bg-gray-50"
          />
          <button className="p-1 text-sm font-semibold text-blue-300 transition-all rounded-md hover:text-blue-500 hover:scale-105">
            Post
          </button>
        </form>
      )}
    </div>
  );
}
