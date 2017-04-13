import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../../redux/action/index';

const mapStateToProps = state => ({questInfo: state.GetQuestInfo});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Question extends React.Component {
    static propTypes = {
        params: React.PropTypes.object.isRequired,
        questInfo: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.pageActions.GetQuestInfo(this.props.params.id);
    }

    render() {
        const questInfo = this.props.questInfo.questInfo;
        return (
            <div>
                <h1>{this.props.params.id}</h1>
                <h2>{questInfo.title}</h2>
                <div>{questInfo.description}</div>
            </div>
        );
    }
}
