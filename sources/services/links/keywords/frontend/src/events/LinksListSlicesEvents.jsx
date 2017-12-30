import KeywordsLinksListSlice from '../list/KeywordsLinksListSlice.jsx';

export default class LinksListSlicesEvents {

    constructor() {
        this.keywordsLinksListSlice = new KeywordsLinksListSlice();
    }

    subscribeToRequested() {
        this.linksListSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlices.requested', msg => {
            this.keywordsLinksListSlice.loadTransformAndPublish();
        });
    }
}