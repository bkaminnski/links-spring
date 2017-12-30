import React from 'react';
import Description from './Description.jsx';
import CollapsibleWrapper from './CollapsibleWrapper.jsx';
import DescriptionCreationFormStore from './DescriptionCreationFormStore.js';

export default class DescriptionCreationForm extends React.Component {

    constructor() {
        super();
        this.store = new DescriptionCreationFormStore(this);
    }

    componentDidMount() {
        this.store.subscribeToEvents();
    }

    componentWillUnmount() {
        this.store.unsubscribeFromEvents();
    }

    render() {
        return <CollapsibleWrapper ref={(collapsibleWrapper) => { this.store.collapsibleWrapper = collapsibleWrapper; }}>
            <Description
                id={this.state.keyPrefix + '-description-creation'}
                key={this.state.keyPrefix + '-description-creation'}
                ref={(description) => { this.store.addAttributeComponent('description', description); }}
                attributeName="description"
                initialValue=""
                onChange={this.store.onChange}
            />
        </CollapsibleWrapper>
    }
}
