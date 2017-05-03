import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({quests: state.GetQuests});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class CreateQuest extends React.Component {
    state = {tasks: 1, placeImg: []};

    @autobind
    submitForm(e) {
        e.preventDefault();
        fetch('/api/quests/create', {
            method: 'POST',
            body: new FormData(e.target)
        });
    }

    @autobind
    addMoreTasks(event) {
        event.preventDefault();
        this.setState(prevState => ({tasks: ++prevState.tasks}));
    }

    render() {
        let newTask = [...Array(this.state.tasks)].map((_, i) => (
            <div key={i} className='quest-task'>
                <label className='quest-task__input quest-task__input_title' htmlFor={`places[${i}][title]`}>Заголовок задачи квеста</label>
                <input className='quest-task__title quest-task__input_title' type='text' name={`places[${i}][title]`} required='required'/>
                <label className='quest-task__input quest-task__input_desc' htmlFor={`places[${i}][description]`}>Описание задачи квеста</label>
                <textarea className='quest-task__textarea quest-task__textarea_desc' type='text' name={`places[${i}][description]`} cols='50' rows='6'/>
                <label className='quest-task__label_file' htmlFor={`places[${i}][photo]`}>Добавить/сделать фото задачи квеста</label>
                <input className='quest-task__input_file' type='file' name={`places[${i}][photo]`} accept='image/*' onChange={(placeImg) => {this.state.placeImg.push(placeImg.target.files[0])}}/>
                <input type='hidden' name={`places[${i}][file]`} value={`places[${i}][photo]`}/>
                <input type='hidden' name={`places[${i}][coordinates]`}/>
            </div>
        ));

        let addButton = (<button className='quest-task__more' onClick={this.addMoreTasks}>Добавить задание</button>);

        return (
            <div className='quest-data-wrap'>
                <form onSubmit={this.submitForm}>
                    <div className='quest-data'>
                        <label className='quest-data__label quest-data__label_title' htmlFor='0-title'>Название квеста</label>
                        <input className='quest-data__input quest-data__input_title' type='text' name='quest[title]' id='title' placeholder='"The best quest ever"' required='required'/>
                        <label className='quest-data__label quest-data__label_desc' htmlFor='0-description'>Описание квеста</label>
                        <textarea className='quest-data__textarea quest-data__textarea_desc' type='text' name='quest[description]' id='description' cols='50' rows='10' placeholder='"The best quest ever"'/>
                        <label className='quest-data__label quest-data__label_file' htmlFor='0-banner'>Добавить баннер квеста</label>
                        <input className='quest-data__input quest-data__input_file' type='file' id='banner' name='quest[banner]' accept='image/*'/>
                        <input type='hidden' name={`quest[file]`} value={`quest[banner]`}/>
                    </div>

                    <div className='quest-task-wrap'>
                        {newTask}
                        {this.state.tasks >= 10 ? null : addButton}
                    </div>

                    <button type='submit'>Создать</button>
                </form>
            </div>
        );
    }
}
