import React from 'react';
import DescriptionItem from './DescriptionItem.jsx';

export default class DescriptionLinksListSlice {

    loadTransformAndPublish() {
        HttpClient
            .sendGet('/descriptions-service/descriptions')
            .then(descriptions => descriptions.jsonObject)
            .then(this.transformIntoSlice)
            .then(this.publish);
    }

    transformIntoSlice(descriptions) {
        let slice = {
            name: 'description',
            priority: 300,
            items: descriptions.map(description => ({
                linkSharedId: description.linkSharedId,
                key: 'descriptionItem-' + description.linkSharedId,
                component: <DescriptionItem description={description.description} />
            }))
        };
        return slice;
    }

    publish(slice) {
        PubSub.publish('uiEvent.links.linksListSlice.available', slice)
    }
}