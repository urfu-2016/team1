import {
    QUEST_INFO_REQUEST,
    QUEST_INFO_SUCCESS,
    QUEST_INFO_ERROR,
    TASKS_REQUEST,
    TASKS_SUCCESS,
    TASKS_ERROR,
    QUEST_DELETE_SUCCESS,
    QUEST_DELETE_REQUEST,
    REQUEST_QUESTS_BY_AUTHOR,
    SUCCESS_QUESTS_BY_AUTHOR,
    ERROR_QUESTS_BY_AUTHOR,
    QUESTS_IN_PROGRESS_REQUEST,
    QUESTS_IN_PROGRESS_SUCCESS,
    QUESTS_IN_PROGRESS_ERROR
} from '../constants/questinfo';

const initialState = {
    questInfo: [],
    questTask: [],
    questDelete: false,
    quests: [],
    questsInProgress: []
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
        case REQUEST_QUESTS_BY_AUTHOR:
            return Object.assign({}, state, {
                quests: action.quests
            });
        case SUCCESS_QUESTS_BY_AUTHOR:
            return Object.assign({}, state, {
                quests: action.quests
            });
        case ERROR_QUESTS_BY_AUTHOR:
            return Object.assign({}, state, {
                quests: action.error
            });
        case QUESTS_IN_PROGRESS_REQUEST:
            return Object.assign({}, state, {
                questsInProgress: action.questsInProgress
            });
        case QUESTS_IN_PROGRESS_SUCCESS:
            return Object.assign({}, state, {
                questsInProgress: action.questsInProgress
            });
        case QUESTS_IN_PROGRESS_ERROR:
            return Object.assign({}, state, {
                questsInProgress: action.error
            });
        default:
            return state;
    }
}
