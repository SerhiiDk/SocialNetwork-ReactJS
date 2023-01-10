import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        < main className={s.content} >
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </main >
    );
}

export default Profile;