import React from 'react';

export default class UserInformation extends React.Component {
    static propTypes = {
        username: React.PropTypes.string,
        socId: React.PropTypes.string.isRequired,
        socName: React.PropTypes.string.isRequired
    };

    render() {
        const { username, socId, socName } = this.props;

        return (
            <div className='userInformation'>
                <p className='userInformation__name'>{username}</p>
                <a className='userInformation__link' href={socId}>Посмотреть профиль {socName}</a>
                <div className='userInformation__questInfo'>
                    <div className='userInformation__questInfo_created'>
                        <h4>Автор квестов:</h4>
                    </div>
                    <div className='userInformation__questInfo_participant'>
                        <h4>Участник квестов:</h4>
                    </div>
                </div>
            </div>
        );
    }
}
