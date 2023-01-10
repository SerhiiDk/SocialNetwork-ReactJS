import React, { Component } from 'react';
import PreLoader from '../../Common/PreLoader';
import s from './ProfileInfo.module.css';
import unKnow from '../../img//unknow.jpeg';


const ProfileInfo = (props) => {
    console.log('INFO', props);
    if (!props.profile) {
        return <PreLoader />
    }
    return (
        <div>
            <div className={s.main__top}>
                <img src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" alt="image" />
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large == null ? unKnow : props.profile.photos.large} />
                <p>
                    ava + description
                </p>
            </div>
        </div>
    );
}


export default ProfileInfo;