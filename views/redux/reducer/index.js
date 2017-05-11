import { combineReducers } from 'redux';
import GetQuests from './allquests';
import GetQuestInfo from './questinfo';
import GetUserInfo from './users';
import GetAuthorizationInfo from './auth';

export default combineReducers({
    GetQuests,
    GetUserInfo,
    GetQuestInfo,
    GetAuthorizationInfo
});
