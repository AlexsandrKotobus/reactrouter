import React from 'react';
import { /*useParams,*/ useActionData, useLoaderData, useNavigation} from 'react-router-dom';
import UpdatePost from '../components/UpdatePost';

const Editpost = () => {
    // const {id} = useParams();
    // возвращает message: `Post ${updatePost.id} was successfully updated`}
    const data = useActionData()
    console.log(data)
    const {post, id} = useLoaderData()
    const navigation = useNavigation()
    return (
        <div>
            {data?.message && <div style={{color: 'blue'}}>{data.message}</div>}
            <h1>Edit post {id}</h1>
            <UpdatePost {...post} submitting={navigation.state ==='submitting'}/>
        </div>
    );
}
//функция отправки на сервер
const updatePost = async (post)=> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    console.log('ressss ', res)
    return res.json()
}

const updatePostAction = async ({request})=>{
    const formData = await request.formData();
    if(!formData.get('title') || !formData.get('body')){
        return {message: 'All field are required!!!'}
    }
    const updatedPost = await updatePost(formData)
return {message: `Post ${updatedPost.id} was successfully updated`}
}

export  {Editpost, updatePostAction};
