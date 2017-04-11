import { ALL_QUESTS_REQUEST, ALL_QUESTS_SUCCESS, ALL_QUESTS_ERROR } from '../constants/allquests';
import { SOME_QUESTS_REQUEST, SOME_QUESTS_SUCCESS, SOME_QUESTS_ERROR} from '../constants/somequests';
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../constants/users';
import { SET_SPINNER, REMOVE_SPINNER } from '../constants/spinner';

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

        fetch(`api/quests/name/${searchQuery}`)
            .then((response) => {
                return response.json();
            })
            .then((user) => {
                dispatch({
                    type: SOME_QUESTS_SUCCESS,
                    quests: user
                })
            });
    }
}

export function PostUser(user, password) {
    return dispatch => {
        dispatch({
            type: REGISTER_USER_REQUEST,
            user: user
        });

        console.log(JSON.stringify({user, password}));
        fetch('api/users/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user, password})
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    token: data.token
                })
            });
    }
}
