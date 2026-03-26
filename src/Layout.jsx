import React from 'react';
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;