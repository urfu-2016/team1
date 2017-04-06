import React from 'react';

import Banner from './banner/Banner';
import Settings from './settings/Settings';
import QuestItem from './questItem/QuestItem';

export default class Questlist extends React.Component {
    render() {
        const { quests } = this.props.quests;
        const { GetAllQuests, GetQuestsByFirstLetters } = this.props.pageActions;
        return (
            <main>
                <Banner />
                <Settings GetQuestsByFirstLetters={GetQuestsByFirstLetters} GetAllQuests={GetAllQuests}/>
                <QuestItem GetAllQuests={GetAllQuests} quests={quests} />
            </main>
        )
    }
}

Questlist.propTypes = {
    pageActions: React.PropTypes.object.isRequired,
    quests: React.PropTypes.object.isRequired
};
