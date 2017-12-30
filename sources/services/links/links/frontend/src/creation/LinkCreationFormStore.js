import LinkCreationWorkflow from './LinkCreationWorkflow.js'

export default class LinkCreationFormStore {

    constructor(component) {
        this.component = component;
        this.component.state = { slices: [] };
        this.slices = {};
        this.linkCreationWorkflow = new LinkCreationWorkflow();
    }

    subscribeToEvents() {
        this.linkCreationWorkflow.subscribeToEvents();
        this.linkCreationSliceAvailableSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlice.available', (msg, slice) => {
            this.slices[slice.name] = slice;
            this.linkCreationWorkflow.registerSliceWith(slice.name);
            this.rebuildState();
        });
        PubSub.publish('uiEvent.links.linkCreationSlices.requested');
    }

    rebuildState() {
        let slices = Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .map(slice => ({
                name: slice.name,
                url: slice.url,
                priority: slice.priority,
                component: slice.component
            }))
            .sort((s1, s2) => s1.priority - s2.priority);
        this.component.setState({ slices: slices });
    }

    unsubscribeFromEvents() {
        this.linkCreationWorkflow.unsubscribeFromEvents();
        PubSub.unsubscribe(this.linkCreationSliceAvailableSubscriptionToken);
    }

    onSubmit() {
        this.linkCreationWorkflow.start();
    }
}