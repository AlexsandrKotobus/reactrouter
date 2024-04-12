import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {Route, Navigate, RouterProvider, createBrowserRouter, 
  createRoutesFromElements } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import {Blogpage, blogLoader} from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import {Singlepage, postLoader} from "./pages/Singlepage";
import Creativepost from "./pages/Creativepost";
import Editpost from "./pages/Editpost";
import LoginPage from "./pages/Loginpage";

import Layout from "./components/Layout";
import Newpage from "./pages/Newpage";
import {RequireAuth} from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

// создадим роутер - это объект, 
//внутри хелпера createBrowserRouter описываем объект или 
//создаем роутер из элементов 
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<Layout/>}>
    {/*  все адреса начинаются не со слеша */}
    <Route index element={<Homepage/>}/>
    {/* вложенный роут */}
    <Route path="about" element={<Aboutpage/>}>
      {/* <Route path='contact' element={<p>Our contact</p>}/> */}
      <Route path='/about/contact' element={<p>Our contact</p>}/>
      
      <Route path='team' element={<p>Our team </p>}/>
    </Route>
    <Route path="about-us" element={<Navigate to="/about" replace/>}/>
    {/* +loader */}
    <Route path="posts" element={<Blogpage/> } loader={blogLoader}/>
    <Route path="posts/:id" element={<Singlepage/>} loader={postLoader}/>
    <Route path="posts/:title" element={<Newpage/>}/>
    <Route path="posts/:id/edit" element={<Editpost/>}/>
  {/* Приватный роут */}
    <Route path="posts/new" element={
      <RequireAuth>
        <Creativepost />
      </RequireAuth> 
      }/>

    <Route path="login" element={<LoginPage/>}/>
    <Route path="*" element={<Notfoundpage/>}/>
  </Route>

))

function App() {
  // перезагрузка
//   window.addEventListener('beforeunload', (event) => {
//     event.preventDefault();
//     event.returnValue = '';
//   });


  
  return (
    <>
    <div>
      <h1>Get start with React-Router 6</h1>
    </div>
    {/*  */}
    <AuthProvider>
      {/* монтируем наш новый роутер */}
        <RouterProvider router={router}/>
    </AuthProvider>
    
    {/* <a href='/page'>ссылка на page = перезагрузка</a> */}
    </>
  )
}

export default App;

