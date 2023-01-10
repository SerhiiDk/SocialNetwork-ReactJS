import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateActionCreator } from './../../../redux/profile-reducer.js'


const MyPosts = (props) => {
    //debugger;
    let postElement = props.posts.map(item => { return (<Post key={item.id} message={item.message} likesCount={item.likesCount} />) });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    >
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div >
            <div className={s.posts} >
                {postElement}
            </div>
        </div >

    );
}

export default MyPosts;