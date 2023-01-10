import React from 'react';
import { NavLink } from 'react-router-dom';
import MessageBody from './MessageBody/MessageBody';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageActionCreator } from './../../redux/dialogs-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    // return obj from state (data from state)
    return {
        dialogsData: state.dialogs.dialogsData,
        messageData: state.dialogs.messageData,
        newMessageText: state.dialogs.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    // return functions from state
    return {
        updateNewMessage: (body) => { dispatch(updateMessageActionCreator(body)) },
        addMessage: () => { dispatch(addMessageActionCreator()) }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;