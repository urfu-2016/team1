import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../redux/action/index';

import TextInput from '../../controls/Text';
import TextareaInput from '../../controls/Textarea';
import FileInput from '../../controls/File';

const mapStateToProps = state => ({questInfo: state.GetQuestInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class CreateQuest extends React.Component {
    state = {tasks: parseInt(this.props.questInfo.questTask.length)};
    static propTypes = {
        params: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired,
        questInfo: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        const {GetQuestInfo} = this.props.pageActions;
        GetQuestInfo(this.props.params.id);
    }

    @autobind
    submitForm(e) {
        e.preventDefault();
        fetch(`/api/quests/edit/${this.props.params.id}`, {
            method: 'POST',
            body: new FormData(e.target),
            credentials: 'include'
        });
    }

    @autobind
    addMoreTasks(event) {
        event.preventDefault();
        this.setState(prevState => ({tasks: ++prevState.tasks}));
    }

    render() {
        const { questInfo } = this.props;
        let newTask = [...Array(this.state.tasks)].map((_, i) => (
            <div key={i}>
                <TextInput
                    label={'Заголовок задачи квеста'}
                    id={`place-label-${i}`}
                    name={`places[${i}][title]`}
                    tid={`place-${i}-title-input`}
                    placeholder={`The best quest with number ${i}`}
                    required={'required'}
                    value={questInfo.questTask[i] ? questInfo.questTask[i].title : ''}
                />

                <TextareaInput
                    label={'Описание задачи квеста'}
                    id={`place-input-${i}`}
                    name={`places[${i}][description]`}
                    cols={50}
                    rows={10}
                    tid={`place-${i}-description-input`}
                    placeholder={`The best description of the quest with number ${i}`}
                    value={questInfo.questTask[i] ? questInfo.questTask[i].description : ''}
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
            required: 'required',
            value: questInfo.questInfo.title
        };

        const questDesc = {
            labelClass: 'label',
            textareaClass: 'textarea',
            label: 'Описание квеста',
            id: 'description',
            cols: 50,
            rows: 10,
            name: 'quest[description]',
            tid: 'quest-description-input',
            placeholder: '"The best quest ever"',
            value: questInfo.questInfo.description
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

                    <button type='submit' className='quest-data__submit' data-tid='create-quest-button'>Отредактировать квест</button>
                </form>
            </div>
        );
    }
}
