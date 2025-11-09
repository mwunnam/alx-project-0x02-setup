import Header from "@/components/layout/Header";
import React, { useEffect, useState } from 'react';
import PostCard from "@/components/common/PostCard";
import { PostCardprops } from '@/interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostCardprops[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        const formattedPosts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

  fetchPosts();
  }, []);


  if (loading) {
  return <p className="text-center mt-10">Loading posts...</p>
}

  return (
    <main>
      <Header />
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </main>
  );
}
