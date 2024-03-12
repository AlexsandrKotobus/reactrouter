import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {Routes, Route, Link } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import Singlepage from "./pages/Singlepage";
import Creativepost from "./pages/Creativepost";
import Editpost from "./pages/Editpost";
// import Page from "./pages/Page";

import Layout from "./components/Layout";


function App() {
  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
  });


  
  return (
    <>
    <div>
      <h1>Get start with React-Router 6</h1>
    </div>
    <Routes>
      <Route path="/" element ={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="about" element={<Aboutpage/>}/>
        <Route path="posts" element={<Blogpage name={'with props eeeeeeeeeee'} />}/>
        <Route path="posts/:id" element={<Singlepage/>}/>
        <Route path="posts/:id/edit" element={<Editpost/>}/>
        <Route path="posts/new" element={<Creativepost/>}/>
        <Route path="*" element={<Notfoundpage/>}/>
      </Route>
    </Routes>
    <a href='/page'>ссылка на page = перезагрузка</a>
    </>
  )
}

export default App;

