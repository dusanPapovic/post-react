import React, { useState, useEffect } from "react";
import PostsService from "../services/PostsService";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

function SinglePost() {
  let { id } = useParams();

  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      PostsService.get(id).then((data) => {
        setPost(data);
        console.log('post',post);
      });

      PostsService.getComments(id).then((data) => {
        setComments(data);
      });
    }
    console.log('comments',comments);
    console.log('post',post);
  }, []);

  const addComment = (e,newComment) => {
    e.preventDefault();
console.log(newComment);
    PostsService.addComment(newComment,id).then((data) => {
      console.log(data);
    });
    PostsService.getComments(id).then((data) => {
        setComments(data);
      });

  };

  return (
        <div className="container">
            <h3>Title: {post.title}</h3>
            <p>{post.text}</p>
            <AddComment post_id={id} addNewComment={addComment}/>
            <h3>Comments</h3>
            <p>{comments && comments.length}</p>
            {comments && <ul className="list-group">
            {comments.map((comment) => (
            <li className="list-group-item" key={comment.id}>
            <p>{comment.text}</p>
          </li>
        ))}
        </ul>}
    </div>
  );
}

export default SinglePost;