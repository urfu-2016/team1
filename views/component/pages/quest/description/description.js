import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../../../redux/action/index';

const mapStateToProps = state => ({user: state.userAuthorization});
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
        questId: React.PropTypes.string
    };

    render() {
        const user = this.props.user;

        const participantButton = <Link to={`/quest/${this.props.id}/start`} className='button'>Принять участие</Link>;
        const changeQuestButton = <Link to={`/quest/edit/${this.props.id}`} className='button' data-tid='quest-edit-link'>Редактировать квест</Link>;

        const deleteQuestButton = (
            <a href='/' onClick={() => {this.props.pageActions.DeleteQuest(this.props.questId, this.props.author, user.id)}}
                className='button'
                data-tid='quest-delete-link'>
                Удалить квест
            </a>
        );

        const notAuthorized = (
            <div className='questionDescription__auth' data-tid='need-authorization'>
                Авторизуйтесь, чтобы принять участие вквесте
            </div>
        );

        const isAuthor = parseInt(this.props.author) === parseInt(user.id);

        return (
            <div className='questionDescription'>
                <div className='question-photo'>
                    <div className='question-photo_wrapper'>
                        <img src={this.props.banner} alt='Фото квеста'/>
                    </div>
                    {user.hasOwnProperty('username') ? participantButton : notAuthorized}
                    {isAuthor ? changeQuestButton : ''}
                    {isAuthor ? deleteQuestButton : ''}
                </div>
                <div className='question-info'>
                    <h2 className='question-info_title' data-tid='quest-title'>Квест {this.props.title}</h2>
                    <div className='question-info_text'>
                        <span data-tid='quest-description'>Описание: {this.props.description}</span>
                        <span data-tid='quest-author'>
                            Автор: <Link className='question-info_text__link' to={`/profile/${this.props.author}`}>Автор квеста</Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
