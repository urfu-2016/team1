import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../redux/action/index';
import Questlist from '../component/pages/questlist/Questlist';

const mapStateToProps = (state) => {
    return {
        quests: state.GetQuests
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
};

const QuestListPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questlist);

export default QuestListPage;
