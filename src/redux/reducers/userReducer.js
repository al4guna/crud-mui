import { LOGIN, LOGOUT } from '../types/userType';

const initialState = {
    user: {},
    token: '',
    login: false
};

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                user : action.payload.user,
                login: action.payload.login,
                token : action.payload.token
            }
        case LOGOUT :
            return initialState
        default :
            return state
    }
};
