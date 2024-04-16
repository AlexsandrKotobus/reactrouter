import { Suspense } from 'react';
import { Link, useNavigate, useLoaderData, Await, useAsyncValue } from 'react-router-dom';
// компонент для post.title и post.body - которые придется ждать
const Post = () => {
    const post = useAsyncValue()
    return (
        <>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
        </>
    )
}
const Comments = ()=> {
    const comments = useAsyncValue();
    
    return (
        <div>
            <h2>Comments</h2>
           
            {
                comments.map(comment => (
                    //я добавила ключ
                    <div key ={comment.id}>
                        <h3>{comment.email}</h3>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

const Singlepage = () => {
  const {post, id, comments} = useLoaderData()
    const navigate = useNavigate();

    const goHome = () => navigate('/', {replace: true})
    
        return (
            <div>
                <button onClick={goHome}>Go home</button>
                {/* тут были post.title и post.body, которые теперь в <Suspense> */}
                <Suspense fallback={<h2>Post is loading...</h2>}>
                    <Await resolve={post}>
                        <Post/>
                    </Await>

                </Suspense>
                <Suspense fallback={<h2>Comments is loading...</h2>}>
                    <Await resolve={comments}>
                        <Comments/>
                    </Await>

                </Suspense>
                    
                    {/* id мы получим сразу, поэтому эта часть без изменений */}
                    <Link to ={`/posts/${id}/edit`}>Edit this post</Link>
                    <p>(это Singlepage)</p>
            </div>
        );
    }
//асинхронная ф-я для постов по id
async function getPostById(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}
//асинхронная ф-я для комметариев к постам по id
async function getCommentsById(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return res.json()
}

    //
    const postLoader = async({ params}) => {
        const id = params.id;
        // post получаем через асинх ф-ю передав в нее id
        // причем посты нужны сразу (снаружи, не переходя на страницу), 
        // комментарии - потом, когда страница уже загружена
        return {post: await getPostById(id), id, comments: getCommentsById(id)}
    }


export {Singlepage, postLoader};
