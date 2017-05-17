import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UserInformation from './userInformation/UserInformation';
import UserAvatar from './userAvatar/UserAvatar';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({profile: state.GetUserInfo, quest: state.GetQuestInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Profile extends React.Component {
    static propTypes = {
        params: React.PropTypes.object.isRequired,
        profile: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired,
        quest: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.pageActions.getUserInfo(this.props.params.id);
        this.props.pageActions.GetQuestsByAuthorId(this.props.params.id);
    }

    render() {
        const profile = this.props.profile.profile;
        const profileFetching = this.props.profile.profileFetching;

        if (profile === null) {
            return (
                <div className='error-message-page'>
                    {profileFetching ? '' : null}
                    <h2>Пользователь с таким id пока что не зарегистрирован</h2>
                </div>
            )
        }

        const quests = this.props.quest.quests;
        const socId = profile.fbId ? `https://www.facebook.com/profile.php?id=${profile.fbId}` : `https://vk.com/id${profile.vkId}`;
        const socName = profile.fbId ? 'в Facebook' : 'Вконтакте';

        const profileBlock = (
            <div className='profile'>
                <UserAvatar photo={profile.fullPhoto} fbId={profile.fbId}/>
                <UserInformation username={profile.username} socId={socId} socName={socName} authorQuests={quests}/>
            </div>
        );

        return (
            <div className='profile-wrapper'>
                {profileFetching ? '' : profileBlock}
            </div>
        );
    }
}
