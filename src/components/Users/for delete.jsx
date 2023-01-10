// jsx will not work without React
// jsx это js расширениее
//
import React from 'react';
import axios from 'axios';
import Users from './Users';



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }
    updateCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            return this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                updateCurrentPage={this.updateCurrentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        )
    }
}


export default UsersAPIComponent;


