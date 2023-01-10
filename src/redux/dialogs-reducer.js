const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messageData: [{
        id: 1,
        message: 'Hi',
    },

    {
        id: 2,
        message: 'How are u?',
    },
    {
        id: 3,
        message: 'Yo',
    },
    {
        id: 4,
        message: 'IT-kamasutra',
    },
    {
        id: 5,
        message: 'Reack tutorial',
    },
    {
        id: 6,
        message: 'Add new component',
    }
    ],
    newMessageText: " ",
    dialogsData: [{
        id: 1,
        name: 'Dima',
    },

    {
        id: 2,
        name: 'Andrey',
    },
    {
        id: 3,
        name: 'Pasha',
    },
    {
        id: 4,
        name: 'Mads',
    },
    {
        id: 5,
        name: 'Sasha',
    }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    // копировать нужно то, что мы планируем изменить.

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: "",
            }
            // stateCopy.messageData = [...state.messageData];
            // stateCopy.messageData.push(newMessage); 
            // stateCopy.newMessageText = "";
            // return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
            // stateCopy.newMessageText = action.newText;
            // return stateCopy;
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: message });


export default dialogsReducer;