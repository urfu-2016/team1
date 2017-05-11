import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../../redux/action/index';

const mapStateToProps = state => ({comments: state.GetComments});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class QuestionComments extends React.Component {
    static propTypes = {
        questId: React.PropTypes.string,
        comments: React.PropTypes.object,
        pageActions: React.PropTypes.object
    };

    constructor() {
        super(...arguments);
        this.commentInput = ref => {this._commentInput = ref;};
    }

    componentDidMount() {
        this.props.pageActions.GetComments(this.props.questId);
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();

        if(!this._commentInput.value || this._commentInput.value.length === 0)
            return;

        const { PostComment } = this.props.pageActions;
        PostComment(this._commentInput.value, this.props.questId);

        this._commentInput.value = '';
    }

    render() {
        let comments = this.props.comments.comments.map((comment, i) => (
            <div className='comment' data-tid={`comment-${i}-text`} key={comment.id}>{comment.text}</div>
        ));
        return (
            <div className='comments'>
                {comments}
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.commentInput} placeholder='comment' data-tid='comment-text-input'/>
                    <input type='submit' data-tid='comment-submit-button'/>
                </form>
            </div>
        );
    }
}
