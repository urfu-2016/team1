import React from 'react';
import { Link } from 'react-router';

import questionBanner from '../../../../source/img/plug.jpg';

export default class QuestionBanner extends React.Component {
    render() {
        return (
            <div className='questionBanner'>
                <img src={questionBanner} alt='questionBanner'/>
                <span>TitleTitleTitleTitleTitleTitleTitle</span>
                <input type="submit" className='takeThisTask' value='Участвовать'/>
            </div>
        );
    }
}
