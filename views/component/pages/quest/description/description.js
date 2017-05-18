import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {autobind} from 'core-decorators';

import * as pageActions from '../../../../redux/action/index';

const mapStateToProps = state => ({
    user: state.userAuthorization,
    questInfo: state.GetQuestInfo,
    isChange: state.changeQuest
});

const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class QuestionDescription extends React.Component {
    static propTypes = {
        id: React.PropTypes.number,
        description: React.PropTypes.string,
        title: React.PropTypes.string,
        user: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired,
        banner: React.PropTypes.string,
        author: React.PropTypes.string,
        questId: React.PropTypes.string,
        questInfo: React.PropTypes.object
    };

    componentDidMount() {
        this.props.pageActions.GetUserQuestsInProgress(this.props.user.id);
    }

    @autobind
    deleteQuest() {
        this.props.pageActions.DeleteQuest(this.props.questId);
    }

    @autobind()
    startQuest() {
        this.props.pageActions.StartQuest(this.props.questId);
    }

    @autobind()
    changeQuestTitle(e) {
        this.props.pageActions.changeQuestTitle(this.props.questId, document.getElementById('title-input').value);
    }

    @autobind()
    changeQuestDescription(e) {
        this.props.pageActions.changeQuestDescription(this.props.questId, document.getElementById('description-input').value);
    }

    @autobind()
    changeQuestBanner(e) {
        this.props.pageActions.changeQuestBanner(this.props.questId, e.target);
    }

    render() {
        const user = this.props.user;
        const questsInProgress = this.props.questInfo.questsInProgress;
        const questInProgress = [].slice.call(questsInProgress).some(quest => parseInt(quest.id) === parseInt(this.props.questId));


        const participantButton = <Link to={`/quest/${this.props.id}/start`} onClick={this.startQuest}
                                        className='button'>{questInProgress ? 'Продолжить прохождение' : 'Принять участие'}</Link>;
        const changeQuestButton = <Link to={`/quest/edit/${this.props.id}`} className='button'
                                        data-tid='quest-edit-link'>Редактировать квест</Link>;
        const editPhoto = (
            <label htmlFor='banner-edit' className='question-banner_edit button'>
                Изменить баннер
            </label>
        );

        const deleteQuestButton = (
            <button
                onClick={this.deleteQuest}
                className='button'
                data-tid='quest-delete-link'>
                Удалить квест
            </button>
        );

        const notAuthorized = (
            <div className='question-description__auth' data-tid='need-authorization'>
                Авторизуйтесь, чтобы принять участие в квесте
            </div>
        );

        const isAuthor = parseInt(this.props.author) === parseInt(user.id);

        const {error, questDeleted} = this.props.questInfo;

        let modal = (
            <div className='createModal'>
                <div className='createModal_message'>
                    <h2>{error && error.error ? error.error : 'Квест успешно удален'}</h2>
                    <a href='/'>Перейти на главную</a>
                </div>
            </div>
        );

        return (
            <div className='question-description'>
                {(error || questDeleted) ? modal : null}
                <div className='question-photo'>
                    <div className='question-photo_wrapper'>
                        <img src={this.props.banner} alt='Фото квеста'/>
                    </div>
                    {isAuthor ? editPhoto : ''}
                    <input type='checkbox' className='question-description_edit hidden' id='banner-edit'/>
                    <form className='question-info_banner__form' onSubmit={this.changeQuestBanner}>
                        <label className='question-description_edit' htmlFor='title-banner'>
                            <input className='custom-file' type='file' name='banner' accept='image/*'
                                   id='title-banner'/>
                        </label>
                        <input type='hidden' name={`quest[file]`} value={`banner`}/>
                        <button type='submit' className='button-controls__submit'>Изменить</button>
                    </form>
                    {user.hasOwnProperty('username') ? participantButton : notAuthorized}
                    {isAuthor ? deleteQuestButton : ''}
                </div>
                <div className='question-info'>
                    <h1 className='question-info_title' data-tid='quest-title'>
                        Квест {this.props.title}
                        {isAuthor ?
                            <label htmlFor='title-edit' className='question-description_edit'>
                                <img
                                    src={'http://www.iconarchive.com/download/i65337/custom-icon-design/pretty-office-10/Pencil.ico'}
                                    alt='edit' className='question-description_edit__image'/>
                            </label> : ''}
                    </h1>
                    <input type='checkbox' className='question-description_edit hidden' id='title-edit'/>
                    <form className='question-info_title__form' onSubmit={this.changeQuestTitle}>
                        <input className='custom-input' id='title-input'/>
                        <button type='submit' className='button-controls__submit'>Изменить</button>
                    </form>
                    <div className='question-info_text'>
                        <span className='question-info_text__title'>Описание:</span>
                        <span className='question-info_text__span' data-tid='quest-description'>
                            {this.props.description}
                            {isAuthor ?
                                <label htmlFor='description-edit' className='question-description_edit'>
                                    <img
                                        src={'http://www.iconarchive.com/download/i65337/custom-icon-design/pretty-office-10/Pencil.ico'}
                                        alt='edit' className='question-description_edit__image'/>
                                </label> : ''}
                        </span>
                        <input type='checkbox' className='question-description_edit hidden' id='description-edit'/>
                        <form className='question-info_description__form' onSubmit={this.changeQuestDescription}>
                            <textarea className='custom-textarea' id='description-input'/>
                            <button type='submit' className='button-controls__submit'>Изменить</button>
                        </form>
                        <span className='question-info_text__title'>Автор:</span>
                        <span data-tid='quest-author'>
                            <Link className='question-info_text__link' to={`/profile/${this.props.author}`}
                                  data-tid='quest-author-link'>
                                Автор квеста
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
