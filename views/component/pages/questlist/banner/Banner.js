import React from 'react';
import { Link } from 'react-router';

import banner from '../../../../source/img/main_banner.jpg';

export default class Banner extends React.Component {
    render() {
        return (
            <div className='banner'>
                <img src={banner} alt='banner'/>
                <span>
                    Просто создай себе настроение!
                </span>
                <Link to='/createquest' data-tid='createquest-link'>Create your quest</Link>
            </div>
        );
    }
}
