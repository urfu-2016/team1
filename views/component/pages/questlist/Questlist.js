import React from 'react';

import Banner from './banner/Banner';
import Settings from './settings/Settings';
import QuestItem from './questItem/QuestItem';

export default class Questlist extends React.Component {
    render() {
        const { quests } = this.props.allQuests;
        const { GetAllQuests } = this.props.pageActions;
        return (
            <main>
                <Banner />
                <Settings />
                <QuestItem GetAllQuests={GetAllQuests} quests={quests} />
            </main>
        )
    }
}

Questlist.propTypes = {
    pageActions: React.PropTypes.object.isRequired,
    allQuests: React.PropTypes.object.isRequired
};
