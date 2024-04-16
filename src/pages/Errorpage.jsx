import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Errorpage = () => {

    const error = useRouteError()
if  (isRouteErrorResponse(error)){
    return (
        <div>
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
