import React from 'react';
import { NavLink } from 'react-router-dom';
import Communication from './MessageBody/MessageBody';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    // debugger
    let dialogsElements = props.dialogsData.map(item => {
        return (
            <DialogItem key={item.id} name={item.name} id={item.id} />
        );
    });

    let messageElements = props.messageData.map(item => {
        return (
            <Message key={item.id} message={item.message} />
        );
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <Communication
                    addMessage={props.addMessage}
                    updateMessage={props.updateNewMessage}
                    messageValue={props.newMessageText}
                />
            </div>
        </div >
    );
};
export default Dialogs;