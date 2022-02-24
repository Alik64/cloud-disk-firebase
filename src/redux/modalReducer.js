
const SIGN_IN = "modal_reducer_SIGN_IN"
const SIGN_UP = "modal_reducer_SIGN_UP"
const CLOSE = "modal_reducer_CLOSE"

let initialState = {
    signInModal: false,
    signUpModal: false
}
export default function modalReducer(state = initialState, action) {
    switch (action.type) {

        case SIGN_UP: {
            return { ...state, signUpModal: action.payload, signInModal: !action.payload };
        }
        case SIGN_IN: {
            return { ...state, signInModal: action.payload, signUpModal: !action.payload };
        }
        case CLOSE: {
            return { ...state, signInModal: false, signUpModal: false };
        }

        default:
            return state;
    }
};


// Action creators

export const signUpToggle = (bool) => ({
    type: SIGN_UP,
    payload: bool
});
export const signInToggle = (bool) => ({
    type: SIGN_IN,
    payload: bool
});
export const modalClose = () => ({
    type: CLOSE
});
