import { Route, IndexRoute } from 'react-router';

import App from './App';
import Repos from './component/Signup';
import About from './component/Signin';
import Questlist from './component/pages/questlist/Questlist';
import Question from './component/pages/question/Question'

export default (
    <div>
        <Route path='/' component={App} >
            <IndexRoute component={Questlist}/>

            <Route path='/signin' component={About}/>
            <Route path='/signup' component={Repos}/>
            <Route path='/question' components={Question}/>
        </Route>
    </div>
);
