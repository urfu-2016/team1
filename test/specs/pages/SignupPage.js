import PageBase from './PageBase';

export default class SignupPage extends PageBase {
    constructor(browser) {
        super(browser, '/signup');

        this.loginInput = this.getElementByTestId('signup-login-input');
        this.passwordInput = this.getElementByTestId('signup-password-input');
        this.loginButton = this.getElementByTestId('signup-login-button');
    }
}
