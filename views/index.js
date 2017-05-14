import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';

import router from './router';
import configureStore from './redux/store/configureStore';
import './index.pcss';

const preloadedState = window.__PRELOADED_STATE__;
const user = window.__USER__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
delete window.__USER__;
console.info(Object.assign({}, preloadedState, {user: user}));

const store = configureStore(Object.assign({}, preloadedState, {userAuthorization: user}));

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} routes={router} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
