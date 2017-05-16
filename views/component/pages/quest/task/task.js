import React from 'react';

export default class QuestionTask extends React.Component {
    render() {

        const questTask = this.props.questTask;

        let tasks = questTask.map((task) => {
            return (
                <div className='question-task__item'>
                    <h3 className='question-task__title'>{task.title}</h3>
                    <p className='question-task__description'>{task.description}</p>
                    <img className='question-task__img' src={task.path} alt='Фотография места'/>
                </div>
            );
        });

        return (
            <div className='question-task'>
                <div className='question-task__container'>
                    {
                        tasks.length > 0 ? tasks : <div></div>
                    }
                </div>
            </div>
        );
    }
}

QuestionTask.propTypes = {
    questTask: React.PropTypes.array.isRequired
};
