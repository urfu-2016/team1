import { ALL_QUESTS_REQUEST, ALL_QUESTS_SUCCESS, ALL_QUESTS_ERROR } from '../constants/allquests';

const initialState = {
    quests: [],
};

export default function GetAllQuests(state = initialState, action) {
    switch (action.type) {
        case ALL_QUESTS_REQUEST:
            return Object.assign({}, state, {
                quests: action.quests
            });
        case ALL_QUESTS_SUCCESS:
            return Object.assign({}, state, {
                quests: action.quests
            });
        default:
            return state
    }
}
