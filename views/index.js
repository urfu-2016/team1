import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'

import router from './router';
import './index.pcss';


import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';

const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

console.log(window.__PRELOADED_STATE__)

const store = configureStore(preloadedState);


ReactDOM.render(
    <Provider store={store}>
        <Router routes={router} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
