import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR,
         POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR } from '../constants/comments';

const initialState = {
    comments: []
};

export function GetComments(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return Object.assign({}, state, {
                comments: action.comments
            });
        case GET_COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                comments: action.comments
            });
        case POST_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                comments: [...state.comments, action.comment]
            });
        default:
            return state;
    }
}
