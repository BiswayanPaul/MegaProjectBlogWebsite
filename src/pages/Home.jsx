import React, { useEffect, useState } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService.getPosts().then((data) => {
      if (data && data.rows) {
        setPosts(data.rows);
      } else {
        setPosts([]);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest Posts
        </h1>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">No posts available at the moment.</p>
          </div>
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

export default Home;
