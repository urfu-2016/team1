import { combineReducers } from 'redux';
import GetQuests from './allquests';
import GetQuestInfo from './questinfo';
import RegisterUser from './users'

export default combineReducers({
    GetQuests,
    RegisterUser,
    GetQuestInfo
});
