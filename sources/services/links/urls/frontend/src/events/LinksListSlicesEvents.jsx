import UrlLinksListSlice from '../list/UrlLinksListSlice.jsx';

export default class LinksListSlicesEvents {

    constructor() {
        this.urlLinksListSlice = new UrlLinksListSlice();
    }

    subscribeToRequested() {
        this.linksListSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlices.requested', msg => {
            this.urlLinksListSlice.loadTransformAndPublish();
        });
    }
}