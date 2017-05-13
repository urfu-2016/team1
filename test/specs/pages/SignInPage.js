import PageBase from './PageBase';
import FacebookLoginPage from './FacebookLoginPage';

export default class SignInPage extends PageBase {
    constructor(browser) {
        super(browser, '/signin');

        this.browser = browser;
        this.vkLoginLink = this.getElementByTestId('vk-login-link');
        this.fbLoginLink = this.getElementByTestId('fb-login-link');
    }

    goToFacebookLoginPage() {
        this.click(this.fbLoginLink);
        return new FacebookLoginPage(this.browser);
    }
}
