import LinksPage from '../page/LinksPage.jsx';

export default class ContentEvents {

    subscribeToRequested() {
        this.contentRequestedSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.content.requested.links', msg => {
            this.publishAvailable();
        });
    }

    publishAvailable() {
        PubSub.publish('uiEvent.menu-and-content.content.available', <LinksPage />);
    }
}