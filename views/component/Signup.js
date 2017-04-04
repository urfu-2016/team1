import React from 'react';

export default class Signup extends React.Component {
    constructor() {
        super(...arguments);
        this.loginInput = ref => {this._loginInput = ref;};
        this.passInput = ref => {this._passInput = ref;};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
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
        ) ;
    }
}
