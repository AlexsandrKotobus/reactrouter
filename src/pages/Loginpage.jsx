import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import  { useAuth }  from '../hook/useAuth';

const LoginPage = () => {
    const navigate = useNavigate();
    // console.log('navigate', navigate)
    const location = useLocation(); //объект локации
    const {signin} = useAuth();
    // console.log('location', location.state)
    // location.state?.from?.pathname || '/';
    // '/posts/new'
    const fromPage =  '/';
    // const fromPage = location.state?.from?.pathname || '/';
console.log('location.state?.from?.pathname',location.state?.from?.pathname)
const handleSubmit = (event)=> {
    event.preventDefault();
    const form = event.target; //получаем форму
    const user = form.username.value;  //инфа о пользователе, через точку нам доступно то имя, что ввел пользователь
    // name предоставляет доступ к ноде username - <input name="username"/>
    //и вызываем функцию signin, которая принимает 2 вещи = пользователя=user, и колбек-функцию 
    //для navigate отпределяем, куда я хочу поехать - это определено в fromPage
    //{replace: true} - чтоб по кнопке назад мы не вернулись на страницу авторизации
    signin(user, () => navigate(fromPage, {replace: true}));
}

    return (
        <div>
            <p>Login page</p>
            
            <form onSubmit ={handleSubmit}>
                <label>
                    Name: <input name="username"/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
