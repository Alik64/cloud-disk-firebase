
const SET_USER = "userReducer_SET_USER"
const TOGGLE_LOADING = "user_reducer_TOGGLE_LOADING"

let initialState = {
    currentUser: null,
    loadingData: true
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USER: {
            return { ...state, currentUser: action.payload };
        }
        case TOGGLE_LOADING: {
            return { ...state, loadingData: action.payload };

        }

        default:
            return state;
    }
};


// Action creators

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});
export const toggleLoading = (bool) => ({
    type: TOGGLE_LOADING,
    payload: bool
});

