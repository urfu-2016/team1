import React from 'react';
import { IndexLink } from 'react-router';

export default class Logo extends React.Component {
    render() {
        return (
            <div className='logo'>
                <IndexLink to='/'>que<span>st</span>ory</IndexLink>
            </div>
        );
    }
}
