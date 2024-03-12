import { useState, useEffect } from 'react';
import React from 'react';
import {Link} from 'react-router-dom'

const Blogpage = ({name}) => {
const [posts, setPosts] = useState([]);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
}, []);

    return (
        <div>
            <h1>BLOOOG {name}</h1>
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
