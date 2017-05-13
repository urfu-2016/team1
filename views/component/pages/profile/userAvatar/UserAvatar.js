import React from 'react';
import { autobind } from 'core-decorators';

export default class UserAvatar extends React.Component {
    static propTypes = {
        photo: React.PropTypes.string.isRequired
    };

    render() {
        const { photo } = this.props;

        return (
            <div className='userAvatar'>
                <div className='userAvatar_photo-wrapper'>
                    <img src={photo} alt='user-photo'/>
                </div>
            </div>
        );
    }
}
