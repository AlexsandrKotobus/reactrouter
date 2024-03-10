import React from 'react';
import {Link, Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/cont">Contact</Link>
    </header>
    <main className='container'>
        <Outlet />
    </main> 
       
        <footer className='footer'>2021</footer>
        </>
        

    );
}

export default Layout;