import { USER_INFO_REQUEST, USER_INFO_SUCCESS } from '../constants/users';

const initialState = {
    user: []
};

export default function GetUserInfo(state = initialState, action) {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return Object.assign({}, state, {
                user: action.user
            });
        case USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
}


