import React from 'react';

import Banner from './banner/Banner';
import Settings from './settings/Settings';
import QuestItem from './questItem/QuestItem';

export default class Questlist extends React.Component {
    render() {
        return (
            <main>
                <Banner />
                <Settings />
                <QuestItem />
            </main>
        )
    }
}
