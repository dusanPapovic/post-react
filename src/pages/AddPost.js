import React, { useState,useEffect } from "react";
import PostsService from "../services/PostsService";
import { useHistory,useParams } from "react-router-dom";

function AddPost() {
    const history = useHistory();
    let { id } = useParams();

  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
  });

  const resetInputs = (e) => {
    e.preventDefault();
    setNewPost({
      ...newPost,
      title: "",
      text: "",
    });
  };

  const addNewPost = (e) => {
    e.preventDefault();

    if (id) {
    PostsService.edit(id, newPost).then((data) => {
          console.log(data);
          history.push("/posts");
        });
      }

    PostsService.add(newPost).then((data) => {
      console.log(data);
      history.push("/posts");
    });
  };

  useEffect(() => {
    if (id) {
        PostsService.get(id).then((data) => {
            setNewPost(data);
      });
    }
  }, []);

  return (
    <div className="container">
      <form onSubmit={addNewPost}>
      <div className="form-group">
        <input
          required
          minLength="2"
          type="text"
          value={newPost.title}
          placeholder="Title"
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
        </div>
        <div className="form-group">
        <input
          required
          maxLength="300"
          type="text"
          value={newPost.text}
          placeholder="Text place"
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
</div>
        <button className="btn btn-warning" onClick={(e) => resetInputs(e)}>Reset</button>
        <button type="submit" className="btn btn-primary">{id>0 ?"Edit post":"Add new post"}</button>
      </form>
    </div>
  );
}

export default AddPost;