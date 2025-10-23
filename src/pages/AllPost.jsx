import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((res) => {
        if (res) setPosts(res.rows);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          All Posts
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.$id}
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPost;
