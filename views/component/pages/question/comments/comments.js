import React from 'react';
import { autobind } from 'core-decorators';

export default class QuestionComments extends React.Component {
    static propTypes = {
        comments: React.PropTypes.array,
        pageActions: React.PropTypes.object
    };

    constructor() {
        super(...arguments);
        this.commentInput = ref => {this._commentInput = ref;};
    }

    @autobind
    handleSubmit() {
        event.preventDefault();
        const { PostUser } = this.props.pageActions;
        PostUser(this._loginInput.value, this._passInput.value);
        console.log(`Отправлено значение: ${this._loginInput.value}, ${this._passInput.value}`);
    }

    render() {
        console.log(this.props.comments);
        let comments = this.props.comments.comments.map(comment => (
            <div key={comment.id}>{comment.text}</div>
        ));
        return (
            <div className='questionBanner'>
                {comments}
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.commentInput} placeholder='comment' data-tid='comment-text-input'/>
                    <input type='submit' data-tid='comment-submit-button'/>
                </form>
            </div>
        );
    }
}
