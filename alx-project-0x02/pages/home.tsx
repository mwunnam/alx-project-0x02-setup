import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

export default function Home() {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Welcome", content: "This is your first Card!" },
    { title: "About", content: "You can add new posts dynamically below"},
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prev) => [...prev, newPost]);
  };
  return (
    <>
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">  
          <h2 className="text-2xl font-semibold">Posts</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Add New Post
          </button>
        </div>
        <div>
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </>
  );
}

