import React from 'react';

export default class QuestionDescription extends React.Component {
    static propTypes = {
        description: React.PropTypes.string,
    };

    render() {
        return (
            <div className='questionDescription'>
                <h2 className='questionDescription_title'>Title</h2>
                <div className='questionDescription_text'>
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}
