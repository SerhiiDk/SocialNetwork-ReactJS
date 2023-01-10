import React, { Component } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item} >
                <div className={s.avatar}></div>
                {props.message}
            </div>
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>



    );
}

export default Post;