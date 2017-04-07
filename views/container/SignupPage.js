import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../redux/action/index';
import Signup from '../component/Signup';

const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

const SignupPage = connect(
    () => ({}),
    mapDispatchToProps
)(Signup);

export default SignupPage;
