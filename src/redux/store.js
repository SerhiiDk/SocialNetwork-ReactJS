import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        sidebar: {
            friends: [
                { id: 101, name: "Alex" },
                { id: 102, name: "Maria" },
                { id: 103, name: "John" },
            ]
        },
        profile: {
            postData: [
                { id: 1, message: "Hello, how a u?", likesCount: 14 },
                { id: 2, message: "My first post", likesCount: 10 },
                { id: 3, message: "My second post", likesCount: 5 },
                { id: 4, message: "This post for testing", likesCount: 13 },
            ],
            newPostText: "",

        },
        dialogsPage: {
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
        },

    },
    _callSubscriber() {
        console.log("state is changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;
