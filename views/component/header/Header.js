import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../redux/action/index';

import Logo from '../logo/Logo';

const mapStateToProps = state => ({user: state.GetAuthorizationInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
    static propTypes = {
        user: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.pageActions.getAuthorizationInfo();
    }

    render() {
        const user = this.props.user.user;
        console.info(user);

        const registrationBlock = (
            <div className='header__registration registration'>
                <Link to='/signin' className='registration__item registration__item_signin' data-tid='header-signin-link'>Sign in</Link>
                <Link to='/signup' className='registration__item registration__item_signup' data-tid='header-signup-link'>Sign up</Link>
            </div>
        );

        const registeredBlock = (
            <div className='header__registered registered' data-tid='header-signedin'>
                <label htmlFor='reg-id' className='registered__wrap'>
                    <span>{user.username}</span>
                    <img src={user.photo}/>
                    ⯆
                </label>
                <input type='checkbox' id='reg-id' className='options-id'/>
                <div className='registered__options'>
                    <a className='registered__options_option' href={'/profile/' + user.id}>Мой профиль</a>
                    <a className='registered__options_option' href='/api/auth/log-out'>Выйти</a>
                </div>
            </div>
        );

        return (
            <header className='header'>
                <div className='header__wrap'>
                    <div className='header__logo'>
                        <Logo />
                    </div>
                    {user.hasOwnProperty('username') ? registeredBlock : registrationBlock}
                </div>
            </header>
        );
    }
}
