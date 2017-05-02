import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../../redux/action/index';

import Logo from '../logo/Logo';

const mapStateToProps = state => ({user: state.GetUserInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
    static propTypes = {
        user: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.pageActions.getUserInfo();
    }

    render() {
        const user = this.props.user.user;
        console.info(user);
        const registrationBlock = (
            <div className='header__registration registration'>
                <Link to='/signin' className='registration__item registration__item_signin'>Sign in</Link> |
                <Link to='/signup' className='registration__item registration__item_signup'>Sign up</Link>
            </div>
        );

        const registeredBlock = (
            <div className='header__registration registration'>
                Hello! {user.username}
                <a href='api/auth/log-out'>Выйти</a>
            </div>
        );

        return (
            <header className='header'>
                <div className='header__wrap'>
                    <div className='header__logo'>
                        <Logo />
                    </div>
                    {user.username ? registeredBlock : registrationBlock}
                </div>
            </header>
        );
    }
}
