import { USER_INFO_SUCCESS, USER_INFO_REQUEST } from '../constants/users';

const initialState = {
    profile: []
};

export default function GetQuestInfo(state = initialState, action) {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return Object.assign({}, state, {
                profile: action.profile
            });
        case USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                profile: action.profile
            });
        default:
            return state;
    }
}
