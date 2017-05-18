const initialState = {
    isChange: false,
    bannerChange: false,
    titleError: false,
    descriptionError: false,
    bannerError: false,
    bannerFetching: false,
    changedTitle: undefined,
    changedDescription: undefined
};


export default function changeQuest(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_QUEST_TITLE_REQUEST':
            return Object.assign({}, state, {
                isChange: false
            });
        case 'CHANGE_QUEST_TITLE_SUCCESS':
            return Object.assign({}, state, {
                isChange: true,
                changedTitle: action.changedTitle
            });
        case 'CHANGE_QUEST_TITLE_ERROR':
            return Object.assign({}, state, {
                isChange: false,
                titleError: true
            });
        case 'CHANGE_QUEST_DESCRIPTION_SUCCESS':
            return Object.assign({}, state, {
                isChange: true,
                changedDescription: action.changedDescription
            });
        case 'CHANGE_QUEST_DESCRIPTION_REQUEST':
            return Object.assign({}, state, {
                isChange: false,
            });
        case 'CHANGE_QUEST_DESCRIPTION_ERROR':
            return Object.assign({}, state, {
                isChange: false,
                descriptionError: false
            });
        case 'CHANGE_QUEST_BANNER_REQUEST':
            return Object.assign({}, state, {
                bannerChange: false,
                bannerError: false,
                bannerFetching: true
            });
        case 'CHANGE_QUEST_BANNER_SUCCESS':
            return Object.assign({}, state, {
                bannerChange: true,
                bannerError: false,
                bannerFetching: false
            });
        case 'CHANGE_QUEST_BANNER_ERROR':
            return Object.assign({}, state, {
                bannerChange: false,
                bannerError: true,
                bannerFetching: false
            });
        default:
            return state;
    }
}
