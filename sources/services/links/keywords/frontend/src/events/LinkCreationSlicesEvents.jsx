import KeywordsLinkCreationSlice from '../creation/KeywordsLinkCreationSlice.jsx';

export default class LinkCreationSlicesEvents {

    constructor() {
        this.keywordsLinkCreationSlice = new KeywordsLinkCreationSlice();
    }

    subscribeToRequested() {
        this.linkCreationSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlices.requested', msg => {
            this.keywordsLinkCreationSlice.prepareAndPublish();
        });
    }
}