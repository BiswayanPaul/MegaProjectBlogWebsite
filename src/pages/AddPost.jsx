import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add a New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
