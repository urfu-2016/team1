import React from 'react';
import QuestionBanner from './questionBanner/questionBanner';
import QuestionDescription from './description/description';

export default class Question extends React.Component {
    render() {
        return (
            <main>
                <QuestionBanner />
                <QuestionDescription />
            </main>
        );
    }
}
