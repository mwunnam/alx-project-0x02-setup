import React from 'react';
import { PostCardProps } from "@/interfaces";


const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition mb-4 bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{content}</p>
      <span className="text-sm text-gray-400">User Id: {userId}</span>
    </div>
  );
};

export default PostCard;
