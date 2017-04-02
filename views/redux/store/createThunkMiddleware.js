function createThunkMiddleware() {
    return ({ dispatch, getState }) => next => action => {
        typeof action === 'function' ?
            action(dispatch, getState) :
            next(action);
    }
}

module.exports = createThunkMiddleware;
