import React from "react";

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
