import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post ? post.title : "",
        content: post ? post.content : "",
        slug: post ? post.slug : "",
        status: post ? post.status : "draft",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;

        const dbPost = await appwriteService.createPost({
          ...data,
          featuredImage: fileId,
          userId: userData.$id,
        });

        console.log("Created Post:", dbPost);

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        const slug = slugTransform(value.title, { shouldValidate: false });
        setValue("slug", slug);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6 bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto"
    >
      <Input
        label="Title"
        type="text"
        placeholder="Post Title"
        {...register("title", { required: true })}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <Input
        label="Slug"
        type="text"
        placeholder="post-slug-example"
        {...register("slug", { required: true })}
        onInput={(e) => {
          setValue("slug", slugTransform(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <RTE
        name="content"
        label="Content"
        control={control}
        defaultValue={post ? post.content : ""}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <div className="space-y-2">
        <Input
          label="Featured Image"
          type="file"
          accept="image/*"
          {...register("image", { required: !post })}
          className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        {post && (
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="mt-4 w-60 h-60 object-cover rounded-lg shadow-sm border"
          />
        )}
      </div>

      <Select
        label="Status"
        options={["active", "inactive"]}
        {...register("status", { required: true })}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
      >
        {post ? "Update Post" : "Create Post"}
      </Button>
    </form>
  );
}

export default PostForm;
