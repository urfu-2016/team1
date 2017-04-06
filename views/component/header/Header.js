import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__logo' role='banner'>
                    <IndexLink to='/'>que<span>st</span>ory</IndexLink>
                </div>

                <div className='header__registration registration'>
                    <Link to='signin' className='registration__item registration__item_signin'>Sign in</Link> |
                    <Link to='signup' className='registration__item registration__item_signup'>Sign up</Link>
                </div>
            </header>
        );
    }
}
