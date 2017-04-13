import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators'

import * as pageActions from '../redux/action/index';

const mapStateToProps = state => ({quests: state.GetQuests});
const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Signup extends React.Component {
    static propTypes = {
        pageActions: React.PropTypes.object.isRequired
    };

    constructor() {
        super(...arguments);
        this.loginInput = ref => {this._loginInput = ref;};
        this.passInput = ref => {this._passInput = ref;};
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();
        const { PostUser } = this.props.pageActions;
        PostUser(this._loginInput.value, this._passInput.value);
        console.log(`Отправлено значение: ${this._loginInput.value}, ${this._passInput.value}`);
    }

    render() {
        return (
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.loginInput} placeholder='login'/>
                    <input ref={this.passInput} placeholder='password'/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
}
