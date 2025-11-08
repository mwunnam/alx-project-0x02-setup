import { useState, FormEvent } from 'react';
import { CardProps } from "@/interfaces";

interface PostModalProps {
  isOpen: boolean;
  onClose: () =>void;
  onAddPost: (post: CardProps) => void;
}

export default function PostModal({isOpen, onClose, onAddPost }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  if (!isOpen) return null;
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddPost({title, content });
    setTitle("");
    setContent("");
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-1g w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full border rounded-md p2 focus:ring focus:ring-blue-300 placeholder=Enter title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={content} 
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full border rounded-md p-2 focus:ring focus:ring-blue-300" 
              placeholder="Enter Content" 
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-3">
            <button 
              type="button"
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-2 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-2 py-2"

            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>

  );

}
