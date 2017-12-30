import React from 'react';
import UrlItem from './UrlItem.jsx';

export default class UrlLinksListSlice {

    loadTransformAndPublish() {
        HttpClient
            .sendGet('/urls-service/urls')
            .then(urls => urls.jsonObject)
            .then(this.transformIntoSlice)
            .then(this.publish);
    }

    transformIntoSlice(urls) {
        let slice = {
            name: 'url',
            priority: 100,
            items: urls.map(url => ({
                linkSharedId: url.linkSharedId,
                key: 'urlItem-' + url.linkSharedId,
                component: <UrlItem url={url.url} />
            }))
        };
        return slice;
    }

    publish(slice) {
        PubSub.publish('uiEvent.links.linksListSlice.available', slice)
    }
}