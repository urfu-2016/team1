import { combineReducers } from 'redux';
import GetQuests from './allquests';
import RegisterUser from './users'

export default combineReducers({
    GetQuests, RegisterUser
});
