import React from 'react';
import { NavLink, Route, Routes, Link } from 'react-router-dom';
import MessageBody from './../MessageBody/MessageBody';
import s from './../Dialogs.module.css';


const DialogItem = (props) => {
    let path = '/dialog/' + props.id;

    let test = () => {
        debugger;
        <Routes>
            <Route exact path={path} element={<MessageBody />} />,
        </Routes>

    };
    return (
        <div className={s.dialog + ' ' + s.active}>
            <Link to={path} onClick={test} element={<MessageBody />}>{props.name}</Link>
            { test}
        </div >
    );
};


export default DialogItem;