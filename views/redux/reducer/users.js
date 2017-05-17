import { USER_INFO_SUCCESS, USER_INFO_REQUEST } from '../constants/users';

const initialState = {
    profile: [],
    profileFetching: true
};

export default function GetQuestInfo(state = initialState, action) {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return Object.assign({}, state, {
                profile: action.profile,
                profileFetching: true
            });
        case USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                profile: action.profile,
                profileFetching: false
            });
        default:
            return state;
    }
}
