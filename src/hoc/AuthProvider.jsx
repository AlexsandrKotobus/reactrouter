import {createContext,  useState} from 'react';
//создаем контекст,с начальным значением null
export const AuthContext = createContext(null);
//компонент-провайдер, принимающий children 
export const  AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

// метод зарегистрироваться
const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
}
// метод закрыть регистрацию
//функция принимает  колбек, а узер = null
const signout = (cb) => {
    setUser(null);
    cb();
}
// value - объект пользователь и методы
const value = {user, signin, signout}
// console.log(user, signin, signout)
//
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
}


