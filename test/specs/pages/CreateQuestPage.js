import PageBase from './PageBase';

export default class CreateQuestPage extends PageBase {
    constructor(browser) {
        super(browser, '/createquest');

        this.questTitleInput = this.getElementByTestId('quest-title-input');
        this.questDescriptionInput = this.getElementByTestId('quest-description-input');
        this.questBannerInput = this.getElementByTestId('quest-banner-input');
        this.addPlaceButton = this.getElementByTestId('add-place-button');
        this.createQuestButton = this.getElementByTestId('create-quest-button');
    }

    getPlace(index) {
        return {
            titleInput: this.getElementByTestId(`place-${index}-title-input`),
            descriptionInput: this.getElementByTestId(`place-${index}-description-input`),
            bannerInput: this.getElementByTestId(`place-${index}-banner-input`)
        };
    }
}
