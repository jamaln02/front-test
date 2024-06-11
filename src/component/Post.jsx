import React, { useState } from "react";

const Post = ({ addPost }) => {
  const [post, setPost] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default Post;
