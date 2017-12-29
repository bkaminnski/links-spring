import MenuAndContent from '../page/MenuAndContent.jsx';

export default class ApplicationLayoutEvents {

    subscribeToRequested() {
        this.applicationLayoutRequestedSubscriptionToken = PubSub.subscribe('uiEvent.application.applicationLayout.requested', msg => {
            this.publishAvailable();
        });
    }

    publishAvailable() {
        PubSub.publish('uiEvent.application.applicationLayout.available', <MenuAndContent />);
    }
}