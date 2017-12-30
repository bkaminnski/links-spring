import AttributesStore from './AttributesStore.js';
import KeywordsLinksListSlice from '../list/KeywordsLinksListSlice.jsx'

export default class KeywordsCreationFormStore {

    constructor(component) {
        this.attributesStore = new AttributesStore(component);
        this.component = component;
        this.component.state = this.initialState();
        this.onChange = this.onChange.bind(this);
        this.addAttributeComponent = this.addAttributeComponent.bind(this);
    }

    initialState() {
        let initialState = this.attributesStore.initialState();
        initialState.attributes = {
            keywords: {
                value: '',
                valid: false
            }
        };
        initialState.linkSharedId = '';
        return initialState;
    }

    reset() {
        this.component.setState(this.initialState());
    }

    onChange(attributeName, attributeValue, attributeValid) {
        this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
    }

    addAttributeComponent(attributeName, attributeComponent) {
        this.attributesStore.addAttributeComponent(attributeName, attributeComponent);
    }

    allAttributesAreValid() {
        return this.attributesStore.allAttributesAreValid();
    }

    focusOnFirstInvalidAttributeComponent() {
        this.attributesStore.focusOnFirstInvalidAttributeComponent();
    }

    subscribeToEvents() {
        this.linkCreationWasInitiatedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.initiatedWithLinkId', (msg, linkSharedId) => {
            this.component.setState({ linkSharedId: linkSharedId }, () => this.collapsibleWrapper.show());
        });
        this.linkCreationValidationRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.requested', (msg, slice) => {
            PubSub.publish('uiEvent.links.linkCreationValidation.successfull', { name: 'keywords' });
        });
        this.linkCreationApprovedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.approved', (msg, slice) => {
            this.createKeywords();
        });
        this.linkCreationDeniedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.denied', (msg, slice) => {
            // do nothing
        });
    }

    createKeywords() {
        let createKeywordsCommand = {
            linkSharedId: this.component.state.linkSharedId,
            keywords: this.component.state.attributes.keywords.value
        };
        HttpClient.sendPost('/keywords-service/keywords', createKeywordsCommand).then((response) => {
            if (response.status == 204) {
                this.collapsibleWrapper.hide();
                this.reset();
                new KeywordsLinksListSlice().loadTransformAndPublish();
            }
        });
    }

    unsubscribeFromEvents() {
        PubSub.unsubscribe(this.linkCreationWasInitiatedSubscriptionToken);
        PubSub.unsubscribe(this.linkCreationValidationRequestedSubscriptionToken);
        PubSub.unsubscribe(this.linkCreationApprovedSubscriptionToken);
        PubSub.unsubscribe(this.linkCreationDeniedSubscriptionToken);
    }
}