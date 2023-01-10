import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';




class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                // debugger;
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    // debugger;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render() {
        // console.log(this.props);
        // debugger;
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

// const userAuthContainer = connect(mapStateToPropos, { setUserData })(HeaderContainer);


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);