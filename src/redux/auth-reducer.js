
const SET_AUTH_USER_DATA = "SET_AUTH_USER-DATA";
// const USER_IS_AUTH = "USER_IS_AUTH";



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            // debugger
            return {
                ...state,
                // userId: action.data.id,
                // email: action.data.email,
                // login: action.data.login,
                ...action.data,
                isAuth: true,

            }
        default: {
            return state; //{ ...state, isAuth: "dfsfds" };
        }
    }

};

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } });
export default authReducer;