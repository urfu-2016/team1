import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({quests: state.GetQuests});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class CreateQuest extends React.Component {
    state = {tasks: 1};

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
                <label className='quest-data__label quest-data__label_required'
                       htmlFor={`places[${i}][title]`}>Заголовок задачи квеста
                    <input className='quest-data__input quest-data__input_title'
                           type='text'
                           name={`places[${i}][title]`}
                           id={`places[${i}][title]`}
                           placeholder={`The best quest number ${i}`}
                           required='required'
                           data-tid={`place-${i}-title-input`}
                           onBlur={(e) => {
                               e.target.value ? e.target.parentNode.classList.add('quest-data__label_validation--true')
                                   : e.target.parentNode.classList.remove('quest-data__label_validation--true')}} />
                </label>
                <label className='quest-data__label quest-data__input_desc'
                       htmlFor={`places[${i}][description]`}>Описание задачи квеста
                    <textarea className='quest-data__textarea quest-data__textarea_desc'
                              type='text'
                              id={`places[${i}][description]`}
                              name={`places[${i}][description]`}
                              cols='50'
                              rows='6'
                              placeholder={`The best description of quest number ${i}`}
                              data-tid={`place-${i}-description-input`}
                              onBlur={(e) => {
                                  e.target.value ? e.target.parentNode.classList.add('quest-data__label_validation--true')
                                      : e.target.parentNode.classList.remove('quest-data__label_validation--true')}} />
                </label>
                <label className='quest-data__label_file'
                       htmlFor={`places[${i}][photo]`}>Добавить/сделать фото задачи квеста
                    <input className='quest-data__file'
                           type='file'
                           name={`places[${i}][photo]`}
                           id={`places[${i}][photo]`}
                           accept='image/*'
                           data-tid={`place-${i}-banner-input`}
                           onChange={(e) => {e.target.files.length > 0 ? e.target.parentNode.classList.add('quest-data__label_validation--true')
                               : e.target.parentNode.classList.remove('quest-data__label_validation--true')}} />
                </label>
                <input type='hidden' name={`places[${i}][file]`} value={`places[${i}][photo]`}/>
                <input type='hidden' name={`places[${i}][coordinates]`}/>
            </div>
        ));

        let addButton = (<button className='quest-data__more' onClick={this.addMoreTasks} data-tid='add-place-button'>Добавить задание</button>);

        return (
            <div className='quest-data-wrap'>
                <form className='quest-data' onSubmit={this.submitForm}>
                    <div>
                        <h2 className='quest-data__title'>Инфа о квесте</h2>
                        <label
                            className='quest-data__label quest-data__label_required'
                            htmlFor='title'>Название квеста
                            <input
                                className='quest-data__input quest-data__input_title'
                                type='text'
                                name='quest[title]'
                                id='title'
                                placeholder='"The best quest ever"'
                                data-tid='quest-title-input'
                                required='required'
                                onBlur={(e) => {
                                    e.target.value ? e.target.parentNode.classList.add('quest-data__label_validation--true')
                                        : e.target.parentNode.classList.remove('quest-data__label_validation--true')}} />
                        </label>
                        <label
                            className='quest-data__label quest-data__label_desc'
                            htmlFor='description'>Описание квеста
                            <textarea
                                className='quest-data__textarea'
                                type='text'
                                name='quest[description]'
                                id='description'
                                cols='50'
                                rows='10'
                                data-tid='quest-description-input'
                                placeholder='"The best quest ever"'
                                onBlur={(e) => {
                                    e.target.value ? e.target.parentNode.classList.add('quest-data__label_validation--true')
                                        : e.target.parentNode.classList.remove('quest-data__label_validation--true')}} />
                        </label>
                        <label
                            className='quest-data__label quest-data__label_file'
                            htmlFor='0-banner'>Добавить баннер квеста
                            <input
                                className='quest-data__file quest-data__input_file'
                                type='file'
                                id='banner'
                                name='quest[banner]'
                                data-tid='quest-banner-input'
                                accept='image/*'
                                onChange={(e) => {e.target.files.length > 0 ? e.target.parentNode.classList.add('quest-data__label_validation--true')
                                    : e.target.parentNode.classList.remove('quest-data__label_validation--true')}}/>
                        </label>
                        <input
                            type='hidden'
                            name={`quest[file]`}
                            value={`quest[banner]`}/>
                    </div>

                    <div>
                        {newTask}
                        {this.state.tasks >= 10 ? null : addButton}
                    </div>

                    <button type='submit' className='quest-data__submit' data-tid='create-quest-button'>Создать</button>
                </form>
            </div>
        );
    }
}
