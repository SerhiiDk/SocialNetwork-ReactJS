import React, { Component } from 'react';
import loader from './../img/loader.gif';
import s from './Common.module.css';



const PreLoader = (props) => {
    return (
        <div>
            <img src={loader} className={s.preloader} />
        </div>
    )
}


export default PreLoader;