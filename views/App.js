import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import Header from './component/header/Header';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
        <Provider store={store}>
            <div>
                <Header/>

                {this.props.children}
            </div>
        </Provider>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element
};
