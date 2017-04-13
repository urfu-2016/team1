import { ALL_QUESTS_REQUEST, ALL_QUESTS_SUCCESS, ALL_QUESTS_ERROR } from '../constants/allquests';
import { SOME_QUESTS_REQUEST, SOME_QUESTS_SUCCESS, SOME_QUESTS_ERROR} from '../constants/somequests';
import { SET_SPINNER, REMOVE_SPINNER } from '../constants/spinner';

const initialState = {
    isFetching: false,
    quests: [],
    success: false,
    error: false
};

export default function GetQuests(state = initialState, action) {
    switch (action.type) {
        case ALL_QUESTS_REQUEST:
            return Object.assign({}, state, {
                quests: action.quests,
                success: false
            });
        case ALL_QUESTS_SUCCESS:
            return Object.assign({}, state, {
                quests: action.quests,
                success: true,
                isFetching: false
            });
        case SOME_QUESTS_REQUEST:
            return Object.assign({}, state, {
                quests: action.quests,
                success: false,
                error: false
            });
        case SOME_QUESTS_SUCCESS:
            return Object.assign({}, state, {
                quests: action.quests,
                success: true,
                isFetching: false,
                error: false
            });
        case SOME_QUESTS_ERROR:
            return Object.assign({}, state, {
                error: true,
                isFetching: false
            });
        case SET_SPINNER:
            return Object.assign({}, state, {
                isFetching: !state.success && action.spinner && !state.error
            });
        default:
            return state;
    }
}
