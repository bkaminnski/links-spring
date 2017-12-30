import UrlLinkCreationSlice from '../creation/UrlLinkCreationSlice.jsx';

export default class LinkCreationSlicesEvents {

    constructor() {
        this.urlLinkCreationSlice = new UrlLinkCreationSlice();
    }

    subscribeToRequested() {
        this.linkCreationSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlices.requested', msg => {
            this.urlLinkCreationSlice.prepareAndPublish();
        });
    }
}