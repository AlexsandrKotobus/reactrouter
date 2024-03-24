import {Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({children}) => {

    console.log('children RequireAuth ',children);
    // получаем сам объект локации
    const location = useLocation();
    // информация об авторизации
    
    const {user} = useAuth;
    // console.log("!!! ", Navigate.location)
// проверка - естьавторизация или нет. Если нет, делаем return компонента Navigate
    if(!user){
        return <Navigate to='/login' state={{from: location}}/>;
    }
    return children;
}

export default RequireAuth;
