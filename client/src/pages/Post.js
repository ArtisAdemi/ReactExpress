import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const Post = () => {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect (() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObject(res.data);
        });
        axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
            setComments(res.data);
        });
    }, []);

    const addComment = () => {
        axios.post("http://localhost:3001/comments", {commentBody: newComment, PostId: id}).then((res) => {
            const commentToAdd = {commentBody: newComment};
            setComments([...comments, commentToAdd]);
            setNewComment("");
        });
    };

  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post'>
            <div className='title'>{postObject.title}</div>
            <div className='body'>{postObject.postText}</div>
            <div className='footer'>{postObject.username}</div>
            </div>
        </div>
        <div className="rightSide">
            <div className="addCommentContainer">
                <input type='text' placeholder='Comment...' autoComplete='off' value={newComment}  onChange={(event) => {setNewComment(event.target.value)}}/>
                <button onClick={addComment}>Add Comment</button>
            </div>
            <div className="listOfComments">
                {comments.map((comment, key) => {
                    return <div className='comment' key={key}>{comment.commentBody}</div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Post