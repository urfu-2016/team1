import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../constants/users';

const initialState = {
    token: null
};

export default function RegisterUser(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return Object.assign({}, state, {
                token: action.token
            });
        default:
            return state;
    }
}
