import { Route, IndexRoute } from 'react-router';

import App from './App';
import Questlist from './component/pages/questlist/Questlist';
import Quest from './component/pages/quest/Quest';
import Profile from './component/pages/profile/Profile';
import CreateQuest from './component/pages/createquest/CreateQuest';
import PlayQuest from './component/pages/playquest/PlayQuest';
import EditQuest from './component/pages/editquest/EditQuest';
import Message from './component/pages/message/Message';

export default (
    <Route path='/' component={App} >
        <IndexRoute component={Questlist}/>

        <Route path='/quest/:id' components={Quest}/>
        <Route path='/quest/:id/start' components={PlayQuest}/>
        <Route path='/createquest' components={CreateQuest}/>
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/quest/edit/:id' component={EditQuest}/>
        <Route path='/message' component={Message}/>
    </Route>
);
