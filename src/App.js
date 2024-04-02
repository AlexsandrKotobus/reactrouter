import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import Singlepage from "./pages/Singlepage";
import Creativepost from "./pages/Creativepost";
import Editpost from "./pages/Editpost";
import LoginPage from "./pages/Loginpage";

import Layout from "./components/Layout";
import Newpage from "./pages/Newpage";
import {RequireAuth} from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

// перезагрузка
function App() {
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
      <Routes>
          <Route path="/" element ={<Layout/>}>
            <Route index element={<Homepage/>}/>
            {/* вложенный роут */}
            <Route path="about" element={<Aboutpage/>}>
              <Route path='contact' element={<p>Our contact</p>}/>
              <Route path='team' element={<p>Our team </p>}/>
            </Route>
            <Route path="about-us" element={<Navigate to="/about" replace/>}/>
            <Route path="posts" element={<Blogpage name={'with props eeeeeeeeeee'} />}/>
            <Route path="posts/:id" element={<Singlepage/>}/>
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
        </Routes>

    </AuthProvider>
    
    {/* <a href='/page'>ссылка на page = перезагрузка</a> */}
    </>
  )
}

export default App;

