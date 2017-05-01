import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from '../constants/comments';

const initialState = {
    comments: []
};

export default function RegisterUser(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return Object.assign({}, state, {
                comments: action.comments
            });
        case GET_COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                comments: action.comments
            });
        default:
            return state;
    }
}
