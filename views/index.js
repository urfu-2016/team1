import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';

import router from './router';
import configureStore from './redux/store/configureStore';
import './index.pcss';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={router} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
