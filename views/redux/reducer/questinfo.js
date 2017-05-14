import {
    QUEST_INFO_REQUEST,
    QUEST_INFO_SUCCESS,
    QUEST_INFO_ERROR,
    TASKS_REQUEST,
    TASKS_SUCCESS,
    TASKS_ERROR,
    QUEST_DELETE_SUCCESS,
    QUEST_DELETE_REQUEST
} from '../constants/questinfo';

const initialState = {
    questInfo: [],
    questTask: [],
    questDelete: false
};

export default function GetQuestInfo(state = initialState, action) {
    switch (action.type) {
        case QUEST_INFO_REQUEST:
            return Object.assign({}, state, {
                questInfo: action.questInfo
            });
        case QUEST_INFO_SUCCESS:
            return Object.assign({}, state, {
                questInfo: action.questInfo
            });
        case TASKS_REQUEST:
            return Object.assign({}, state, {
                questTask: action.questTask
            });
        case TASKS_SUCCESS:
            return Object.assign({}, state, {
                questTask: action.questTask
            });
        case QUEST_DELETE_SUCCESS:
            return Object.assign({}, state, {
                questDelete: true
            });
        default:
            return state;
    }
}
