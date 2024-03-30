import { useState, useEffect } from 'react';
import React from 'react';
import {Link, useSearchParams } from 'react-router-dom'
import BlogFilter from '../components/BlogFilter';

const Blogpage = ({name}) => {
const [posts, setPosts] = useState([]);

// поиск
const [searchParams, setSearchParams] = useSearchParams();
//URL.ru/post?post=abc&data=*** - так будет выглядеть ссылка
const postQuery = searchParams.get('post') || '';
const latest = searchParams.has('latest');
//80 : 1
const startsFrom = latest ? 95 : 1;





useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
}, []);

    return (
        <div>
            <h1>BLOOOG {name}</h1>
            <BlogFilter postQuery = {postQuery}  latest={latest} setSearchParams={setSearchParams}/>
            <h2>Our news</h2>
            
            <Link to="/posts/new">Add new post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom,
                ).map(post => (
                    <Link key ={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
}

export default Blogpage;
