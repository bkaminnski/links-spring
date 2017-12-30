import React from 'react';
import LinksListStore from './LinksListStore.js';
import LinksListItem from './LinksListItem.jsx';

export default class LinksList extends React.Component {

    constructor() {
        super();
        this.store = new LinksListStore(this);
    }

    componentDidMount() {
        this.store.subscribeToEvents();
    }

    componentWillUnmount() {
        this.store.unsubscribeFromEvents();
    }

    render() {
        return <div>
            {this.state.links.map(link => <LinksListItem key={'linksListItem-' + link.sharedId} link={link} />)}
        </div>;
    }
}
