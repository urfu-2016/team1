import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import banner from '../../../../source/img/main_banner.jpg';
import * as pageActions from '../../../../redux/action/index';

const mapStateToProps = state => ({comments: state.GetComments, user: state.userAuthorization});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Banner extends React.Component {
    static propTypes = {
        user: React.PropTypes.object
    };

    render() {
        const user = this.props.user;
        const createQuestLink = <Link to='/createquest' data-tid='createquest-link'>Create your quest</Link>;

        return (
            <div className='banner'>
                <img src={banner} alt='banner'/>
                <span>
                    Просто создай себе настроение!
                </span>
                {user.hasOwnProperty('username') ? createQuestLink : null}
            </div>
        );
    }
}
