import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../redux/action/index';

import TextInput from '../../controls/Text';
import TextareaInput from '../../controls/Textarea';
import FileInput from '../../controls/File';

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
            <div key={i}>
                <TextInput
                    label={'Заголовок задачи квеста'}
                    id={`place-label-${i}`}
                    name={`places[${i}][title]`}
                    tid={`place-${i}-title-input`}
                    placeholder={`The best quest with number ${i}`}
                    required={'required'}
                />

                <TextareaInput
                    label={'Описание задачи квеста'}
                    id={`place-input-${i}`}
                    name={`places[${i}][description]`}
                    cols={50}
                    rows={10}
                    tid={`place-${i}-description-input`}
                    placeholder={`The best description of the quest with number ${i}`}
                />

                <FileInput
                    label={'Добавить/сделать фото задачи квеста'}
                    id={`place-file-${i}`}
                    name={`places[${i}][description]`}
                    tid={`place-${i}-banner-input`}
                />
                <input type='hidden' name={`places[${i}][file]`} value={`places[${i}][photo]`}/>
                <input type='hidden' name={`places[${i}][coordinates]`}/>
            </div>
        ));

        let addButton = (<button className='quest-data__more' onClick={this.addMoreTasks} data-tid='add-place-button'>Добавить задание</button>);

        const questTitle = {
            labelClass: 'label',
            inputClass: 'input',
            label: 'Название квеста',
            id: 'title',
            name: 'quest[title]',
            tid: 'quest-title-input',
            placeholder: '"The best quest ever"',
            required: 'required'
        };

        const questDesc = {
            labelClass: 'label',
            textareaClass: 'textarea',
            label: 'Название квеста',
            id: 'description',
            cols: 50,
            rows: 10,
            name: 'quest[description]',
            tid: 'quest-description-input',
            placeholder: '"The best quest ever"'
        };

        const questFile = {
            label: 'Добавить/сделать фото задачи квеста',
            id: 'banner',
            name: 'quest[banner]',
            tid: 'quest-banner-input'
        };

        return (
            <div className='quest-data-wrap'>
                <form className='quest-data' onSubmit={this.submitForm}>
                    <div>
                        <h2 className='quest-data__title'>Инфа о квесте</h2>
                        <TextInput {...questTitle} />
                        <TextareaInput {...questDesc} />
                        <FileInput {...questFile}/>
                        <input type='hidden' name={`quest[file]`} value={`quest[banner]`}/>
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
