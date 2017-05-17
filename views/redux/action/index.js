import { ALL_QUESTS_REQUEST, ALL_QUESTS_SUCCESS, ALL_QUESTS_ERROR } from '../constants/allquests';
import { SOME_QUESTS_REQUEST, SOME_QUESTS_SUCCESS, SOME_QUESTS_ERROR} from '../constants/somequests';
import { QUEST_INFO_REQUEST, QUEST_INFO_SUCCESS, QUEST_INFO_ERROR, TASKS_REQUEST, TASKS_SUCCESS,
        TASKS_ERROR, PASS_TASK_REQUEST, PASS_TASK_SUCCESS, PASS_TASK_ERROR, FINED_SUCCESS_TASKS } from '../constants/questinfo';
import { SET_SPINNER, REMOVE_SPINNER } from '../constants/spinner';
import { USER_INFO_REQUEST, USER_INFO_SUCCESS } from '../constants/users';
import { AUTH_INFO_REQUEST, AUTH_INFO_SUCCESS } from '../constants/auth';
import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR,
         POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR } from '../constants/comments';
import {
    QUEST_DELETE_REQUEST,
    QUEST_DELETE_SUCCESS,
    QUEST_DELETE_ERROR,
    SUCCESS_QUESTS_BY_AUTHOR,
    ERROR_QUESTS_BY_AUTHOR,
    REQUEST_QUESTS_BY_AUTHOR,
    QUESTS_IN_PROGRESS_REQUEST,
    QUESTS_IN_PROGRESS_SUCCESS,
    QUESTS_IN_PROGRESS_ERROR
} from '../constants/questinfo';

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

export function GetTasks(id, compare) {
    return (dispatch) => {
        dispatch({
            type: TASKS_REQUEST,
            questTask: []
        });

        Promise.all(
            [
                fetch(`/api/quests/place/id/${id}`)
                    .then(response => response.json())
                    .then(tasks => {
                        return tasks;
                    }),
                fetch(`/api/quests/passed/id/${id}`, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                })
                    .then(response => response.json())
                    .then(tasks => {
                        return tasks;
                    })
            ]
        )
            .then(tasks => {
                if (!compare) {
                    dispatch({
                        type: TASKS_SUCCESS,
                        questTask: tasks[0]
                    });
                } else {
                    dispatch({
                        type: FINED_SUCCESS_TASKS,
                        questTask: tasks[0],
                        successTask: tasks[1]
                    });
                }
            });
    }
}

export function getAuthorizationInfo() {    return dispatch => {
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

export function PostComment(comment, questId, userId) {
    return dispatch => {
        dispatch({
            type: POST_COMMENT_REQUEST,
            comment: comment
        });

        fetch(`/api/comments/quest/${questId}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: comment, userId: userId})
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: POST_COMMENT_SUCCESS,
                    error: data.error,
                    comment: data
                })
            });
    }
}

export function DeleteQuest(questId, author, user) {
    return dispatch => {
        dispatch({
            type: QUEST_DELETE_REQUEST,
            isDeleted: null
        });

        if (parseInt(author) === parseInt(user)) {
            fetch(`/api/quests/delete/${questId}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({author: author}),
                credentials: 'include'
            })
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: QUEST_DELETE_SUCCESS,
                        isDeleted: true
                    })
                })
        } else {
            dispatch({
                type: QUEST_DELETE_ERROR,
                isDeleted: false
            })
        }
    }
}

export function GetQuestsByAuthorId(id) {
    return dispatch => {
        dispatch({
            type: REQUEST_QUESTS_BY_AUTHOR,
            quests: []
        });

        fetch(`/api/quests/author/${id}`)
            .then(response => {
                return response.json()
            })
            .then(quests => {
                dispatch({
                    type: SUCCESS_QUESTS_BY_AUTHOR,
                    quests: quests
                });
            })
            .catch(error => {
                 dispatch({
                     type: ERROR_QUESTS_BY_AUTHOR,
                     error: error
                 })
            })
    }
}

export function GetUserQuestsInProgress(id) {
    return dispatch => {
        dispatch({
            type: QUESTS_IN_PROGRESS_REQUEST,
            questsInProgress: []
        });

        fetch(`/api/quests/author/${id}`)
            .then(response => {
                return response.json()
            })
            .then(quests => {
                dispatch({
                    type: QUESTS_IN_PROGRESS_SUCCESS,
                    questsInProgress: quests
                });
            })
            .catch(error => {
                dispatch({
                    type: QUESTS_IN_PROGRESS_ERROR,
                    questsInProgress: error
                })
            })
    }
}

export function checkCoordinates(placeID, questID, newCord, trueCord) {
    return dispatch => {
        dispatch({
            type: PASS_TASK_REQUEST,
            isFetching: true
        });

        fetch(`/api/quests/pass/id/${placeID}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                placeID: placeID,
                questID: questID,
                newCord: newCord,
                trueCord: trueCord}),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: PASS_TASK_SUCCESS,
                    error: false,
                    success: data.success,
                    palceID: data.placeID
                })
            })
            .catch((e) => {
                dispatch({
                    type: PASS_TASK_ERROR,
                    error: true,
                    message: e.message
                })
            });
    }
}

