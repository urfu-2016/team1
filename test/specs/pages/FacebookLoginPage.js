import PageBase from './PageBase';
import MainPage from './MainPage';

export default class FacebookLoginPage extends PageBase {
    constructor(browser) {
        super(browser);

        this.browser = browser;
        this.emailInput = browser.element('#email');
        this.passwordInput = browser.element('#pass');
        this.loginButton = browser.element('#loginbutton');
    }

    login(email = process.env.FB_TESTUSER_EMAIL, pass = process.env.FB_TESTUSER_PASSWORD) {
        this.emailInput.setValue(email);
        this.passwordInput.setValue(pass);
        this.loginButton.click();

        return new MainPage(this.browser);
    }
}
