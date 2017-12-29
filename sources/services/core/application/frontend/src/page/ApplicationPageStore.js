export default class ApplicationPageStore {

    constructor(applicationPageComponent) {
        this.applicationPageComponent = applicationPageComponent;
    }

    subscribeToEvents() {
        this.applicationLayoutIsAvailableSubscriptionToken = PubSub.subscribe('uiEvent.application.applicationLayout.available', (msg, layoutComponent) => {
            this.applicationPageComponent.setState({ layoutComponent: layoutComponent });
        });
    }

    unsubscribeFromEvents() {
        PubSub.unsubscribe(this.applicationLayoutIsAvailableSubscriptionToken);
    }
}