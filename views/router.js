import { Route, IndexRoute } from 'react-router';

import App from './App';
import Repos from './modules/Signup';
import About from './modules/Signin';
import Questlist from './modules/pages/questlist/Questlist';

export default (
    <div>
        <Route path='/' component={App} >
            <IndexRoute component={Questlist}/>

            <Route path='/signin' component={About}/>
            <Route path='/signup' component={Repos}/>
        </Route>
    </div>
);
