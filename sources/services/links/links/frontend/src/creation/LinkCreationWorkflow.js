export default class LinkCreationWorkflow {

    constructor() {
        this.slices = {};
    }

    subscribeToEvents() {
        this.linkCreationValidationSuccessfullSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.successfull', (msg, slice) => {
            this.slices[slice.name].validationSuccessful = true;
            this.approveOrDeny();
        });
        this.linkCreationValidationFailedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.failed', (msg, slice) => {
            this.slices[slice.name].validationFailed = true;
            this.approveOrDeny();
        });
    }

    unsubscribeFromEvents() {
        PubSub.unsubscribe(this.linkCreationValidationSuccessfullSubscriptionToken);
        PubSub.unsubscribe(this.linkCreationValidationFailedSubscriptionToken);
    }

    registerSliceWith(name) {
        this.slices[name] = {
            validationRequested: false,
            validationSuccessful: false,
            validationFailed: false,
            creationApproved: false,
            creationDenied: false
        };
    }

    start() {
        if (!this.workflowWasStarted() || this.workflowIsFinished()) {
            this.resetWorkflow();
            this.requestValidation();
        }
    }

    workflowWasStarted() {
        return this.numberOfValidationRequests() > 0;
    }

    workflowIsFinished() {
        return this.numberOfValidationRequests() > 0
            && this.validationIsFinished()
            && this.numberOfValidationRequests() == this.numberOfCreationDecisions();
    }

    validationIsFinished() {
        return this.numberOfValidationRequests() == this.numberOfValidationResponses();
    }

    numberOfValidationRequests() {
        return Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .filter(s => s.validationRequested)
            .length;
    }

    numberOfValidationResponses() {
        return Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .filter(s => s.validationSuccessful || s.validationFailed)
            .length;
    }

    numberOfCreationDecisions() {
        return Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .filter(s => s.creationApproved || s.creationDenied)
            .length;
    }

    resetWorkflow() {
        Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .forEach(s => {
                s.validationRequested = false;
                s.validationSuccessful = false;
                s.validationFailed = false;
                s.creationApproved = false;
                s.creationDenied = false;
            });
    }

    requestValidation() {
        Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .forEach(s => {
                s.validationRequested = true;
            });
        PubSub.publish('uiEvent.links.linkCreationValidation.requested');
    }

    approveOrDeny() {
        if (this.allWereSuccessfullyValidated()) {
            this.approveLinkCreation();
        } else if (this.validationIsFinished()) {
            this.denyLinkCreation();
        }
    }

    allWereSuccessfullyValidated() {
        return Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .every(s => s.validationSuccessful);
    }

    approveLinkCreation() {
        Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .forEach(s => {
                s.creationApproved = true;
            });
        PubSub.publish('uiEvent.links.linkCreation.approved');
    }

    denyLinkCreation() {
        Object
            .keys(this.slices)
            .map(k => this.slices[k])
            .forEach(s => {
                s.creationDenied = true;
            });
        PubSub.publish('uiEvent.links.linkCreation.denied');
    }
}