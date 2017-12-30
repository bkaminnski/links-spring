import React from 'react';
import KeywordsItem from './KeywordsItem.jsx';

export default class KeywordsLinksListSlice {

    loadTransformAndPublish() {
        HttpClient
            .sendGet('/keywords-service/keywords')
            .then(keywords => keywords.jsonObject)
            .then(this.transformIntoSlice)
            .then(this.publish);
    }

    transformIntoSlice(keywords) {
        let slice = {
            name: 'keywords',
            priority: 200,
            items: keywords.map(keywords => ({
                linkSharedId: keywords.linkSharedId,
                key: 'keywordsItem-' + keywords.linkSharedId,
                component: <KeywordsItem keywords={keywords.keywords} />
            }))
        };
        return slice;
    }

    publish(slice) {
        PubSub.publish('uiEvent.links.linksListSlice.available', slice)
    }
}