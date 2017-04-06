import { ALL_QUESTS_REQUEST, ALL_QUESTS_SUCCESS, ALL_QUESTS_ERROR } from '../constants/allquests';
import { SOME_QUESTS_REQUEST, SOME_QUESTS_SUCCESS, SOME_QUESTS_ERROR} from '../constants/somequests';

const initialState = {
    quests: []
};

export default function GetQuests(state = initialState, action) {
    switch (action.type) {
        case ALL_QUESTS_REQUEST:
            return Object.assign({}, state, {
                quests: action.quests
            });
        case ALL_QUESTS_SUCCESS:
            return Object.assign({}, state, {
                quests: action.quests
            });
        case SOME_QUESTS_REQUEST:
            return Object.assign({}, state, {
                quests: action.quests
            });
        case SOME_QUESTS_SUCCESS:
            return Object.assign({}, state, {
                quests: action.quests
            });
        default:
            return state;
    }
}
