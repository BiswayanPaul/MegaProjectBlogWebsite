import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appWriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    } else {
      navigate("/");
      setLoading(false);
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return post ? (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Edit Post
        </h1>
        <div className="bg-white rounded-xl p-8 shadow-md">
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : (
    <p className="text-center text-gray-500 mt-20">Post not found.</p>
  );
}

export default EditPost;
