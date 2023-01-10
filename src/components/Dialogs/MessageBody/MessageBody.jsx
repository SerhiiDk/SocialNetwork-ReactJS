import React, { Component } from 'react';
import s from './../Dialogs.module.css';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/dialogs-reducer.js'


const Communication = (props) => {
    let test = props;
    //console.log(test);
    //debugger;
    const messegeElement = React.createRef();
    let updateNewMessage = () => {
        let text = messegeElement.current.value;
        // debugger;
        props.updateMessage(text);
    }

    let addMessage = () => {
        props.addMessage();

    }

    // console.log(props)
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Type a message"
                    value={props.messageValue}
                    ref={messegeElement}
                    onChange={updateNewMessage}

                />
            </div>

            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>

    );
};

export default Communication;