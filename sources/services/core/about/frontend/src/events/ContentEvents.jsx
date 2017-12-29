import AboutPage from '../page/AboutPage.jsx';

export default class ContentEvents {

    subscribeToRequested() {
        this.menuItemRequestedSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.content.requested.about', msg => {
            this.publishAvailable();
        });
    }

    publishAvailable() {
        PubSub.publish('uiEvent.menu-and-content.content.available', <AboutPage />);
    }
}