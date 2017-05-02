import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({quests: state.GetQuests});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)

export default class CreateQuest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {tasks: 2, placeImg: []};
        this.addMoreTasks = this.addMoreTasks.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function(event) {
            // console.log(event.loaded + ' / ' + event.total);
        };
        xhr.onload = xhr.onerror = function() {
            if (this.status !== 200) {
                console.log("error " + this.status);
            }
        };

        let formdata = new FormData(e.target);

        xhr.open("POST", "api/createquest", true);
        xhr.send(formdata);
    }

    addMoreTasks(event) {
        event.preventDefault();
        this.setState((prevState) => {return {tasks: ++prevState.tasks}})
    }

    render() {
        let newTask = [];

        for (let i = 1; i < this.state.tasks; i++) {
            newTask.push(
                <div key={i} className='quest-task'>
                    <label className='quest-task__input quest-task__input_title' htmlFor={`${i}-title`}>Заголовок задачи квеста</label>
                    <input className='quest-task__title quest-task__input_title' type='text' name={`${i}-title`} required='required'/>
                    <label className='quest-task__input quest-task__input_desc' htmlFor={`${i}-description`}>Описание задачи квеста</label>
                    <textarea className='quest-task__textarea quest-task__textarea_desc' type='text' name={`${i}-description`} cols='50' rows='6'/>
                    <label className='quest-task__label_file' htmlFor={`${i}-photo`}>Добавить/сделать фото задачи квеста</label>
                    <input className='quest-task__input_file' type='file' name={`${i}-photo`} accept='image/*' onChange={(placeImg) => {this.state.placeImg.push(placeImg.target.files[0])}}/>
                    <input type='hidden' name={`${i}-coordinates`}/>
                </div>
            )
        }

        return (
            <div className='quest-data-wrap'>
                <form onSubmit={this.submitForm}>
                    <div className='quest-data'>
                        <label className='quest-data__label quest-data__label_title' htmlFor='0-title'>Название квеста</label>
                        <input className='quest-data__input quest-data__input_title' type='text' name='0-title' id='title' placeholder='"The best quest ever"' required='required'/>
                        <label className='quest-data__label quest-data__label_desc' htmlFor='0-description'>Описание квеста</label>
                        <textarea className='quest-data__textarea quest-data__textarea_desc' type='text' name='0-description' id='description' cols='50' rows='10' placeholder='"The best quest ever"'/>
                        <label className='quest-data__label quest-data__label_file' htmlFor='0-banner'>Добавить баннер квеста</label>
                        <input className='quest-data__input quest-data__input_file' type='file' id='banner' name='0-banner' accept='image/*'/>
                    </div>

                    <div className='quest-task-wrap'>

                        {
                            newTask
                        }

                        {
                            this.state.tasks >= 10 ? null : <button className='quest-task__more' onClick={this.addMoreTasks}>Добавить задание</button>
                        }
                    </div>

                    <button type='submit'>Создать</button>
                </form>
            </div>
        );
    }
}
