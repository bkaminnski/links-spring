import React from 'react';

export default class UserInfoPlaceholder extends React.Component {

    constructor() {
        super();
        this.state = { component: null };
    }

    componentDidMount() {
        this.userInfoRequestedSubscriptionToken = PubSub.subscribe('uiEvent.users.userInfo.available', (msg, component) => {
            this.setState({ component: component })
        });
        PubSub.publish('uiEvent.users.userInfo.requested');
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.userInfoRequestedSubscriptionToken);
    }

    render() {
        return this.state.component;
    }
}