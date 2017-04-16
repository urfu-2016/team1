import React from 'react';

import Logo from '../logo/Logo';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__logo logo'>
                    <Logo />
                </div>
                <div className='footer__copyright'>
                    <span>© team1 - because we are so effective team))</span>
                </div>
            </div>
        );
    }
}
