import { combineReducers } from 'redux';
import GetQuests from './allquests';
import GetQuestInfo from './questinfo';
import RegisterUser from './users';
import GetUserInfo from './userProfile';

export default combineReducers({
    GetQuests,
    RegisterUser,
    GetQuestInfo,
    GetUserInfo
});
