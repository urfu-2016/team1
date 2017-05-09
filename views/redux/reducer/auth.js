import { AUTH_INFO_REQUEST, AUTH_INFO_SUCCESS } from '../constants/auth';

const initialState = {
    user: []
};

export default function GetAuthorizationInfo(state = initialState, action) {
    switch (action.type) {
        case AUTH_INFO_REQUEST:
            return Object.assign({}, state, {
                user: action.user
            });
        case AUTH_INFO_SUCCESS:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
}


