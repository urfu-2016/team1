import React from 'react';

import questionBanner from '../../../../source/img/plug.jpg';

export default class QuestionBanner extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
    };

    render() {
        return (
            <div className='questionBanner'>
            </div>
        );
    }
}
