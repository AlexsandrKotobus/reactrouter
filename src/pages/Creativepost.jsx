import React from 'react';
import { useAuth } from '../hook/useAuth';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';
import NewPost from '../components/NewPost';

const Creativepost = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation();
    return (
        <div>
            <h1>Create a post</h1>
            <NewPost submitting={navigation.state === 'submitting'}/>
            <button onClick={() => signout(()=> navigate('/', {replace: true}))} > Log out </button>
        </div>
    );
}
// ф-я запроса на сервер - title, body, user - исходя из структуры данных на сервере
const createPost = async ({title, body, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, body, userId})
    })
    const newPost = await res.json( )
return newPost
}


// параметр  request знает все об отправленной форме
const createPostAction = async ({request})=>{
// получаем объект FormDateFormData
    const formData = await request.formData()
    // новый объект  
    const newPost = {
        // названия title, body, userId - должны совпадать с name у form
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId')
    }
    const post = await createPost(newPost)

    return redirect('/posts/' + post.id)
}

export  {Creativepost, createPostAction};
