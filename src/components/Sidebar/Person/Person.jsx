import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Sidebar.module.css';
import avatar from './../../img/avatarTest.png';



const Person = (props) => {
    const path = "/friends/" + props.state.id;
    return (
        <>
            <div className={s.person}>
                <div className={s.avatar}>
                    <img src={avatar} alt="some person"></img>
                </div>
                <div className={s.name}>
                    <NavLink to={path}>{props.state.name}</NavLink>
                </div>
            </div>
        </>
    );
};


export default Person;