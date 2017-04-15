import { Route, IndexRoute } from 'react-router';

import App from './App';
import Questlist from './component/pages/questlist/Questlist';
import Question from './component/pages/question/Question';
import Signin from './component/Signin';
import Signup from './component/Signup';

export default (
    <div>
        <Route path='/' component={App} >
            <IndexRoute component={Questlist}/>

            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/question/:id' components={Question}/>
        </Route>
    </div>
);
