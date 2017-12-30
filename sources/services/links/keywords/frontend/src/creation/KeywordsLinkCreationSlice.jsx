import React from 'react';
import KeywordsCreationForm from './KeywordsCreationForm.jsx';

export default class KeywordsLinkCreationSlice {

    prepareAndPublish() {
        let slice = {
            name: 'keywords',
            priority: 200,
            component: <KeywordsCreationForm />
        };
        PubSub.publish('uiEvent.links.linkCreationSlice.available', slice);
    }
}