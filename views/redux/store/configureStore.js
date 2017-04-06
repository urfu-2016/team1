import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducer/index';

export default function configureStore(initialState) {
    const logger = createLogger();

    const store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk, logger)
        );

    return store;
}
