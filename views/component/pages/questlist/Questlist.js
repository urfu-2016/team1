import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Banner from './banner/Banner';
import Settings from './settings/Settings';
import QuestItem from './questItem/QuestItem';
import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({quests: state.GetQuests});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Questlist extends React.Component {
    static propTypes = {
        pageActions: React.PropTypes.object.isRequired,
        quests: React.PropTypes.object.isRequired
    };

    render() {
        const { quests, isFetching } = this.props.quests;
        const { GetAllQuests, GetQuestsByFirstLetters } = this.props.pageActions;
        return (
            <main>
                <Banner />
                <Settings GetQuestsByFirstLetters={GetQuestsByFirstLetters} GetAllQuests={GetAllQuests}/>
                <QuestItem GetAllQuests={GetAllQuests} quests={quests} isFetching={isFetching} />
            </main>
        )
    }
}
