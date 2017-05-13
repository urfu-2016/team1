import React from 'react';

export default class UserAvatar extends React.Component {
    static propTypes = {
        photo: React.PropTypes.string,
        fbId: React.PropTypes.string
    };

    render() {
        const { photo, fbId } = this.props;
        let size;
        fbId ? size = 320 : size = 400;

        return (
            <div className='userAvatar'>
                <img src={photo} alt='user-photo' width={size} height={size}/>
            </div>
        );
    }
}
