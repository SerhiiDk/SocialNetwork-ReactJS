import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import s from './Navbar.module.css';

const Navbar = (props) => {
    //debugger
    return (
        <>
            <div className={s.nav}>
                <nav>
                    <ul>
                        <li className={s.item}>
                            <NavLink to="/profile" className={({ isActive }) => (isActive ? s.activeLink : '')}
                            >Profile</NavLink></li>
                        <li className={s.item}>
                            <NavLink className={({ isActive }) => (isActive ? s.activeLink : '')} to="/dialogs">Messages</NavLink></li>
                        <li className={s.item}>
                            <NavLink className={({ isActive }) => (isActive ? s.activeLink : '')} to="/users">Users</NavLink></li>
                        <li className={s.item}>
                            <NavLink to="news" className={({ isActive }) => (isActive ? s.activeLink : '')}>News</NavLink></li>
                        <li className={s.item}>
                            <NavLink to="music" className={({ isActive }) => (isActive ? s.activeLink : '')}>Music</NavLink></li>
                        <li className={s.item}>
                            <NavLink to="setting" className={({ isActive }) => (isActive ? s.activeLink : '')}>Settings</NavLink></li>
                    </ul>
                </nav >
                <Sidebar />
            </div>

        </>
    );
};

export default Navbar;


// <NavLink to="/profile"
// style={({ isActive }) =>
//     isActive ? activeStyle : undefined}
// >Profile</NavLink></li>