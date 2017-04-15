import React from 'react';

import questionBanner from '../../../../source/img/plug.jpg';

export default class QuestionTask extends React.Component {
    render() {
        return (
            <div className='questionTask'>
                <img src={questionBanner} alt='questionBanner'/>
            </div>
        );
    }
}
