import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    follow, unFollow, setUsers, changeCurrentPage,
    setTotalCount, toogleLoader
} from './../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import s from './User.module.css';
import PreLoader from '../Common/PreLoader';



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toogleLoader(true);
        setTimeout(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            }).then(response => {
                this.props.toogleLoader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
        }, 0);

    }
    updateCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        this.props.toogleLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.toogleLoader(false);
                return this.props.setUsers(response.data.items);
            });

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreLoader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    updateCurrentPage={this.updateCurrentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    isFetching={this.props.isFetching}
                />

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
};
// debugger

// const mapDispatchToProps = (dispatch) => {

//     return {
//         follow: followAC,
//         unFollow: unFollowAC,
//         setUsers: setUserAC,
//         changeCurrentPage: changeCurrentPageAC,
//         setTotalCount: setTotalCountAC,
//         toogleLoader: setPreLoaderAC
//     }
// };
// debugger;

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    changeCurrentPage,
    setTotalCount,
    toogleLoader,
})(UsersAPIComponent);

export default UsersContainer;