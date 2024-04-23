import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Errorpage = () => {
// возвращает объект ошибки - тот, что на уровне возникновения ошибки мы прописали
//то есть Response из асинх.функции из Blogpage: throw new Response('',{ststus: res.status, statusText: 'Not found'} 

    const error = useRouteError()
if  (isRouteErrorResponse(error)){
    return (
        <div>
            {/* ожидаемые поля  */}
           <h1>{error.status}</h1> 
           <h2>{error.data.message || "Что то пошло не так... "}</h2>
           <h3>{error.data.reason}</h3>
        </div>
    );

}
// return <div><Errorpage/></div>
// return <div>"Что то пошло не так... "</div>
throw error

    
}

export default Errorpage;
