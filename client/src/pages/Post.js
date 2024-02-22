import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const Post = () => {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({})

    useEffect (() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObject(res.data);
        })
    })
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

        </div>
    </div>
  )
}

export default Post