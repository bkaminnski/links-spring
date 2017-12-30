import React from 'react';
import Keywords from './Keywords.jsx';
import CollapsibleWrapper from './CollapsibleWrapper.jsx';
import KeywordsCreationFormStore from './KeywordsCreationFormStore.js';

export default class KeywordsCreationForm extends React.Component {

    constructor() {
        super();
        this.store = new KeywordsCreationFormStore(this);
    }

    componentDidMount() {
        this.store.subscribeToEvents();
    }

    componentWillUnmount() {
        this.store.unsubscribeFromEvents();
    }

    render() {
        return <CollapsibleWrapper ref={(collapsibleWrapper) => { this.store.collapsibleWrapper = collapsibleWrapper; }}>
            <Keywords
                id={this.state.keyPrefix + '-keywords-creation'}
                key={this.state.keyPrefix + '-keywords-creation'}
                ref={(keywords) => { this.store.addAttributeComponent('keywords', keywords); }}
                attributeName="keywords"
                initialValue=""
                onChange={this.store.onChange}
            />
        </CollapsibleWrapper>
    }
}
