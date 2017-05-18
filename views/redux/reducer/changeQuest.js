const initialState = {
    isChange: false
};


export default function changeQuest(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_QUEST_TITLE_REQUEST':
            return Object.assign({}, state, {
                isChange: false
            });
        case 'CHANGE_QUEST_TITLE_SUCCESS':
            return Object.assign({}, state, {
                isChange: true
            });
        case 'CHANGE_QUEST_DESCRIPTION_SUCCESS':
            return Object.assign({}, state, {
                isChange: true
            });
        case 'CHANGE_QUEST_DESCRIPTION_REQUEST':
            return Object.assign({}, state, {
                isChange: false
            });
        case 'CHANGE_QUEST_BANNER_REQUEST':
            return Object.assign({}, state, {
                isChange: false
            });
        case 'CHANGE_QUEST_BANNER_SUCCESS':
            return Object.assign({}, state, {
                isChange: true
            });
        default:
            return state;
    }
}
