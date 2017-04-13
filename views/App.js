import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <main className='main'>
                    {this.props.children}
                </main>

                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};
