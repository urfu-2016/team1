import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

import Logo from '../logo/Logo';

@connect(state => ({user: state.RegisterUser}))
export default class Header extends React.Component {
    static propTypes = {
        user: React.PropTypes.object
    };

    render() {
        const registrationBlock = (
            <div className='header__registration registration'>
                <Link to='signin' className='registration__item registration__item_signin'>Sign in</Link> |
                <Link to='signup' className='registration__item registration__item_signup'>Sign up</Link>
            </div>
        );

        const registeredBlock = (
            <div className='header__registration registration'>You are signed in!</div>
        );

        return (
            <header className='header'>
                <div className='header__logo'>
                    <Logo />
                </div>

                {this.props.user.token ? registeredBlock : registrationBlock}
            </header>
        );
    }
}
