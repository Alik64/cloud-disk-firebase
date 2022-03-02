
const SET_USER = "userReducer_SET_USER"


let initialState = {
    user: {},

}
export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USER: {
            return { ...state, user: action.payload };
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

