import React from 'react';

import questionBanner from '../../../../source/img/plug.jpg';

export default class QuestionDescription extends React.Component {
    static propTypes = {
        description: React.PropTypes.string,
        title: React.PropTypes.string
    };

    render() {
        return (
            <div className='questionDescription'>
                <div className='question-photo'>
                    <div className='question-photo_wrapper'>
                        <img src={questionBanner} alt='Фото квеста' />
                    </div>
                    <button>Принять участие</button>
                </div>
                <div className='question-info'>
                    <h2 className='question-info_title' data-tid='quest-title'>Квест {this.props.title}</h2>
                    <div className='question-info_text'>
                        <span data-tid='quest-description'>Описание: {this.props.description}</span>
                        <span data-tid='quest-author'>Автор: имя автора</span>
                    </div>
                </div>
            </div>
        );
    }
}
