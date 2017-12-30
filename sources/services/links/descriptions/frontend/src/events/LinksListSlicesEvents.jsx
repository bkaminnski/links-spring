import DescriptionLinksListSlice from '../list/DescriptionLinksListSlice.jsx';

export default class LinksListSlicesEvents {

    constructor() {
        this.descriptionLinksListSlice = new DescriptionLinksListSlice();
    }

    subscribeToRequested() {
        this.linksListSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlices.requested', msg => {
            this.descriptionLinksListSlice.loadTransformAndPublish();
        });
    }
}