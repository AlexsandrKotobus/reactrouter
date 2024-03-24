import { useState, useEffect } from 'react';
import React from 'react';
import {Link, useLocation } from 'react-router-dom'

const Blogpage = ({name}) => {
const [posts, setPosts] = useState([]);
// console.log(useLocation());
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
}, []);

    return (
        <div>
            <h1>BLOOOG {name}</h1>
            <h2>Our news</h2>
            <Link to="/posts/new">Add new post</Link>
            {
                posts.map(post => (
                    <Link key ={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
}

export default Blogpage;
