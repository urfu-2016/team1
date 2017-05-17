import React from 'react';
import { Link } from 'react-router';

import banner from '../../../../source/img/main_banner.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../../../redux/action/index';

const mapStateToProps = state => ({user: state.userAuthorization});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Banner extends React.Component {
    static propTypes = {
        user: React.PropTypes.object.isRequired,
    };

    render() {
        const user = this.props.user;
        return (
            <div className='banner'>
                <span className='banner__slogan'>
                    Просто создай себе настроение!
                </span>
                {user.hasOwnProperty('username') ? <Link className='banner__create-quest' to='/createquest' data-tid='createquest-link'>Create your quest</Link> : ''}
            </div>
        );
    }
}
