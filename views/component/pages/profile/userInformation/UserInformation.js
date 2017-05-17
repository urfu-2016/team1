import React from 'react';

export default class UserInformation extends React.Component {
    static propTypes = {
        username: React.PropTypes.string,
        socId: React.PropTypes.string.isRequired,
        socName: React.PropTypes.string.isRequired,
        authorQuests: React.PropTypes.object.isRequired,
        questsInProgress: React.PropTypes.object.isRequired
    };

    render() {
        const {username, socId, socName, authorQuests, questsInProgress} = this.props;
        let mappedAuthorQuests = authorQuests ? [].slice.call(authorQuests).map((quest, index) => (
            <a className='userInformation__link' href={`/quest/${quest.id}`}
               data-tid={`user-created-quest-${index}`}>{index + 1} {quest.title}</a>)) : '';

        let mappedCurrentQuests = questsInProgress ? [].slice.call(questsInProgress).map((quest, index) => (
            <a className='userInformation__link' href={`/quest/${quest.id}`}
               data-tid={`user-playinng-quest-${index}`}>{index + 1} {quest.title}</a>)) : '';

        return (
            <div className='userInformation'>
                <p className='userInformation__name' data-tid='username-text'>{username}</p>
                <a className='userInformation__link' href={socId}>Посмотреть профиль {socName}</a>
                <div className='userInformation__questInfo'>
                    <div className='userInformation__questInfo_created'>
                        <h4>Автор квестов:</h4>
                        {mappedAuthorQuests}
                    </div>
                    <div className='userInformation__questInfo_participant'>
                        <h4>Участник квестов:</h4>
                        {mappedCurrentQuests}
                    </div>
                </div>
            </div>
        );
    }
}
