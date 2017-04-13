import { QUEST_INFO_REQUEST, QUEST_INFO_SUCCESS, QUEST_INFO_ERROR} from '../constants/questinfo';

const initialState = {
    questInfo: []
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
        default:
            return state;
    }
}
