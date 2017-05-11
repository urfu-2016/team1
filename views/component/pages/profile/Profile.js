import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({profile: state.GetUserInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Profile extends React.Component {
    static propTypes = {
        params: React.PropTypes.object.isRequired,
        profile: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.pageActions.getUserInfo(this.props.params.id);
    }

    render() {
        const profile = this.props.profile.profile;
        const authMethod = profile.fbId ? 'fb' : 'vk';
        return (
            <main>
                {profile.vkId}
                {profile.username}
                {profile.fbId}
                {profile.photo}
                {authMethod}
            </main>
        );
    }
}
