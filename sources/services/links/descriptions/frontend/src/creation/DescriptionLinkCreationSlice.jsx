import React from 'react';
import DescriptionCreationForm from './DescriptionCreationForm.jsx';

export default class DescriptionLinkCreationSlice {

    prepareAndPublish() {
        let slice = {
            name: 'description',
            priority: 300,
            component: <DescriptionCreationForm />
        };
        PubSub.publish('uiEvent.links.linkCreationSlice.available', slice);
    }
}