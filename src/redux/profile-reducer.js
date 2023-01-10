
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    postData: [
        { id: 1, message: "Hello, how a u?", likesCount: 14 },
        { id: 2, message: "My first post", likesCount: 10 },
        { id: 3, message: "My second post", likesCount: 5 },
        { id: 4, message: "This post for testing", likesCount: 13 },
    ],
    newPostText: "",
    profileInfo: null,

};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likesCount: 34
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }

            // let stateCopy = { ...state };
            // stateCopy.postData = [...state.postData];
            // stateCopy.postData.push(newPost);
            // stateCopy.newPostText = "";
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            {
                return {
                    ...state,
                    newPostText: action.newText
                }
                // let stateCopy = { ...state };
                // stateCopy.postData = [...state.postData];
                // stateCopy.newPostText = action.newText;
                // console.log(action);

                // debugger;
                return stateCopy;
            }
        case SET_USER_PROFILE: {
            return { ...state, profileInfo: action.profile }
        }

        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
//console.log(initialState);

export default profileReducer;