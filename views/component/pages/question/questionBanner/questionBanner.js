import React from 'react';

import questionBanner from '../../../../source/img/plug.jpg';

export default class QuestionBanner extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
    };

    render() {
        return (
            <div className='questionBanner'>
                <img src={questionBanner} alt='questionBanner'/>
                <span>{this.props.title}</span>
                <input type='submit' className='takeThisTask' value='Участвовать'/>
            </div>
        );
    }
}
