import { ALL_QUESTS_REQUEST, ALL_QUESTS_SUCCESS, ALL_QUESTS_ERROR } from '../constants/allquests';
import { SOME_QUESTS_REQUEST, SOME_QUESTS_SUCCESS, SOME_QUESTS_ERROR} from '../constants/somequests';
import { QUEST_INFO_REQUEST, QUEST_INFO_SUCCESS, QUEST_INFO_ERROR} from '../constants/questinfo';
import { SET_SPINNER, REMOVE_SPINNER } from '../constants/spinner';
import { USER_INFO_REQUEST, USER_INFO_SUCCESS } from '../constants/users';
import { AUTH_INFO_REQUEST, AUTH_INFO_SUCCESS } from '../constants/auth';
import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from '../constants/comments';

export function GetAllQuests(quests) {
    return (dispatch) => {
        dispatch({
            type: ALL_QUESTS_REQUEST,
            quests: quests
        });

        fetch('/api/quests')
            .then((response) => {
                return response.json()
            })
            .then((user) => {
                dispatch({
                    type: ALL_QUESTS_SUCCESS,
                    quests: user
                });
            });
    }
}

export function GetQuestsByFirstLetters(quests, searchQuery) {
    return (dispatch) => {
        dispatch({
            type: SOME_QUESTS_REQUEST,
            quests: quests
        });

        dispatch({
            type: SET_SPINNER,
            spinner: true
        });

        fetch(`/api/quests/name/${searchQuery}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response.json();
            })
            .catch(err => {
                dispatch({
                    type: SOME_QUESTS_ERROR,
                    error: true
                })
            })
            .then(quests => {
                dispatch({
                    type: SOME_QUESTS_SUCCESS,
                    quests: quests
                })
            });
    }
}

export function GetQuestInfo(id) {
    return dispatch => {
        dispatch({
            type: QUEST_INFO_REQUEST,
            questInfo: []
        });

        fetch(`/api/quests/id/${id}`)
            .then(response => response.json())
            .then(info => {
                dispatch({
                    type: QUEST_INFO_SUCCESS,
                    questInfo: info
                });
            });
    }
}

export function getAuthorizationInfo() {
    return dispatch => {
        dispatch({
            type: AUTH_INFO_REQUEST,
            user: []
        });

        fetch('/api/auth/user', {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(user => {
                dispatch({
                    type: AUTH_INFO_SUCCESS,
                    user: user
                });
                })
    }
}

export function getUserInfo(id) {
    return dispatch => {
        dispatch({
            type: USER_INFO_REQUEST,
            profile: []
            });

        fetch(`/api/users/id/${id}`)
            .then(response => response.json())
            .then(profile => {
                dispatch({
                    type: USER_INFO_SUCCESS,
                    profile: profile
                });
            })
    }
}

export function GetComments(questId) {
    return dispatch => {
        dispatch({
            type: GET_COMMENTS_REQUEST,
            comments: []
        });

        fetch(`/api/comments/quest/${questId}`)
            .then(response => response.json())
            .then(info => {
                dispatch({
                    type: GET_COMMENTS_SUCCESS,
                    comments: info
                })
            });
    };
}

export function PostComment(comment, questId) {
    return dispatch => {
        dispatch({
            type: POST_COMMENT_REQUEST,
            comment: comment
        });

        fetch(`/api/comments/quest/${questId}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({comment})
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: POST_COMMENT_SUCCESS,
                    error: data.error
                })
            });
    }
}
