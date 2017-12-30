import AttributesStore from './AttributesStore.js';
import UrlLinksListSlice from '../list/UrlLinksListSlice.jsx'

export default class LinkCreationFormStore {

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
            url: {
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
        var _this = this;
        if (this.component.state.linkSharedId == '') {
            uniqueIds.withNext(
                uniqueId => _this.component.setState(
                    { linkSharedId: uniqueId },
                    () => {
                        PubSub.publish('uiEvent.links.linkCreation.initiatedWithLinkId', _this.component.state.linkSharedId);
                        _this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
                    }
                )
            );
        } else {
            this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
        }
    }

    addAttributeComponent(attributeName, attributeComponent) {
        this.attributesStore.addAttributeComponent(attributeName, attributeComponent);
    }

    subscribeToEvents() {
        this.linkCreationValidationRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.requested', (msg, slice) => {
            if (this.attributesStore.allAttributesAreValid()) {
                PubSub.publish('uiEvent.links.linkCreationValidation.successfull', { name: 'url' });
            } else {
                PubSub.publish('uiEvent.links.linkCreationValidation.failed', { name: 'url' });
            }
        });
        this.linkCreationApprovedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.approved', (msg, slice) => {
            this.createUrl();
        });
        this.linkCreationDeniedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.denied', (msg, slice) => {
            this.attributesStore.focusOnFirstInvalidAttributeComponent();
        });
    }

    createUrl() {
        let createUrlCommand = {
            linkSharedId: this.component.state.linkSharedId,
            url: this.component.state.attributes.url.value
        };
        HttpClient.sendPost('/urls-service/urls', createUrlCommand).then((response) => {
            if (response.status == 204) {
                this.reset();
                new UrlLinksListSlice().loadTransformAndPublish();
            }
        });
    }

    unsubscribeFromEvents() {
        PubSub.unsubscribe(this.linkCreationValidationRequestedSubscriptionToken);
        PubSub.unsubscribe(this.linkCreationApprovedSubscriptionToken);
        PubSub.unsubscribe(this.linkCreationDeniedSubscriptionToken);
    }
}