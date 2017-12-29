import React from 'react';
import ApplicationPageStore from './ApplicationPageStore.js';

export default class ApplicationPage extends React.Component {

    constructor() {
        super();
        this.applicationPageStore = new ApplicationPageStore(this);
        this.state = { layoutComponent: null };
    }

    componentDidMount() {
        this.applicationPageStore.subscribeToEvents();
    }

    componentWillUnmount() {
        this.applicationPageStore.unsubscribeFromEvents();
    }

    render() {
        return (
            <div>
                {this.state.layoutComponent}
            </div>
        )
    }
}
