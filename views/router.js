import { Route, IndexRoute } from 'react-router';

import App from './App';
import Questlist from './component/pages/questlist/Questlist';
import Question from './component/pages/question/Question';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Profile from './component/pages/profile/Profile';

export default (
    <Route path='/' component={App} >
        <IndexRoute component={Questlist}/>

        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/question/:id' components={Question}/>
        <Route path='/profile/:id' component={Profile}/>
    </Route>
);
