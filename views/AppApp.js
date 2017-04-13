import React from 'react';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';

export default class AppApp extends React.Component {
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

AppApp.propTypes = {
    children: PropTypes.element
};
