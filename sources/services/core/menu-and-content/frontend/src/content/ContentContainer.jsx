import React from 'react';
import ContentContainerStore from './ContentContainerStore.js'

export default class ContentContainer extends React.Component {

    constructor() {
        super();
        this.contentContainerStore = new ContentContainerStore(this);
        this.state = { contentComponent: null };
    }

    componentDidMount() {
        this.contentContainerStore.subscribeToEvents();
    }

    componentWillUnmount() {
        this.contentContainerStore.unsubscribeFromEvents();
    }

    render() {
        return <div className="container">
            {
                this.state.contentComponent
            }
        </div>;
    }
}