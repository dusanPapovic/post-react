import React, { useState, useEffect } from "react";
import PostsService from "../services/PostsService";
import { Link } from "react-router-dom";

function AppPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostsService.getAll().then((data) => {
      setPosts(data);
    });
  }, []);

  const deletePost = (e, id) => {
    e.preventDefault();
    PostsService.delete(id).then((data) => {
      console.log(data);
      const afterDeletePost = posts.filter((post) => post.id !== id);
      setPosts(afterDeletePost);
    });
  };

  return (
    <div className="container">
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            <h3>Title: {post.title}</h3>
            <p>{post.text}</p>
            <div className="row">
            <Link to={`/post/${post.id}`}>View post</Link>
            </div>
            <div className="row">
            <Link to={`/edit/${post.id}`}>Edit</Link>
           </div>
           <div className="row">
           <button className="btn btn-primary" onClick={(e) => deletePost(e, post.id)}>Delete car</button>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppPosts;