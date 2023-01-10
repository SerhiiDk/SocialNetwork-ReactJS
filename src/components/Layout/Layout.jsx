import React, { Component } from 'react';
import './Layout.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar'

const Layout = () => {
    return (
        <>
            <div className="app-wrapper">
                <Header />
                <Navbar />

                {/* <div className='app-wrapper-content'>
                     <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/profile" element={<Profile />} /> 
                </div> */}
            </div>
        </>
    )
}

export default Layout;