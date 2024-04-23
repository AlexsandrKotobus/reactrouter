import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {Route, Navigate, createBrowserRouter, 
  createRoutesFromElements } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import {Blogpage, blogLoader} from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import {Singlepage, postLoader} from "./pages/Singlepage";
import {Creativepost, createPostAction} from "./pages/Creativepost";
import {Editpost, updatePostAction} from "./pages/Editpost";
import LoginPage from "./pages/Loginpage";

import Layout from "./components/Layout";
import Newpage from "./pages/Newpage";
import {RequireAuth} from "./hoc/RequireAuth";
// import { AuthProvider } from "./hoc/AuthProvider";
import Errorpage from "./pages/Errorpage";

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
    <Route path="posts" element={<Blogpage/> } loader={blogLoader} errorElement={<Errorpage/>}/>
    <Route path="posts/:id" element={<Singlepage/>} loader={postLoader}/>
    <Route path="posts/:title" element={<Newpage/>} />
    <Route path="posts/:id/edit" element={<Editpost/>} loader={postLoader} action={updatePostAction}/>
  {/* Приватный роут */}
    <Route path="posts/new" element={
      <RequireAuth>
        <Creativepost />
      </RequireAuth> 
      // + проп action = передаст параметр request в Creativepost
     
      } action={createPostAction} />

    <Route path="login" element={<LoginPage/>}/>
    <Route path="*" element={<Notfoundpage/>}/>
  </Route>

))



export default router;

