import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(useParams());
    const [post, setPost] = useState(null);
    const goBack = () => navigate(-1)
    // const goBack = () => navigate('/blog', 155)
    const goHome = () => navigate('/', {replace: true})

    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);
    
        return (
            <div>
                <button onClick={goBack}>Go back</button>
                {/* bad approach Правильно попасть на конкретную страницу переход по ссылке*/}
                <button onClick={goHome}>Go home</button>
               {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to ={`/posts/${id}/edit`}>Edit this post</Link>
                    <p>(это Singlepage)</p>
                </>
               )}
            </div>
        );
    }


export default Singlepage;
