import DescriptionLinkCreationSlice from '../creation/DescriptionLinkCreationSlice.jsx';

export default class LinkCreationSlicesEvents {

    constructor() {
        this.descriptionLinkCreationSlice = new DescriptionLinkCreationSlice();
    }

    subscribeToRequested() {
        this.linkCreationSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlices.requested', msg => {
            this.descriptionLinkCreationSlice.prepareAndPublish();
        });
    }
}