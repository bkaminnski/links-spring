import React from 'react';
import Url from './Url.jsx';
import UrlCreationFormStore from './UrlCreationFormStore.js';

export default class UrlCreationForm extends React.Component {

    constructor() {
        super();
        this.store = new UrlCreationFormStore(this);
    }

    componentDidMount() {
        this.store.subscribeToEvents();
    }

    componentWillUnmount() {
        this.store.unsubscribeFromEvents();
    }

    render() {
        return <Url
            id={this.state.keyPrefix + '-url-creation'}
            key={this.state.keyPrefix + '-url-creation'}
            ref={(url) => { this.store.addAttributeComponent('url', url); }}
            attributeName="url"
            initialValue=""
            onChange={this.store.onChange}
        />
    }
}