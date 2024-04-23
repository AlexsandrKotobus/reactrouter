import React from 'react';
import {Link, useSearchParams, useLoaderData, json, Await } from 'react-router-dom'
import BlogFilter from '../components/BlogFilter';
import { Suspense } from 'react';

const Blogpage = () => {
    //из blogLoader, через App.jsx в параметре loader={blogLoader}
    //posts делаем объектом
const {posts} = useLoaderData()

// поиск
const [searchParams, setSearchParams] = useSearchParams();
//URL.ru/post?post=abc&data=*** - так будет выглядеть ссылка
const postQuery = searchParams.get('post') || '';
const latest = searchParams.has('latest');
//80 : 1
const startsFrom = latest ? 95 : 1;


    return (
        <div>
            <h1>BLOOOG </h1>
            <BlogFilter postQuery = {postQuery}  latest={latest} setSearchParams={setSearchParams}/>
            <h2>Our news</h2>
            
            <Link to="/posts/new" style={{margin: '1rem', display: 'inline-block'}}>Add new post</Link>
            {/* так как данных у нас пока нет используем компонент Suspense, Await  */}
            {/* Suspense- для прелоадера, Await - для самого компонента, который наконец загрузился*/}
            <Suspense fallback={<h2>Loading...</h2>}>
                {/*Await c обязательным параметром resolve - чего мы будем дожидаться */}
                {/* ! лоадер может загружать разные ващи, чтото мы можем не ждать */}
                {/*Await resolve={posts} означает, что пока не загрузятся посты показывай то, что задали в Suspense fallback={<h2>Loading...</h2>  */}
                <Await resolve={posts}> 
                    {(resolovedPosts) => (<>
                                {
                                    // + фильтр - проверяет в каждом посту в title есть нужный - includes(postQuery) -  нам поисковый запрос
                                    resolovedPosts.filter(
                                        post => post.title.includes(postQuery) && post.id >= startsFrom,
                                    ).map(post => (
                                        <Link key ={post.id} to={`/posts/${post.id}`}>
                                            <li>{post.title}</li>
                                        </Link>
                                    ))
                                //    console.log({posts})
                                }

                            </>)

                    }
                    
                </Await>
            </Suspense>

           
        </div>
    );
}

async function getPosts(){
    // Ошибка !!!
    //  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // тут был код ошибки - на уровне загрузки
    // if(!res.ok){
    //     перед response обязательно дб new - Мы создаем новую ошибку
    //     throw new Response('',{status: res.status, statusText: 'Not found'} )
    // }
    
    return  res.json()
}

const blogLoader = async () => {
    // проверка ошибки на уровне лоадера
    const posts = getPosts()
    console.log('posts ', posts.length)
    // эту проверку мы создали для вывода ошибки
    // if(!posts.length){
    //     throw json({message: 'Not found', reason: "Wrong URL"}, {status: 404})
    // }
   return ({
    posts
   })
    
}

export  {Blogpage, blogLoader};
