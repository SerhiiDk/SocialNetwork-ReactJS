import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import unKnow from './../img/unknow.jpeg';
import s from './User.module.css';
import axios from 'axios';


const Users = (props) => {
    //debugger;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    };
    // console.log(props.users);
    return (
        <div>
            <div className={s.pages}>
                {
                    pagesArray.map(item => {
                        return (<span onClick={() => props.updateCurrentPage(item)}
                            className={props.currentPage === item ? s.selectedPage : 'null'} >
                            { item}
                        </span>)
                    })
                }
            </div>
            {
                props.users.map(x =>
                    <div key={x.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + x.id}>
                                    <img src={x.photos.small != null ? x.photos.small : unKnow} className={s.avatar} />
                                </NavLink>
                            </div>
                            <div>
                                {
                                    x.followed ?
                                        <button onClick={() => {
                                            props.follow(x.id);
                                            // console.log(x, 'follow');
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${x.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "1531be89-0e4c-4394-98ef-89f9713bc797"
                                                }
                                            }).then(response => {
                                                // debugger
                                                if (response.data.resultCode === 0) {
                                                    props.follow(x.id);
                                                }
                                            });

                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            // props.unFollow(x.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${x.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "1531be89-0e4c-4394-98ef-89f9713bc797"
                                                }
                                            }).then(response => {
                                                //debugger;
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(x.id)
                                                }
                                            });

                                        }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <div>{x.name}</div>
                            <div>{x.status}</div>
                        </span>
                    </div>
                )
            }
        </div >
    );
}


export default Users;