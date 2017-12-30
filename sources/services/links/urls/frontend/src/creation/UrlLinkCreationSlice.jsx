import React from 'react';
import UrlCreationForm from './UrlCreationForm.jsx';

export default class UrlLinkCreationSlice {
    
    prepareAndPublish() {
        let slice = {
            name: 'url',
            priority: 100,
            component: <UrlCreationForm />
        };
        PubSub.publish('uiEvent.links.linkCreationSlice.available', slice);
    }
}