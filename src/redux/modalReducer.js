const CLOSE = "modal_reducer_CLOSE"
const SIGN_IN = "modal_reducer_SIGN_IN"
const SIGN_UP = "modal_reducer_SIGN_UP"

let initialState = {
    modal: {
        signInModal: false,
        signUpModal: false
    }

}
export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case CLOSE: {
            return { ...state, modal: action.payload };
        }
        case SIGN_UP: {
            return { ...state, modal: action.payload };
        }
        case SIGN_IN: {
            return { ...state, modal: action.payload };
        }

        default:
            return state;
    }
};


// Action creators
export const closeModals = () => ({
    type: CLOSE,
    payload: {
        signInModal: false,
        signUpModal: false
    }
});
export const signUp = () => ({
    type: SIGN_UP,
    payload: {
        signInModal: false,
        signUpModal: true
    }
});
export const signIn = () => ({
    type: SIGN_IN,
    payload: {
        signInModal: true,
        signUpModal: false
    }
});

