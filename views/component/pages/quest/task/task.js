import React from 'react';
import Slider from 'react-slick';

import questionBanner from '../../../../source/img/plug.jpg';

export default class QuestionTask extends React.Component {
    render() {

        const questTask = this.props.questTask;

        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '0px',
            slidesToShow: 3,
            speed: 1000
        };

        let tasks = questTask.map((task) => {
            return (
                <div key={task.id} className='question-task__item'>
                    <div style={{backgroundImage: `url(${task.path})`}}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                </div>
            );
        });

        console.log(tasks);

        return (
            <div className='question-task'>
                <Slider {...settings}>
                    {
                        tasks.length > 0 ? tasks : <div></div>
                    }
                </Slider>
            </div>
        );
    }
}

QuestionTask.propTypes = {
    questTask: React.PropTypes.array.isRequired
};
