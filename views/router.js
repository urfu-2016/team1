import { Route, IndexRoute } from 'react-router';

import App from './App';
import Questlist from './component/pages/questlist/Questlist';
import Quest from './component/pages/quest/Quest';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Profile from './component/pages/profile/Profile';
import CreateQuest from './component/pages/createquest/CreateQuest';
import PlayQuest from './component/pages/playquest/PlayQuest';

export default (
    <Route path='/' component={App} >
        <IndexRoute component={Questlist}/>

        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/quest/:id' components={Quest}/>
        <Route path='/quest/:id/start' components={PlayQuest}/>
        <Route path='/createquest' components={CreateQuest}/>
        <Route path='/profile/:id' component={Profile}/>
    </Route>
);
