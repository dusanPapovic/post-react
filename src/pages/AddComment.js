import React, { useState} from "react";
import PostsService from "../services/PostsService";


function AddComment({addNewComment}) {

    const [newComment, setNewComment] = useState({
        text: "",
      });

    //   const addNewComment = (e) => {
    //     e.preventDefault();
    
    //     PostsService.addComment(newComment,post_id).then((data) => {
    //       console.log(data);
    //     });
    //   };

  return (
    <div className="container">
      <form onSubmit={(e)=>addNewComment(e,newComment)}>
      <div className="form-group">
        <input
          required
          type="text"
          value={newComment.text}
          placeholder="Text"
          onChange={({ target }) =>
            setNewComment({ ...newComment, text: target.value })
          }
        />
        </div>
        <button type="submit" className="btn btn-primary">Add comment</button>
      </form>
    </div>
  );
}

export default AddComment;