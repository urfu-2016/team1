import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../../redux/action/index';
import checkTextInput from '../../../controls/utils';

const mapStateToProps = state => ({comments: state.GetComments, user: state.userAuthorization});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class QuestionComments extends React.Component {
    static propTypes = {
        questId: React.PropTypes.string,
        comments: React.PropTypes.object,
        user: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object
    };

    constructor() {
        super(...arguments);
        this.commentInput = ref => {
            this._commentInput = ref;
        };
    }

    componentDidMount() {
        this.props.pageActions.GetComments(this.props.questId);
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();

        if (!this._commentInput.value || this._commentInput.value.length === 0)
            return;

        const user = this.props.user;
        const {PostComment} = this.props.pageActions;
        PostComment(this._commentInput.value, this.props.questId, user.id);

        this._commentInput.value = '';
    }

    render() {
        const user = this.props.user;
        let comments = this.props.comments.comments.map((comment, i) => (
            <div>
                <div className='comment-username' data-tid={`comment-${i}-username`}>{comment.username}</div>
                <div className='comment' data-tid={`comment-${i}-text`} key={comment.id}>{comment.text}</div>
                <hr className='comment-break'/>
            </div>
        ));

        let commentForm = (
            <form onSubmit={this.handleSubmit}>
                <label
                    className={`custom-label`}
                    htmlFor='comment'>
                    Введите комментарий
                    <textarea
                        className={`custom-textarea`}
                        type='text'
                        ref={this.commentInput}
                        name='comment-input'
                        id='comment'
                        rows={10}
                        cols={50}
                        placeholder='Type comment'
                        data-tid='comment-text-input'
                        onBlur={checkTextInput}/>
                </label>
                <input className='quest-data__submit' type='submit' value='Отправить' data-tid='comment-submit-button'/>
            </form>
        );

        return (
            <div className='comments'>
                <div className='comments__container'>
                    <div className='custom-label comments-label'>Комментарии</div>
                    {comments}
                    {user.hasOwnProperty('username') ? commentForm : null}
                </div>
            </div>
        );
    }
}
