import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../redux/action/index';
import Logo from '../logo/Logo';

const mapStateToProps = state => ({user: state.userAuthorization});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
    static propTypes = {
        user: React.PropTypes.object.isRequired,
    };

    render() {
        const user = this.props.user;

        const registrationBlock = (
            <div className='header__registration registration'>
                <div className='soc-auth'>
                    <a href='/api/auth/vk' className='soc-auth_link' data-tid='vk-login-link'>
                        <div className='soc-auth_vk'/>
                    </a>
                    <a href='/api/auth/fb' className='soc-auth_link' data-tid='fb-login-link'>
                        <div className='soc-auth_fb'/>
                    </a>
                </div>
            </div>
        );

        const registeredBlock = (
            <div className='header__registered registered' data-tid='header-signedin'>
                <label htmlFor='reg-id' className='registered__wrap' data-tid='user-dropdown'>
                    <img src={user.photo}/>
                    ⯆
                </label>
                <input type='checkbox' id='reg-id' className='options-id'/>
                <div className='registered__options'>
                    <a className='registered__options_option' href={`/profile/${user.id}`} data-tid='user-profile-link'>Мой профиль</a>
                    <a className='registered__options_option' href='/api/auth/log-out' data-tid='logout-link'>Выйти</a>
                </div>
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
