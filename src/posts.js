import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if(posts.length === 0) {
            axios.get('/api/get/allposts')
                .then(res => setPosts(res.data))
                .catch((err) => console.log(err))
        }
    }, [posts])

    return (
        <div>
            <h1>Posts</h1>
                {posts.map(post => {
                    return (
                    <div key={post._id} className="postpreview">
                        <Link to={'/post/'+post._id}>
                            <h2>{post.title}</h2>
                        </Link>
                    </div>)
                })}
        </div>
    )
}

export default Posts;