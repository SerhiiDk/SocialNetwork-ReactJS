//reducer - это чистая функция, яка приймае старый state и повертае новий, якщо були изменения


const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UN-FOLLOW-USER";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_PAGE = "SET-TOTAL-PAGE";
const SET_PRELOADER = "SET-PRELOADER";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};


const userReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case FOLLOW_USER:
            // ми скопиравили state и внутреность user.state
            return {
                ...state, users: state.users.map(x => {
                    if (x.id === action.userId) {
                        x.followed = false;
                        return { ...x }
                    }
                    return x;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state, users: state.users.map(x => {
                    if (x.id === action.userId) {
                        x.followed = true;
                        return { ...x }
                    }
                    return x;
                })
            }
        case SET_USERS:
            // склеиваем два массива  
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_TOTAL_PAGE:
            return { ...state, totalUsersCount: action.count }
        case SET_PRELOADER:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
};


export const follow = (userId) => ({ type: FOLLOW_USER, userId: userId });
export const unFollow = (userId) => ({ type: UNFOLLOW_USER, userId: userId });
export const changeCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page: page });
export const setTotalCount = (count) => ({ type: SET_TOTAL_PAGE, count });
export const toogleLoader = (isFetching) => ({ type: SET_PRELOADER, isFetching });
//users from server
export const setUsers = (users) => ({ type: SET_USERS, users: users });


export default userReducer;

