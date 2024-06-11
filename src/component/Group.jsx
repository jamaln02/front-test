import React, { useState } from "react";
import Post from "./Post";
import PostList from "./PostList";

const Group = ({ group, editGroup, deleteGroup }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    post.id = Date.now();
    setPosts([...posts, post]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="group">
      <h2>{group.name}</h2>
      <p>{group.description}</p>
      <p>{new Date(group.createdAt).toLocaleString()}</p>
      <button onClick={() => editGroup(group)}>Edit</button>
      <button onClick={() => deleteGroup(group.id)}>Delete</button>

      <Post addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default Group;
